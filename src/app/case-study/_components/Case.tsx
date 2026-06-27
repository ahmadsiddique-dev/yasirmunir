import React from 'react';
import { HeroSection } from '@/components/ui/feature-carousel';

const Case = () => {
  const creativeImages = [
    { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop', alt: 'Abstract 3D Render' },
    { src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop', alt: 'Cyberpunk setup' },
    { src: 'https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=1000&auto=format&fit=crop', alt: 'Space abstract' },
    { src: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop', alt: 'Gradient fluid' },
    { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop', alt: 'Technology circuit' },
  ];

  const designImages = [
    { src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop', alt: 'Minimalist website UI' },
    { src: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop', alt: 'Wireframes on paper' },
    { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop', alt: 'Design system elements' },
    { src: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1000&auto=format&fit=crop', alt: 'Clean workspace' },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop', alt: 'Typography layout' },
  ];

  const performanceImages = [
    { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', alt: 'Data analytics dashboard' },
    { src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop', alt: 'Server racks' },
    { src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop', alt: 'Performance graphs' },
    { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop', alt: 'Matrix code' },
    { src: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1000&auto=format&fit=crop', alt: 'High speed lights' },
  ];

  const motionImages = [
    { src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop', alt: 'Light trails motion' },
    { src: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?q=80&w=1000&auto=format&fit=crop', alt: 'Abstract shapes' },
    { src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop', alt: 'Fluid art' },
    { src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop', alt: 'Dynamic colors' },
    { src: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1000&auto=format&fit=crop', alt: 'Vibrant waves' },
  ];

  return (
    <div className="w-full relative">
      <div className="bg-background sticky top-0 h-screen overflow-hidden shadow-2xl">
        <HeroSection
          title={<>Creative & Strategic Social Media</>}
          subtitle="At Qazi Sami Production, I bring brands to life through creative and strategic social media marketing. From crafting engaging content to running targeted ad campaigns, I focus on building a strong online presence that connects with the right audience. I handle everything from content planning and community engagement to analytics and optimization, ensuring maximum reach and impact."
          tags={['Social Media Strategy', 'Social Marketing', 'Content Planning']}
          images={creativeImages}
          className="h-full min-h-0"
        />
      </div>
      
      <div className="bg-muted sticky top-0 h-screen overflow-hidden shadow-2xl">
        <HeroSection
          title={<>Performance Marketing & Ads</>}
          subtitle="As a Performance Marketer at Developers Point Private Limited, I specialize in maximizing ROI through data-driven campaigns. By leveraging advanced Meta Ads and TikTok Ads strategies, I optimize conversion funnels and rapidly scale businesses in highly competitive markets. My approach focuses on precise targeting and continuous A/B testing to lower acquisition costs."
          tags={['Performance Marketing', 'Meta Ads', 'TikTok Ads', 'ROI Optimization']}
          images={designImages}
          className="bg-transparent! h-full min-h-0"
        />
      </div>

      <div className="bg-background sticky top-0 h-screen overflow-hidden shadow-2xl">
        <HeroSection
          title={<>Brand Building & Community Management</>}
          subtitle="During my tenure as Social Media Marketing Manager at Digital Titan, I spearheaded comprehensive digital growth strategies. My focus was on establishing authoritative brand voices, driving community engagement, and translating social metrics into actionable business intelligence. With a keen eye on digital trends, I help brands make a lasting impression in the online world."
          tags={['Brand Strategy', 'Community Engagement', 'Analytics', 'Growth Hacking']}
          images={performanceImages}
          className="h-full min-h-0"
        />
      </div>

      <div className="bg-muted sticky top-0 h-screen overflow-hidden">
        <HeroSection
          title={<>E-commerce & Real Estate Scaling</>}
          subtitle="At Labbaik Real Estate and Looknice.store, I crafted tailored social media strategies to drive localized and global sales. From optimizing Google Business Profiles for maximum local visibility to executing high-converting e-commerce ad campaigns, I ensured consistent lead generation and revenue growth across vastly different industries."
          tags={['E-commerce', 'Lead Generation', 'LinkedIn Optimization', 'Google Business Profile']}
          images={motionImages}
          className="bg-transparent! h-full min-h-0"
        />
      </div>
    </div>
  );
};

export default Case;
