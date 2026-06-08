import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { PORTFOLIO_DATA } from '../../core/data/portafolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="py-20 section-divider">

      <div class="flex items-center gap-4 mb-4">
        <h3 class="text-2xl font-bold text-white/90">
          {{ i18n.currentLang() === 'es' ? 'Contacto' : 'Contact' }}
        </h3>
        <div class="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

        <a [href]="'mailto:' + data.contact.email"
           class="group flex items-center gap-4 p-5 rounded-2xl card-glass hover:border-indigo-500/25 transition-all duration-300">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
               style="background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.2);">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </div>
          <div class="min-w-0">
            <p class="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-1">Email</p>
            <p class="text-sm font-semibold text-gray-300 group-hover:text-indigo-300 transition-colors duration-200 truncate">
              {{ data.contact.email }}
            </p>
          </div>
        </a>

        <div class="flex items-center gap-4 p-5 rounded-2xl card-glass">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
               style="background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.15);">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-indigo-400/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="min-w-0">
            <p class="text-[10px] font-bold tracking-widest uppercase text-gray-600 mb-1">
              {{ i18n.currentLang() === 'es' ? 'Teléfono' : 'Phone' }}
            </p>
            <p class="text-sm font-semibold text-gray-300">
              {{ data.contact.phone }}
            </p>
          </div>
        </div>

      </div>

      <div class="flex flex-wrap gap-3">
        <a [href]="data.contact.linkedin" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
           style="background: linear-gradient(135deg, #6366f1, #4f46e5); box-shadow: 0 0 20px rgba(99,102,241,0.25);"
           onmouseover="this.style.boxShadow='0 0 30px rgba(99,102,241,0.45)'"
           onmouseout="this.style.boxShadow='0 0 20px rgba(99,102,241,0.25)'">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>

        <a [href]="data.contact.github" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.479 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.797 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>

    </section>
  `
})
export class ContactComponent {
  i18n = inject(I18nService);
  data = PORTFOLIO_DATA;
}
