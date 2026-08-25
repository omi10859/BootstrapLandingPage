"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState, useCallback } from "react";

/* ─────────────────────────────────────────────
   CONFIGURABLE FEATURE CARD DATA
   Each card: title, subtitle, description, image (bg), link
   ───────────────────────────────────────────── */
const DEFAULT_ITEMS = [
  {
    title: "Find & Manage\nJobs",
    subtitle: "Discover · Apply · Work",
    description:
      "Discover relevant construction and infrastructure job opportunities based on your skills, experience, and location.",
    image: "/hero/findjobs.png",
    link: "/feature/find-jobs",
    accent: "#EAB308",
  },

  {
    title: "Find\nWorkers",
    subtitle: "Search · Verify · Connect",
    description:
      "Find skilled and verified workers for your projects based on trade, experience, verification, and requirements.",
    image: "/hero/findworkers.png",
    link: "/feature/find-workers",
    accent: "#EAB308",
  },

  {
    title: "Manage\nAttendance",
    subtitle: "Clock-in · Track · Verify",
    description:
      "Record and manage worker attendance with reliable check-ins, shift tracking, and accurate attendance records.",
    image: "/hero/attendance.png",
    link: "/feature/manage-attendance",
    accent: "#EAB308",
  },

  {
    title: "Manage\nPayroll",
    subtitle: "Calculate · Pay · Report",
    description:
      "Simplify workforce payroll with automated wage calculations, overtime tracking, payslips, and payment management.",
    image: "/hero/payroll.png",
    link: "/feature/manage-payroll",
    accent: "#EAB308",
  },

  {
    title: "Find\nTenders",
    subtitle: "Discover · Bid · Win",
    description:
      "Discover government and private tenders, explore opportunities, and manage tender information for your business.",
    image: "/hero/tender.png",
    link: "/feature/find-tenders",
    accent: "#EAB308",
  },

  {
    title: "Find & Manage\nMachinery",
    subtitle: "Browse · Hire · Deploy",
    description:
      "Find construction machinery and heavy equipment such as JCBs, excavators, cranes, and other site equipment.",
    image: "/hero/machine.png",
    link: "/feature/find-machinery",
    accent: "#EAB308",
  },

  {
    title: "Find & Manage\nProjects",
    subtitle: "Post · Discover · Network",
    description:
      "Manage construction projects with better visibility into sites, workforce, progress, tasks, and project operations.",
    image: "/hero/project.png",
    link: "/feature/project-management",
    accent: "#EAB308",
  },
];

/* ─────────────────────────────────────────────
   GALLERY CARD COMPONENT
   Full card is clickable while preserving drag/swipe
   ───────────────────────────────────────────── */
function GalleryCard({ item, scrollRef }) {
  const handleClick = (e) => {
    // If user was dragging/swiping, suppress the click navigation
    if (scrollRef?.current?.isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <Link
      href={item.link || "#"}
      draggable={false}
      onClick={handleClick}
      aria-label={`Explore ${item.title.replace(/\n/g, " ")}`}
      className="
        group/card
        relative
        block
        w-full
        h-full
        rounded-3xl
        overflow-hidden
        select-none
        transition-all
        duration-500
        cursor-pointer
      "
      style={{
        border: "2px solid rgba(16, 40, 75, 0.15)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      }}
    >
      {/* ─────────────────────────────────────
          BACKGROUND IMAGE
      ───────────────────────────────────── */}
      <div
        className="
          absolute
          inset-0
          bg-center
          bg-cover
          transition-transform
          duration-700
          ease-out
          group-hover/card:scale-105
          pointer-events-none
        "
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      />

      {/* ─────────────────────────────────────
          DEFAULT GRADIENT
      ───────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(16,40,75,0.02) 0%, rgba(16,40,75,0.04) 40%, rgba(16,40,75,0.82) 100%)",
        }}
      />

      {/* ─────────────────────────────────────
          HOVER GRADIENT
      ───────────────────────────────────── */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover/card:opacity-100
          transition-opacity
          duration-500
          pointer-events-none
        "
        style={{
          background:
            "linear-gradient(to bottom, rgba(16,40,75,0.12) 0%, rgba(16,40,75,0.20) 40%, rgba(16,40,75,0.90) 100%)",
        }}
      />

      {/* ─────────────────────────────────────
          TOP YELLOW ACCENT
      ───────────────────────────────────── */}
      <div
        className="
          absolute
          top-0
          inset-x-0
          h-[3px]
          z-20
          transition-all
          duration-500
          group-hover/card:h-1
          pointer-events-none
        "
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, #EAB308 50%, transparent 90%)",
        }}
      />

      {/* ─────────────────────────────────────
          VISIT / ARROW BADGE (Visual Indicator)
      ───────────────────────────────────── */}
      <div
        className="
          absolute
          top-5
          right-5
          sm:top-6
          sm:right-6
          z-30

          w-10
          h-10
          sm:w-11
          sm:h-11

          flex
          items-center
          justify-center

          rounded-full

          bg-yellow-400
          text-[#10284B]

          shadow-lg

          opacity-0
          scale-90

          group-hover/card:opacity-100
          group-hover/card:scale-100

          max-md:opacity-100
          max-md:scale-100

          transition-all
          duration-400
          ease-out

          pointer-events-none

          group-hover/card:bg-yellow-300
          group-hover/card:scale-110
          group-hover/card:shadow-xl
        "
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="
            transition-transform
            duration-300
            group-hover/card:translate-x-0.5
            group-hover/card:-translate-y-0.5
          "
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>

      {/* ─────────────────────────────────────
          TITLE
      ───────────────────────────────────── */}
      <div
        className="
          absolute
          left-5
          right-5
          bottom-5

          sm:left-6
          sm:right-6
          sm:bottom-6

          z-10
          pointer-events-none

          transition-transform
          duration-500
          ease-out

          group-hover/card:-translate-y-1
        "
      >
        <h3
          className="
            font-raleway
            text-2xl
            sm:text-3xl
            md:text-[2rem]
            font-extrabold
            leading-[1.1]
            tracking-tight
            text-white
            drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]
          "
        >
          {item.title}
        </h3>
      </div>
    </Link>
  );
}

export default function CylindricalGallery({
  items = DEFAULT_ITEMS,
  autoSpeed = 0.02,
  scrollSpeed = 0.18,
  ease = 0.06,
}) {
  const innerRef = useRef(null);
  const containerRef = useRef(null);

  const scrollRef = useRef({
    current: 0,
    target: 0,
    isDown: false,
    isDragging: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    startTarget: 0,
  });

  const [isHovered, setIsHovered] = useState(false);

  const [dimensions, setDimensions] = useState({
    cardWidth: 290,
    cardHeight: 390,
    radius: 1100,
    perspective: 2800,
    height: 480,
  });

  // Normalize items
  const baseItems = (items && items.length > 0 ? items : DEFAULT_ITEMS)
    .slice(0, 7)
    .map((item, idx) => {
      if (typeof item === "string") {
        return { ...DEFAULT_ITEMS[idx % DEFAULT_ITEMS.length], title: item };
      }
      return { ...DEFAULT_ITEMS[idx % DEFAULT_ITEMS.length], ...item };
    });

  // Repeat items for seamless 360° cylindrical continuity
  const ringItems = [...baseItems, ...baseItems, ...baseItems];
  const angleStep = 360 / ringItems.length;

  useEffect(() => {
    const updateDimensions = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 1200;
      if (w < 640) {
        setDimensions({
          cardWidth: 175,
          cardHeight: 250,
          radius: 580,
          perspective: 1500,
          height: 330,
        });
      } else if (w < 1024) {
        setDimensions({
          cardWidth: 240,
          cardHeight: 330,
          radius: 800,
          perspective: 2000,
          height: 420,
        });
      } else {
        setDimensions({
          cardWidth: 300,
          cardHeight: 400,
          radius: 1150,
          perspective: 3000,
          height: 500,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    let frameId;
    const animate = () => {
      const scroll = scrollRef.current;
      if (!scroll.isDown && !isHovered) {
        scroll.target -= autoSpeed;
      }
      scroll.current += (scroll.target - scroll.current) * ease;

      if (innerRef.current) {
        innerRef.current.style.transform = `rotateY(${scroll.current}deg)`;
      }
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [autoSpeed, ease, isHovered]);

  // Touch & Pointer Handlers with swipe momentum
  const handleStart = (clientX, clientY) => {
    const scroll = scrollRef.current;
    scroll.isDown = true;
    scroll.isDragging = false;
    scroll.startX = clientX;
    scroll.startY = clientY;
    scroll.lastX = clientX;
    scroll.lastTime = Date.now();
    scroll.velocity = 0;
    scroll.startTarget = scroll.target;
  };

  const handleMove = (clientX, clientY) => {
    const scroll = scrollRef.current;
    if (!scroll.isDown) return;

    const now = Date.now();
    const dt = Math.max(now - scroll.lastTime, 8);
    const deltaX = clientX - scroll.lastX;

    // Instant velocity (px/ms)
    scroll.velocity = deltaX / dt;
    scroll.lastX = clientX;
    scroll.lastTime = now;

    const diffX = clientX - scroll.startX;
    const diffY = clientY !== undefined ? clientY - scroll.startY : 0;
    if (Math.abs(diffX) > 6 || Math.abs(diffY) > 6) {
      scroll.isDragging = true;
    }

    scroll.target = scroll.startTarget + diffX * scrollSpeed;
  };

  const handleEnd = () => {
    const scroll = scrollRef.current;
    if (!scroll.isDown) return;
    scroll.isDown = false;

    // Add flick momentum if swiped fast
    if (Math.abs(scroll.velocity) > 0.2) {
      const momentum = Math.max(Math.min(scroll.velocity * 35 * scrollSpeed, 40), -40);
      scroll.target += momentum;
    }

    // Keep isDragging = true for a brief moment to suppress the immediate click event
    if (scroll.isDragging) {
      setTimeout(() => {
        scroll.isDragging = false;
      }, 100);
    }
  };

  // Pointer events (desktop mouse / pen)
  const onPointerDown = (e) => {
    handleStart(e.clientX, e.clientY);
  };

  const onPointerMove = useCallback(
    (e) => {
      handleMove(e.clientX, e.clientY);
    },
    [scrollSpeed]
  );

  const onPointerUp = () => {
    handleEnd();
  };

  // Touch events (mobile swipe left/right)
  const onTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      handleStart(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const onTouchMove = (e) => {
    if (e.touches && e.touches.length > 0) {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const onTouchEnd = () => {
    handleEnd();
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleEnd();
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
      className="relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing touch-pan-y"
      style={{
        height: `${dimensions.height}px`,
        perspective: `${dimensions.perspective}px`,
        perspectiveOrigin: "50% 50%",
        touchAction: "pan-y",
      }}
    >
      {/* Left Edge Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-background via-background/60 to-transparent" />

      {/* Right Edge Fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-background via-background/60 to-transparent" />

      {/* 3D Cylinder Wrapper */}
      <div
        ref={innerRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {ringItems.map((item, index) => {
          const itemAngle = index * angleStep;

          return (
            <div
              key={index}
              className="group/card absolute pointer-events-auto"
              style={{
                width: `${dimensions.cardWidth}px`,
                height: `${dimensions.cardHeight}px`,
                transform: `rotateY(${itemAngle}deg) translateZ(-${dimensions.radius}px)`,
                transformOrigin: "center center",
                backfaceVisibility: "hidden",
              }}
            >
              <GalleryCard item={item} scrollRef={scrollRef} />
            </div>
          );
        })}
      </div>
    </div>
  );
}