import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { PORTFOLIO_DATA } from '../../core/data/portafolio.data';

@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section id="education" class="py-20 section-divider">

      <div class="flex items-center gap-4 mb-12">
        <h3 class="text-2xl font-bold text-white/90">
          {{ i18n.currentLang() === 'es' ? 'Educación' : 'Education' }}
        </h3>
        <div class="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      <div class="relative pl-8">

        <!-- Timeline line -->
        <div class="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/40 to-transparent" aria-hidden="true"></div>

        <!-- Timeline dot -->
        <div class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-violet-500 ring-4 ring-[#0a0a0f]" aria-hidden="true"></div>

        <div class="rounded-2xl p-6 card-glass">

          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
            <div>
              <h4 class="text-lg font-bold text-white/95 leading-tight">
                {{ i18n.t(data.education.degree) }}
              </h4>
              <p class="text-violet-400 font-medium mt-0.5">{{ data.education.institution }}</p>
            </div>
            <span class="inline-flex self-start text-xs font-semibold text-gray-500 bg-white/[0.04] border border-white/[0.07] px-3 py-1.5 rounded-lg whitespace-nowrap">
              {{ i18n.t(data.education.period) }}
            </span>
          </div>

          <div class="flex flex-wrap gap-2">
            <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
                  style="background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.2); color: #86efac;">
              <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              {{ i18n.currentLang() === 'es' ? 'En curso' : 'In progress' }}
            </span>
            <span class="text-xs font-medium px-3 py-1.5 rounded-lg text-gray-400"
                  style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
              {{ i18n.currentLang() === 'es' ? '4to año' : '4th year' }}
            </span>
          </div>

        </div>
      </div>

    </section>
  `
})
export class EducationComponent {
  i18n = inject(I18nService);
  data = PORTFOLIO_DATA;
}
