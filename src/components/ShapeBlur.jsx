import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = /* glsl */ `
varying vec2 v_texcoord;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    v_texcoord = uv;
}
`;

const fragmentShader = /* glsl */ `
varying vec2 v_texcoord;

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform float u_shapeSize;
uniform float u_roundness;
uniform float u_borderSize;
uniform float u_circleSize;
uniform float u_circleEdge;

void main() {
    vec2 st = v_texcoord;
    vec2 mouse = u_mouse / u_resolution;
    
    // Distance from the 4 outer perimeter edges of the image container
    float distX = min(st.x, 1.0 - st.x);
    float distY = min(st.y, 1.0 - st.y);
    float edgeDist = min(distX, distY);
    
    // Edge blur mask covering the outer perimeter edges (NO inner frame)
    float edgeGlow = 1.0 - smoothstep(0.0, 0.14, edgeDist);
    
    // Pointer mouse position reactive glow near edges
    float distMouse = length((st - mouse) * vec2(u_resolution.x / max(1.0, u_resolution.y), 1.0));
    float mouseGlow = 1.0 - smoothstep(0.0, u_circleSize * 1.5, distMouse);
    
    float alpha = edgeGlow * (0.5 + 0.5 * mouseGlow);
    vec3 color = mix(vec3(0.07, 0.67, 0.98), vec3(0.24, 0.57, 0.96), st.y);
    
    gl_FragColor = vec4(color, alpha);
}
`;

const ShapeBlur = ({
  className = '',
  variation = 0,
  pixelRatioProp = 1,
  shapeSize = 1,
  roundness = 0.5,
  borderSize = 0.08,
  circleSize = 0.35,
  circleEdge = 0.8
}) => {
  const mountRef = useRef();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let active = true;
    let animationFrameId;
    let time = 0,
      lastTime = 0;

    const vMouse = new THREE.Vector2();
    const vMouseDamp = new THREE.Vector2();
    const vResolution = new THREE.Vector2();

    let w = 1,
      h = 1;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera();
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const geo = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_mouse: { value: vMouseDamp },
        u_resolution: { value: vResolution },
        u_pixelRatio: { value: pixelRatioProp },
        u_shapeSize: { value: shapeSize },
        u_roundness: { value: roundness },
        u_borderSize: { value: borderSize },
        u_circleSize: { value: circleSize },
        u_circleEdge: { value: circleEdge }
      },
      defines: { VAR: variation },
      transparent: true
    });

    const quad = new THREE.Mesh(geo, material);
    scene.add(quad);

    const onPointerMove = e => {
      const rect = mount.getBoundingClientRect();
      vMouse.set(e.clientX - rect.left, e.clientY - rect.top);
    };

    document.addEventListener('mousemove', onPointerMove);
    document.addEventListener('pointermove', onPointerMove);

    const resize = () => {
      if (!active) return;
      w = mount.clientWidth;
      h = mount.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      renderer.setSize(w, h);
      renderer.setPixelRatio(dpr);

      camera.left = -w / 2;
      camera.right = w / 2;
      camera.top = h / 2;
      camera.bottom = -h / 2;
      camera.updateProjectionMatrix();

      quad.scale.set(w, h, 1);
      vResolution.set(w, h).multiplyScalar(dpr);
      material.uniforms.u_pixelRatio.value = dpr;
    };

    resize();
    window.addEventListener('resize', resize);

    const ro = new ResizeObserver(() => {
      if (!active) return;
      resize();
    });
    ro.observe(mount);

    const update = () => {
      if (!active) return;
      time = performance.now() * 0.001;
      const dt = time - lastTime;
      lastTime = time;

      ['x', 'y'].forEach(k => {
        vMouseDamp[k] = THREE.MathUtils.damp(vMouseDamp[k], vMouse[k], 8, dt);
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(update);
    };
    update();

    return () => {
      active = false;

      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      ro.disconnect();
      document.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('pointermove', onPointerMove);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      renderer.forceContextLoss();
    };
  }, [variation, pixelRatioProp, shapeSize, roundness, borderSize, circleSize, circleEdge]);

  return <div ref={mountRef} className={`w-full h-full ${className}`} />;
};

export default ShapeBlur;
