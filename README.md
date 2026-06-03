# Uday Bansal — AI/ML Engineer & GenAI Developer

An ultra-premium, interactive developer portfolio highlighting academic and project experience in Machine Learning Engineering, Generative AI applications (RAG, LLM chains), and production-ready scalable Backend integrations. Built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

---

## 🌟 Visual & Interactive Features

- **Sleek Glassmorphic Layout**: Dark theme visual identity with tailored ambient radial flows, micro-grid dividers, and high-performance interactive components.
- **3D Magnetic Cards**: Dynamic components responding to cursor coordinates with smooth, spring-based motion.
- **Asynchronous Typewriter**: Custom hook-based loop typing subtitles beneath the header to avoid layout blocks.
- **Technical Arsenal Selector**: Organized category-swapping skill grid displaying ML, DL, GenAI, Backend, Languages, and Tools with unique branding color states.
- **Interactive Project Overlays**: Micro-animated detail modals for showcasing system designs, pipelines, features, and performance results.
- **Integrated Contact Form**: Custom validation and transition states simulating contact submissions.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Core Logic**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

---

## 📁 Directory Structure

```text
portfolio/
├── public/                 # Static assets (PDFs, Images, Icons)
│   └── resume/             # Contains Uday_Bansal_Resume.pdf
├── src/
│   ├── app/                # Next.js App Router root layout & global pages
│   │   ├── globals.css     # Tailwind custom CSS theme configuration
│   │   ├── layout.tsx      # Base layout, fonts (Inter, Space Mono), & SEO metadata
│   │   └── page.tsx        # Portfolio landing page assembling all sections
│   └── components/         # Reusable UI elements & modules
│       ├── sections/       # Distinct sections of the single-page layout
│       │   ├── AboutSection.tsx      # Education (coursework), self-driven projects, and focus lists
│       │   ├── ContactSection.tsx    # Live messaging form, phone, email, & social links
│       │   ├── HeroSection.tsx       # Profile intro, headline, stats pill, & core CTA buttons
│       │   ├── ProjectsSection.tsx   # NeuralDoc, RAG Chatbot, & Predictive Analytics
│       │   └── SkillsSection.tsx     # Tabbed Technical Arsenal system
│       ├── GlobalEffects.tsx         # Fixed layout indicators (e.g. scroll progress bar)
│       ├── Icons.tsx                 # Inline vector components (GitHub, LinkedIn)
│       ├── MagneticCard.tsx          # 3D interactive layout wrapper
│       ├── Navbar.tsx                # Responsive navigation bar & sticky header scroll-spy
│       ├── PageWrapper.tsx           # Page transition logic wrapper
│       └── Typewriter.tsx            # Animated loop-based typewriter effect
├── package.json            # Scripts and dependencies metadata
├── tsconfig.json           # Type safety compiler configuration
└── eslint.config.mjs       # Project linting guidelines
```

---

## 🚀 Getting Started

### 📋 Prerequisites

- **Node.js**: `v18.x` or later (Recommended: `v20.x+`)
- **npm** or **yarn** / **pnpm** / **bun**

### 💻 Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/UdayBansalG0423/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View in the browser:**
   Open your browser and navigate to `http://localhost:3000`.

---

## 🏗️ Production Build

To compile the application to optimized static HTML/CSS files ready for production deployment:

1. **Generate production build:**
   ```bash
   npm run build
   ```

2. **Preview local production build:**
   ```bash
   npm run start
   ```

---

## 📄 Contact Details

Developed by **Uday Bansal**.
- **Email**: [bansaluday.112@gmail.com](mailto:bansaluday.112@gmail.com)
- **Phone**: [+91 95289 68570](tel:9528968570)
- **LinkedIn**: [linkedin.com/in/uday-bansal-13213a289](https://www.linkedin.com/in/uday-bansal-13213a289/)
- **GitHub**: [github.com/UdayBansalG0423](https://github.com/UdayBansalG0423)
