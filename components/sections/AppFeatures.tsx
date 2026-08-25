"use client"

import { motion } from "framer-motion"
import Container from "@/components/ui/Container"
import { AnimatedButton } from "@/components/ui/AnimatedButton"
import { cn } from "@/lib/utils"

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
} from "lucide-react"
import Link from "next/link"
import { CountUp } from "../CountUp"

/* ---------------------- */
/* DATA WITH SPECIFIC ICONS */
/* ---------------------- */

const AUDIENCE = [
  {
    icon: HardHat,
    title: "For Workers",
    points: [
      { text: "Find verified jobs near you with better pay", icon: MapPin },
      { text: "Get enrolled in ₹2,00,000 insurance plan", icon: ShieldCheck },
      {
        text: "Improve ratings to grow future opportunities",
        icon: TrendingUp,
      },
    ],
    cta: "Join as a Worker",
    ctaLink: "https://play.google.com/store/apps/details?id=com.smitra",
  },
  {
    icon: Briefcase,
    title: "For Contractors",
    points: [
      {
        text: "Get verified projects with transparent billing",
        icon: FileText,
      },
      { text: "Manage team & documentation digitally", icon: Users },
      { text: "Build reputation and unlock premium tenders", icon: Trophy },
    ],
    cta: "Join as a Contractor",
    ctaLink: "https://app.shrammitra.com/onboard/user",
  },
  {
    icon: Building2,
    title: "For Companies",
    points: [
      {
        text: "Access verified labour and trusted contractors",
        icon: Handshake,
      },
      { text: "Post jobs & manage compliance easily", icon: ClipboardCheck },
      { text: "Reduce risk and improve timelines", icon: Target },
    ],
    cta: "Join as a Company",
    ctaLink: "https://app.shrammitra.com/onboard/user",
  },
]

const FEATURES = [
  {
    title: "Streamlined Labor Registration & Licensing",
    stat: { value: 50, label: "Companies" },
    description:
      "Stop drowning in paperwork. ShramMitra digitizes the entire labor registration and compliance workflow.",
    bullets: [
      { text: "Fast-track licensening Support", icon: Zap },
      { text: "Digital worker onboarding", icon: Users },
      { text: "Automated compliance notifications", icon: BellRing },
    ],
    image: "/features/feature1.png",
  },
  {
    stat: { value: 450, label: "Contractors" },
    title: "Direct Bridge Between Industry & Skill",
    description:
      "We connect verified workers, contractors and companies through a trusted digital platform built for the labor ecosystem.",
    bullets: [
      { text: "Verified worker profiles", icon: ShieldCheck },
      { text: "Skill based job matching", icon: Target },
      { text: "Transparent project hiring", icon: Handshake },
    ],
    image: "/features/feature2.png",
  },
  {
    title: "Digital Workforce Management",
    stat: { value: 2000, label: "Workers" },
    description:
      "Manage workforce records, insurance coverage, and project documentation from a single digital dashboard.",
    bullets: [
      { text: "Worker documentation tracking", icon: FileText },
      { text: "Insurance & compliance monitoring", icon: Shield },
      { text: "Attendance management", icon: Layers },
    ],
    image: "/features/feature3.png",
  },
]

/* ---------------------- */
/* COMPONENT */
/* ---------------------- */

export function AppFeatures() {
  return (
    <section id="features" className="bg-background py-24 lg:py-32">
      <Container>
        {/* ============================= */}
        {/* AUDIENCE CARDS */}
        {/* ============================= */}
        <div className="mb-32 grid gap-8 md:grid-cols-3">
          {AUDIENCE.map((card, i) => {
            const MainIcon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card group relative flex flex-col rounded-3xl border-2 border-border/40 p-8 shadow-sm transition-all"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <MainIcon className="h-8 w-8" />
                </div>

                <h3 className="font-raleway mb-6 text-2xl font-bold tracking-tight text-foreground">
                  {card.title}
                </h3>

                <ul className="mb-10 flex-grow space-y-5">
                  {card.points.map((point, idx) => {
                    const PointIcon = point.icon
                    return (
                      <li
                        key={idx}
                        className="text-muted-foreground flex items-start gap-3 text-sm font-medium"
                      >
                        <PointIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{point.text}</span>
                      </li>
                    )
                  })}
                </ul>

                <AnimatedButton variant="secondary-outline" asChild>
                  <Link className="w-full gap-2" href={card.ctaLink}>
                    {card.cta}
                    <ArrowRight size={16} />
                  </Link>
                </AnimatedButton>
              </motion.div>
            )
          })}
        </div>

        {/* ============================= */}
        {/* FEATURE BLOCKS */}
        {/* ============================= */}
        <div className="space-y-10 md:space-y-28">
          {FEATURES.map((feature, i) => {
            const isEven = i % 2 === 0
            return (
              <div
                key={feature.title}
                className="grid items-center gap-4 md:grid-cols-2 md:gap-12 lg:gap-24"
              >
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={cn(
                    "relative z-20 w-full",
                    !isEven && "md:order-last"
                  )}
                >
                  <div className="relative mx-auto max-w-lg md:pt-12">
                    {/* The Background Container (Bottom 60% height) */}
                    <div className="absolute bottom-0 left-0 h-[60%] w-full rounded-3xl border border-primary/20 bg-primary" />

                    {/* Bottom Gradient Fade inside the container */}
                    {/* <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-[30%] w-full rounded-b-3xl bg-gradient-to-t from-secondary to-transparent" /> */}

                    {/* Image sticking out of the container */}
                    <div className="relative flex w-full justify-center">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="relative  z-20 h-auto max-h-[600px] w-[120%] object-contain md:max-h-[550px]"
                      />
                    </div>

                    {/* Background Glow */}
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-[60%] rounded-full bg-primary/40 blur-[80px]" />
                  </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="py-8"
                >
                  <h2 className="font-raleway mb-6 text-3xl leading-tight font-extrabold text-foreground md:text-4xl lg:text-4xl">
                    <span className="mr-4 inline">{feature.title}</span>

                    <span className="font-raleway relative inline-flex items-center gap-1 text-xl font-bold whitespace-nowrap text-secondary/50 md:text-2xl">
                      <CountUp end={feature.stat.value} />+
                      <span>{feature.stat.label}</span>
                      <svg
                        className="absolute -bottom-2 left-0 h-1.5 w-full"
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
                  </h2>

                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="grid gap-6">
                    {feature.bullets.map((bullet, idx) => {
                      const BulletIcon = bullet.icon
                      return (
                        <li key={idx} className="group flex items-center gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/5 text-secondary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                            <BulletIcon size={22} />
                          </div>
                          <span className="text-base font-semibold text-foreground/90">
                            {bullet.text}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </motion.div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
