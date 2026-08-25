"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { AppCTA } from "@/components/sections/AppCTA";
import { ArrowUpRight } from "lucide-react";

interface BentoFeatureCardProps {
  slug: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  className?: string;
  colSpan?: string;
  heightClass?: string;
}

function BentoFeatureCard({
  slug,
  title,
  description,
  tag,
  image,
  colSpan = "md:col-span-4",
  heightClass = "min-h-[380px] sm:min-h-[400px]",
}: BentoFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={colSpan}
    >
      <Link
        href={`/feature/${slug}`}
        aria-label={`Explore ${title.replace(/\n/g, " ")}`}
        className={`group relative flex flex-col justify-between w-full h-full ${heightClass} rounded-3xl overflow-hidden select-none border-2 border-border/40 shadow-sm hover:shadow-2xl hover:border-yellow-400 transition-all duration-500`}
        style={{
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        }}
      >
        {/* FULL-WIDTH BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* SMOOTH MINIMAL GRADIENT */}
        <div
          className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(16,40,75,0.1) 0%, rgba(16,40,75,0.2) 40%, rgba(16,40,75,0.88) 100%)",
          }}
        />

        {/* HOVER HIGHLIGHT */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(16,40,75,0.05) 0%, rgba(16,40,75,0.25) 40%, rgba(16,40,75,0.92) 100%)",
          }}
        />

        {/* TOP ACCENT BAR */}
        <div
          className="absolute top-0 inset-x-0 h-[3px] z-20 transition-all duration-500 group-hover:h-1 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 10%, #EAB308 50%, transparent 90%)",
          }}
        />

        {/* TOP BAR */}
        <div className="relative z-10 flex items-center justify-between p-6 sm:p-7">
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/15">
            {tag}
          </span>

          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-yellow-400 text-[#10284B] flex items-center justify-center shadow-lg group-hover:bg-yellow-300 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="relative z-10 p-6 sm:p-7 pt-12 space-y-2 transition-transform duration-500 ease-out group-hover:-translate-y-1">
          <h2 className="font-raleway text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] whitespace-pre-line">
            {title}
          </h2>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-2 pt-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export function AllFeaturesClient() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ================================================================
          1. HERO HEADER
          ================================================================ */}
      <section className="relative overflow-hidden pt-8 pb-10 sm:pt-14 sm:pb-14">
        <Container>
          <div className="mx-auto text-center max-w-3xl">
            <h1 className="font-raleway text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
              Everything You Need to Build & Manage Workforce
            </h1>

            <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base sm:text-lg leading-relaxed">
              Explore Bharat&apos;s all-in-one construction platform — labor
              hiring, attendance, automated payroll, heavy machinery, tenders,
              and projects.
            </p>
          </div>
        </Container>
      </section>

      {/* ================================================================
          2. FULL-WIDTH IMAGE BENTO GRID
          ================================================================ */}
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* ============================================================
                CARD 1 — FIND JOBS
                ============================================================ */}
            <BentoFeatureCard
              slug="find-jobs"
              title={"Find Jobs"}
              description="Apne skill ke hisaab se kaam dhundhein. Worker App download karein, job notifications paayein aur suitable jobs ke liye directly apply karein."
              tag="For Workers"
              image="/hero/findjobs.png"
              colSpan="md:col-span-7"
              heightClass="min-h-[400px] sm:min-h-[440px]"
            />

            {/* ============================================================
                CARD 2 — FIND WORKERS
                ============================================================ */}
            <BentoFeatureCard
              slug="find-workers"
              title={"Hire Verified\nWorkers"}
              description="Apne projects ke liye skilled aur unskilled workers find karein, profiles aur verification videos check karke directly connect karein."
              tag="Skilled Workforce"
              image="/hero/findworkers.png"
              colSpan="md:col-span-5"
              heightClass="min-h-[400px] sm:min-h-[440px]"
            />

            {/* ============================================================
                CARD 3 — MANAGE ATTENDANCE
                ============================================================ */}
            <BentoFeatureCard
              slug="manage-attendance"
              title={"Manage\nAttendance"}
              description="Mobile app se GPS-based attendance mark karein aur workforce attendance records ko easily manage karein."
              tag="Smart Site Operations"
              image="/hero/attendance.png"
              colSpan="md:col-span-6"
              heightClass="min-h-[380px] sm:min-h-[400px]"
            />

            {/* ============================================================
                CARD 4 — MANAGE PAYROLL
                ============================================================ */}
            <BentoFeatureCard
              slug="manage-payroll"
              title={"Manage\nPayroll"}
              description="Attendance se direct payroll calculate karein, PF aur ESIC manage karein, custom deductions add karein aur PDF payslips generate karein."
              tag="Attendance-Integrated Payroll"
              image="/hero/payroll.png"
              colSpan="md:col-span-6"
              heightClass="min-h-[380px] sm:min-h-[400px]"
            />

            {/* ============================================================
                CARD 5 — FIND TENDERS
                ============================================================ */}
            <BentoFeatureCard
              slug="find-tenders"
              title={"Find\nTenders"}
              description="India bhar ke government tenders ek hi jagah par discover karein, critical dates dekhein aur naye tenders ke regular alerts paayein."
              tag="Government Tenders"
              image="/hero/tender.png"
              colSpan="md:col-span-4"
              heightClass="min-h-[390px] sm:min-h-[420px]"
            />

            {/* ============================================================
                CARD 6 — FIND MACHINERY
                ============================================================ */}
            <BentoFeatureCard
              slug="find-machinery"
              title={"Find & Manage\nMachinery"}
              description="Construction machinery listings browse karein, machine owners se directly contact karein ya apni individual machines list karein."
              tag="Machinery & Equipment"
              image="/hero/machine.png"
              colSpan="md:col-span-4"
              heightClass="min-h-[390px] sm:min-h-[420px]"
            />

            {/* ============================================================
                CARD 7 — FIND & MANAGE PROJECTS
                ============================================================ */}
            <BentoFeatureCard
              slug="project-management"
              title={"Find & Manage\nProjects"}
              description="Apne construction projects post karein, required contractors aur machinery find karein ya naye projects discover karke directly connect karein."
              tag="Projects & Network"
              image="/hero/project.png"
              colSpan="md:col-span-4"
              heightClass="min-h-[390px] sm:min-h-[420px]"
            />

    

          </div>
        </Container>
      </section>

      {/* ================================================================
          3. BOTTOM APP CTA
          ================================================================ */}
      <AppCTA />
    </div>
  );
}