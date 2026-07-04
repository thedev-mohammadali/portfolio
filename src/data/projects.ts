import FaceHookImage from "@/assets/images/projects/face-hook.png";
import JobPortalImage from "@/assets/images/projects/job-portal.png";
import RabbitImage from "@/assets/images/projects/rabbit.png";
export const projects = {
  title: "Projects",
  subtitle: "Some of the projects I've been working on.",

  items: [
    {
      id: "lws-job-portal",
      title: "LWS Job Portal",
      description:
        "A full-stack job portal that connects job seekers with employers through a modern recruitment platform. The application supports authentication, role-based access, job posting and management, application tracking, and responsive dashboards for both recruiters and candidates.",

      image: JobPortalImage,

      technologies: [
        "React",
        "Vite",
        "JavaScript",
        "Tailwind CSS",
        "React Router",
        "Axios",
        "React Hook Form",
        "Express.js",
        "PostgreSQL",
        "JWT Authentication",
      ],

      github: "https://github.com/ali1215311/lws-job-portal-frontend.git",
      live: "https://lws-job-portal-frontend.vercel.app/",

      status: "In Progress",

      features: [
        "Role-based authentication for job seekers and employers",
        "Secure login and registration workflow",
        "Employer dashboard for creating and managing job postings",
        "Job seeker dashboard with profile management and application tracking",
        "Advanced job browsing and detailed job pages",
        "Apply to jobs directly from the platform",
        "Responsive user interface optimized for desktop and mobile devices",
        "Reusable component architecture with protected routes",
      ],

      challenges: [
        "Designing separate user flows for employers and job seekers",
        "Managing authentication state across protected routes",
        "Handling role-based authorization throughout the application",
        "Building reusable dashboard components while keeping the UI maintainable",
        "Integrating the frontend with backend APIs and asynchronous data fetching",
      ],

      futureImprovements: [
        "Real-time notifications for new applications and job updates",
        "Resume upload and document management",
        "Advanced search with filters and sorting",
        "Employer analytics dashboard",
        "Email verification and password recovery",
        "Bookmark and recommendation system for jobs",
      ],
    },

    {
      id: "facehook",

      title: "FaceHook",

      description:
        "A responsive social media application inspired by modern social networking platforms. Users can register, authenticate, create posts, browse a personalized feed, and manage their profiles through a clean and intuitive interface.",
      status: "In Progress",

      image: FaceHookImage,

      technologies: [
        "React 19",
        "Vite",
        "React Router",
        "Tailwind CSS",
        "React Hook Form",
        "Axios",
        "Context API",
        "Custom Hooks",
        "Reducer",
      ],

      github: "https://github.com/ali1215311/face-hook",

      live: "https://face-hook-eight.vercel.app",

      challenges: [
        "Designed a scalable folder structure that remains maintainable as new features are introduced.",
        "Managed shared application state efficiently using Context API and reducers while minimizing prop drilling.",
        "Handled authentication state consistently across different routes and browser refreshes.",
        "Built reusable form components with integrated validation and API communication.",
        "Developed a responsive and accessible user interface that provides a consistent experience across desktop and mobile devices.",
      ],

      features: [
        "User registration and authentication.",
        "Create, edit, and delete posts.",
        "Browse a social feed with dynamic content.",
        "View and manage user profiles.",
        "Responsive interface optimized for desktop and mobile devices.",
        "Form validation for user inputs using React Hook Form.",
        "Centralized state management with Context API and reducers.",
        "REST API integration using Axios.",
      ],

      futureImprovements: [
        "Integrate a production-ready backend built with Express.js, TypeScript, Prisma ORM, and PostgreSQL.",
        "Replace the temporary API with a persistent database.",
        "Implement secure JWT authentication with refresh token support.",
        "Add cloud-based image upload functionality.",
        "Introduce comments, reactions, bookmarking, and follow/unfollow features.",
        "Implement real-time notifications and live updates.",
        "Optimize application performance through lazy loading, code splitting, and API caching.",
      ],
    },

    {
      id: "ecommerce-store",
      title: "E-Commerce Store",
      description:
        "A modern e-commerce frontend built with React and Vite, featuring a responsive shopping experience with product collections, category browsing, user authentication pages, and reusable UI components. The project focuses on building a scalable storefront architecture and polished user experience.",

      image: RabbitImage,

      technologies: [
        "React",
        "Vite",
        "JavaScript",
        "Tailwind CSS",
        "React Router",
        "React Icons",
        "Sonner",
      ],

      github:
        "https://github.com/ali1215311/e-commerce-project--compiletab.git",
      live: "https://e-commerce-project-compiletab.vercel.app/",

      status: "In Progress",

      features: [
        "Responsive landing page with modern hero section",
        "Product collection and category browsing",
        "Featured products and promotional sections",
        "Dynamic collection pages using route parameters",
        "Shopping cart drawer interface",
        "User authentication pages (Login & Register)",
        "Profile page layout",
        "Reusable component-based architecture",
      ],

      challenges: [
        "Designing a scalable folder structure for future expansion",
        "Building reusable product and layout components",
        "Creating a responsive shopping experience across devices",
        "Planning routing for multiple storefront pages",
        "Preparing the frontend for future backend integration",
      ],

      futureImprovements: [
        "Backend API integration",
        "Shopping cart persistence",
        "Wishlist functionality",
        "Product search and advanced filtering",
        "Order management",
        "Payment gateway integration",
        "Admin dashboard",
        "User authentication with JWT",
      ],
    },
  ],
};
