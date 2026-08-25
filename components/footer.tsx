"use client"

import Container from "@/components/ui/Container"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

/* ---------------------- */
/* CONFIG */
/* ---------------------- */

const FEATURES = [
  { label: "Find Jobs", href: "/feature/find-jobs" },
  { label: "Find Workers", href: "/feature/find-workers" },
  { label: "Manage Attendance", href: "/feature/manage-attendance" },
  { label: "Manage Payroll", href: "/feature/manage-payroll" },
  { label: "Find Tenders", href: "/feature/find-tenders" },
  { label: "Find & Manage Machinery", href: "/feature/find-machinery" },
  { label: "Find & Manage Projects", href: "/feature/project-management" },
]

const RESOURCES = [
  { label: "All Features Overview", href: "/feature" },
  { label: "Help & Support", href: "/contact" },
  { label: "Call Us: 9796495051", href: "tel:9796495051" },
  { label: "Web Portal", href: "https://app.shrammitra.com/accounts/login" },
]

const COMPANY = [
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Data Deletion", href: "/data-deletion" },
]

const SOCIALS = [
  { icon: Facebook, href: "https://www.facebook.com/people/Shram-Mitra/61582165992366/" },
  { icon: Instagram, href: "https://www.instagram.com/shram.mitra" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/shram-mitra" },
  { icon: Youtube, href: "https://www.youtube.com/@SHRAMMITRA" },
]

/* ---------------------- */
/* COMPONENT */
/* ---------------------- */

export function Footer() {
  return (
    <footer id="contact" className="border-t py-16 sm:py-20 bg-background">
      <Container>
        {/* Top */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <img src="/assets/logo.png" alt="Shram Mitra" className="h-16 w-auto" />
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              <span className="font-semibold text-foreground">Shram Mitra</span> – Bharat ka
              trusted digital platform jo company, contractor aur shramik ko
              jodta hai bina kisi pareshani ke.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 pt-2">
              {SOCIALS.map((item, i) => {
                const Icon = item.icon
                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted/60 text-muted-foreground transition hover:bg-yellow-400 hover:text-slate-950"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Features Column (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 font-bold font-raleway text-foreground text-sm uppercase tracking-wider">
              Features
            </h4>

            <ul className="text-muted-foreground space-y-2.5 text-sm">
              {FEATURES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-yellow-600 dark:hover:text-yellow-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="mb-4 font-bold font-raleway text-foreground text-sm uppercase tracking-wider">
                Resources
              </h4>

              <ul className="text-muted-foreground space-y-2.5 text-sm">
                {RESOURCES.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition hover:text-yellow-600 dark:hover:text-yellow-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Play Store Badge */}
            <div className="pt-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.smitra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <img
                  src="/assets/play-store.png"
                  alt="Get it on Google Play"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Company Column (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 font-bold font-raleway text-foreground text-sm uppercase tracking-wider">
              Company
            </h4>

            <ul className="text-muted-foreground space-y-2.5 text-sm">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-yellow-600 dark:hover:text-yellow-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border/60 pt-8 md:flex-row">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Shram Mitra. All rights reserved.
          </p>

          <p className="text-xs text-muted-foreground">
            Made with ❤️ for Bharat's Infrastructure & Workforce
          </p>
        </div>
      </Container>
    </footer>
  )
}
