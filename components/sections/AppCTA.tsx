"use client"

import { motion } from "motion/react"
import Container from "@/components/ui/Container"
import { CornerRightDown } from "lucide-react"
import Link from "next/link"

export function AppCTA() {
  return (
    <section className="relative overflow-hidden bg-black pt-24 text-white">
      {/* Background Texture - X Repeat */}
      <div 
        className="absolute inset-0 z-10 bg-bottom bg-repeat-x opacity-100"
        style={{ backgroundImage: "url('/assets/bg_splash.png')" }}
      />
      
      <Container className="relative z-10 !max-w-5xl">
        <div className="grid items-end gap-16 md:grid-cols-2">
          {/* Text and Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sm:pb-24"
          >
            <h2 className="mb-6 font-raleway text-4xl font-bold md:text-5xl">
              Start managing your workforce now!
            </h2>

            <p className="mb-4 opacity-90 text-lg">
              Connect workers, contractors and companies on one platform. Manage
              projects, compliance and hiring with complete transparency.
            </p>

            

            <div className="flex flex-wrap gap-4">
              <Link href={"https://play.google.com/store/apps/details?id=com.smitra"}>
              <img src="/assets/play-store.png" alt="Get it on Google Play" className="h-14 cursor-pointer transition-transform hover:scale-105" />
              </Link>
            </div>
          </motion.div>

          {/* Phone Image sticking to bottom */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center md:items-start md:justify-start"
          >
            <img
              src="/assets/app-landing.png"
              alt="Shram Mitra App"
              className="w-full max-w-md drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] object-contain"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
