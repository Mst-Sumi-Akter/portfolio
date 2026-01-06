import plateshare from "../assets/plateshare.png";
import contestHub from "../assets/2.JPG";

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
        id: "green-circle",
        title: "Green Circle",
        description: "A gardening subscription platform with secure payments, real-time slot booking, and full admin dashboard.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUYp5hpUgm-59yyiHKWPSk9bhewPDwhPneNoEF2GxJJ4sHp-MXZQXTbg48xqZzopp-qOhWMt3lj0gY3cpr2aHLGUm1Rj3xmNuLq2ydR_mKbGjvrBzOfb95ZezLGoAMi2o2EVQjiQe5BdVzKKcFBR0xFFSGszYQQ8HLzYkg2YBOE4UtcF5IeSWigPfxgUW52dVviK6AAcoFKTlbtI2EPz0jWl-ZsCW_hLGspbxN4SxrxQoBj96OvcZW4y4hpiVYPq0n3fsgoucppeEL",
        techStack: ["JavaScript", "React", "Express", "MongoDB", "Node.js"],
        features: [
            "Subscription-based access to gardening expert services.",
            "Appointment booking system with real-time availability.",
            "Secure payment processing via major gateways.",
            "Dynamic admin panel for content and user management.",
            "Custom plant care guides and notifications."
        ],
        liveLink: "https://green-circle.example.com",
        githubClient: "https://github.com/SumiAkter/green-circle-client",
        githubServer: "https://github.com/SumiAkter/green-circle-server"
    },
    {
        id: "event-hub",
        title: "Event Hub",
        description: "A full-stack MERN app for creating, managing, and joining events—designed to be secure, responsive, and user-friendly for organizers and attendees alike.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq9dnrZ9VypczW_4zm4ZiXsQ4bMIuNkIOot0OYwfIcZWH0GWwIohiF2MnxDSZwsiBYt0739_cwre1KTfJHt2MOgqzBYGayzXWiFwSbuMmAmGiaZgmPu-BUKnJB5U9ItIOZE7zkN2LWlFKPYQV4pOVznnmnpREzQmuHvLVJSHHOnaBrKrzpfXgMaBAPhdhqHnaGYPoSo53THfIT7CA9dlaHM75uB3IT_hXQyV4gz8oCbVkqKU9LHSC8oaZ9iGXjp0AaGkwV9n6Mj2lg",
        techStack: ["React", "Express", "MongoDB", "JWT", "Node.js"],
        features: [
            "Interactive event creation and management tools.",
            "User-driven event discovery with category filters.",
            "Integrated messaging system for organizers and attendees.",
            "Scalable media storage for event images.",
            "Responsive design optimized for all devices."
        ],
        liveLink: "https://event-hub.example.com",
        githubClient: "https://github.com/SumiAkter/event-hub-client",
        githubServer: "https://github.com/SumiAkter/event-hub-server"
    }
];
