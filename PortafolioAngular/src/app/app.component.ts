import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ExperienceComponent } from './features/experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, SkillsComponent, ExperienceComponent],
  template: `
    <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <app-navbar />
      
      <main class="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <app-hero />
        <app-skills />
        <app-experience />
      </main>
    </div>
  `
})
export class AppComponent {}