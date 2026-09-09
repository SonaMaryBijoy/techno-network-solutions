# Techno Network Solutions — Corporate Website

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitLab](https://img.shields.io/badge/GitLab-DPLANCK--TECHNOLOGIES-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white)](https://gitlab.com/dplanck-technologies-group1/techno-network-solutions-website)

Official corporate website for **Techno Network Solutions** — Industry leaders in Enterprise Networking, Structured Fiber Optic Cabling, CCTV Surveillance, Smart Boardroom Systems, Access Control & Server Room Infrastructure.

---

## 🌟 Features & Highlights

- **Modern Glassmorphic Dark UI**: Designed with futuristic aesthetics, ambient glow effects, responsive navigation, and custom typography.
- **Interactive India Network Hubs**: Custom vector map illustration highlighting core tech hubs (Bangalore, Hyderabad, Chennai, Kerala) with active hub switching and architectural skyline illustrations.
- **Fluid Shader & Canvas Backgrounds**: WebGL shader filters (`LiquidEther`, `CursorGrid`, `ShapeGrid`) providing smooth reactive visual depth across pages.
- **Dynamic Project Showcase & Gallery**: Interactive project filters (Fiber Optics, CCTV, Access Control, Boardrooms) with modal zoom previews.
- **Web3Forms Contact Integration**: Live functional contact form with instant email notification backend integration to `projects@tnsnw.com`.
- **Responsive Layout**: Optimized across Desktop, Laptop, Tablet, and Mobile screens.

---

## 📁 Project Architecture

```
Debut Website/
├── public/                     # Static assets & images
│   ├── india-map-graphic.png   # Enlarged India Network vector graphic
│   ├── bangalore-skyline.png   # Architectural hub line-art illustration
│   ├── techno-logo.png         # Company logo
│   └── favicon.ico             # App icon
├── src/
│   ├── assets/                 # Brand graphics & icons
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Top fixed glass header & mobile drawer
│   │   ├── Footer.jsx          # Company footer with quick links & contact
│   │   ├── ContactModal.jsx    # Pop-up contact & quotation modal
│   │   ├── IndiaMapGraphic.jsx # Interactive India map hub visualizer
│   │   ├── LiquidEther.jsx     # WebGL liquid background canvas
│   │   ├── CursorGrid.jsx      # Interactive cursor grid overlay
│   │   └── ...
│   ├── pages/                  # Main Application Views
│   │   ├── Home.jsx            # Hero section, Stats, Hubs & Highlights
│   │   ├── AboutUs.jsx         # Executive overview & OEM warranty commitments
│   │   ├── Services.jsx        # Fiber, CCTV, Access Control & Server Rooms
│   │   ├── Clients.jsx         # Trusted enterprise client roster
│   │   ├── Partners.jsx        # OEM partners & certification warranties
│   │   ├── Gallery.jsx         # Field installation gallery
│   │   ├── Careers.jsx         # Job openings & resume submit
│   │   └── ContactUs.jsx       # Contact details & inquiry form
│   ├── App.jsx                 # Main layout wrapper & page router
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles & Tailwind directives
├── .env.example                # Sample environment configuration template
├── .gitignore                  # Excluded files for version control
├── package.json                # Project dependencies & build scripts
├── vite.config.js              # Vite build configuration
└── README.md                   # Repository documentation
```

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core**: React 19, Vite 8
- **Styling**: Tailwind CSS v4, Vanilla CSS variables
- **Animations & Smooth Scroll**: Framer Motion, GSAP (ScrollTrigger), Lenis
- **Icons**: Lucide React, React Icons
- **3D / Canvas**: Three.js, React Three Fiber, OGL
- **Forms & Email API**: Web3Forms

---

## 🚀 Quick Start Guide

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn** / **pnpm**
- **Git**

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://gitlab.com/dplanck-technologies-group1/techno-network-solutions-website.git
   cd techno-network-solutions-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Copy `.env.example` to create a `.env` file in the root directory:
     ```bash
     cp .env.example .env
     ```
   - Update `VITE_WEB3FORMS_ACCESS_KEY` in `.env` with your Web3Forms API key:
     ```env
     VITE_WEB3FORMS_ACCESS_KEY=d289d14f-b350-4a88-bf30-3b9d2b31fcdd
     ```

4. **Run Local Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

The output files will be generated in the `dist/` directory, ready to be deployed to Vercel, Netlify, Hostinger, or any web hosting server.

To preview the production build locally:
```bash
npm run preview
```

---

## 🔐 Environment Variables

| Variable | Description | Default / Required |
| --- | --- | --- |
| `VITE_WEB3FORMS_ACCESS_KEY` | Access key for Web3Forms API to dispatch contact form submissions to company email. | **Required** |

> ⚠️ **Security Note**: Never commit the `.env` file containing secrets to Git. Only `.env.example` should be tracked in version control.

---

## 📤 Pushing Code to GitLab Repository

If you are setting up or uploading this code to the official GitLab repository for the first time, follow these exact steps:

### 1. Add the GitLab Remote

In your terminal (inside the project root directory):

```bash
git remote add gitlab https://gitlab.com/dplanck-technologies-group1/techno-network-solutions-website.git
```

*(If `gitlab` remote already exists, update its URL with `git remote set-url gitlab <URL>`)*

### 2. Stage & Commit All Changes

```bash
git add .
git commit -m "feat: complete Techno Network Solutions corporate website code with README and configuration"
```

### 3. Push to GitLab

```bash
git push -u gitlab main
```

#### 🔑 Authentication Note for GitLab Push:
- If prompted for a password, use a **GitLab Personal Access Token (PAT)** with `write_repository` permission instead of your account password.
- Alternatively, if using SSH:
  ```bash
  git remote set-url gitlab git@gitlab.com:dplanck-technologies-group1/techno-network-solutions-website.git
  git push -u gitlab main
  ```

---

## 📄 License & Contact

© **Techno Network Solutions** — All Rights Reserved.  
Part of **DPLANCK TECHNOLOGIES Group**.  
For technical support or inquiries, contact `projects@tnsnw.com`.
