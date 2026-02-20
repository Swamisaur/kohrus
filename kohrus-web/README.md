# Kohrus Web Application

A Next.js web application for Kohrus - The Stock Market for Music platform.

## Features

- **Landing Page**: Modern, responsive landing page with hero section, features, and call-to-action
- **Tryout Form**: Comprehensive form for musicians to express interest in selling their music royalties
  - All fields are optional
  - Conditional form fields based on selections
  - Revenue source selection (Streaming, Merch, Sync, Publishing, Others)
  - Revenue statements organization selection (BMI, ASCAP, IPRS, Others)
  - Contract information for labels and publishers

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **Lucide React** icons

## Getting Started

The development server is already running. Access the application at:

- **Local**: http://localhost:3000
- **Network**: http://192.168.0.201:3000

### Available Routes

- `/` - Landing page
- `/tryout` - Tryout form for musicians

### Development Commands

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
kohrus-web/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Landing page
│   ├── tryout/
│   │   └── page.tsx        # Tryout form page
│   └── globals.css          # Global styles
├── components/
│   ├── navigation.tsx      # Navigation component
│   ├── footer.tsx          # Footer component
│   └── ui/                 # shadcn/ui components
└── lib/
    └── utils.ts            # Utility functions
```

## Design System

The application follows shadcn/ui design principles with:
- Consistent spacing and typography
- Inter font family
- Responsive design
- Accessible components
- Modern UI/UX patterns

## Form Features

The Tryout Form includes:
1. Name(s) - Text input
2. Contact Information - Phone and Email inputs
3. Spotify Artist Page Link - URL input
4. Number of Songs - Number input
5. Money to be Raised - Number input with currency
6. Revenue Source - Multi-select buttons (Streaming, Merch, Sync, Publishing, Others)
7. Revenue Statements - Yes/No radio with conditional organization selection
8. Contract with Label - Yes/No radio with conditional text input
9. Contract with Publisher - Yes/No radio with conditional text input

All fields are optional and the form includes proper validation and conditional rendering.
