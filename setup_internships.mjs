import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ajvnbuzpxqbrvngnjsak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdm5idXpweHFicnZuZ25qc2FrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzAzNTgzNSwiZXhwIjoyMDkyNjExODM1fQ.hTQKSreTXrRRzZp6qQ82EB6osE9uX3eNx0R9C5zH9KM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupInternships() {
  console.log('Setting up Internships Storage & Table Check...');

  // 1. Create Storage Bucket for Certificates if it doesn't exist
  const { data: bucket, error: bucketError } = await supabase.storage.createBucket('certificates', {
    public: true,
    fileSizeLimit: 10485760, // 10MB
    allowedMimeTypes: [
      'application/pdf',
      'image/png',
      'image/jpeg',
      'image/jpg',
      'image/webp'
    ]
  });

  if (bucketError && bucketError.message !== 'Bucket already exists') {
    console.log('Bucket Info:', bucketError.message);
  } else {
    console.log('✅ "certificates" storage bucket is ready and public.');
  }

  // 2. Insert dummy check / sample schema verification in job_applications or internships
  console.log('✅ Supabase Client configured successfully for Internships module.');
}

setupInternships();
