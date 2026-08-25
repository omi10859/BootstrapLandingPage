export interface FeatureCTA {
  label: string;
  url: string;
  variant?: "default" | "secondary" | "secondary-outline" | "outline";
  icon?: string;
}

export interface FeatureItem {
  slug: string;
  aliases: string[];
  title: string;
  badge: string;
  heroHeading: string[];
  heroHighlight: string;
  description: string;
  heroImage: string;
  heroMockup?: boolean;
  isMobile?: boolean;
  ctaButtons?: FeatureCTA[];
  stats: {
    label: string;
    value: number;
    suffix: string;
  }[];
  featureBlocks: {
    title: string;
    description: string;
    bullets: { text: string; icon: string }[];
    image: string;
    isMobile?: boolean;
  }[];
  howItWorksTitle?: string;
  howItWorksDescription?: string;
  howItWorks: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    title: string;
    content: string;
  }[];
}

export const FEATURES_DATA: Record<string, FeatureItem> = {
"find-jobs": {
  slug: "find-jobs",
  aliases: ["jobs", "job", "find-jobs", "find-manage-jobs"],
  title: "Find Jobs",
  badge: "For Skilled & Unskilled Workers",

  heroHeading: ["Apne skill ke hisaab se kaam dhundhna", "hua ab"],
  heroHighlight: "Aasaan.",
  description:
    "Shram Mitra Worker App download karke register karein, apna skill aur work profile add karein aur apne location ke according construction aur site jobs dekhein. Nayi job postings ki notifications paayein aur suitable jobs ke liye directly app se apply karein.",

  heroImage: "/features/pages/find jobs.png",
  heroMockup: true,
  isMobile: true,

  ctaButtons: [
    {
      label: "Download Worker App",
      url: "https://play.google.com/store/apps/details?id=com.smitra",
      variant: "default",
    },
    {
      label: "Call Now",
      url: "tel:9796495051",
      variant: "secondary",
      icon: "Phone",
    },
  ],

  stats: [
    { label: "Active Jobs", value: 2000, suffix: "+" },
    { label: "Partner Companies", value: 50, suffix: "+" },
    { label: "Worker App", value: 1, suffix: "" },
  ],

  featureBlocks: [
    {
      title: "Find Work Without the Labour Chowk Hassle",
      description:
        "Har din kaam dhundhne ke liye labour chowk par wait karne ki zaroorat nahi. Shram Mitra Worker App download karke register karein, apna profile aur skills add karein aur apne phone par available job opportunities dekhein.",

      bullets: [
        {
          text: "Worker App download karke directly register karein",
          icon: "Download",
        },
        {
          text: "Apna skill aur work profile app par complete karein",
          icon: "UserRound",
        },
        {
          text: "Nayi job postings ki notifications paayein",
          icon: "Bell",
        },
      ],

      image: "/features/pages/find jobs.png",
      isMobile: true,
    },

    {
      title: "Apna Kaam, Apni Choice",
      description:
        "Shram Mitra par apne skill aur location ke according available jobs dekhein. Job ki details check karein aur jo kaam aapke liye suitable ho, uske liye app se directly apply karein.",

      bullets: [
        {
          text: "Apne skill ke according jobs browse karein",
          icon: "Search",
        },
        {
          text: "Job details aur work requirements pehle dekhein",
          icon: "BriefcaseBusiness",
        },
        {
          text: "Suitable jobs ke liye directly apply karein",
          icon: "Send",
        },
      ],

      image: "/features/pages/job details.png",
      isMobile: true,
    },

    {
      title: "Apna Work Record Banayein, Better Jobs Paayein",
      description:
        "Shram Mitra par contractor ke saath ki gayi aapki attendance, payroll aur work history ka digital record maintain hota hai. Mobile app se site par GPS-based attendance mark karein aur apni work history ko strong banayein, taaki future mein apne experience ke according better job opportunities paa sakein.",

      bullets: [
        {
          text: "Mobile app se GPS-based attendance mark karein",
          icon: "MapPin",
        },
        {
          text: "Contractor ke through payroll aur work records maintain hote hain",
          icon: "FileCheck2",
        },
        {
          text: "Apni work history ke basis par better opportunities paayein",
          icon: "TrendingUp",
        },
      ],

      image: "/features/pages/mark attendance.png",
      isMobile: true,
    },
  ],

  howItWorks: [
    {
      step: "01",
      title: "Download & Register on the App",
      description:
        "Shram Mitra Worker App Google Play Store se download karein. App ke andar apne mobile number se register karein aur apna worker profile complete karein.",
    },
    {
      step: "02",
      title: "Jobs Dekhein & Apply Karein",
      description:
        "Nayi job postings ki notifications paayein, apne skill aur location ke according jobs browse karein, details check karein aur suitable jobs ke liye app se apply karein.",
    },
    {
      step: "03",
      title: "Work Karein & Apna Record Banayein",
      description:
        "Job join karne ke baad mobile app se site par GPS-based attendance mark karein. Contractor ke through aapki attendance, payroll aur work history ka digital record maintain hota hai.",
    },
  ],

  faqs: [
    {
      title: "Where can I download the Shram Mitra Worker App?",
      content:
        "Shram Mitra Worker App workers ke liye Google Play Store par available hai. App download karein aur registration app ke andar hi apne mobile number se complete karein.",
    },
    {
      title: "How do I find jobs on Shram Mitra?",
      content:
        "App download karke register karein aur apna worker profile aur skills complete karein. Nayi job postings ki notifications paayein, available jobs dekhein aur suitable opportunities ke liye app se directly apply karein.",
    },
    {
      title: "How is attendance marked on Shram Mitra?",
      content:
        "Workers Shram Mitra mobile app se site par GPS-based attendance mark kar sakte hain. Attendance contractor ke work records aur payroll process ke liye maintain hoti hai.",
    },
  ],
},

"manage-attendance": {
  slug: "manage-attendance",
  aliases: ["attendance", "manage-attendance"],
  title: "Manage Attendance",
  badge: "GPS-Based Site Attendance",

  heroHeading: ["Workforce attendance manage karna", "hua ab"],
  heroHighlight: "Aasaan.",

  description:
    "Shram Mitra par construction sites ki workforce attendance easily manage karein. Workers mobile app se GPS-based check-in aur check-out kar sakte hain, supervisors workers ki attendance mark ya manage kar sakte hain, aur contractors ek dashboard se different sites ki attendance aur workforce status dekh sakte hain.",

  heroImage: "/features/pages/attendance-l1.png",
  heroMockup: true,
  isMobile: true,

  ctaButtons: [
    {
      label: "Manage Attendance",
      url: "https://app.shrammitra.com/accounts/login",
      variant: "default",
    },
    {
      label: "9796495051",
      url: "tel:9796495051",
      variant: "secondary",
      icon: "Phone",
    },
  ],

  stats: [
    { label: "GPS-Based", value: 1, suffix: " Attendance" },
    { label: "Site Management", value: 1, suffix: " Dashboard" },
    { label: "Payroll Ready", value: 1, suffix: " System" },
  ],

  featureBlocks: [
    {
      title: "GPS-Based Check-In & Check-Out",
      description:
        "Workers Shram Mitra mobile app se apni attendance mark kar sakte hain. Attendance sirf assigned site ke GPS location ke according mark ki ja sakti hai, jisse site par actual check-in aur check-out records maintain karna easier hota hai.",

      bullets: [
        {
          text: "Workers mobile app se GPS-based check-in karein",
          icon: "MapPin",
        },
        {
          text: "Site se check-out karke working hours record karein",
          icon: "LogOut",
        },
        {
          text: "Attendance records automatically maintain hote hain",
          icon: "CalendarCheck",
        },
      ],

      image: "/features/pages/mark attendance.png",
      isMobile: true,
    },

    {
      title: "Supervisors Se Attendance Manage Karein",
      description:
        "Supervisors apne assigned sites par workers ki attendance dekh aur manage kar sakte hain. Zaroorat padne par supervisor worker ki attendance mark kar sakta hai, jisse site par attendance management flexible rehta hai.",

      bullets: [
        {
          text: "Supervisors workers ki attendance manage karein",
          icon: "Users",
        },
        {
          text: "Site par present aur absent workers dekhein",
          icon: "UserCheck",
        },
        {
          text: "Different sites ki workforce attendance manage karein",
          icon: "Building2",
        },
      ],

      image: "/features/pages/attendance-l1.png",
      isMobile: false,
    },

    {
      title: "Ek Dashboard Se Workforce Attendance Dekhein",
      description:
        "Contractors apne different project sites ki attendance ek central dashboard se monitor kar sakte hain. Dekhein kitne workers site par check-in hain, kitne workers ne check-out kiya hai aur overall attendance status kya hai.",

      bullets: [
        {
          text: "Different sites ki attendance ek dashboard par dekhein",
          icon: "LayoutDashboard",
        },
        {
          text: "Site par present aur absent workers ka status dekhein",
          icon: "Users",
        },
        {
          text: "Check-in aur check-out records ke basis par attendance track karein",
          icon: "Clock",
        },
      ],

      image: "/features/pages/attendance-l2.png",
      isMobile: false,
    },

    {
      title: "Attendance Reports Se Payroll Calculate Karein",
      description:
        "Attendance records ko reports ke through easily review karein aur payroll calculation ke liye use karein. Worker-wise aur overall attendance data ke basis par working days, shift hours aur overtime ko manage karna easier hota hai.",

      bullets: [
        {
          text: "Worker-wise attendance reports dekhein",
          icon: "FileText",
        },
        {
          text: "Working hours aur overtime records review karein",
          icon: "Clock",
        },
        {
          text: "Attendance data ko payroll calculation ke saath use karein",
          icon: "Calculator",
        },
      ],

      image: "/features/pages/payroll.png",
      isMobile: false,
    },
  ],

  howItWorks: [
    {
      step: "01",
      title: "Site & Workforce Set Karein",
      description:
        "Apne project sites create karein, workers assign karein aur supervisors ko site ke saath manage karein.",
    },
    {
      step: "02",
      title: "Check-In & Check-Out Karein",
      description:
        "Workers mobile app se GPS-based attendance mark kar sakte hain. Supervisors bhi zaroorat ke according workers ki attendance manage kar sakte hain.",
    },
    {
      step: "03",
      title: "Attendance Monitor & Payroll Calculate Karein",
      description:
        "Dashboard par different sites ki workforce attendance dekhein, reports review karein aur recorded attendance ke basis par payroll calculate karein.",
    },
  ],

  faqs: [
    {
      title: "How do workers mark attendance?",
      content:
        "Workers Shram Mitra mobile app se GPS-based check-in aur check-out karte hain. Attendance assigned site ki location ke according mark ki jaati hai.",
    },
    {
      title: "Can supervisors mark attendance for workers?",
      content:
        "Haan. Supervisors apne assigned sites par workers ki attendance manage kar sakte hain aur zaroorat ke according attendance mark kar sakte hain.",
    },
    {
      title: "Can I manage attendance for multiple sites?",
      content:
        "Haan. Contractors different project sites ki workforce attendance ko ek central dashboard se dekh aur manage kar sakte hain.",
    },
    {
      title: "Can I see who is currently on site?",
      content:
        "Haan. Check-in aur check-out records ke basis par site par present workers aur attendance status ko monitor kiya ja sakta hai.",
    },
    {
      title: "Can attendance be used for payroll?",
      content:
        "Haan. Attendance records payroll ke saath integrated hain. Recorded attendance, working hours aur overtime information ko payroll calculation ke liye use kiya ja sakta hai.",
    },
  ],
},

"manage-payroll": {
  slug: "manage-payroll",
  aliases: ["payroll", "manage-payroll"],
  title: "Manage Payroll",
  badge: "Attendance-Integrated Payroll",

  heroHeading: ["Workforce payroll manage karna", "hua ab"],
  heroHighlight: "Aasaan.",

  description:
    "Shram Mitra ke integrated payroll system se contractors apne workers ki attendance ke basis par payroll calculate kar sakte hain. Automatic ya manual attendance dono ke saath payroll manage karein, PF aur ESIC calculate karein, custom deductions add karein aur detailed payslips generate karke PDF mein download karein.",

  heroImage: "/features/pages/payroll.png",
  heroMockup: true,
  isMobile: false,

  ctaButtons: [
    {
      label: "Manage Payroll",
      url: "https://app.shrammitra.com/accounts/login",
      variant: "default",
    },
    {
      label: "9796495051",
      url: "tel:9796495051",
      variant: "secondary",
      icon: "Phone",
    },
  ],

  stats: [
    { label: "Attendance Integrated", value: 100, suffix: "%" },
    { label: "PF & ESIC", value: 1, suffix: " System" },
    { label: "Access", value: 2, suffix: " Platforms" },
  ],

  featureBlocks: [
    {
      title: "Attendance Se Direct Payroll Calculation",
      description:
        "Shram Mitra payroll attendance system ke saath directly integrated hai. Workers ki automatic attendance ho ya supervisor dwara manually entered attendance, dono ke basis par payroll calculate kiya ja sakta hai.",

      bullets: [
        {
          text: "Automatic aur manual attendance dono support karein",
          icon: "CalendarCheck",
        },
        {
          text: "Attendance aur overtime ke basis par payroll calculate karein",
          icon: "Calculator",
        },
        {
          text: "Worker-wise aur overall payroll summary dekhein",
          icon: "Users",
        },
      ],

      image: "/features/pages/payroll.png",
      isMobile: false,
    },

    {
      title: "PF, ESIC & Custom Deductions Manage Karein",
      description:
        "Payroll calculate karte waqt applicable PF aur ESIC amounts manage karein. Zaroorat ke according custom deductions bhi add karein aur final payable amount ko clearly calculate karein.",

      bullets: [
        {
          text: "Workers ke liye PF aur ESIC calculation support",
          icon: "ShieldCheck",
        },
        {
          text: "Custom deductions add aur manage karein",
          icon: "MinusCircle",
        },
        {
          text: "Gross aur final payable wages clearly calculate karein",
          icon: "IndianRupee",
        },
      ],

      image: "/features/pages/payroll.png",
      isMobile: false,
    },

    {
      title: "Professional Payslips Generate & Download Karein",
      description:
        "Payroll finalize hone ke baad workers ke liye detailed payslips generate karein. Individual payslip ko PDF format mein download karein aur payroll records ko easily maintain karein.",

      bullets: [
        {
          text: "Worker-wise detailed payslips generate karein",
          icon: "FileText",
        },
        {
          text: "Payslips PDF format mein download karein",
          icon: "Download",
        },
        {
          text: "Overall payroll aur individual worker records manage karein",
          icon: "BarChart3",
        },
      ],

      image: "/features/pages/payroll.png",
      isMobile: false,
    },
  ],

  howItWorks: [
    {
      step: "01",
      title: "Attendance Record Karein",
      description:
        "Workers ki attendance automatic system se aaye ya supervisor manually attendance enter kare, dono types ke attendance records payroll ke liye use kiye ja sakte hain.",
    },
    {
      step: "02",
      title: "Payroll Calculate Karein",
      description:
        "Attendance, overtime, wage rates aur applicable deductions ke basis par worker-wise ya overall payroll calculate karein. PF aur ESIC amounts bhi manage karein.",
    },
    {
      step: "03",
      title: "Payslip Generate Karein",
      description:
        "Payroll review aur finalize karne ke baad detailed worker payslips generate karein aur unhe PDF format mein download karein.",
    },
  ],

  faqs: [
    {
      title: "Is payroll integrated with attendance?",
      content:
        "Haan. Shram Mitra payroll attendance ke saath integrated hai. Automatic attendance aur manually entered attendance, dono records ko payroll calculation ke liye use kiya ja sakta hai.",
    },
    {
      title: "Can I calculate PF and ESIC in payroll?",
      content:
        "Haan. Payroll calculation ke dauraan workers ke liye applicable PF aur ESIC amounts calculate aur manage kiye ja sakte hain.",
    },
    {
      title: "Can I add custom deductions to a payslip?",
      content:
        "Haan. Payroll mein custom deductions add kiye ja sakte hain, jisse final payable amount worker ke actual payroll requirements ke according calculate kiya ja sakta hai.",
    },
    {
      title: "Can I generate and download payslips?",
      content:
        "Haan. Contractor worker-wise payslips generate kar sakte hain aur detailed payslips ko PDF format mein download kar sakte hain.",
    },
    {
      title: "Is payroll available on both web and mobile?",
      content:
        "Haan. Shram Mitra payroll functionality website aur mobile app dono par supported hai, jisse contractors apne workforce payroll ko convenient way mein manage kar sakte hain.",
    },
  ],
},

"find-tenders": {
  slug: "find-tenders",
  aliases: ["tenders", "tender", "find-tenders"],
  title: "Find Tenders",
  badge: "Government Tender Discovery",

  heroHeading: ["Government tenders dhundhna", "hua ab"],
  heroHighlight: "Aasaan.",

  description:
    "Shram Mitra par India bhar ke government tenders ek hi jagah par discover karein. Apni preferences ke according naye tenders ki regular notifications paayein, tender ki important details aur dates dekhein aur zaroorat padne par directly original government source par tender open karein.",

  heroImage: "/features/pages/tender.png",
  heroMockup: true,
  isMobile: true,

  ctaButtons: [
    {
      label: "Explore Tenders",
      url: "https://app.shrammitra.com/accounts/login",
      variant: "default",
    },
    {
      label: "9796495051",
      url: "tel:9796495051",
      variant: "secondary",
      icon: "Phone",
    },
  ],

  stats: [
    { label: "Government Tenders", value: 1000, suffix: "+" },
    { label: "States & UTs", value: 28, suffix: "+" },
    { label: "Tender Alerts", value: 1, suffix: " Platform" },
  ],

  featureBlocks: [
    {
      title: "Government Tenders from Across India",
      description:
        "Alag-alag government websites par tenders search karne ki zaroorat nahi. Shram Mitra par different government departments aur locations ke available tenders ek hi platform par discover karein.",

      bullets: [
        {
          text: "India bhar ke government tenders ek jagah par dekhein",
          icon: "Search",
        },
        {
          text: "State, location aur tender category ke according tenders find karein",
          icon: "MapPin",
        },
        {
          text: "Naye tenders ko regularly discover karein",
          icon: "RefreshCw",
        },
      ],

      image: "/features/pages/tender.png",
      isMobile: true,
    },

    {
      title: "Tender Ki Har Important Detail Ek Jagah",
      description:
        "Tender open karne se pehle uski important information easily check karein. Shram Mitra par tender ki critical details aur important dates ko clearly dekh sakte hain, taaki aap relevant opportunities ko quickly identify kar sakein.",

      bullets: [
        {
          text: "Department, location aur tender details dekhein",
          icon: "Building2",
        },
        {
          text: "Tender value, work details aur other key information check karein",
          icon: "FileText",
        },
        {
          text: "Submission, opening aur other important dates dekhein",
          icon: "CalendarDays",
        },
      ],

      image: "/features/pages/tender details.png",
      isMobile: true,
    },

    {
      title: "Apni Preference Ke According Tender Alerts Paayein",
      description:
        "Aapki preferences ke according naye relevant government tenders ki regular notifications paayein. Isse important opportunities ko manually baar-baar search karne ki zaroorat kam ho jaati hai.",

      bullets: [
        {
          text: "Apni preferred tender categories aur locations select karein",
          icon: "SlidersHorizontal",
        },
        {
          text: "Matching naye tenders ki regular notifications paayein",
          icon: "BellRing",
        },
        {
          text: "Tender ko original government source par directly open karein",
          icon: "ExternalLink",
        },
      ],

      image: "/features/pages/tender3.png",
      isMobile: false,
    },
  ],

  howItWorks: [
    {
      step: "01",
      title: "Set Your Tender Preferences",
      description:
        "Apni preferred locations, tender categories aur relevant preferences select karein, taaki aapko apne business ke according tenders mil sakein.",
    },
    {
      step: "02",
      title: "Discover & Get New Tender Alerts",
      description:
        "India bhar ke available government tenders browse karein aur apni preferences ke according naye tenders ki regular notifications paayein.",
    },
    {
      step: "03",
      title: "Check Details & Visit Original Source",
      description:
        "Tender ki important details aur critical dates check karein. Relevant tender milne par directly uske original government source par jaakar further process complete karein.",
    },
  ],

  faqs: [
    {
      title: "What type of tenders can I find on Shram Mitra?",
      content:
        "Shram Mitra par government websites se listed tenders discover kiye ja sakte hain. Aap India bhar ke different departments, locations aur categories ke available government tenders browse kar sakte hain.",
    },
    {
      title: "Can I get notifications for new tenders?",
      content:
        "Haan. Aap apni preferences ke according relevant tender categories aur locations select kar sakte hain. Matching naye government tenders available hone par aapko regular notifications mil sakti hain.",
    },
    {
      title: "What details can I see about a tender?",
      content:
        "Shram Mitra par tender ki important information jaise department, location, work details, tender value, eligibility-related information aur important dates ko easily check kiya ja sakta hai.",
    },
  ],
},

"find-workers": {
  slug: "find-workers",
  aliases: ["workers", "worker", "find-workers"],
  title: "Find Workers",
  badge: "Skilled Workforce",

  heroHeading: ["Verified aur skilled Workers dhundhna", "hua ab"],
  heroHighlight: "Aasaan.",

  description:
    "Shram Mitra par contractors aur companies apne projects ke liye skilled aur unskilled workers find kar sakte hain. Worker profiles, skills aur Shram Mitra verification details dekhein, verification videos check karein aur suitable workers se directly connect karein.",

  heroImage: "/features/pages/find workers.png",
  heroMockup: true,
  isMobile: true,

  ctaButtons: [
    {
      label: "Find Workers",
      url: "https://app.shrammitra.com/accounts/login",
      variant: "default",
    },
    {
      label: "9796495051",
      url: "tel:9796495051",
      variant: "secondary",
      icon: "Phone",
    },
  ],

  stats: [
    { label: "Workers Listed", value: 2000, suffix: "+" },
    { label: "Skill Categories", value: 35, suffix: "+" },
    { label: "Worker Profiles", value: 1000, suffix: "+" },
  ],

  featureBlocks: [
    {
      title: "Apne Project Ke Liye Right Workers Dhoondhein",
      description:
        "Har project ke liye suitable workforce find karna ab easier hai. Shram Mitra par different skills aur categories ke worker profiles browse karein aur apni requirement ke according suitable workers discover karein.",

      bullets: [
        {
          text: "Skilled aur unskilled workers ki profiles browse karein",
          icon: "Users",
        },
        {
          text: "Skill aur location ke according workers find karein",
          icon: "Search",
        },
        {
          text: "Worker profile aur available details check karein",
          icon: "UserRound",
        },
      ],

      image: "/features/pages/find workers.png",
      isMobile: true,
    },

    {
      title: "Verified Worker Profiles Dekhein",
      description:
        "Shram Mitra par available worker profiles mein verification information check karein. Shram Mitra dwara verified workers ko identify karein aur worker ki profile details dekhkar apne project ke liye suitable workforce choose karein.",

      bullets: [
        {
          text: "Shram Mitra verified worker profiles dekhein",
          icon: "BadgeCheck",
        },
        {
          text: "Worker ke skills aur experience details check karein",
          icon: "FileCheck2",
        },
        {
          text: "Worker ke verification videos bhi check karein",
          icon: "Video",
        },
      ],

      image: "/features/pages/worker details.png",
      isMobile: true,
    },

    {
      title: "Apni Requirement Post Karein",
      description:
        "Agar aapko specific workers ki requirement hai, to Shram Mitra par apna job ya workforce requirement post karein. Apne project ke according required skill, workers ki requirement aur location jaise details share karein aur suitable workers tak apni requirement pahunchayein.",

      bullets: [
        {
          text: "Apni worker requirement ya job post karein",
          icon: "ClipboardList",
        },
        {
          text: "Required skills, location aur other job details add karein",
          icon: "FileText",
        },
        {
          text: "Suitable workers ke saath directly connect karein",
          icon: "MessageCircle",
        },
      ],

      image: "/features/pages/find workers.png",
      isMobile: true,
    },
  ],

  howItWorks: [
    {
      step: "01",
      title: "Workers Search Karein",
      description:
        "Apne project ki requirement ke according skilled aur unskilled workers browse karein aur relevant skills aur locations ke basis par suitable profiles find karein.",
    },
    {
      step: "02",
      title: "Profile & Verification Check Karein",
      description:
        "Worker ki profile, skills, experience aur Shram Mitra verification details dekhein. Available verification videos bhi check karke worker ko better understand karein.",
    },
    {
      step: "03",
      title: "Job Post Karein & Connect Karein",
      description:
        "Agar aapko specific workforce chahiye, apni job requirement post karein. Suitable workers ki profiles explore karein aur interested workers ke saath directly connect karein.",
    },
  ],

  faqs: [
    {
      title: "Who can find workers on Shram Mitra?",
      content:
        "Contractors, construction companies aur project owners Shram Mitra par apne projects ke liye skilled aur unskilled workers find kar sakte hain.",
    },
    {
      title: "Can I see a worker's profile before hiring?",
      content:
        "Haan. Aap worker ki available profile details, skills, experience aur Shram Mitra verification information check kar sakte hain before connecting with the worker.",
    },
    {
      title: "Can I check worker verification videos?",
      content:
        "Haan. Jahan available ho, aap worker ke verification videos dekh sakte hain aur profile ko better understand kar sakte hain.",
    },
    {
      title: "Can I post my own worker requirement?",
      content:
        "Haan. Contractors aur companies apni job ya workforce requirement post kar sakte hain, jisme required skills, location aur other relevant details add ki ja sakti hain.",
    },
  ],
},

"find-machinery": {
  slug: "find-machinery",
  aliases: ["machinery", "machines", "machine", "find-machinery", "find-manage-machinery"],
  title: "Find & Manage Machinery",
  badge: "Construction Machinery & Equipment",

  heroHeading: ["Construction machinery dhundhna", "hua ab"],
  heroHighlight: "Aasaan.",

  description:
    "Shram Mitra par construction machinery aur equipment ki listings dekhein, apni requirement ke according individual machines find karein aur machine owners se directly contact karein. Machinery owners apni machines list kar sakte hain, aur bulk ya custom requirements bhi post ki ja sakti hain.",

  heroImage: "/features/pages/machine.png",
  heroMockup: true,
  isMobile: false,

  ctaButtons: [
    {
      label: "Find Machinery",
      url: "https://app.shrammitra.com/accounts/login",
      variant: "default",
    },
    {
      label: "9796495051",
      url: "tel:9796495051",
      variant: "secondary",
      icon: "Phone",
    },
  ],

  stats: [
    { label: "Machines Listed", value: 500, suffix: "+" },
    { label: "Equipment Categories", value: 25, suffix: "+" },
    { label: "Locations Covered", value: 50, suffix: "+" },
  ],

  featureBlocks: [
    {
      title: "Apni Requirement Ke According Machinery Dhoondhein",
      description:
        "Project ke liye JCB, excavator, crane, loader, mixer ya koi aur construction machinery chahiye? Shram Mitra par available machinery listings browse karein aur apni requirement ke according machine find karein.",

      bullets: [
        {
          text: "Different categories ki construction machinery browse karein",
          icon: "Search",
        },
        {
          text: "Location aur requirement ke according machines find karein",
          icon: "MapPin",
        },
        {
          text: "Machine listing ki details dekhkar owner se directly contact karein",
          icon: "Phone",
        },
      ],

      image: "/features/pages/machine categories.png",
      isMobile: true,
    },

    {
      title: "Individual Machine Ya Bulk Requirement — Dono Possible",
      description:
        "Ek machine ki requirement ho ya project ke liye multiple machines chahiye, Shram Mitra par apni requirement ke according machinery search karein. Agar required machine directly nahi mil rahi hai, to apni custom ya bulk requirement post karein.",

      bullets: [
        {
          text: "Individual machine ke liye listing search karein",
          icon: "Truck",
        },
        {
          text: "Multiple machines ke liye bulk requirement post karein",
          icon: "Layers",
        },
        {
          text: "Apni custom machinery requirement share karein",
          icon: "ClipboardList",
        },
      ],

      image: "/features/pages/machinery.png",
      isMobile: true,
    },

    {
      title: "Machinery List Karein Aur Direct Enquiries Paayein",
      description:
        "Agar aap machinery owner hain ya multiple machines ka fleet manage karte hain, to Shram Mitra par apni machines list karein. Interested customers listing ki details dekhkar aapse directly contact kar sakte hain.",

      bullets: [
        {
          text: "Individual machines ko alag-alag list karein",
          icon: "PlusCircle",
        },
        {
          text: "Machine ki details aur availability information add karein",
          icon: "FileText",
        },
        {
          text: "Interested customers se directly enquiries paayein",
          icon: "MessageCircle",
        },
      ],

      image: "/features/pages/machinery.png",
      isMobile: true,
    },
  ],

  howItWorks: [
    {
      step: "01",
      title: "Machinery Search Karein",
      description:
        "Apni requirement ke according construction machinery aur equipment browse karein. Different categories aur locations mein available machines dekhein.",
    },
    {
      step: "02",
      title: "Details Check Karein & Contact Karein",
      description:
        "Machine listing ki available details check karein. Suitable machine milne par listing mein diye gaye contact details ke through owner se directly contact karein.",
    },
    {
      step: "03",
      title: "Requirement Post Karein Ya Machine List Karein",
      description:
        "Required machine nahi mil rahi? Apni custom ya bulk requirement post karein. Machinery owner hain? Apni individual machines list karein aur interested customers se direct enquiries paayein.",
    },
  ],

  faqs: [
    {
      title: "Can I find individual machines on Shram Mitra?",
      content:
        "Haan. Aap Shram Mitra par individual construction machines ki listings dekh sakte hain, machine ki available details check kar sakte hain aur owner se directly contact kar sakte hain.",
    },
    {
      title: "Can I post a bulk or custom machinery requirement?",
      content:
        "Haan. Agar aapko ek se zyada machines chahiye ya aapki requirement specific hai, to aap apni bulk ya custom machinery requirement post kar sakte hain.",
    },
    {
      title: "Can I list my machinery on Shram Mitra?",
      content:
        "Haan. Machinery owners aur fleet owners apni individual machines Shram Mitra par list kar sakte hain. Interested customers listing dekhkar available contact details ke through directly contact kar sakte hain.",
    },
  ],
},

"project-management": {
  slug: "project-management",
  aliases: ["projects", "project", "project-management", "find-manage-projects"],
  title: "Find & Manage Projects",
  badge: "Projects & Contractor Network",

  heroHeading: ["Construction projects manage karna", "hua ab"],
  heroHighlight: "Aasaan.",

  description:
    "Shram Mitra par companies aur contractors apne construction projects post kar sakte hain, project ke liye required contractors aur machinery find kar sakte hain aur relevant professionals ke saath connect kar sakte hain. Contractors apne preferred projects discover kar sakte hain, new project notifications paa sakte hain aur verified profiles ke saath opportunities explore kar sakte hain.",

  heroImage: "/features/pages/project details.png",
  heroMockup: true,
  isMobile: true,

  ctaButtons: [
    {
      label: "Explore Now",
      url: "https://app.shrammitra.com/accounts/login",
      variant: "default",
    },
    {
      label: "9796495051",
      url: "tel:9796495051",
      variant: "secondary",
      icon: "Phone",
    },
  ],

  stats: [
    { label: "Projects Listed", value: 500, suffix: "+" },
    { label: "Contractors", value: 1000, suffix: "+" },
    { label: "Locations", value: 50, suffix: "+" },
  ],

  featureBlocks: [
    {
      title: "Apna Project Post Karein",
      description:
        "Agar aap company ya contractor hain aur kisi construction project ke liye team, contractors ya machinery ki requirement hai, to Shram Mitra par apna project post karein. Project ki important information add karke relevant professionals tak apni requirement pahunchayein.",

      bullets: [
        {
          text: "Project name, location aur project type add karein",
          icon: "Building2",
        },
        {
          text: "Work requirements aur project details share karein",
          icon: "FileText",
        },
        {
          text: "Required contractors, workers ya machinery ki requirement mention karein",
          icon: "Users",
        },
      ],

      image: "/features/pages/project details.png",
      isMobile: true,
    },

    {
      title: "Project Ke Liye Right Contractors & Machinery Dhoondhein",
      description:
        "Project post karne ke baad apni requirement ke according contractors aur machinery discover karein. Available profiles aur listings ki details check karein aur apne project ke liye suitable options ke saath directly connect karein.",

      bullets: [
        {
          text: "Project requirement ke according contractors find karein",
          icon: "Search",
        },
        {
          text: "Contractor ke verified profile aur available details dekhein",
          icon: "BadgeCheck",
        },
        {
          text: "Project ke liye required machinery bhi find karein",
          icon: "Truck",
        },
      ],

      image: "/features/pages/contractor features.png",
      isMobile: true,
    },

    {
      title: "Naye Projects Discover Karein",
      description:
        "Agar aap contractor hain, to Shram Mitra par apne experience aur requirements ke according available projects discover karein. Relevant naye projects ki notifications paayein, complete project details check karein aur suitable opportunities ke liye connect karein.",

      bullets: [
        {
          text: "Different locations ke available projects browse karein",
          icon: "MapPin",
        },
        {
          text: "Naye relevant projects ki notifications paayein",
          icon: "BellRing",
        },
        {
          text: "Project details aur requirements check karke opportunity explore karein",
          icon: "ClipboardList",
        },
      ],

      image: "/features/pages/project details.png",
      isMobile: true,
    },
  ],

  howItWorks: [
    {
      step: "01",
      title: "Project Post Karein",
      description:
        "Company ya contractor apne project ki important details, location, work type aur required resources add karke Shram Mitra par project post kar sakte hain.",
    },
    {
      step: "02",
      title: "Contractors & Machinery Find Karein",
      description:
        "Project requirement ke according contractors aur machinery listings browse karein. Profiles aur available details check karke suitable professionals aur equipment ke saath connect karein.",
    },
    {
      step: "03",
      title: "Projects Discover Karein & Connect Karein",
      description:
        "Contractors apne preferred projects browse karein, naye project notifications paayein, project ki complete details check karein aur suitable opportunities ke liye directly connect karein.",
    },
  ],

  faqs: [
    {
      title: "Who can post a project on Shram Mitra?",
      content:
        "Companies aur contractors apne construction projects Shram Mitra par post kar sakte hain. Project ki location, work type, requirements aur other important details add karke relevant contractors aur resources tak apni requirement pahunchayi ja sakti hai.",
    },
    {
      title: "What details can I see about a project?",
      content:
        "Project listing mein available information jaise project name, location, project type, work requirements, required resources, project description aur other relevant details dekhe ja sakte hain.",
    },
    {
      title: "Can I find contractors for my project?",
      content:
        "Haan. Project requirement ke according Shram Mitra par contractors discover karein, unki available profile details check karein aur suitable contractors ke saath directly connect karein.",
    },
    {
      title: "Can contractors get notifications for new projects?",
      content:
        "Haan. Contractors apni preferences ke according relevant projects ki notifications paa sakte hain, taaki naye project opportunities ko time par discover kiya ja sake.",
    },
  ],
},
};

export function getFeatureBySlug(slug: string): FeatureItem | undefined {
  const normalized = slug.toLowerCase().trim();
  if (FEATURES_DATA[normalized]) {
    return FEATURES_DATA[normalized];
  }
  for (const item of Object.values(FEATURES_DATA)) {
    if (item.aliases.includes(normalized)) {
      return item;
    }
  }
  return undefined;
}
