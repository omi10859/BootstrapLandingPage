"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Container from "@/components/ui/Container"
import { ChevronDown } from "lucide-react"

export interface FAQItem {
  title: string
  content: string
}

export interface FAQSectionProps {
  id?: string
  items?: FAQItem[]
  title?: React.ReactNode
  description?: React.ReactNode
  secondaryText?: React.ReactNode
  cta?: React.ReactNode
  defaultActiveIndex?: number | null
  className?: string
}

const DEFAULT_ITEMS: FAQItem[] = [
  {
    title: "How does Shram Mitra help my business?",
    content:
      "We solve the labour shortage problem by providing a verified database of workers. Instead of searching at labour chowks, you can find the right manpower for your infrastructure projects with just a few clicks.",
  },
  {
    title: "Can contractors find projects and apply for them on Shram Mitra?",
    content:
      "Yes! Shram Mitra is not just a worker platform — contractors can also browse active infrastructure projects posted by companies and apply directly through the platform. This opens up a steady pipeline of work opportunities without relying on personal contacts or middlemen.",
  },
  {
    title:
      "Can companies post their project and job requirements on Shram Mitra?",
    content:
      "Absolutely. Companies can post their project details, manpower requirements, and job openings directly on Shram Mitra. Your requirements will be visible to our verified network of contractors and workers, ensuring you receive relevant applications quickly and efficiently.",
  },
]

export function FAQSection({
  id = "about",
  items = DEFAULT_ITEMS,
  title,
  description,
  secondaryText,
  cta,
  defaultActiveIndex = 2,
  className = "",
}: FAQSectionProps) {
  const [active, setActive] = useState<number | null>(defaultActiveIndex)

  const defaultTitle = (
    <>
      Suitable platform for
      <br />
      all workforce stakeholders
    </>
  )

  const defaultDescription = (
    <>
      ShramMitra helps workers, contractors and companies collaborate
      efficiently. From job discovery to compliance management,
      everything is handled in one secure platform.
    </>
  )

  const defaultSecondaryText = (
    <>
      Built specifically for the labor ecosystem, it simplifies
      workforce coordination and ensures transparent project execution.
    </>
  )

  return (
    <section id={id} className={`py-14 md:py-28 ${className}`}>
      <Container>
        <div className="grid items-top gap-16 md:grid-cols-2">
          {/* Accordion */}
          <div className="space-y-4">
            {items.map((item, i) => {
              const isActive = active === i

              return (
                <div
                  key={item.title || i}
                  onClick={() => setActive(isActive ? null : i)}
                  className={`cursor-pointer rounded-xl border p-6 transition ${
                    isActive
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{item.title}</h3>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 pb-2 text-sm opacity-80">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 font-heading text-4xl font-bold md:text-5xl">
              {title || defaultTitle}
            </h2>

            <p className="text-muted-foreground mb-6">
              {description || defaultDescription}
            </p>

            {secondaryText !== undefined ? (
              secondaryText && (
                <p className="text-muted-foreground mb-8">{secondaryText}</p>
              )
            ) : (
              <p className="text-muted-foreground mb-8">
                {defaultSecondaryText}
              </p>
            )}

            {cta}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
