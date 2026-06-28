import { LogoCloud } from "@/components/logo-cloud";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const Logos = () => {
  return (
    <div id="clients" className="my-30 pt-8 md:pt-0 sm:my-30 w-full place-content-center">
      <ScrollReveal childSelector=".reveal-item" className="relative mx-auto max-w-3xl">
        <h2 className="reveal-item mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
          <span className="text-muted-foreground">Trusted by Experts</span>
          <br />
          <span className="font-semibold">Partnered with Well known Businesses</span>
        </h2>
        <div className="reveal-item mask-[linear-gradient(to_right,transparent,black,transparent)] mx-auto my-5 h-px max-w-sm bg-border" />
        <div className="reveal-item">
          <LogoCloud />
        </div>
        <div className="reveal-item mask-[linear-gradient(to_right,transparent,black,transparent)] mt-5 h-px bg-border" />
      </ScrollReveal>
    </div>
  );
};

export default Logos;
