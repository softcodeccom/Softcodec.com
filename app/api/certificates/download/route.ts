import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    let fileUrl = searchParams.get('url');

    let applicantName = 'SoftCodec_Intern';
    let fileBuffer: Buffer | null = null;
    let contentType = 'application/octet-stream';
    let fileExt = 'pdf';

    if (id) {
      // 1. Fetch Applicant Details
      const { data: applicant, error: fetchError } = await supabaseAdmin
        .from('job_applications')
        .select('*')
        .eq('id', id)
        .single();

      if (!fetchError && applicant) {
        if (applicant.full_name) {
          applicantName = applicant.full_name.replace(/[^a-zA-Z0-9_-]/g, '_');
        }
        if (applicant.certificate_url) {
          fileUrl = applicant.certificate_url;
        }
      }
    }

    if (!fileUrl) {
      return NextResponse.json({ error: 'Certificate URL or ID is required' }, { status: 400 });
    }

    // Extract filename from URL
    const urlParts = fileUrl.split('/');
    const rawFileName = urlParts[urlParts.length - 1].split('?')[0];
    const extMatch = rawFileName.match(/\.([a-zA-Z0-9]+)$/);
    if (extMatch) {
      fileExt = extMatch[1].toLowerCase();
    }

    // Set correct Content-Type
    if (fileExt === 'png') contentType = 'image/png';
    else if (fileExt === 'jpg' || fileExt === 'jpeg') contentType = 'image/jpeg';
    else if (fileExt === 'pdf') contentType = 'application/pdf';
    else if (fileExt === 'webp') contentType = 'image/webp';

    // 2. Fetch File Binary Stream from Supabase Storage or URL
    const res = await fetch(fileUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch file from storage: ${res.statusText}`);
    }

    const arrayBuffer = await res.arrayBuffer();
    fileBuffer = Buffer.from(arrayBuffer);

    // Formulate a clean download filename for the user's device
    const downloadFileName = `${applicantName}_Internship_Certificate.${fileExt}`;

    // 3. Return response with Content-Disposition: attachment header to FORCE DOWNLOAD
    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${downloadFileName}"`,
        'Content-Length': arrayBuffer.byteLength.toString(),
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error: any) {
    console.error('Download certificate error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
