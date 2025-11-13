export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
}

export const products: Product[] = [
  {
    id: "safety-mask",
    name: "NIAGARA Super Shield Safety Mask",
    category: "Safety Equipment",
    price: "₹25",
    image: "https://5.imimg.com/data5/HO/TY/GG/ANDROID-106259495/product-jpeg-500x500.jpg",
    description: "Premium reusable safety mask designed for maximum protection against pollution, dust, and bacteria. The NIAGARA Super Shield offers superior filtration and comfort for daily use.",
    features: [
      "Anti-pollution protection",
      "Anti-dust filtration",
      "Anti-bacterial technology",
      "Reusable and washable",
      "Comfortable fit for extended wear",
      "Breathable fabric material"
    ],
    specifications: {
      "Material": "Premium fabric with multi-layer filtration",
      "Size": "Standard (adjustable)",
      "Color": "Multiple colors available",
      "Minimum Order": "50 pieces",
      "Reusability": "Washable and reusable"
    }
  },
  {
    id: "hosiery-mask",
    name: "Hosiery Mask",
    category: "Safety Equipment",
    price: "₹5",
    image: "https://5.imimg.com/data5/PD/LK/FA/ANDROID-106259495/product-jpeg-500x500.jpg",
    description: "Comfortable and affordable hosiery mask suitable for daily protection. Made from soft, breathable hosiery material for all-day comfort.",
    features: [
      "Soft hosiery material",
      "Breathable and lightweight",
      "Cost-effective solution",
      "Multiple color options",
      "Easy to wear and maintain",
      "Suitable for daily use"
    ],
    specifications: {
      "Material": "Premium hosiery fabric",
      "Size": "One size fits all",
      "Colors": "Various colors available",
      "Packaging": "Individual packing",
      "Care": "Hand wash recommended"
    }
  },
  {
    id: "foot-pedal-sanitizer",
    name: "Foot Pedal Sanitizer Dispenser",
    category: "Sanitation Equipment",
    price: "₹999",
    image: "https://5.imimg.com/data5/LT/DD/LD/ANDROID-106259495/product-jpeg-500x500.jpg",
    description: "Innovative hands-free sanitizer dispenser operated by foot pedal. Ideal for public spaces, offices, and high-traffic areas to maintain hygiene without hand contact.",
    features: [
      "Hands-free operation",
      "Foot pedal mechanism",
      "Touchless dispensing",
      "Durable stainless steel construction",
      "Easy to refill",
      "Suitable for indoor and outdoor use",
      "Professional-grade quality"
    ],
    specifications: {
      "Material": "Stainless Steel",
      "Container": "Refillable bottle included",
      "Capacity": "Standard sanitizer bottle",
      "Installation": "Portable stand design",
      "Price": "₹999 + GST",
      "Minimum Order": "1 piece"
    }
  },
  {
    id: "premium-cotton-inskirt",
    name: "Premium Quality Cotton Inskirt",
    category: "Garments",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1581338834647-b0fb40704e91?auto=format&fit=crop&w=800&q=80",
    description: "High-quality cotton inskirt designed for comfort and durability. Made from premium cotton fabric, perfect for daily wear under traditional attire.",
    features: [
      "100% premium cotton",
      "Soft and comfortable",
      "Durable stitching",
      "Breathable material",
      "Color-fast fabric",
      "Available in multiple sizes"
    ],
    specifications: {
      "Material": "100% Cotton",
      "Fabric Quality": "Premium grade",
      "Sizes": "S, M, L, XL, XXL",
      "Colors": "Multiple color options",
      "Care Instructions": "Machine washable"
    }
  },
  {
    id: "standard-inskirt",
    name: "Standard Inskirt",
    category: "Garments",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description: "Comfortable and affordable inskirt suitable for everyday use. Quality garment at an economical price point.",
    features: [
      "Comfortable fit",
      "Economical pricing",
      "Quality fabric",
      "Good durability",
      "Multiple size options",
      "Easy maintenance"
    ],
    specifications: {
      "Material": "Cotton blend",
      "Sizes": "Standard sizes available",
      "Colors": "Basic color range",
      "Quality": "Standard grade",
      "Care": "Easy to wash and maintain"
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const categories = Array.from(new Set(products.map(p => p.category)));
