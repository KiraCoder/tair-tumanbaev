# Tairbek Tumanbaev - Amazon Seller Consultant Landing Page

A modern, responsive landing page for Tairbek Tumanbaev, an Amazon seller consultant who helps other sellers boost their sales and optimize their businesses.

## 🚀 Features

- **Modern Design**: Clean, professional design with Amazon-inspired color scheme
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **TypeScript**: Built with TypeScript for better type safety and developer experience
- **Tailwind CSS**: Modern utility-first CSS framework for rapid development
- **React**: Modern React with functional components and hooks
- **Vite**: Fast build tool and development server
- **Interactive Elements**: Smooth animations, hover effects, and form handling

## 📋 Sections

1. **Hero Section**: Compelling headline with call-to-action buttons and success metrics
2. **Features**: Key benefits and services offered
3. **About**: Tairbek's story and journey from struggling seller to expert
4. **Services**: Three-tier pricing packages with detailed features
5. **Testimonials**: Client success stories and reviews
6. **Contact**: Contact form and consultation booking
7. **Footer**: Links, social media, and company information

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: npm
- **Fonts**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tairbek-amazon-consultant
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features section
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services/pricing section
│   ├── Testimonials.tsx # Testimonials section
│   ├── Contact.tsx     # Contact form section
│   └── Footer.tsx      # Footer component
├── App.tsx             # Main App component
├── main.tsx           # React entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`:

- **Primary**: Blue shades (`primary-50` to `primary-900`)
- **Amazon Orange**: `#ff9900` (Amazon's signature color)
- **Amazon Dark**: `#232f3e` (Amazon's dark color)

### Content

To customize the content:

1. **Personal Information**: Update the hero section, about section, and footer with your details
2. **Services**: Modify the services array in `Services.tsx`
3. **Testimonials**: Update the testimonials array in `Testimonials.tsx`
4. **Contact Information**: Update email and contact details in `Contact.tsx`

### Styling

- Global styles are in `src/index.css`
- Component-specific styles use Tailwind utility classes
- Custom CSS classes are defined in the `@layer components` section

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is created for Tairbek Tumanbaev's Amazon consulting business.

## 🤝 Support

For any questions or support, please contact Tairbek Tumanbaev.

---

**Built with ❤️ for Amazon sellers who want to succeed**
