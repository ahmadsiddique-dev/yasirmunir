"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const NAV_ITEMS = [
  { label: "Work", id: "work" },
  { label: "Clients", id: "clients" },
  { label: "Contact", id: "contact" }
];

export default function GlassNavbar() {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const glassStyle = {
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    boxShadow:
      "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
  };

  const glassBlur = {
    backdropFilter: "blur(24px) saturate(1.8)",
    WebkitBackdropFilter: "blur(24px) saturate(1.8)",
  };

  const ctaStyle = {
    background: "rgba(78, 119, 154, 0.85)",
    border: "1px solid rgba(78, 119, 154, 0.4)",
    boxShadow: "0 2px 16px rgba(78, 119, 154, 0.35)",
  };

  const ctaHoverStyle = {
    background: "rgba(78, 119, 154, 1)",
    boxShadow: "0 4px 24px rgba(78, 119, 154, 0.55)",
  };

  const handleScroll = (e: React.MouseEvent, id: string, index: number) => {
    e.preventDefault();
    setActive(index);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="fixed top-6 left-1/2 flex w-[calc(100%-2rem)] max-w-[720px] -translate-x-1/2 flex-col"
      style={{ zIndex: 50 }}
    >
      {/* ── Main navbar pill ── */}
      <motion.nav
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        className="relative isolate flex w-full items-center gap-1 rounded-full px-2 py-2"
        style={glassStyle}
      >
        <div
          className="pointer-events-none absolute inset-0 z-[-1] rounded-full"
          style={glassBlur}
        />
        {/* Logo */}
        <div
          className="flex cursor-pointer items-center gap-2 pl-1 pr-2"
          onClick={() => setActive(null)}
        >
          <div className="relative h-10 w-10">
            <Image
              src="/logo.png"
              alt="Yasir Munir Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* ── Desktop nav ── */}
        <div className="hidden items-center gap-1 sm:flex">
          {NAV_ITEMS.map((item, i) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id, i)}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="relative cursor-pointer rounded-full px-5 py-2 text-sm font-medium"
              style={{
                color:
                  active === i || hovered === i
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Active pill */}
              {active === i && (
                <motion.div
                  layoutId="glass-nav-active"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.a>
          ))}

          {/* Get Started */}
          <motion.a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact", 2)}
            whileHover={{ scale: 1.04, ...ctaHoverStyle }}
            whileTap={{ scale: 0.96 }}
            className="ml-2 cursor-pointer rounded-full px-5 py-2 text-sm font-semibold text-white text-center"
            style={ctaStyle}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Get Started
          </motion.a>
        </div>

        <motion.button
          className="mr-2 flex cursor-pointer items-center justify-center rounded-full p-2 text-white/70 sm:!hidden"
          onClick={() => setMenuOpen((v) => !v)}
          whileTap={{ scale: 0.9 }}
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={18} weight="bold" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <List size={18} weight="bold" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative isolate mt-2 flex flex-col gap-1 rounded-2xl p-2 sm:!hidden"
            style={glassStyle}
          >
            <div
              className="pointer-events-none absolute inset-0 z-[-1] rounded-2xl"
              style={glassBlur}
            />
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id, i)}
                className="cursor-pointer rounded-full px-5 py-2.5 text-left text-sm font-medium transition-colors"
                style={{
                  color:
                    active === i
                      ? "rgba(255,255,255,0.95)"
                      : "rgba(255,255,255,0.55)",
                  background:
                    active === i ? "rgba(255,255,255,0.1)" : "transparent",
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact", 2)}
              className="mt-1 cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold text-white text-center"
              style={ctaStyle}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
