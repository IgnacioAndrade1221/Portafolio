import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { PORTFOLIO_DATA } from '../../core/data/portafolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="py-20 section-divider">

      <div class="flex items-center gap-4 mb-12">
        <h3 class="text-2xl font-bold text-white/90">
          {{ i18n.currentLang() === 'es' ? 'Proyectos' : 'Projects' }}
        </h3>
        <div class="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        @for (project of data.projects; track project.title) {
          <div class="group relative flex flex-col rounded-2xl overflow-hidden card-glass hover:border-white/10 transition-all duration-500 hover:-translate-y-1">

            @if (project.videoUrl) {
              <div class="relative w-full aspect-video overflow-hidden bg-black/40">
                <video
                  class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  [src]="project.videoUrl"
                  [muted]="true"
                  loop
                  autoplay
                  playsinline>
                </video>
                <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#12121a] to-transparent"></div>
              </div>
            } @else {
              <div class="relative w-full aspect-video flex items-center justify-center overflow-hidden"
                   style="background: linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.05));">
                <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 32px 32px;"></div>
                <div class="relative flex flex-col items-center gap-3 text-center px-6">
                  <div class="w-12 h-12 rounded-2xl flex items-center justify-center"
                       style="background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.25);">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-xs font-medium text-gray-600 tracking-wide">{{ i18n.currentLang() === 'es' ? 'Demo no disponible' : 'Demo not available' }}</span>
                </div>
                <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#12121a] to-transparent"></div>
              </div>
            }

            <div class="flex flex-col flex-1 p-6 gap-4">

              <h4 class="text-lg font-bold text-white/95 leading-tight">
                {{ project.title }}
              </h4>

              <p class="text-gray-400 leading-relaxed text-sm flex-1">
                {{ i18n.t(project.description) }}
              </p>

              <div class="flex flex-wrap gap-1.5">
                @for (tech of project.techStack; track tech) {
                  <span class="text-[11px] font-semibold px-2.5 py-1 rounded-md text-indigo-300"
                        style="background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2);">
                    {{ tech }}
                  </span>
                }
              </div>

              @if (project.githubUrl) {
                <a
                  [href]="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 self-start text-xs font-semibold text-gray-400 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] px-4 py-2 rounded-lg transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.479 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.797 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {{ i18n.currentLang() === 'es' ? 'Ver Repositorio' : 'View Repository' }}
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              }

            </div>
          </div>
        }
      </div>

    </section>
  `
})
export class ProjectsComponent {
  i18n = inject(I18nService);
  data = PORTFOLIO_DATA;
}
