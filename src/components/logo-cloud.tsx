import { InfiniteSlider } from "@/components/infinite-slider";

export function LogoCloud() {
	return (
		<div className="mask-[linear-gradient(to_right,transparent,black,transparent)] overflow-hidden py-4">
			<InfiniteSlider gap={42} reverse speed={80} speedOnHover={25}>
				{logos.map((logo, i) => (
					<img
						alt={logo.alt}
						className="pointer-events-none h-10 select-none md:h-15 dark:brightness-0 dark:invert"
						height="auto"
						key={`logo-${logo.alt}-${i}`}
						loading="lazy"
						src={logo.src}
						width="auto"
					/>
				))}
			</InfiniteSlider>
		</div>
	);
}

const logos = [
	{
		src: "/clogo/1.png",
		alt: "Nvidia Logo",
	},
	{
		src: "/clogo/2.png",
		alt: "Supabase Logo",
	},
	{
		src: "/clogo/3.png",
		alt: "OpenAI Logo",
	},
	{
		src: "/clogo/4.png",
		alt: "Turso Logo",
	},
	{
		src: "/clogo/5.png",
		alt: "Vercel Logo",
	},
	{
		src: "/clogo/6.png",
		alt: "GitHub Logo",
	},
	{
		src: "/clogo/7.png",
		alt: "Claude AI Logo",
	},
	{
		src: "/clogo/8.png",
		alt: "Clerk Logo",
	},
	{
		src: "/clogo/9.png",
		alt: "Clerk Logo",
	},
	{
		src: "/clogo/10.png",
		alt: "Clerk Logo",
	},
	{
		src: "/clogo/11.png",
		alt: "Clerk Logo",
	},
];
