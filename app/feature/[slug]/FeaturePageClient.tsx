"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { AppCTA } from "@/components/sections/AppCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import CircularGallery from "@/components/CircularGallery";
import { FeatureItem } from "../features-data";
import {
  HardHat,
  Briefcase,
  Building2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  MapPin,
  FileText,
  Users,
  Trophy,
  Zap,
  Target,
  Handshake,
  ClipboardCheck,
  BellRing,
  Clock,
  Shield,
  Layers,
  Wrench,
  Truck,
  CheckCircle2,
  ChevronDown,
  Search,
  Check,
  Sparkles,
  ArrowUpRight,
  Phone,
  Download,
  UserRound,
  Bell,
  BriefcaseBusiness,
  Send,
  FileCheck2,
} from "lucide-react";
import { SocialProof } from "@/components/sections/SocialProof";

// Icon resolver helper
function getIcon(name: string, className?: string) {
  const iconMap: Record<string, any> = {
    HardHat,
    Briefcase,
    Building2,
    ArrowRight,
    ShieldCheck,
    TrendingUp,
    MapPin,
    FileText,
    Users,
    Trophy,
    Zap,
    Target,
    Handshake,
    ClipboardCheck,
    BellRing,
    Clock,
    Shield,
    Layers,
    Wrench,
    Truck,
    CheckCircle2,
    Search,
    Check,
    Sparkles,
    Download,
    UserRound,
    Bell,
    BriefcaseBusiness,
    Send,
    FileCheck2,
  };

  const IconComp = iconMap[name] || CheckCircle2;
  return <IconComp className={className} />;
}

interface FeaturePageClientProps {
  feature: FeatureItem;
  otherFeatures?: FeatureItem[];
}

export function FeaturePageClient({ feature }: FeaturePageClientProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ─────────────────────────────────────────────────────────────
          1. 2-COLUMN HERO (Left: Text & CTAs | Right: Feature Image)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Heading, Description & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              {/* Category Breadcrumb / Tag */}
              {/* <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-yellow-600 dark:text-yellow-400 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                <span>ShramMitra Module</span>
                <span>/</span>
                <span className="text-foreground/70">{feature.title}</span>
              </div> */}

              {/* Headline */}
              <h1 className="font-raleway text-3xl leading-tight font-extrabold sm:text-4xl md:text-5xl lg:text-[3.25rem] text-foreground tracking-tight">
                {feature.heroHeading.map((line, i) => (
                  <span key={i}>
                  {line}
                  {i !== feature.heroHeading.length - 1 ? <br /> : " "}
                </span>
              ))}
              <span className="relative inline-block text-yellow-500">
                {feature.heroHighlight}
                <svg
                  className="absolute -bottom-1 left-0 h-3 w-full sm:h-4"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 15 Q 25 20, 50 10 T 100 15"
                    stroke="#EAB308"
                    strokeWidth="4"
                    fill="transparent"
                    strokeLinecap="round"
                  />
                </svg>
        
                </span>
              </h1>

              {/* Description */}
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
                {feature.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
                {feature.ctaButtons && feature.ctaButtons.length > 0 ? (
                  feature.ctaButtons.map((cta, idx) => (
                    <AnimatedButton
                      key={idx}
                      variant={cta.variant || "default"}
                      className={`px-6 py-3 text-base ${cta.icon ? "flex items-center gap-2" : ""}`}
                      asChild
                    >
                      <a href={cta.url}>
                        {cta.icon === "Phone" && <Phone size={16} />}
                        <span>{cta.label}</span>
                      </a>
                    </AnimatedButton>
                  ))
                ) : (
                  <>
                    <AnimatedButton
                      variant="default"
                      className="px-6 py-3 text-base"
                      asChild
                    >
                      <a href="https://app.shrammitra.com/accounts/login">
                        Get Started Free
                      </a>
                    </AnimatedButton>

                    <AnimatedButton
                      variant="secondary-outline"
                      className="px-6 py-3 text-base"
                      asChild
                    >
                      <a href="https://play.google.com/store/apps/details?id=com.smitra">
                        Download App
                      </a>
                    </AnimatedButton>

                    <AnimatedButton
                      variant="secondary"
                      className="flex items-center gap-2 px-4 py-3 text-base"
                      asChild
                    >
                      <a href="tel:9796495051">
                        <Phone size={16} />
                        <span>9796495051</span>
                      </a>
                    </AnimatedButton>
                  </>
                )}
              </div>
            </motion.div>

            {/* Right Column: Visual Hero Container */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 relative flex justify-center items-center"
            >
              {/* Background Circular Glow */}
              <div className="absolute top-1/2 left-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/25 blur-3xl -z-10 pointer-events-none" />

              {/* Clean Mockup Image Display */}
              <div className="relative w-full max-w-lg xl:max-w-xl flex justify-center items-center">
                <img
                  src={feature.heroImage}
                  alt={feature.title}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className={`w-auto h-auto object-contain drop-shadow-[0_25px_50px_rgba(245,158,11,0.35)] ${
                    !feature.isMobile
                      ? "max-h-[520px] sm:max-h-[580px] w-full scale-105 sm:scale-115"
                      : "max-h-[480px] sm:max-h-[520px]"
                  }`}
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <SocialProof/>

      {/* ─────────────────────────────────────────────────────────────
          2. DETAILED WRITTEN MATERIAL & FEATURE BLOCKS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-muted/20 border-t border-border/40">
        <Container>
          <div className="space-y-16 md:space-y-24">
            {feature.featureBlocks.map((block, i) => {
              const isEven = i % 2 === 0;

              return (
                <div
                  key={block.title}
                  className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20"
                >
                  {/* Visual Side */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={!isEven ? "md:order-last" : ""}
                  >
                    <div className="relative mx-auto max-w-xl flex justify-center">
                      <div className="absolute bottom-0 left-0 h-[75%] w-full rounded-3xl border border-primary/20 bg-primary" />
                      <div className="relative flex w-full justify-center p-2">
                        <img
                          src={block.image}
                          alt={block.title}
                          loading="lazy"
                          decoding="async"
                          className={`relative z-20 h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.22)] ${
                            !block.isMobile
                              ? "max-h-[550px] md:max-h-[520px] w-[115%] sm:w-[125%] scale-105 sm:scale-110"
                              : "max-h-[480px] w-auto max-w-[95%]"
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Side */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="py-4"
                  >
                    <h3 className="font-raleway mb-5 text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold text-foreground">
                      {block.title}
                    </h3>

                    <p className="text-muted-foreground mb-8 text-base sm:text-lg leading-relaxed">
                      {block.description}
                    </p>

                    <ul className="grid gap-4">
                      {block.bullets.map((bullet, idx) => (
                        <li key={idx} className="group flex items-center gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/5 text-secondary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground dark:bg-white/10 dark:text-white">
                            {getIcon(bullet.icon, "h-5 w-5")}
                          </div>
                          <span className="text-base font-semibold text-foreground/90">
                            {bullet.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. HOW IT WORKS (3-Step Seamless Process)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-raleway text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {feature.howItWorksTitle || "How to Start Using Shram Mitra"}
            </h2>
            {feature.howItWorksDescription !== "" && (
              <p className="text-white/70 mt-3 text-base">
                {feature.howItWorksDescription ||
                  "Get started in minutes with zero paperwork and instant digital onboarding."}
              </p>
            )}
          </div>

          <div className="grid gap-8 md:grid-cols-3 relative">
            {feature.howItWorks.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-mono text-yellow-400">
                    {step.step}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-yellow-400" />
                </div>

                <h3 className="font-raleway text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. FAQS ACCORDION SECTION (Reusable FAQSection)
          ───────────────────────────────────────────────────────────── */}
      <FAQSection
        id="faqs"
        items={feature.faqs}
        title="Frequently Asked Questions"
        description={
          <>
            Everything you need to know about utilizing ShramMitra for{" "}
            {feature.title.toLowerCase()}. Have a custom site requirement? Our
            team is available 24/7 to assist.
          </>
        }
        secondaryText=""
        cta={
          <div className="flex flex-wrap gap-4 pt-2">
            <AnimatedButton variant="secondary-outline" asChild>
              <Link href="/contact">
                Contact Support
              </Link>
            </AnimatedButton>
          </div>
        }
      />

      {/* ─────────────────────────────────────────────────────────────
          5. EXPLORE OTHER MODULES (Circular Gallery)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-muted/20 border-t border-border/40 overflow-hidden">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
            <div>

              <h2 className="font-raleway text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
                Explore Other Shram Mitra Features
              </h2>
            </div>
            <Link
              href="/feature"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-secondary dark:text-yellow-400 hover:underline"
            >
              <span>View All Features</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>

        <div className="relative w-full max-w-360 mx-auto my-4 overflow-hidden">
          <CircularGallery />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. BOTTOM APP CTA
          ───────────────────────────────────────────────────────────── */}
      <AppCTA />
    </div>
  );
}
