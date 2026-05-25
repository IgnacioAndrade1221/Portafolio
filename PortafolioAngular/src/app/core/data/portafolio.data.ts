import { PortfolioData } from '../models/portafolio.Interfaces';

export const PORTFOLIO_DATA: PortfolioData = {
  name: 'Ignacio Andrade',
  title: {
    es: 'Software Engineer | Especialista en .NET & Angular',
    en: 'Software Engineer | .NET & Angular Specialist'
  },
  about: {
    es: 'Ingeniero de Software enfocado en la modernización de sistemas financieros críticos, migración de arquitecturas legacy a .NET 8/9 y diseño de soluciones escalables bajo estándares de Clean Architecture y API First.',
    en: 'Software Engineer focused on modernizing critical financial systems, migrating legacy architectures to .NET 8/9, and designing scalable solutions under Clean Architecture and API First standards.'
  },
  contact: {
    email: 'ignacio.andrade1221@gmail.com',
    phone: '+569 6525 7957',
    linkedin: 'https://www.linkedin.com/in/ignacioalexis',
    github: 'https://github.com/IgnacioAndrade1221',
    cvUrl: 'assets/CV_Ignacio_Andrade_Software_Engineer.pdf'
  },
  skills: [
    { name: '.NET (8/9)', category: 'main' },
    { name: 'C#', category: 'main' },
    { name: 'Angular', category: 'main' },
    { name: 'SQL Server', category: 'main' },
    { name: 'JavaScript', category: 'main' },
    { name: 'React', category: 'complementary' },
    { name: 'Vue', category: 'complementary' },
    { name: 'Python', category: 'complementary' },
    { name: 'Java', category: 'complementary' },
    { name: 'Laravel', category: 'complementary' },
    { name: 'Ionic', category: 'complementary' },
    { name: 'Bootstrap', category: 'complementary' },
    { name: 'HTML/CSS', category: 'complementary' },
    { name: 'Azure', category: 'tools' },
    { name: 'AWS', category: 'tools' },
    { name: 'Docker', category: 'tools' },
    { name: 'Git', category: 'tools' }
  ],
  experience: [
    {
      company: 'Penta Vida',
      role: { es: 'Software Engineer', en: 'Software Engineer' },
      period: { es: 'Abril 2026 - Presente', en: 'April 2026 - Present' },
      description: {
        es: 'Desarrollo e ingeniería de software en el área de Inversiones, implementando soluciones escalables y aplicando patrones de diseño avanzados en el ecosistema .NET y Angular.',
        en: 'Software development and engineering in the Investments area, implementing scalable solutions and applying advanced design patterns in the .NET and Angular ecosystem.'
      }
    },
    {
      company: 'Dimension S.A.',
      role: { es: 'Desarrollador .NET / Full Stack', en: '.NET / Full Stack Developer' },
      period: { es: 'Junio 2025 - Marzo 2026', en: 'June 2025 - March 2026' },
      description: {
        es: 'Modernización de Core Financiero. Migración de servicios críticos de factoring desde .NET Framework 4.8 a .NET 8. Optimización de procedimientos almacenados en SQL Server y desacoplamiento de lógica de negocio hacia APIs.',
        en: 'Financial Core Modernization. Migration of critical factoring services from .NET Framework 4.8 to .NET 8. Optimization of stored procedures in SQL Server and decoupling of business logic to APIs.'
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
      techStack: ['.NET 9', 'C#', 'Clean Architecture'],
      videoUrl: 'assets/dora-demo.mp4' // Sube tu video a public/assets/
    },
    {
      title: 'ZEYRANT',
      description: {
        es: 'Plataforma técnica de orquestación de IA y chatbots. Arquitectura desacoplada multi-tenant con seguridad RBAC y JWT.',
        en: 'Technical AI orchestration and chatbot platform. Decoupled multi-tenant architecture with RBAC and JWT security.'
      },
      techStack: ['NestJS', 'Next.js', 'OpenAI API', 'Docker'],
      videoUrl: 'assets/zeyrant-demo.mp4'
    }
  ],
  education: {
    institution: 'Duoc UC',
    degree: { es: 'Ingeniería en Informática', en: 'Computer Engineering' },
    period: { es: '2023 - Presente (4to año)', en: '2023 - Present (4th year)' }
  }
};