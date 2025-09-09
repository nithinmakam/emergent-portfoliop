// Mock data for Nithin Makam's Portfolio

export const personalInfo = {
  name: "Nithin Makam",
  title: "Experienced Java Backend Developer",
  summary: "Experienced web developer with a detail-oriented and results-driven approach, having 6 years of expertise in Java Backend development. Skilled in Java, Spring Boot, JPA, and worked on MySQL, MongoDB, and PostgreSQL databases. Holds certifications in AWS, GCP, and Azure.",
  location: "Hyderabad",
  email: "makamkanna@gmail.com",
  phone: "9059109950",
  profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0fGVufDB8fHx8MTc1NzMzODEzM3ww&ixlib=rb-4.1.0&q=85",
  resumeUrl: "/resume-placeholder.pdf",
  linkedin: "https://www.linkedin.com/in/nithinmakam/",
  portfolio: "https://nithin-makam.vercel.app/"
};

export const education = {
  institution: "VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET)",
  duration: "Aug 2015 - Apr 2019",
  degree: "Bachelor in Electronics and Communications Engineering",
  type: "Full-time",
  gpa: "8.5 GPA"
};

export const languages = ["English", "Telugu (Native)"];

export const experience = [
  {
    id: 1,
    company: "Cognizant Technology Solutions India Private Limited",
    position: "Software Engineer",
    duration: "Aug 2022 - Ongoing",
    client: "Warner Bros",
    domain: "Media",
    projects: [
      {
        name: "AMI (Availability Message Interface)",
        duration: "Jan 2025 - Present",
        techStack: ["Java", "Spring Boot", "MongoDB", "Microservices", "AWS"],
        descriptions: [
          "Enhanced automation workflow by developing robust backend services using Java and Spring Boot",
          "Collaborated with frontend teams to implement seamless API integrations",
          "Led efforts to optimize database queries, reducing response time by 25%"
        ]
      },
      {
        name: "Distribute",
        duration: "Jun 2024 - Dec 2024",
        techStack: ["Java", "Spring Boot", "Postgres", "Microservices", "AWS"],
        descriptions: [
          "Engineered backend services for content distribution platform",
          "Implemented caching mechanisms that improved system performance by 30%",
          "Conducted code reviews and mentored junior developers"
        ]
      },
      {
        name: "Packager",
        duration: "Oct 2023 - Jun 2024",
        techStack: ["Java", "Spring MVC", "Postgres", "AWS"],
        descriptions: [
          "Rapidly acquired domain knowledge and contributed to legacy system modernization",
          "Assumed ownership of critical modules and delivered features within tight deadlines",
          "Coordinated with QA teams to ensure high-quality releases",
          "Engaged with clients to gather requirements and provide technical solutions"
        ]
      },
      {
        name: "ESP (Extensive Service Platform)",
        duration: "Oct 2022 - Oct 2023",
        techStack: ["Java", "Spring Boot", "MongoDB", "AWS"],
        descriptions: [
          "Upgraded services from legacy frameworks to modern Spring Boot architecture",
          "Played pivotal role in system architecture decisions and implementation"
        ]
      }
    ]
  },
  {
    id: 2,
    company: "Achala IT Solution",
    position: "Application Programmer",
    duration: "Sep 2021 - Jul 2022",
    client: "EMRI",
    domain: "Healthcare",
    projects: [
      {
        name: "Onboarding Application",
        duration: "March 2022 - Aug 2022",
        techStack: ["Java", "Spring Boot", "MySQL", "Microservices", "AWS"],
        descriptions: [
          "Developed from ground up a comprehensive onboarding system for healthcare workers",
          "Designed for integration with multiple third-party APIs and services",
          "Collaborated with UI/mobile teams to ensure seamless user experience",
          "Implemented scalable microservices architecture",
          "Utilized AWS services for cloud deployment and monitoring"
        ]
      },
      {
        name: "Attendance Application",
        duration: "Sep 2021 - March 2022",
        techStack: ["Java", "Spring Boot", "MySQL", "Microservices", "AWS"],
        descriptions: [
          "Engineered backend services for real-time attendance tracking system",
          "Designed real-time notification system for attendance alerts",
          "Collaborated with mobile and QA teams for cross-platform compatibility",
          "Achieved deployment on AWS with 99.9% uptime",
          "Enhanced user experience through optimized API response times"
        ]
      }
    ]
  },
  {
    id: 3,
    company: "Spoors Technology",
    position: "Associate Web Developer",
    duration: "Jun 2019 - Sep 2021",
    clients: "IB Group, Phonepe, Mahindra, LTI Finance",
    domain: "Healthcare",
    projects: [
      {
        name: "Effort Application",
        duration: "Jun 2019 - Aug 2021",
        techStack: ["Java", "Spring MVC", "MySQL", "jQuery", "JavaScript", "Ajax"],
        descriptions: [
          "Migrated codebase from legacy Spring framework to modern architecture",
          "Implemented features for project time tracking and resource management",
          "Developed comprehensive reports and analytics dashboard",
          "Collaborated with cross-functional teams in agile environment",
          "Conducted code reviews and knowledge transfer sessions",
          "Led training sessions for new team members",
          "Participated in agile ceremonies and sprint planning"
        ]
      }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "AMI (Availability Message Interface)",
    duration: "Jan 2025 - Present",
    techStack: ["Java", "Spring Boot", "MongoDB", "Microservices", "AWS"],
    image: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcHJvZ3JhbW1pbmd8ZW58MHx8fHwxNzU3Mzg2OTg3fDA&ixlib=rb-4.1.0&q=85",
    descriptions: [
      "Enhanced automation workflow by developing robust backend services using Java and Spring Boot",
      "Collaborated with frontend teams to implement seamless API integrations",
      "Led efforts to optimize database queries, reducing response time by 25%"
    ]
  },
  {
    id: 2,
    title: "Distribute",
    duration: "Jun 2024 - Dec 2024",
    techStack: ["Java", "Spring Boot", "Postgres", "Microservices", "AWS"],
    image: "https://images.unsplash.com/photo-1584949091708-0a21d38ab8de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwcHJvZ3JhbW1pbmd8ZW58MHx8fHwxNzU3Mzg2OTg3fDA&ixlib=rb-4.1.0&q=85",
    descriptions: [
      "Engineered backend services for content distribution platform",
      "Implemented caching mechanisms that improved system performance by 30%",
      "Conducted code reviews and mentored junior developers"
    ]
  },
  {
    id: 3,
    title: "Packager",
    duration: "Oct 2023 - Jun 2024",
    techStack: ["Java", "Spring MVC", "Postgres", "AWS"],
    image: "https://images.unsplash.com/photo-1636586108931-a8b9b8796ba6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5JTIwcHJvZ3JhbW1pbmd8ZW58MHx8fHwxNzU3Mzg2OTg3fDA&ixlib=rb-4.1.0&q=85",
    descriptions: [
      "Rapidly acquired domain knowledge and contributed to legacy system modernization",
      "Assumed ownership of critical modules and delivered features within tight deadlines",
      "Coordinated with QA teams to ensure high-quality releases",
      "Engaged with clients to gather requirements and provide technical solutions"
    ]
  },
  {
    id: 4,
    title: "ESP (Extensive Service Platform)",
    duration: "Oct 2022 - Oct 2023",
    techStack: ["Java", "Spring Boot", "MongoDB", "AWS"],
    image: "https://images.unsplash.com/photo-1514070706115-47c142769603?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5JTIwcHJvZ3JhbW1pbmd8ZW58MHx8fHwxNzU3Mzg2OTg3fDA&ixlib=rb-4.1.0&q=85",
    descriptions: [
      "Upgraded services from legacy frameworks to modern Spring Boot architecture",
      "Played pivotal role in system architecture decisions and implementation"
    ]
  },
  {
    id: 5,
    title: "Onboarding Application",
    duration: "March 2022 - Aug 2022",
    techStack: ["Java", "Spring Boot", "MySQL", "Microservices", "AWS"],
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    descriptions: [
      "Developed from ground up a comprehensive onboarding system for healthcare workers",
      "Designed for integration with multiple third-party APIs and services",
      "Collaborated with UI/mobile teams to ensure seamless user experience",
      "Implemented scalable microservices architecture",
      "Utilized AWS services for cloud deployment and monitoring"
    ]
  },
  {
    id: 6,
    title: "Attendance Application",
    duration: "Sep 2021 - March 2022",
    techStack: ["Java", "Spring Boot", "MySQL", "Microservices", "AWS"],
    image: "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxjb2RlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzU3Mzg2OTkzfDA&ixlib=rb-4.1.0&q=85",
    descriptions: [
      "Engineered backend services for real-time attendance tracking system",
      "Designed real-time notification system for attendance alerts",
      "Collaborated with mobile and QA teams for cross-platform compatibility",
      "Achieved deployment on AWS with 99.9% uptime",
      "Enhanced user experience through optimized API response times"
    ]
  },
  {
    id: 7,
    title: "Effort Application",
    duration: "Jun 2019 - Aug 2021",
    techStack: ["Java", "Spring MVC", "MySQL", "jQuery", "JavaScript", "Ajax"],
    image: "https://images.unsplash.com/photo-1669023414171-56f0740e34cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxjb2RlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzU3Mzg2OTkzfDA&ixlib=rb-4.1.0&q=85",
    descriptions: [
      "Migrated codebase from legacy Spring framework to modern architecture",
      "Implemented features for project time tracking and resource management",
      "Developed comprehensive reports and analytics dashboard",
      "Collaborated with cross-functional teams in agile environment",
      "Conducted code reviews and knowledge transfer sessions",
      "Led training sessions for new team members",
      "Participated in agile ceremonies and sprint planning"
    ]
  }
];

export const skills = [
  { name: "Java", level: "Intermediate", percentage: 85 },
  { name: "SpringBoot", level: "Intermediate", percentage: 80 },
  { name: "JPA", level: "Intermediate", percentage: 75 },
  { name: "MicroServices", level: "Intermediate", percentage: 80 },
  { name: "Hibernate", level: "Beginner", percentage: 60 },
  { name: "MongoDB", level: "Intermediate", percentage: 70 },
  { name: "Postgres", level: "Intermediate", percentage: 75 },
  { name: "AWS", level: "Beginner", percentage: 55 },
  { name: "Azure", level: "Beginner", percentage: 50 }
];

export const certifications = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    url: "https://www.credly.com/badges/cebecea3-ef34-4a47-9b8b-235b74262b9e/public_url",
    badge: "https://images.credly.com/size/110x110/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
  },
  {
    id: 2,
    title: "Microsoft Certified Azure Fundamentals",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/NithinMakamCognizant-8991/C0775C39E5B4DE8A?sharingId=23E37A5597EBBF4B",
    badge: "https://images.credly.com/size/110x110/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png"
  },
  {
    id: 3,
    title: "GCP Certification",
    url: "#",
    badge: "https://images.credly.com/size/110x110/images/ae2f5bae-b110-4ea1-8e26-77cf5f76c81e/GCC_badge_IT_Support_1000x1000.png"
  }
];

export const awards = [
  {
    id: 1,
    title: "Best Employee Award",
    description: "Received Best Employee Award for delivered critical features within tight deadlines for Packager Application in Cognizant.",
    year: "2024"
  }
];

export const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" }
];