import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { PORTFOLIO_DATA } from '../../core/data/portafolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-10 pb-20">
      
      <div class="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          {{ data.name }}
        </h1>
        <h2 class="text-xl sm:text-2xl font-medium text-blue-600 dark:text-blue-400">
          {{ i18n.t(data.title) }}
        </h2>
        <p class="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          {{ i18n.t(data.about) }}
        </p>
        
        <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
          <a [href]="data.contact.linkedin" target="_blank" rel="noopener noreferrer" 
             class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors">
            LinkedIn
          </a>
          <a [href]="data.contact.github" target="_blank" rel="noopener noreferrer" 
             class="px-6 py-3 bg-gray-900 hover:bg-black dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-medium rounded-lg shadow-sm transition-colors">
            GitHub
          </a>
          <a [href]="data.contact.cvUrl" download 
             class="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors">
            {{ i18n.currentLang() === 'es' ? 'Descargar CV' : 'Download CV' }}
          </a>
        </div>
      </div>

      <div class="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 relative flex-shrink-0">
        <img src="assets/profile.jpg" alt="Foto de {{ data.name }}" 
             class="rounded-2xl object-cover w-full h-full shadow-2xl border-4 border-white dark:border-gray-800 rotate-3 hover:rotate-0 transition-transform duration-300">
      </div>
      
    </section>
  `
})
export class HeroComponent {
  i18n = inject(I18nService);
  data = PORTFOLIO_DATA;
}