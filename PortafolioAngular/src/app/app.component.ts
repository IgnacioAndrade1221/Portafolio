import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { EducationComponent } from './features/education/education.component';
import { ContactComponent } from './features/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, EducationComponent, ContactComponent],
  template: `
    <div class="min-h-screen bg-[#0a0a0f] text-gray-100 relative overflow-x-hidden">

      <!-- Ambient background blobs -->
      <div class="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]"></div>
        <div class="absolute top-1/3 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px]"></div>
        <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[140px]"></div>
      </div>

      <app-navbar />

      <main class="relative z-10 container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 space-y-0">
        <app-hero />
        <app-skills />
        <app-experience />
        <app-projects />
        <app-education />
        <app-contact />
      </main>

      <!-- Footer -->
      <footer class="relative z-10 border-t border-white/5 mt-16 py-8">
        <div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p class="text-center text-xs text-gray-600 tracking-widest uppercase">
            Ignacio Andrade &mdash; {{ currentYear }}
          </p>
        </div>
      </footer>

    </div>
  `
})
export class AppComponent {
  currentYear = new Date().getFullYear();
}
