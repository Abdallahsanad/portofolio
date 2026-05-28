import hosImage from '../assets/images/HosMvc.jpeg';
import hosDashboardImage from '../assets/images/hos.png';
import airImage from '../assets/images/air.jpg';
import storeImage from '../assets/images/storeApi.png';
import storeFrontImage from '../assets/images/store.jpg';
import hostregisterImage from '../assets/images/hostregister.jpg';
import hosloginImage from '../assets/images/hoslogin.jpg';
import hosdepartmentImage from '../assets/images/hosdepartment.jpg';
import hosconImage from '../assets/images/hoscon.jpg';
import frontImage from '../assets/images/Front.jpg';
import StoreArchImage from '../assets/images/StoreArch.jpg';
import redisImage from '../assets/images/redis.jpg';
import DepiGraduationImage from '../assets/images/DepiGraduation.jpg';
import graduationDepiVideo from '../assets/images/graduationDepi.mp4';






export const projects = [
  {
    id: 1,
    slug: 'hospital-management',
    title: 'Hospital Management System',
    shortDescription: 'A secure, scalable, and highly structured web application built with ASP.NET Core MVC to optimize hospital operations, streamline patient onboarding, and manage medical staff. Leveraging advanced Role-Based Access Control (RBAC) via Identity Framework, the system guarantees high data security and an intuitive user experience across all devices.',
    fullDescription: 'The Hospital Management System (HMS) is an enterprise-grade web application engineered using ASP.NET Core MVC and Entity Framework Core. The system is designed to digitalize and automate everyday healthcare workflows, bridging the gap between hospital administrators, medical staff, and patients while maintaining strict security protocols and data integrity.\n\nCore Architectural & Security Features:\n- Robust Security Layer: Integrated ASP.NET Core Identity to handle secure user authentication, account management, and session validation.\n- Granular Role-Based Access Control (RBAC): Implemented strict authorization policies ensuring that sensitive medical records and admin control panels are completely isolated and only accessible to authorized roles (Admins, Doctors, Patients).\n- Custom Enterprise Error Handling: Designed a polished, professional 403 Forbidden (Access Denied) fallback interface to gracefully handle unauthorized access attempts and secure endpoint boundaries.\n- Scalable N-Tier Architecture: Built with a clean separation of concerns (Presentation, Business Logic, and Data Access Layers) ensuring the codebase is highly maintainable, testable, and ready for future cloud deployment or CI/CD integration.\n\nFunctional Modules:\n- Doctor & Staff Management: Centralized dashboard for handling full CRUD operations on medical staff profiles, specialty assignments, and department data.\n- Patient & Record Tracking: Dynamic modules to manage patient onboarding, medical histories, and continuous update flows.\n- Database Reliability: Driven by SQL Server using a strict Code-First Approach, optimized with proper relational mappings to eliminate data redundancy.',
    mainImage: hosImage,
    images: [hosDashboardImage, hostregisterImage, hosloginImage, hosdepartmentImage, hosconImage],
    technologies: ['ASP.NET Core', 'MVC', 'SQL Server', 'Entity Framework Core', 'Identity Framework', 'Bootstrap'],
    features: ['Patient & Medical Records Management', 'Doctor & Appointment Scheduling', 'Role-Based Access Control (RBAC)', 'Custom Security & Error Handling (403 Pages)'],
    challenges: 'Overcoming data isolation by bridging entirely different commit histories during deployment, and architecting a strict security barrier using Identity Framework policies to dynamically restrict resource boundaries across multiple user roles.',
    codeLink: 'https://github.com/Abdallahsanad/Hospital-Management-System-',
    liveLink: ''
  },
  {
    id: 2,
    slug: 'airline-booking',
    title: 'Airline Booking',
    shortDescription: 'Scalable Web API with JWT Security & EF Core.',
    fullDescription: 'A backend architecture for airline booking platforms, providing scalable Web APIs, secure JWT authentication, and efficient database interactions with Entity Framework Core.',
    mainImage: airImage,
    images: [airImage, frontImage],
    technologies: ['ASP.NET Core', 'Web API', 'JWT', 'EF Core'],
    features: ['Flight Search', 'Secure Booking', 'User Authentication'],
    challenges: '',
    codeLink: 'https://github.com/Abdallahsanad',
    liveLink: ''
  },
  {
    id: 3,
  slug: 'e-commerce',
  title: 'E-Commerce (Store System)',
  shortDescription: 'A scalable .NET API built with Onion Architecture, featuring Redis-backed caching, Stripe payments, and dynamic filtering using Repository and Specification patterns.',
  fullDescription: 'A premium, highly scalable, and production-grade E-Commerce Backend API engineered using Onion Architecture and SOLID principles to ensure maximum decoupling, scalability, and maintainability. The system features a high-performance shopping cart management subsystem backed by Redis Cache to minimize database latency and handle high concurrency during peak shopping hours. Secure financial transactions are fully integrated using the Stripe Payment API, complete with automated order fulfillment and status transitions triggered by secure Stripe Webhooks. The core authentication system is powered by ASP.NET Core Identity and JWT Tokens, implementing strict Role-Based Access Control (RBAC) for Admins and Users. Data access is optimized using the Generic Repository and Unit of Work patterns, while complex catalog product queries, sorting, and pagination are handled efficiently through the Specification Pattern. Additionally, the entire application pipeline is safeguarded by custom centralized global exception handling middleware for consistent and secure API error tracking, and fully documented via Swagger UI.',
  mainImage: storeImage,
  images: [ storeFrontImage,StoreArchImage, redisImage],
  technologies: ['.NET 8 API', 'Onion Architecture', 'Redis Cache', 'Stripe API', 'JWT Authentication', 'Entity Framework Core', 'SQL Server', 'ASP.NET Core Identity'],
  features: [
    'High-Speed Shopping Basket Management via Redis',
    'Secure Stripe Payment Integration & Webhooks Lifecycle',
    'Dynamic Catalog Filtering, Sorting & Pagination (Specification Pattern)',
    'User Authentication & Advanced Role-Based Access Control (RBAC)',
    'Centralized Global Exception Handling Middleware',
    'Decoupled Architecture using Repository and Unit of Work Patterns'
  ],
  challenges: 'Orchestrating atomic transactions across inventory management and real-time checkout processes, ensuring secure asynchronous order updates via Stripe webhooks, and optimizing data retrieval latency through dynamic specifications and Redis caching.',
  codeLink: 'https://github.com/Abdallahsanad/E-Commerce',
  liveLink: ''
  },

  {
  id: 4,
  slug: 'medicare-depi',
  title: 'MediCare - Hospital Management System',
  shortDescription: 'An enterprise Medical & Clinic Management System featuring dynamic scheduling, a unique patient queuing engine, and secure E-Prescription (EMR) lifecycles.',
  fullDescription: 'MediCare is a comprehensive, production-grade healthcare management ecosystem developed as the final graduation capstone for the Digital Egypt Pioneers Initiative (DEPI). The system digitally transforms real-world clinical and hospital workflows into a unified platform. It features a robust Admin Dashboard for healthcare executives to manage doctor profiles, operational shifts, hospital capacity, and clinic availability. Patients can book appointments through an intelligent online engine that dynamically generates a Unique Queue Number per day to streamline clinic foot-traffic. Moerover, Receptionists have dedicated panels to manage walk-in bookings and check-ins in real-time. Doctors benefit from a personalized portal to track their daily schedules, access secure Electronic Medical Records (EMR), and issue dynamic E-Prescriptions directly linked to a pre-defined medication database, ensuring patient data privacy and a seamless clinical lifecycle.',
  mainImage: DepiGraduationImage, // استبدله بمتغير الصورة الرئيسية لمشروع الطبي
  // images: [clinicDashboardImage, doctorPanelImage, patientProfileImage], // استبدلهم بصور المشروع
  videoLink: graduationDepiVideo, // أو لينك الفيديو على Drive/Vimeo حسب ما رفعته
  technologies: ['ASP.NET Core', 'Web API / MVC', 'SQL Server', 'Entity Framework Core', 'Bootstrap', 'JavaScript'],
  features: [
    'Comprehensive Admin & Hospital Structure Dashboard',
    'Smart Dynamic Appointment Booking & Unique Daily Queuing Engine',
    'Dedicated Receptionist Walk-in Booking & Live Status Management',
    'Doctor Workspace for Patient Tracking & Schedule Management',
    'Dynamic E-Prescription Core & Secure Electronic Medical Records (EMR)'
  ],
  challenges: 'Orchestrating concurrent slot bookings while ensuring zero-collision in generating Unique Queue Numbers daily, designing a highly relational database for medical histories, and building a modular, role-based pipeline (Admin, Doctor, Receptionist, Patient) with absolute data privacy.',
  codeLink: 'https://github.com/Abdallahsanad/MediCare', // تأكد من اللينك الحقيقي للمشروع
  liveLink: ''
}
];
