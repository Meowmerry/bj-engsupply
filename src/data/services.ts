
import { Wrench, Settings, PenTool, Layout, Truck, Factory, RotateCw, Box } from 'lucide-react';

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: any; // Lucide icon component
    details?: string[];
}

export interface ProductCategory {
    id: string;
    title: string;
    description: string;
    products: Product[];
}

export interface Product {
    id: string;
    name: string;
    image: string;
}

export const services: Service[] = [
    {
        id: 'cnc-machining',
        title: 'CNC MACHINING',
        description: 'Precision machining for complex parts and components with high accuracy.',
        icon: Settings,
        details: ['High precision parts', 'Complex geometries', 'Custom specifications']
    },
    {
        id: 'metal-fabrication',
        title: 'METAL FABRICATION',
        description: 'Comprehensive metal fabrication services including cutting, bending, and assembly.',
        icon: Factory,
    },
    {
        id: 'cnc-lathe',
        title: 'CNC LATHE',
        description: 'Expert CNC lathe services for cylindrical parts and turning operations.',
        icon: RotateCw,
    },
    {
        id: 'welding-service',
        title: 'WELDING SERVICE',
        description: 'Professional welding services for various metals and structural components.',
        icon: Wrench,
    },
    {
        id: 'mold-die',
        title: 'MOLD & DIE (MOLD MAKER)',
        description: 'Design and manufacturing of high-quality molds and dies for various industrial applications.',
        icon: Layout,
    },
    {
        id: 'equipment-maintenance',
        title: 'EQUIPMENT REPLACEMENT & MAINTENANCE',
        description: 'Full-service maintenance and part replacement to keep your machinery running smoothly.',
        icon: Wrench,
    },

    {
        id: 'die-casting',
        title: 'DIE CASTING',
        description: 'High-quality die casting services for mass production of metal parts with excellent dimensional accuracy.',
        icon: Box,
    },

    {
        id: 'supply-engineering',
        title: 'SUPPLY ENGINEERING PRODUCTS',
        description: 'Sourcing and supplying a wide range of engineering products and components.',
        icon: Truck,
    },
    {
        id: 'jig-fixture',
        title: 'JIG FIXTURE',
        description: 'Custom jig and fixture design to optimize manufacturing processes and ensure consistency.',
        icon: PenTool,
    }
];

export const productCategories: ProductCategory[] = [
    {
        id: 'cnc-machining-parts',
        title: 'CNC Machining Parts',
        description: 'Precision-machined components including gears, flanges, couplings, and custom parts manufactured to exact specifications.',
        products: [
            { id: 'cnc-1', name: 'Precision Machined Components', image: 'https://images.unsplash.com/photo-1565439396655-e7a93cebf2d5?w=400&h=300&fit=crop' },
            { id: 'cnc-2', name: 'Spur & Helical Gears', image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400&h=300&fit=crop' },
            { id: 'cnc-3', name: 'Flanges & Plates', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop' },
            { id: 'cnc-4', name: 'Custom Couplings & Connectors', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'cnc-lathe-parts',
        title: 'CNC Lathe Parts',
        description: 'High-precision turned parts including shafts, bushings, threaded bolts, and custom cylindrical components.',
        products: [
            { id: 'lathe-1', name: 'Shafts & Spindles', image: 'https://images.unsplash.com/photo-1565439396655-e7a93cebf2d5?w=400&h=300&fit=crop' },
            { id: 'lathe-2', name: 'Bushings & Bearings', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop' },
            { id: 'lathe-3', name: 'Threaded Bolts & Fasteners', image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'mold-die-products',
        title: 'Mold & Die Products',
        description: 'Custom molds, dies, and tooling blocks for injection molding, stamping, and industrial manufacturing.',
        products: [
            { id: 'mold-1', name: 'Injection Molds', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop' },
            { id: 'mold-2', name: 'Stamping Dies', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop' },
            { id: 'mold-3', name: 'Custom Tooling Blocks', image: 'https://images.unsplash.com/photo-1565439396655-e7a93cebf2d5?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'jig-fixture-products',
        title: 'Jig & Fixture',
        description: 'Custom-designed jigs and fixtures for precision assembly, welding, and quality inspection processes.',
        products: [
            { id: 'jig-1', name: 'Assembly Jigs', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop' },
            { id: 'jig-2', name: 'Welding Fixtures', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop' },
            { id: 'jig-3', name: 'Inspection Gauges', image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400&h=300&fit=crop' },
        ],
    },
    {
        id: 'engineering-supply',
        title: 'Supply Engineering Products',
        description: 'Wide range of industrial engineering products including sprockets, pulleys, precision tools, and replacement parts.',
        products: [
            { id: 'supply-1', name: 'Sprockets & Chains', image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400&h=300&fit=crop' },
            { id: 'supply-2', name: 'Timing Pulleys', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop' },
            { id: 'supply-3', name: 'Precision Measurement Tools', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop' },
            { id: 'supply-4', name: 'Industrial Rollers & Cylinders', image: 'https://images.unsplash.com/photo-1565439396655-e7a93cebf2d5?w=400&h=300&fit=crop' },
        ],
    },
];

export const companyInfo = {
    name: "B&J ENGINEERING AND SUPPLY CO.,LTD.",
    email: "info@bj-engsupply.com",
    phone: ["083-6233046", "038-034504"],
    address: "54/58 Ratbamrung Road, Huai Pong, Mueang Rayong District, Rayong 21150",
    website: "www.bj-engsupply.com",
    tagline: "Expertise in CNC, Metal Fabrication, and Engineering Solutions"
};
