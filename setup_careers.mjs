import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ajvnbuzpxqbrvngnjsak.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdm5idXpweHFicnZuZ25qc2FrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzAzNTgzNSwiZXhwIjoyMDkyNjExODM1fQ.hTQKSreTXrRRzZp6qQ82EB6osE9uX3eNx0R9C5zH9KM'
);

async function setupCareers() {
  console.log('Setting up Careers system...');

  // Create Storage Bucket for CVs
  const { data: bucket, error: bucketError } = await supabase.storage.createBucket('cvs', {
    public: true,
    fileSizeLimit: 5242880, // 5MB
    allowedMimeTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  });
  
  if (bucketError && bucketError.message !== 'Bucket already exists') {
    console.error('Bucket Error:', bucketError.message);
  } else {
    console.log('✅ CVs storage bucket ready.');
  }

  console.log('Please ensure you have a "job_applications" table with these columns:');
  console.log('id (uuid), created_at (timestamptz), full_name (text), email (text), phone (text), position (text), experience (text), resume_url (text), status (text - default "new"), message (text)');
}

setupCareers();
