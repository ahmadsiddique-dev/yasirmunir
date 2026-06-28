import React from 'react';
import { HeroSection } from '@/components/ui/feature-carousel';

const Case = () => {
  const creativeImages = [
    { src: '/zavia/image2.webp', alt: 'Abstract 3D Render' },
    { src: '/zavia/image3.webp', alt: 'Space abstract' },
    { src: '/zavia/image4.webp', alt: 'Gradient fluid' },
    { src: '/zavia/image5.webp', alt: 'Technology circuit' },
  ];

  const designImages = [
    { src: '/sales/1.webp', alt: 'Minimalist website UI' },
    { src: '/sales/2.webp', alt: 'Wireframes on paper' },
    { src: '/sales/3.webp', alt: 'Design system elements' },
    { src: '/sales/4.webp', alt: 'Clean workspace' },
  ];

  const performanceImages = [
    { src: '/leads/1.webp', alt: 'Data analytics dashboard' },
    { src: '/leads/2.webp', alt: 'Server racks' },
    { src: '/leads/3.webp', alt: 'Matrix code' },
    { src: '/leads/4.webp', alt: 'Performance graphs' },
  ];

  const motionImages = [
    { src: '/awareness/1.webp', alt: 'Light trails motion' },
    { src: '/awareness/2.webp', alt: 'Abstract shapes' },
    { src: '/awareness/3.webp', alt: 'Fluid art' },
    { src: '/awareness/4.webp', alt: 'Dynamic colors' },
  ];

  return (
    <div className="w-full relative">
      <div className="bg-background md:sticky md:top-0 md:h-screen md:overflow-hidden shadow-2xl">
        <HeroSection
          title={<>Business Pages Yasir Has Helped Grow</>}
          subtitle={
            <div className="space-y-4">
              <p>
                A successful social media presence is built on <span className="text-primary font-semibold">consistency, strategy, and understanding the audience</span>. Over the years, Yasir has managed business pages across multiple industries, helping brands increase their reach, engagement, and overall online visibility.
              </p>
              <p>
                The screenshots below showcase the <span className="text-primary font-semibold">organic and paid growth</span> achieved for different businesses through well-planned content and <span className="text-primary font-semibold">performance-driven marketing</span>.
              </p>
            </div>
          }
          tags={['Social Media Strategy', 'Social Marketing', 'Content Planning']}
          images={creativeImages}
          className="md:h-full md:min-h-0"
        />
      </div>
      
      <div className="bg-muted md:sticky md:top-0 md:h-screen md:overflow-hidden shadow-2xl">
        <HeroSection
          title={<>E-commerce Sales & High-Performing ROAS Campaigns</>}
          subtitle={
            <div className="space-y-4">
              <p>
                Generating sales is not about spending more. It is about <span className="text-primary font-semibold">spending smarter</span>. Yasir has managed Shopify and Meta Ads campaigns for both national and international e-commerce brands, focusing on <span className="text-primary font-semibold">profitable customer acquisition</span> and sustainable business growth.
              </p>
              <p>
                The campaign results below highlight <span className="text-primary font-semibold">strong ROAS</span>, consistent sales performance, and <span className="text-primary font-semibold">data-driven strategies</span> that helped businesses scale with confidence.
              </p>
            </div>
          }
          tags={['Performance Marketing', 'Meta Ads', 'TikTok Ads', 'ROI Optimization']}
          images={designImages}
          className="bg-transparent! md:h-full md:min-h-0"
        />
      </div>

      <div className="bg-background md:sticky md:top-0 md:h-screen md:overflow-hidden shadow-2xl">
        <HeroSection
          title={<>Lead Generation Campaign Results</>}
          subtitle={
            <div className="space-y-4">
              <p>
                Every <span className="text-primary font-semibold">qualified lead</span> has the potential to become a loyal customer. Yasir has successfully planned and managed lead generation campaigns for service-based businesses across multiple industries, helping them attract <span className="text-primary font-semibold">high-quality inquiries</span> through Meta Ads.
              </p>
              <p>
                The screenshots below represent <span className="text-primary font-semibold">real campaign performance</span>, delivering quality leads that supported business growth while maintaining <span className="text-primary font-semibold">cost-effective acquisition</span>.
              </p>
            </div>
          }
          tags={['Brand Strategy', 'Community Engagement', 'Analytics', 'Growth Hacking']}
          images={performanceImages}
          className="md:h-full md:min-h-0"
        />
      </div>

      <div className="bg-muted md:sticky md:top-0 md:h-screen md:overflow-hidden">
        <HeroSection
          title={<>Brand Awareness</>}
          subtitle={
            <div className="space-y-4">
              <p>
                Launching a new business is only half the challenge. The other half is <span className="text-primary font-semibold">making people aware of it</span>. Yasir has helped new businesses introduce their brands to local audiences through <span className="text-primary font-semibold">highly targeted awareness campaigns</span>.
              </p>
              <p>
                These campaigns created excitement before launch, <span className="text-primary font-semibold">increased local visibility</span>, and encouraged people to visit during opening events and promotional offers. The results below demonstrate how strategic awareness campaigns <span className="text-primary font-semibold">turned online attention into real customer visits</span>.
              </p>
            </div>
          }
          tags={['E-commerce', 'Lead Generation', 'LinkedIn Optimization', 'Google Business Profile']}
          images={motionImages}
          className="bg-transparent! md:h-full md:min-h-0"
        />
      </div>
    </div>
  );
};

export default Case;
