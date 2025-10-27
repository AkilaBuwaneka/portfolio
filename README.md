# Personal Portfolio Website ✨

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features smooth animations, dark mode, interactive project galleries, and real-time contact form.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready-success)
![React](https://img.shields.io/badge/React-19.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Looks great on all devices
- 🖼️ **Interactive Project Gallery** - Multiple images per project with carousel navigation
- 🎓 **Certifications Display** - Actual certificate images with lightbox view
- 🎭 **Animated Tech Stack** - Horizontal scrolling technology icons
- ✉️ **Contact Form** - Web3Forms integration (250 free submissions/month)
- 📄 **Resume Download** - Easy CV download functionality
- 🚀 **Fast Performance** - Built with Vite for lightning-fast load times
- 🎯 **Real Projects Showcase** - 6 production-ready projects with detailed information

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

## 📋 Setup Guide

### 1. Update Personal Information

Edit `src/data/mockData.ts`:
- Personal info (name, email, phone, location)
- Social media links (GitHub, LinkedIn, LeetCode)
- Projects and experience
- Skills and certifications

### 2. Add Your Resume

Place your `resume.pdf` in the `public` folder.

### 3. Setup Contact Form

The contact form uses **Web3Forms**. Add your access key in `.env`:

```env
VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
```

⚠️ **Note:** The contact form may show CORS errors on localhost. This is normal - it works perfectly after deployment!

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          # ⚠️ ADD YOUR RESUME HERE
├── src/
│   ├── assets/             # Project images and icons
│   │   ├── ventureVibe/
│   │   ├── computify/
│   │   ├── freshland/
│   │   ├── findOptimalPath/
│   │   ├── showSync/
│   │   ├── portfolio/
│   │   ├── certificationsAndBadges/
│   │   └── icons/
│   ├── components/         # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── mockData.ts     # All portfolio content
│   │   └── projectImages.ts # Image gallery data
│   ├── hooks/
│   │   └── useCustomHooks.ts
│   ├── utils/
│   │   ├── emailService.ts
│   │   └── resumeUtils.ts
│   ├── App.tsx
│   └── main.tsx
├── .env                    # Environment variables
├── .env.example
└── README.md
```

## 🛠️ Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Web3Forms** - Contact form service

## 🎨 Projects Showcase

This portfolio features **6 real projects** with interactive galleries:

1. **🌍 Venture Vibe** - Collaborative travel planning platform
2. **💻 Computify** - E-commerce with custom PC builder
3. **🥗 FreshLand** - Food delivery with microservices architecture
4. **🗺️ Find Optimal Path** - AI-powered indoor navigation
5. **🎭 ShowSync** - Event management and budget tracking
6. **🎨 Portfolio** - This website

**Total: 19 project screenshots in interactive galleries!**

##  Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variable: `VITE_WEB3FORMS_ACCESS_KEY`
4. Deploy!

### Netlify

1. Push to GitHub
2. Import project on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variable: `VITE_WEB3FORMS_ACCESS_KEY`
6. Deploy!

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## ✅ Pre-Deployment Checklist

- ✅ Personal info updated in `mockData.ts`
- ✅ 6 real projects with details
- ✅ 19 project images organized
- ⚠️ Resume added to `public/` folder
- ✅ Web3Forms configured in `.env`
- ✅ Build successful
- ✅ Environment variables set in hosting platform

## 🐛 Troubleshooting

### Contact form not working?
- Check environment variables in `.env`
- Restart dev server after adding `.env`
- Verify access key on Web3Forms dashboard

### Resume not downloading?
- Ensure `resume.pdf` is in `public` folder
- Try accessing: `http://localhost:5173/resume.pdf`

### Build errors?
- Run `npm install` to ensure all dependencies are installed
- Clear and reinstall: `rm -rf node_modules && npm install`

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 📧 Contact

**Akila Buwaneka**
- Email: akilamg2000@gmail.com
- GitHub: [@AkilaBuwaneka](https://github.com/AkilaBuwaneka)
- LinkedIn: [akila-buwaneka](https://linkedin.com/in/akila-buwaneka)
- LeetCode: [eImNAuid8I](https://leetcode.com/u/eImNAuid8I/)

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
