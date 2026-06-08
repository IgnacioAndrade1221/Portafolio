import { PortfolioData } from '../models/portafolio.Interfaces';

export const PORTFOLIO_DATA: PortfolioData = {
  name: 'Ignacio Andrade',
  title: {
    es: 'Ingeniero de Software | Especialista en .NET & Angular',
    en: 'Software Engineer | .NET & Angular Specialist'
  },
  about: {
    es: 'Ingeniero de Software enfocado en la modernización de sistemas financieros críticos y la migración de arquitecturas legacy hacia .NET 8/9. Especializado en el diseño de soluciones escalables bajo estándares de Clean Architecture y API First, con un fuerte enfoque en reducir la deuda técnica y generar valor real de negocio.',
    en: 'Software Engineer focused on modernizing critical financial systems and migrating legacy architectures to .NET 8/9. Specialized in designing scalable solutions under Clean Architecture and API First standards, with a strong focus on reducing technical debt and driving real business value.'
  },
  contact: {
    email: 'ignacio.andrade1221@gmail.com',
    phone: '+569 65257957',
    linkedin: 'https://www.linkedin.com/in/ignacioalexis',
    github: 'https://github.com/IgnacioAndrade1221',
    cvUrl: 'assets/CV_Ignacio_Andrade_Software_Engineer.pdf'
  },
skills: [
    { name: '.NET (Fx 4.8 a .NET 9)', category: 'main' },
    { name: 'C# & LINQ', category: 'main' },
    { name: 'Angular', category: 'main' },
    { name: 'SQL Server', category: 'main' },
    { name: 'TypeScript', category: 'main' },
    { name: 'Clean Arch & SOLID', category: 'main' }, 

    { name: 'EF Core & Dapper', category: 'complementary' },
    { name: 'Design Patterns (GoF)', category: 'complementary' },
    { name: 'Vue.js', category: 'complementary' },
    { name: 'Laravel (PHP)', category: 'complementary' },
    { name: 'Python (Django)', category: 'complementary' },
    { name: 'React', category: 'complementary' },
    { name: 'Java', category: 'complementary' },
    { name: 'Ionic', category: 'complementary' },
    { name: 'PostgreSQL / MongoDB', category: 'complementary' },

    { name: 'Azure', category: 'tools' },
    { name: 'AWS (S3, EC2)', category: 'tools' },
    { name: 'Docker', category: 'tools' },
    { name: 'CI/CD Pipelines', category: 'tools' },
    { name: 'Git', category: 'tools' },
    { name: 'Jenkins', category: 'tools' },
    { name: 'GitLab', category: 'tools' },
    { name: 'SVN', category: 'tools' }
  ],
experience: [
    {
      company: 'Penta Vida',
      role: { es: 'Software Engineer', en: 'Software Engineer' },
      period: { es: 'Abril 2026 - Presente', en: 'April 2026 - Present' },
      description: {
        es: 'Desarrollo de core en el área de Inversiones, evolucionando sistemas desde .NET Framework 4.8 hasta .NET 9. Enfocado en la transición hacia arquitecturas modernas (API First, Clean Arch), optimización de rendimiento en SQL Server y entrega de interfaces dinámicas con Angular.',
        en: 'Core development for the Investment division, evolving systems from .NET Framework 4.8 to .NET 9. Focused on transitioning to modern architectures (API First, Clean Arch), SQL Server performance tuning, and delivering dynamic interfaces with Angular.'
      }
    },
    {
      company: 'Dimension S.A.',
      role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
      period: { es: 'Junio 2025 - Marzo 2026', en: 'June 2025 - March 2026' },
      description: {
        es: 'Lideré la modernización del Core Financiero de Factoring. Reduje la deuda técnica en un 50% mediante la migración a .NET 8 y el desacoplamiento de lógica de negocio compleja. Optimicé procedimientos almacenados críticos en SQL Server, logrando mejoras medibles en los tiempos de respuesta transaccional.',
        en: 'Led the modernization of the Factoring Financial Core. Reduced technical debt by 50% through migration to .NET 8 and decoupling complex business logic. Optimized critical SQL Server stored procedures, achieving measurable improvements in transactional response times.'
      }
    },
    {
      company: 'NOMED',
      role: { es: 'Desarrollador de Software', en: 'Software Developer' },
      period: { es: 'Marzo 2025 - Junio 2025', en: 'March 2025 - June 2025' },
      description: {
        es: 'Implementación de arquitectura de componentes reutilizables con Vue.js y optimización de flujos operativos mediante n8n e integración de APIs. Gestión integral de infraestructura cloud en AWS utilizando Docker, asegurando despliegues estables y automatizados.',
        en: 'Implemented reusable component architecture with Vue.js and optimized operational workflows using n8n and API integrations. Managed end-to-end cloud infrastructure on AWS using Docker, ensuring stable and automated deployments.'
      }
    }
  ],
  projects: [
    {
      title: 'DORA.NET (Legacy Risk Analyzer)',
      description: {
        es: 'Herramienta de análisis estático offline-first para auditar deuda técnica y riesgos en sistemas legacy .NET, estimando costos de refactorización.',
        en: 'Offline-first static analysis tool to audit technical debt and risks in legacy .NET systems, estimating refactoring costs.'
      },
      techStack: ['.NET 9', 'C#', 'Vertical Slice Architecture'],
      videoUrl: 'assets/dora-demo.mp4',
      githubUrl: 'https://github.com/IgnacioAndrade1221/DotNet-Legacy-Risk-Analyzer'
    },
    {
      title: 'ZEYRANT',
      description: {
        es: 'Plataforma técnica de orquestación de IA y chatbots. Arquitectura desacoplada multi-tenant con seguridad RBAC y JWT.',
        en: 'Technical AI orchestration and chatbot platform. Decoupled multi-tenant architecture with RBAC and JWT security.'
      },
      techStack: ['NestJS', 'Next.js', 'OpenAI API', 'Docker'],
      videoUrl: 'assets/zeyrant-demo.mp4'
    },
    {
      title: 'Balotario DEMO',
      description: {
        es: 'Sistema de balotario para una empresa marítima (DICAPI). Las preguntas se cargan desde JSON de forma aleatoria. Incluye modo aprendizaje sin límite de tiempo y modo simulacro con cronómetro. Al finalizar genera un resumen estadístico del desempeño. Proyecto de práctica, no oficial.',
        en: 'Quiz system built for a maritime company (DICAPI). Questions load dynamically from JSON in random order. Features a learning mode with no time limit and a simulation mode with a countdown timer. Generates a statistical performance summary at the end. Practice project, not official.'
      },
      techStack: ['Django', 'Python', 'JSON', 'HTML/CSS'],
      videoUrl: 'assets/balotario-demo.mp4'
    }
  ],
  education: {
    institution: 'Duoc UC',
    degree: { es: 'Ingeniería en Informática', en: 'Computer Engineering' },
    period: { es: '2023 - Presente (4to año)', en: '2023 - Present (4th year)' }
  }
};
