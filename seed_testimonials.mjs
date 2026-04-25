import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ajvnbuzpxqbrvngnjsak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdm5idXpweHFicnZuZ25qc2FrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzAzNTgzNSwiZXhwIjoyMDkyNjExODM1fQ.hTQKSreTXrRRzZp6qQ82EB6osE9uX3eNx0R9C5zH9KM';
const supabase = createClient(supabaseUrl, supabaseKey);

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'CEO',
    company: 'TechVentures PK',
    rating: 5,
    content: 'SoftCodec completely transformed our business. The website they built increased our conversions by 340% in the first month! Their team is professional, fast, and highly skilled.',
    status: 'Published'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Marketing Director',
    company: 'GlobalFlow',
    rating: 5,
    content: 'Working with SoftCodec was a game changer for our mobile app. The AI-integrated features they developed have set us light years ahead of our competitors.',
    status: 'Published'
  },
  {
    name: 'Umer Khan',
    role: 'Owner',
    company: 'PureBazaar',
    rating: 5,
    content: 'The headless e-commerce store SoftCodec built for us is incredibly fast. Our customers love the new experience, and our sales have never been higher.',
    status: 'Published'
  },
  {
    name: 'David Miller',
    role: 'CTO',
    company: 'DataSecure',
    rating: 5,
    content: 'Our cloud migration was seamless thanks to the SoftCodec DevOps team. Zero downtime and a significant reduction in our monthly cloud spend. Exceptional work.',
    status: 'Published'
  },
  {
    name: 'Zainab Bibi',
    role: 'Product Manager',
    company: 'CreativeStudio',
    rating: 5,
    content: 'The UI/UX design team at SoftCodec is world-class. They took our vague ideas and turned them into a stunning, intuitive interface that users absolutely love.',
    status: 'Published'
  },
  {
    name: 'Robert Wilson',
    role: 'Founder',
    company: 'StartupX',
    rating: 5,
    content: 'From seed-stage MVP to a scalable product, SoftCodec has been our trusted technical partner. Their insight goes beyond just writing code — they think like founders.',
    status: 'Published'
  },
  {
    name: 'Fatima Malik',
    role: 'Head of Digital',
    company: 'NovaCorp',
    rating: 5,
    content: 'I was amazed at how quickly they delivered our enterprise portal. The quality was top-notch and the team was responsive at every step of the project.',
    status: 'Published'
  },
  {
    name: 'James Thompson',
    role: 'Director of Ops',
    company: 'LogiChain',
    rating: 4,
    content: 'SoftCodec built our logistics tracking dashboard in record time. The real-time data features have dramatically improved our operational efficiency.',
    status: 'Published'
  }
];

async function seedTestimonials() {
  console.log('Clearing old testimonials...');
  await supabase.from('testimonials').delete().neq('id', '00000000-0000-0000-0000-000000000000');

  console.log('Inserting testimonials...');
  const { data, error } = await supabase.from('testimonials').insert(testimonials).select();

  if (error) {
    console.error('Error:', error);
  } else {
    console.log(`✅ Successfully inserted ${data.length} testimonials!`);
    data.forEach(t => console.log(` - ${t.name} (${t.company}) ★${t.rating}`));
  }
}

seedTestimonials();
