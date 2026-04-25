import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ajvnbuzpxqbrvngnjsak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdm5idXpweHFicnZuZ25qc2FrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzAzNTgzNSwiZXhwIjoyMDkyNjExODM1fQ.hTQKSreTXrRRzZp6qQ82EB6osE9uX3eNx0R9C5zH9KM';
const supabase = createClient(supabaseUrl, supabaseKey);

// ONLY using simple filenames that already exist in public/
const projects = [
  // Web Development
  {
    title: 'NexTrade AI Platform',
    category: 'Web Development',
    status: 'Published',
    description: 'A sophisticated dashboard for AI-powered crypto trading with real-time analytics and risk assessment tools.',
    image_url: '/laptop-dashboard.png',
    tech_stack: ['Next.js', 'TypeScript', 'Node.js']
  },
  {
    title: 'FinTech Core Portal',
    category: 'Web Development',
    status: 'Published',
    description: 'High-security banking interface developed for a leading financial institution with 2FA and audit trails.',
    image_url: '/fintech-portal.png',
    tech_stack: ['React', 'Redux', 'Python']
  },
  
  // Mobile Apps
  {
    title: 'HealthSync Wellness',
    category: 'Mobile Apps',
    status: 'Published',
    description: 'React Native fitness app with real-time biometric tracking and AI-powered workout plans.',
    image_url: '/Placehunter - Mobile App UX_UI.png',
    tech_stack: ['React Native', 'Firebase', 'GraphQL']
  },
  {
    title: 'Alpine Mountain Rentals',
    category: 'Mobile Apps',
    status: 'Published',
    description: 'Premium mountain rental booking app with real-time availability, maps, and seamless payment flows.',
    image_url: '/tech-workspace.png',
    tech_stack: ['Flutter', 'Google Maps API', 'Node.js']
  },
  
  // AI & Automation
  {
    title: 'SmartRetail Pro',
    category: 'AI & Automation',
    status: 'Published',
    description: 'AI-driven inventory forecasting and automated restocking system for global retailers.',
    image_url: '/ai-brain.png',
    tech_stack: ['Python', 'TensorFlow', 'AWS']
  },
  {
    title: 'AutoFlow CRM Suite',
    category: 'AI & Automation',
    status: 'Published',
    description: 'Automated lead nurturing and follow-up platform that eliminates manual sales outreach.',
    image_url: '/hero-3d.png',
    tech_stack: ['PyTorch', 'OpenAI API', 'FastAPI']
  },
  
  // E-Commerce
  {
    title: 'PureBazaar Store',
    category: 'E-Commerce',
    status: 'Published',
    description: 'High-performing headless e-commerce store with 0.8s load time and 20% conversion boost.',
    image_url: '/tiqmo-fashion.png',
    tech_stack: ['Next.js', 'Shopify', 'Tailwind']
  },
  {
    title: 'Tiqmo Fashion Platform',
    category: 'E-Commerce',
    status: 'Published',
    description: 'Premium custom fashion marketplace with virtual try-on, reviews, and seamless checkout.',
    image_url: '/eco.png',
    tech_stack: ['Vue.js', 'Stripe', 'Node.js']
  },
  
  // Cloud & DevOps
  {
    title: 'SecureStack Cloud',
    category: 'Cloud & DevOps',
    status: 'Published',
    description: 'Enterprise-grade cloud migration for a major bank with zero downtime and 40% cost saving.',
    image_url: '/devops_philosophy_hd.png',
    tech_stack: ['AWS', 'Kubernetes', 'Terraform']
  },
  {
    title: 'DevOps Automation Hub',
    category: 'Cloud & DevOps',
    status: 'Published',
    description: 'Designed and implemented a complete CI/CD pipeline system reducing deployment time by 80%.',
    image_url: '/digital_forge_3d.png',
    tech_stack: ['Docker', 'Jenkins', 'Azure']
  },
  
  // UI/UX Design
  {
    title: 'ZenSpace Mobile UI',
    category: 'UI/UX Design',
    status: 'Published',
    description: 'Minimalist meditation app design focused on reducing cognitive load and maximizing calm.',
    image_url: '/3d uiux mobile screen with user elements _ Premium Photo-Photoroom.png',
    tech_stack: ['Figma', 'Protopie']
  },
  {
    title: 'Corporate Homepage Design',
    category: 'UI/UX Design',
    status: 'Published',
    description: 'Complete brand identity and web design for a global SaaS company seeking market expansion.',
    image_url: '/corporate-homepage.png',
    tech_stack: ['Figma', 'Adobe XD', 'Webflow']
  }
];

async function seedData() {
  console.log('Clearing old projects...');
  await supabase.from('projects').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  
  console.log('Inserting new projects with clean image paths...');
  const { data, error } = await supabase.from('projects').insert(projects).select();
  
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(`✅ Successfully inserted ${data.length} projects!`);
    data.forEach(p => console.log(` - [${p.category}] ${p.title} → ${p.image_url}`));
  }
}

seedData();
