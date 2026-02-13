
# B&J Engineering and Supply Co., Ltd. - Company Website

Corporate website for **B&J ENGINEERING AND SUPPLY CO.,LTD.**, a leading provider of industrial engineering services based in Rayong, Thailand.

## About the Company

B&J Engineering and Supply specializes in precision CNC machining, metal fabrication, and comprehensive maintenance solutions for industrial facilities.

### Services Offered

- **CNC Machining** - Precision machining for complex parts and components
- **CNC Lathe** - Cylindrical parts and turning operations
- **Die Casting** - Mass production of metal parts
- **Mold & Die (Mold Maker)** - Design and manufacturing of molds and dies
- **Jig & Fixture** - Custom jig and fixture design
- **Metal Fabrication** - Cutting, bending, and assembly
- **Welding Service** - Professional welding for various metals
- **Equipment Replacement & Maintenance** - Full-service maintenance
- **Industrial Repairs** - Motor, valve, pump, and steam reactor repairs
- **Supply Engineering Products** - Sourcing and supplying engineering components

### Contact Information

- **Phone:** 083-6233046, 038-034504
- **Email:** info@bj-engsupply.com
- **Website:** www.bj-engsupply.com
- **Address:** 54/58 Ratbamrung Road, Huai Pong, Mueang Rayong District, Rayong 21150, Thailand

## Tech Stack

- **React 19** with TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Framer Motion** - Animations

## Project Structure

```
src/
├── assets/              # Images, video, and static assets
│   ├── logo.png             # Company logo
│   ├── company.png          # Company profile cover
│   ├── location.png         # Location map image
│   └── video_bg.mp4         # Hero section video background
├── components/          # React components
│   ├── Navbar.tsx           # Navigation bar with logo
│   ├── Hero.tsx             # Homepage hero with video background
│   ├── Services.tsx         # Services section
│   ├── Products.tsx         # Product categories with tab filter
│   ├── About.tsx            # About the company
│   ├── Contact.tsx          # Contact form and info
│   ├── Location.tsx         # Location map
│   └── Footer.tsx           # Footer
├── data/
│   └── services.ts      # Services, products, and company data
├── App.tsx              # Main app layout
├── main.tsx             # Entry point
└── index.css            # Global styles and Tailwind directives
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open your browser to the URL shown (usually `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

The output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```
