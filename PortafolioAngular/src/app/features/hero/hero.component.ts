import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { PORTFOLIO_DATA } from '../../core/data/portafolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="relative min-h-[90vh] flex flex-col justify-center pt-10 pb-24">

      <div class="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true"
           style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 64px 64px;">
      </div>

      <div class="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        <div class="flex-1 space-y-8 text-center lg:text-left">

          <div class="space-y-2">
            <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none">
              <span class="block text-white/95">{{ data.name.split(' ')[0] }}</span>
              <span class="block" style="background: linear-gradient(135deg, #a5b4fc 0%, #818cf8 60%, #6366f1 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                {{ data.name.split(' ').slice(1).join(' ') }}
              </span>
            </h1>
          </div>

          <p class="text-lg sm:text-xl text-indigo-300/90 font-medium max-w-lg mx-auto lg:mx-0 leading-snug">
            {{ i18n.t(data.title) }}
          </p>

          <p class="text-base text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {{ i18n.t(data.about) }}
          </p>

          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <a [href]="data.contact.linkedin" target="_blank" rel="noopener noreferrer"
               class="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300"
               style="background: linear-gradient(135deg, #6366f1, #4f46e5); box-shadow: 0 0 20px rgba(99,102,241,0.3);"
               onmouseover="this.style.boxShadow='0 0 30px rgba(99,102,241,0.5)'"
               onmouseout="this.style.boxShadow='0 0 20px rgba(99,102,241,0.3)'">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            <a [href]="data.contact.github" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-gray-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.479 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.797 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

            <a [href]="data.contact.cvUrl" download
               class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-gray-400 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
              </svg>
              {{ i18n.currentLang() === 'es' ? 'Descargar CV' : 'Download CV' }}
            </a>
          </div>
        </div>

        <div class="flex-shrink-0 relative">
          <div class="absolute inset-0 rounded-2xl blur-2xl opacity-40"
               style="background: linear-gradient(135deg, #6366f1, #4f46e5); transform: scale(1.1);">
          </div>
          <div class="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden"
               style="border: 1px solid rgba(99,102,241,0.3); box-shadow: 0 25px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05);">
            <img src="assets/profile.jpg"
                 alt="Foto de {{ data.name }}"
                 class="w-full h-full object-cover transition-transform duration-700 hover:scale-105">
          </div>
        </div>

      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
        <span class="text-[10px] tracking-widest uppercase text-gray-500">Scroll</span>
        <div class="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </div>

    </section>
  `
})
export class HeroComponent {
  i18n = inject(I18nService);
  data = PORTFOLIO_DATA;
}
