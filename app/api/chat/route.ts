import { NextResponse } from 'next/server';

const SYSTEM_KNOWLEDGE = {
  ceo: "SoftCodec's CEO is Mian Salman. He is a visionary leader in the AI and Software development industry in Pakistan.",
  hr: "Our HR Manager is Miss Aiza. She handles all recruitment and career-related queries. You can contact her via our official channels.",
  founders: "SoftCodec was co-founded by Muhammad Behram Hassan, Muhammad Ahmad, and Abdullah. They lead the technical and creative vision of the company alongside CEO Mian Salman.",
  contact: "You can reach us at +92-307-6209331 (Phone/WhatsApp) or email us at softcodec.com@gmail.com.",
  services: "We offer Web Development (Next.js), Mobile App Development (Flutter), AI Solutions, and Premium UI/UX Design.",
  portfolio: "We have built high-end projects including Fintech portals and AI SaaS platforms. Check our Portfolio page for more.",
  location: "SoftCodec is based in Pakistan and provides world-class digital services globally.",
  tech: "We use modern tech like Next.js, React, Node.js, and Python for AI solutions."
};

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    const query = message.toLowerCase();

    // 1. SMALL TALK / GREETINGS
    if (query.includes('hi') || query.includes('hello') || query.includes('hey') || query.includes('assalam')) {
      return NextResponse.json({ response: "Hello! I am the SoftCodec Assistant. How can I help you today? You can ask about our services, CEO Mian Salman, or our team." });
    }
    if (query.includes('doing') || query.includes('what are you')) {
      return NextResponse.json({ response: "I am busy assisting visitors and explaining how SoftCodec (led by Mian Salman) builds world-class digital products! How can I help you?" });
    }
    if (query.includes('how are you') || query.includes('kaise ho')) {
      return NextResponse.json({ response: "I am functioning at 100% efficiency! Ready to discuss your next big project. How about you?" });
    }
    if (query.includes('thank') || query.includes('shukriya')) {
      return NextResponse.json({ response: "You're most welcome! At SoftCodec, we are always happy to help." });
    }

    // 2. COMPANY SPECIFIC MATCHES
    if (query.includes('ceo') || query.includes('salman') || query.includes('owner')) {
      return NextResponse.json({ response: SYSTEM_KNOWLEDGE.ceo });
    }
    if (query.includes('hr') || query.includes('aiza') || query.includes('job') || query.includes('hiring') || query.includes('career')) {
      return NextResponse.json({ response: SYSTEM_KNOWLEDGE.hr });
    }
    if (query.includes('founder') || query.includes('behram') || query.includes('ahmad') || query.includes('abdullah') || query.includes('co-founder')) {
      return NextResponse.json({ response: SYSTEM_KNOWLEDGE.founders });
    }
    if (query.includes('contact') || query.includes('phone') || query.includes('call') || query.includes('whatsapp') || query.includes('email') || query.includes('number')) {
      return NextResponse.json({ response: SYSTEM_KNOWLEDGE.contact });
    }
    if (query.includes('service') || query.includes('what do you do') || query.includes('web') || query.includes('app') || query.includes('ai') || query.includes('design')) {
      return NextResponse.json({ response: SYSTEM_KNOWLEDGE.services });
    }
    if (query.includes('portfolio') || query.includes('work') || query.includes('projects')) {
      return NextResponse.json({ response: SYSTEM_KNOWLEDGE.portfolio });
    }

    // 3. CATCH-ALL (Smart Fallback)
    return NextResponse.json({ 
      response: "I'm focusing on SoftCodec's premium services and our expert team (Mian Salman, Miss Aiza, and our founders). I'd love to help you get started with your project. Should I show you our services or contact info?" 
    });

  } catch (error) {
    return NextResponse.json({ response: "I'm here! Ask me about SoftCodec's premium services or our expert team." });
  }
}
