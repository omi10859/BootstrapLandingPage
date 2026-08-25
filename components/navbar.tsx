"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import {
  Menu,
  Phone,
  HardHat,
  Users,
  Building2,
  Clock,
  FileText,
  Trophy,
  Truck,
  Layers,
  ArrowRight,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"

import Container from "@/components/ui/Container"
import { AnimatedButton } from "@/components/ui/AnimatedButton"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { cn } from "@/lib/utils"

/* ----------------------------- */
/* NAVBAR CONFIG */
/* ----------------------------- */

const NAVBAR_CONFIG = {
  logo: {
    src: "/assets/logo.png",
    alt: "Shram Mitra",
    url: "/",
  },

  actions: {
    login: {
      title: "Login",
      url: "https://app.shrammitra.com/accounts/login",
    },
    register: {
      title: "Register",
      url: "https://app.shrammitra.com/onboard/user",
    },
    call: {
      title: "Call us - 9796495051",
      url: "tel:9796495051",
    },
  },
}

const FEATURE_MENU_ITEMS = [
  {
    title: "Find Jobs",
    href: "/feature/find-jobs",
    icon: HardHat,
  },
  {
    title: "Find Workers",
    href: "/feature/find-workers",
    icon: Users,
  },
  {
    title: "Manage Attendance",
    href: "/feature/manage-attendance",
    icon: Clock,
  },
  {
    title: "Manage Payroll",
    href: "/feature/manage-payroll",
    icon: FileText,
  },
  {
    title: "Find Tenders",
    href: "/feature/find-tenders",
    icon: Trophy,
  },
  {
    title: "Find & Manage Machinery",
    href: "/feature/find-machinery",
    icon: Truck,
  },
  {
    title: "Find & Manage Projects",
    href: "/feature/project-management",
    icon: Layers,
  },
]

/* ----------------------------- */
/* NAVBAR */
/* ----------------------------- */

export function Navbar({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b bg-background/90 backdrop-blur-lg shadow-xs"
          : "bg-transparent pt-2",
        className
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href={NAVBAR_CONFIG.logo.url} className="flex items-center">
              <img
                src={NAVBAR_CONFIG.logo.src}
                alt={NAVBAR_CONFIG.logo.alt}
                className="h-14 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation with Shadcn Dropdown */}
          <nav className="hidden items-center lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-8">
                {/* Home */}
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className="text-muted-foreground text-sm font-medium transition hover:text-foreground"
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                  <Link
                    href="/#about"
                    className="text-muted-foreground text-sm font-medium transition hover:text-foreground"
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                {/* Features (Dropdown) */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-muted-foreground hover:text-foreground p-0 text-sm font-medium h-auto gap-1 cursor-pointer">
                    <span>Features</span>
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="bg-background md:w-[500px] lg:w-[540px]">
                    <div className="grid grid-cols-2 gap-1.5 p-1">
                      {FEATURE_MENU_ITEMS.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-muted/70 transition-all duration-150 group/item"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground group-hover/item:bg-yellow-400 group-hover/item:text-slate-950 transition-colors duration-150">
                              <Icon className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-semibold font-raleway text-foreground group-hover/item:text-yellow-600 dark:group-hover/item:text-yellow-400 transition-colors">
                              {item.title}
                            </span>
                          </Link>
                        )
                      })}
                    </div>

                    {/* Bottom Bar in Dropdown */}
                    <div className="mt-2 pt-2.5 border-t border-border/40 flex items-center justify-between px-3 py-1">
                      <Link
                        href="/feature"
                        className="text-xs font-bold text-yellow-600 dark:text-yellow-400 hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>Explore All Features</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <Link
                    href="/contact"
                    className="text-muted-foreground text-sm font-medium transition hover:text-foreground"
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <AnimatedButton variant="secondary-outline" asChild>
              <Link href={NAVBAR_CONFIG.actions.login.url}>
                {NAVBAR_CONFIG.actions.login.title}
              </Link>
            </AnimatedButton>

            <AnimatedButton variant="default" asChild>
              <Link href={NAVBAR_CONFIG.actions.register.url}>
                {NAVBAR_CONFIG.actions.register.title}
              </Link>
            </AnimatedButton>

            <AnimatedButton
              variant="secondary"
              className="flex items-center gap-2"
              asChild
            >
              <Link href={NAVBAR_CONFIG.actions.call.url}>
                <Phone size={16} />
                {NAVBAR_CONFIG.actions.call.title}
              </Link>
            </AnimatedButton>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <AnimatedButton variant="outline" className="px-3 py-2">
                  <Menu size={20} />
                </AnimatedButton>
              </SheetTrigger>

              <SheetContent className="p-6 overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <img
                      src={NAVBAR_CONFIG.logo.src}
                      alt={NAVBAR_CONFIG.logo.alt}
                      className="h-12"
                    />
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Links */}
                <div className="mt-8 flex flex-col gap-5 px-2">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="text-muted-foreground text-lg font-medium hover:underline"
                  >
                    Home
                  </Link>

                  <Link
                    href="/#about"
                    onClick={() => setOpen(false)}
                    className="text-muted-foreground text-lg font-medium hover:underline"
                  >
                    About
                  </Link>

                  {/* Mobile Features Collapsible */}
                  <div>
                    <button
                      onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                      className="flex items-center justify-between w-full text-muted-foreground text-lg font-medium hover:underline cursor-pointer"
                    >
                      <span>Features</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-200",
                          mobileFeaturesOpen && "rotate-180 text-yellow-500"
                        )}
                      />
                    </button>

                    {mobileFeaturesOpen && (
                      <div className="mt-3 pl-3 space-y-2.5 border-l-2 border-yellow-400/50 py-1">
                        <Link
                          href="/feature"
                          onClick={() => setOpen(false)}
                          className="block text-sm font-bold text-yellow-600 dark:text-yellow-400"
                        >
                          All Modules Overview →
                        </Link>
                        {FEATURE_MENU_ITEMS.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block text-sm text-muted-foreground hover:text-foreground"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="text-muted-foreground text-lg font-medium hover:underline"
                  >
                    Contact
                  </Link>

                  {/* Actions */}
                  <div className="flex flex-col gap-3 pt-6 border-t border-border/40">
                    <AnimatedButton variant="secondary-outline" asChild>
                      <Link
                        href={NAVBAR_CONFIG.actions.login.url}
                        onClick={() => setOpen(false)}
                      >
                        {NAVBAR_CONFIG.actions.login.title}
                      </Link>
                    </AnimatedButton>

                    <AnimatedButton variant="default" asChild>
                      <Link
                        href={NAVBAR_CONFIG.actions.register.url}
                        onClick={() => setOpen(false)}
                      >
                        {NAVBAR_CONFIG.actions.register.title}
                      </Link>
                    </AnimatedButton>

                    <AnimatedButton variant="secondary" asChild>
                      <Link
                        href={NAVBAR_CONFIG.actions.call.url}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2"
                      >
                        <Phone size={16} />
                        {NAVBAR_CONFIG.actions.call.title}
                      </Link>
                    </AnimatedButton>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  )
}
