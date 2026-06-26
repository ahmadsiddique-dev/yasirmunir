import dynamic from "next/dynamic";

const CinematicFooter = dynamic(() =>
  import("@/components/ui/motion-footer").then((m) => m.CinematicFooter)
);

export default function Footer() {
  return <CinematicFooter />;
}
