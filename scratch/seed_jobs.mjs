import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const jobs = [
  // AI / ML
  {
    title: 'Senior AI / ML Engineer',
    category: 'Engineering',
    type: 'Full-time',
    experience: '3+ Years',
    salary: '250k - 400k',
    description: 'Lead the development of cutting-edge LLM integrations and RAG systems for international clients.',
    requirements: ['Python, PyTorch, LangChain', 'Experience with OpenAI & Anthropic APIs', 'Vector DBs (Pinecone/Supabase)', 'Fine-tuning LLMs'],
    icon_name: 'Cpu'
  },
  {
    title: 'Computer Vision Specialist',
    category: 'Engineering',
    type: 'Contract',
    experience: '2+ Years',
    salary: 'Premium',
    description: 'Work on real-time object detection and image processing projects using OpenCV and TensorFlow.',
    requirements: ['OpenCV & Python Mastery', 'TensorFlow or Keras', 'Deep Learning Architectures', 'Edge Computing knowledge'],
    icon_name: 'Zap'
  },
  // Mobile App
  {
    title: 'React Native Developer',
    category: 'Engineering',
    type: 'Full-time',
    experience: '2+ Years',
    salary: '150k - 250k',
    description: 'Build high-performance, smooth mobile applications for iOS and Android using React Native.',
    requirements: ['React Native & TypeScript', 'State management (Redux/Zustand)', 'Push Notifications & Deep Linking', 'App Store/Play Store deployment'],
    icon_name: 'Terminal'
  },
  {
    title: 'Flutter App Developer',
    category: 'Engineering',
    type: 'Full-time',
    experience: '1-2 Years',
    salary: '120k - 180k',
    description: 'Create beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    requirements: ['Dart & Flutter Mastery', 'Clean Architecture', 'API Integration', 'UI/UX focus'],
    icon_name: 'Layout'
  },
  // Web App
  {
    title: 'Senior Next.js Developer',
    category: 'Engineering',
    type: 'Full-time',
    experience: '3+ Years',
    salary: '200k - 350k',
    description: 'Architect scalable web applications using the latest Next.js features and Tailwind CSS.',
    requirements: ['Next.js 14+ (App Router)', 'TypeScript & Tailwind CSS', 'Server Actions & Suspense', 'Performance Optimization'],
    icon_name: 'Code2'
  },
  {
    title: 'Node.js Backend Architect',
    category: 'Engineering',
    type: 'Full-time',
    experience: '4+ Years',
    salary: 'Premium',
    description: 'Design and implement robust microservices and real-time APIs for enterprise-grade SaaS.',
    requirements: ['Node.js & Express/NestJS', 'PostgreSQL & Redis', 'WebSocket / Socket.io', 'Architecture Patterns'],
    icon_name: 'Database'
  },
  // UI/UX & Graphic
  {
    title: 'Lead UI/UX Designer',
    category: 'Design',
    type: 'Full-time',
    experience: '3+ Years',
    salary: '150k - 250k',
    description: 'Drive the visual identity of SoftCodec projects. Create high-fidelity SaaS designs and prototypes.',
    requirements: ['Figma Mastery', 'Design Systems Management', 'User Research & Journeys', 'Prototyping (Framer/Protopie)'],
    icon_name: 'PenTool'
  },
  {
    title: 'Senior Graphic Designer',
    category: 'Design',
    type: 'Full-time',
    experience: '2+ Years',
    salary: '80k - 130k',
    description: 'Create stunning brand assets, marketing collaterals, and social media content.',
    requirements: ['Adobe Illustrator & Photoshop', 'After Effects (Basic Motion)', 'Typography & Layouts', 'Brand Identity focus'],
    icon_name: 'Heart'
  },
  // SEO & Marketing
  {
    title: 'Technical SEO Specialist',
    category: 'Marketing',
    type: 'Full-time',
    experience: '2+ Years',
    salary: '100k - 160k',
    description: 'Scale organic traffic through advanced technical SEO strategies and data-driven optimization.',
    requirements: ['Site Audits & Schema Markup', 'Keyword Research & Competitor Analysis', 'Search Console & Analytics', 'Backlink Strategy'],
    icon_name: 'SearchCode'
  },
  {
    title: 'Digital Marketing Lead',
    category: 'Marketing',
    type: 'Full-time',
    experience: '3+ Years',
    salary: '150k - 220k',
    description: 'Manage performance marketing campaigns (FB, Google, LinkedIn) and lead generation.',
    requirements: ['PPC & Meta Ads Expertise', 'Content Strategy', 'Marketing Automation', 'ROI Analysis'],
    icon_name: 'Target'
  },
  // DevOps
  {
    title: 'DevOps & Cloud Engineer',
    category: 'Engineering',
    type: 'Full-time',
    experience: '3+ Years',
    salary: '250k - 400k',
    description: 'Manage AWS infrastructure, CI/CD pipelines, and ensure 99.9% system availability.',
    requirements: ['AWS / GCP / Azure', 'Docker & Kubernetes', 'Terraform (IaC)', 'GitHub Actions / Jenkins'],
    icon_name: 'Cloud'
  },
  // BDM / Sales
  {
    title: 'Business Development Manager',
    category: 'Management',
    type: 'Full-time',
    experience: '2+ Years',
    salary: 'Base + High Comm',
    description: 'Grow the agency by closing deals on Upwork, LinkedIn, and through direct outreach.',
    requirements: ['Upwork / LinkedIn Sales Mastery', 'Perfect English Communication', 'Experience in Agency Sales', 'Strategic Proposal Writing'],
    icon_name: 'Star'
  }
];

async function seed() {
  console.log('Seeding jobs to database...');
  const { data, error } = await supabase.from('jobs').insert(jobs);
  
  if (error) {
    console.error('Error seeding jobs:', error);
  } else {
    console.log('Successfully seeded 12 premium jobs!');
  }
}

seed();
