import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { PORTFOLIO_DATA } from '../../core/data/portafolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="py-20 section-divider">

      <div class="flex items-center gap-4 mb-12">
        <h3 class="text-2xl font-bold text-white/90">
          {{ i18n.currentLang() === 'es' ? 'Experiencia Laboral' : 'Work Experience' }}
        </h3>
        <div class="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      <div class="relative">
        <!-- Timeline vertical line -->
        <div class="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/10 to-transparent" aria-hidden="true"></div>

        <div class="space-y-10 pl-8">
          @for (exp of data.experience; track exp.company; let i = $index) {
            <div class="group relative">

              <div class="absolute -left-8 top-1.5 flex items-center justify-center">
                <div class="w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-[#0a0a0f] group-hover:ring-indigo-500/20 transition-all duration-300"></div>
              </div>

              <div class="rounded-2xl p-6 card-glass group-hover:border-white/10 transition-all duration-300">

                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h4 class="text-lg font-bold text-white/95 leading-tight">{{ i18n.t(exp.role) }}</h4>
                    <p class="text-indigo-400 font-medium mt-0.5">{{ exp.company }}</p>
                  </div>
                  <span class="inline-flex self-start text-xs font-semibold text-gray-500 bg-white/[0.04] border border-white/[0.07] px-3 py-1.5 rounded-lg whitespace-nowrap">
                    {{ i18n.t(exp.period) }}
                  </span>
                </div>

                <p class="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {{ i18n.t(exp.description) }}
                </p>

              </div>
            </div>
          }
        </div>
      </div>

    </section>
  `
})
export class ExperienceComponent {
  i18n = inject(I18nService);
  data = PORTFOLIO_DATA;
}
