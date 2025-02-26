import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Sofrix",
  lastName: "Development",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Development & Staffing",
  avatar: "/images/sofrix-black-3.jpg",
  company: "Sofrix",
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to Our Newsletter</>,
  description: (
    <>
      We occasionally write about technology trends, AI innovations, and share insights on software development best practices.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:example@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.firstName} - Premium Software Solutions`,
  description: `${person.company} provides world-class software development and staffing services`,
  headline: <>Artificial Intelligence + Engineering Excellence</>,
  subline: (
    <>
      We're Sofrix, a software development company that believes smarter software creates stronger businesses.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Sofrix",
  description: `Learn about ${person.company}, premium software development and staffing services`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Our Story",
    description: (
      <>
        Sofrix emerged from a vision to deliver premium technology solutions differently. By partnering U.S. 
        product managers with exceptional global engineering talent, we provide world-class software 
        development and staffing services at competitive rates. Our dual expertise in custom solutions 
        and resource augmentation gives businesses the technical capabilities they need to scale efficiently.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Our Services",
    experiences: [
      {
        company: "Custom Software Development",
        timeframe: "Core Service",
        role: "End-to-End Solutions",
        achievements: [
          <>
            We build tailored software solutions that address your unique business challenges, 
            from initial concept to deployment and maintenance.
          </>,
          <>
            Our expertise spans web applications, mobile development, AI integration, and 
            enterprise systems that scale with your business.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Software Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Technical Staffing",
        timeframe: "Core Service",
        role: "Talent Augmentation",
        achievements: [
          <>
            We connect businesses with exceptional engineering talent to augment your team, 
            providing the technical capabilities needed to scale efficiently.
          </>,
          <>
            Our rigorous vetting process ensures you get access to skilled professionals who 
            integrate seamlessly with your existing workflows.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Our Approach",
    institutions: [
      {
        name: "AI-Driven Innovation",
        description: <>We leverage cutting-edge AI technologies to enhance development processes and deliver smarter solutions.</>,
      },
      {
        name: "Engineering Excellence",
        description: <>Our commitment to quality code, thorough testing, and best practices ensures reliable, maintainable software.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Expertise",
    skills: [
      {
        title: "Full-Stack Development",
        description: <>Comprehensive development capabilities across frontend, backend, and infrastructure.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Development image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Development image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AI Integration",
        description: <>Transforming business challenges into opportunities through strategic AI implementation.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "AI integration image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Insights & Updates",
  description: `Read the latest from ${person.company}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "Our Solutions & Expertise",
  description: `Discover how ${person.company} delivers exceptional software solutions and technical talent to help businesses thrive in the digital landscape`,
  intro: {
    display: true,
    title: "How We Work",
    description: (
      <>
        At Sofrix, we combine technical excellence with business acumen to deliver solutions that drive real value. 
        Our dual expertise in custom software development and technical staffing allows us to provide the right 
        approach for your specific needs - whether that's a complete software solution or augmenting your team 
        with specialized talent.
      </>
    ),
  },
  expertise: [
    {
      title: "Custom Software Development",
      description: "End-to-end solutions tailored to your unique business challenges",
      areas: ["Web Applications", "Mobile Development", "AI Integration", "Enterprise Systems"]
    },
    {
      title: "Technical Staffing",
      description: "Connect with exceptional engineering talent to augment your team",
      areas: ["Senior Developers", "Product Managers", "DevOps Engineers", "AI Specialists"]
    },
    {
      title: "Technology Consulting",
      description: "Strategic guidance to optimize your technology investments",
      areas: ["Technical Architecture", "Digital Transformation", "Process Optimization", "Technology Selection"]
    }
  ],
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "Project Gallery",
  description: `A showcase of ${person.company}'s work`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

const contact = {
  label: "Contact",
  title: "Contact Us",
  description: `Get in touch with ${person.company} for your software development and staffing needs`,
  intro: {
    display: true,
    title: "Let's Connect",
    description: (
      <>
        We're always interested in discussing new projects, creative ideas, or opportunities to be part of your vision. 
        Whether you need custom software development, technical staffing, or just want to say hello, we'd love to hear from you.
      </>
    ),
  },
  contactInfo: {
    email: "info@sofrix.com",
    phone: "+1 (555) 123-4567",
    address: "2219 Main St. Santa Monica, CA 90405",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM PST"
  }
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  contact,
};
