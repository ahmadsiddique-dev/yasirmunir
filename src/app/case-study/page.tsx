import { Metadata } from 'next';
import React from 'react';
import Hero from './_components/Hero';
import Case from './_components/Case';

export const metadata: Metadata = {
  title: 'Yasir Munir | Certified Digital Marketer & Performance Marketer',
  description: 'Explore the digital marketing portfolio of Yasir Munir. Specializing in Meta Ads, TikTok Ads, LinkedIn Optimization, and Google Business Profile for scalable brand growth.',
  keywords: ['Digital Marketer', 'Performance Marketing', 'Meta Ads', 'TikTok Ads', 'LinkedIn Optimization', 'Social Media Marketing', 'Yasir Munir'],
  openGraph: {
    title: 'Yasir Munir | Digital Marketing Portfolio',
    description: 'Certified Digital Marketer specializing in Meta Ads, TikTok Ads, and Social Media Strategy.',
    type: 'website',
  }
};

const page = () => {
  return (
    <div>
      <Hero />
      <Case />
    </div>
  );
};

export default page;