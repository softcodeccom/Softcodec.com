import type { Metadata } from "next";
import "./globals.css";
import AIAssistant from './components/AIAssistant';
import ScrollReveal from './components/ScrollReveal';
import ConsoleFilter from './components/ConsoleFilter';
import IntroScan from './components/IntroScan';

export const metadata: Metadata = {
  title: 'SoftCodec | Premium AI-Native Software House Pakistan',
  description: "SoftCodec is Pakistan's #1 software house — delivering world-class web apps, mobile apps, AI solutions, and digital experiences that transform businesses.",
};

import PublicLayoutWrapper from './components/PublicLayoutWrapper';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Orbitron:wght@400;600;700;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <IntroScan />
        <ConsoleFilter />
        <ScrollReveal />
        
        <PublicLayoutWrapper>
          {children}
        </PublicLayoutWrapper>
      </body>
    </html>
  );
}
