import plateshare from "../assets/plateshare.png";
import contestHub from "../assets/2.JPG";
import fixoraService from "../assets/fixora-service.jpg";
import skillSwapPreview from "../assets/skill-swap-preview.png";

export const projectsData = [
    {
        id: "havenkeys",
        title: "Community-Food-Sharing-Project",
        description: "PlateShare is a MERN-based food-sharing platform that allows users to share extra food, request items, and reduce food waste—all through a secure, clean, and fully responsive interface.",
        image: plateshare,
        techStack: ["React", "Express", "javascript", "JWT", "Tailwind CSS"],
        features: [
            "Secure Authentication – Firebase Email/Password & Google Sign-In with real-time auth handling.",
            "User Profile & Roles – MongoDB-synced users with Admin/User roles and activity stats.",
            "Food Sharing & Requests – Add, edit, delete, request foods with automatic status updates.",
            "Protected Routes & RBAC – Private routes and admin-only permissions with server-side security.",
            "RealResponsive & Optimized UI – Tailwind CSS, loading states, custom 404 page, smooth navigation."
        ],
        liveLink: "https://wonderful-gnome-772c45.netlify.app/",
        githubClient: "https://github.com/Mst-Sumi-Akter/community-food-sharing-project/tree/main",
        githubServer: " https://community-food-sharing-server-iota.vercel.app/"
    },
    {
        id: "marathon-zone",
        title: "ContestHub",
        description: "A full-stack modern, platform that allows users to create, discover, participate in, and manage creative contests.",
        image: contestHub,
        techStack: ["React", "Firebase", "Node.js", "MongoDB", "javascript","Tailwind CSS"],
        features: [
            "User Roles & Dashboards – Admin, Contest Creator, and Normal User with role-based dashboards.",
            "Real-time event tracking and statistics.Contest Discovery & Participation – Browse contests by category, popularity, and search; join via mock payment flow.",
            "Secure Authentication – JWT-based login with Google Sign-In support.",
            "Management & Leaderboard – Contest management, winner selection, user control, and dynamic leaderboards.",
            "Modern UI & UX – Fully responsive design, dark/light theme, toast notifications, and profile data charts."
        ],
        liveLink: "https://fantastic-cucurucho-3fa98b.netlify.app",
        githubClient: "https://github.com/Mst-Sumi-Akter/ContestHub",
        githubServer: "https://github.com/Mst-Sumi-Akter/ContestHub-server-site"
    },
    {
        id: "fixora",
        title: "Fixora",
        description: "A premium service marketplace connecting customers with trusted local professionals for electrical, plumbing, cleaning, and other home services.",
        image: fixoraService,
        techStack: ["Next.js 16", "React", "Tailwind CSS", "Framer Motion", "Express.js", "MongoDB", "Mongoose"],
        features: [
            "Browse, search, and filter home services in one marketplace.",
            "View detailed service pricing, features, and provider information.",
            "List new services through a protected submission form.",
            "Role-based dashboards for admins, providers, and customers.",
            "Persistent mock authentication with cookie-based sessions."
        ],
        liveLink: "https://fixora-mu.vercel.app/",
        githubClient: "https://github.com/Mst-Sumi-Akter/Local-Service-Marketplace-Fixora",
        githubServer: "https://fixora-api.vercel.app"
    },
    {
        id: "skill-swap",
        title: "Skill Swap",
        description: "An AI-powered marketplace for exchanging courses and expertise without money, with secure peer-to-peer requests and role-based tools.",
        image: skillSwapPreview,
        techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TanStack Query", "MongoDB", "Mongoose", "NextAuth.js"],
        features: [
            "Browse and filter courses by category and platform.",
            "Exchange courses and knowledge without monetary transactions.",
            "Track pending, accepted, and rejected swap requests.",
            "Admin tools for course moderation and user management.",
            "Protected role-based access for users and administrators."
        ],
        liveLink: "https://skill-swap-zagh-git-main-sumi-akters-projects.vercel.app/?_vercel_share=FTa7JZuJG9hTlpQIdUQSle158E7eO4bT",
        githubClient: "https://github.com/Mst-Sumi-Akter/skill-swap",
        githubServer: ""
    }
];
