"use client"

import { motion } from "motion/react"
import Container from "@/components/ui/Container"
import { AnimatedButton } from "@/components/ui/AnimatedButton"
import { Search, Pencil } from "lucide-react"
import { FloatingElements } from "../ui/FloatingElements"
import CircularGallery from "@/components/CircularGallery"
// import PixelBlast from "@/components/PixelBlast"

/* -------------------------------- */
/* CONFIG */
/* -------------------------------- */

const HERO = {
  headingMobile: ["Rozgaar aur reliable", "workforce dhundhna", "hua ab"],
  headingDesktop: ["Rozgaar aur reliable workforce", "dhundhna hua ab"],

  highlight: "Aasaan.",

  description:
    "Shram Mitra — Bharat ka trusted digital platform jo company, contractor aur shramik ko jodta hai bina kisi pareshani ke.",

  buttons: [
    {
      title: "Hire Workers",
      icon: Search,
      url: "https://app.shrammitra.com/accounts/login",
      variant: "default",
    },
    {
      title: "Post Project",
      icon: Pencil,
      url: "https://app.shrammitra.com/accounts/login",
      variant: "secondary-outline",
    },
  ],

  phoneImage: "/assets/app-landing.png",

  /* floating assets you will add later */
  floatingAssets: [
    "/assets/floating1.png",
    "/assets/floating2.png",
    "/assets/floating3.png",
    "/assets/floating4.png",
  ],
}

/* -------------------------------- */
/* HERO */
/* -------------------------------- */

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 sm:pt-14">
      {/* Decorative Background */}
      {/* <div className="absolute inset-0 -z-20 h-full w-full">
        <PixelBlast
          variant="cirlce"
          pixelSize={4}16
          color="#eab308"
          patternScale={4}
          patternDensity={2}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.85}
          // transparent={false}
          className={undefined}
          style={undefined}
        />
      </div> */}

      <Container>
        {/* Heading */}
        <div className="mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-raleway text-3xl leading-tight font-bold sm:text-4xl md:text-5xl md:font-extrabold lg:text-7xl"
          >
            {/* Mobile Heading: Hidden on medium screens and up */}
            <span className="md:hidden">
              {HERO.headingMobile.map((line, i) => (
                <span key={i}>
                  {line}
                  {i !== HERO.headingMobile.length - 1 ? <br /> : " "}
                </span>
              ))}
              <span className="relative inline-block text-yellow-500">
                {HERO.highlight}
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
            </span>

            {/* Desktop Heading: Hidden on mobile, block on medium screens and up */}
            <span className="hidden md:block">
              {HERO.headingDesktop.map((line, i) => (
                <span key={i}>
                  {line}
                  {i !== HERO.headingDesktop.length - 1 ? <br /> : " "}
                </span>
              ))}
              <span className="relative inline-block text-yellow-500">
                {HERO.highlight}
                <svg
                  className="absolute -bottom-3 left-0 h-4 w-full lg:h-6"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 15 Q 25 20, 50 10 T 100 15"
                    stroke="#EAB308"
                    strokeWidth="6"
                    fill="transparent"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg"
          >
            {HERO.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-8 flex flex-row flex-wrap items-center justify-center gap-2 sm:flex-row sm:justify-center sm:gap-4"
          >
            {HERO.buttons.map((btn) => {
              const Icon = btn.icon

              return (
                <AnimatedButton
                  key={btn.title}
                  variant={btn.variant as any}
                  className="flex items-center gap-2 px-6 py-3 text-base"
                  asChild
                >
                  <a href={btn.url}>
                    {/* <Icon size={18} /> */}
                    {btn.title}
                  </a>
                </AnimatedButton>
              )
            })}
          </motion.div>
        </div>
    </Container>

        <div className="relative w-full max-w-360 mx-auto my-6 overflow-hidden">
          <CircularGallery />
        </div>
        
   <Container>
        {/* Phone Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative mt-20 flex justify-center"
        >
          <div className="absolute inset-0 -z-10 -mx-4 overflow-hidden">
            {/* circular green background */}
            <div className="absolute top-[40%] left-1/2 size-dvw -translate-x-1/2 rounded-full bg-yellow-400" />
          </div>

          <img
            src={HERO.phoneImage}
            alt="Shram Mitra App"
            className="relative z-10 max-w-[320px] md:max-w-[420px]"
          />

          {/* Floating Elements (Desktop Only) */}
          <div className="absolute inset-0 z-20 hidden lg:block">
            <FloatingElements />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
