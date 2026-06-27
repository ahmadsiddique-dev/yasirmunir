"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { contactSchema, type ContactFormData } from "@/schemas/contact";

const contactInfo = [
	{
		icon: (
			<MailIcon
			/>
		),
		label: "Email",
		value: "mail@example.com",
	},
	{
		icon: (
			<PhoneIcon
			/>
		),
		label: "Phone",
		value: "+92 312 1234567",
	},
];

export function ContactSection() {
	return (
		<ScrollReveal childSelector=".reveal-item" className="relative mx-auto grid h-full w-full max-w-4xl rounded-2xl border md:grid-cols-[1fr_0.70fr] overflow-hidden" scale={0.95} y={80}>
			<div className="col-span-1 flex flex-col space-y-4 p-8 lg:p-10">
				<h1 className="reveal-item font-medium text-2xl tracking-wide md:text-3xl">
					Contact With Us
				</h1>
				<p className="reveal-item max-w-md text-muted-foreground text-sm leading-relaxed md:text-base">
					If you have any questions regarding our Services or need help, please
					fill out the form here.
				</p>
				<p className="reveal-item max-w-md text-muted-foreground text-xs leading-relaxed md:text-sm">
					We do our best to respond within 1 business day.
				</p>
				<div className="grid gap-4">
					{contactInfo?.map((info) => (
						<div key={info.label} className="reveal-item">
							<ContactInfo {...info} />
						</div>
					))}
				</div>
			</div>
			<div className="reveal-item col-span-1 flex items-center border-t p-8 md:border-t-0 md:border-l">
				<ContactForm />
			</div>
		</ScrollReveal>
	);
}

function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);
		setSubmitError(null);
		setSubmitSuccess(false);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (response.ok && result.success) {
				setSubmitSuccess(true);
				reset();
				setTimeout(() => {
					setSubmitSuccess(false);
				}, 3500);
			} else {
				setSubmitError(result.message || "Something went wrong. Please try again.");
			}
		} catch (err) {
			setSubmitError("Failed to submit contact form. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
			<FieldGroup>
				<Field data-invalid={!!errors.fullname}>
					<FieldLabel htmlFor="full-name">Full name</FieldLabel>
					<Input 
						autoComplete="off" 
						id="full-name" 
						placeholder="John Doe" 
						{...register("fullname")}
					/>
					{errors.fullname && <FieldError>{errors.fullname.message}</FieldError>}
				</Field>
				<Field data-invalid={!!errors.email}>
					<FieldLabel htmlFor="email">Email</FieldLabel>
					<Input
						autoComplete="off"
						id="email"
						placeholder="johndoe@example.com"
						type="email"
						{...register("email")}
					/>
					{errors.email && <FieldError>{errors.email.message}</FieldError>}
				</Field>
				<Field data-invalid={!!errors.phonenumber}>
					<FieldLabel htmlFor="phone">Phone</FieldLabel>
					<Input
						autoComplete="off"
						id="phone"
						placeholder="+1 (555) 123-4567"
						type="tel"
						{...register("phonenumber")}
					/>
					{errors.phonenumber && <FieldError>{errors.phonenumber.message}</FieldError>}
				</Field>
				<Field data-invalid={!!errors.message}>
					<FieldLabel htmlFor="message">Message</FieldLabel>
					<Textarea
						autoComplete="off"
						id="message"
						placeholder="Your message"
						{...register("message")}
					/>
					{errors.message && <FieldError>{errors.message.message}</FieldError>}
				</Field>
			</FieldGroup>

			{submitError && (
				<div className="mt-4 text-sm text-destructive font-medium text-center">
					{submitError}
				</div>
			)}

			{submitSuccess && (
				<div className="mt-4 flex items-center gap-2.5 p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
					<svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
						<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
					</svg>
					<span>Thank you! Your message has been sent successfully.</span>
				</div>
			)}

			<Button className="mt-8 w-full" type="submit" disabled={isSubmitting}>
				{isSubmitting ? "Submitting..." : "Submit"}
			</Button>
		</form>
	);
}

type ContactInfoProps = React.ComponentProps<"div"> & {
	icon: React.ReactNode;
	label: string;
	value: string;
};

function ContactInfo({
	icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn("flex items-center gap-3 py-3", className)} {...props}>
			<div className="rounded-lg border bg-card p-3 shadow-xs [&_svg]:size-5">
				{icon}
			</div>
			<div>
				<p className="font-medium">{label}</p>
				<p className="text-muted-foreground text-xs">{value}</p>
			</div>
		</div>
	);
}
