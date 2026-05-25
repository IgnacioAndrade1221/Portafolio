import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { PORTFOLIO_DATA } from '../../core/data/portafolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section class="py-12 border-t border-gray-200 dark:border-gray-800">
      <h3 class="text-3xl font-bold mb-10">
        {{ i18n.currentLang() === 'es' ? 'Experiencia Laboral' : 'Work Experience' }}
      </h3>

      <div class="space-y-12">
        @for (exp of data.experience; track exp.company) {
          <div class="relative border-l-2 border-gray-200 dark:border-gray-800 pl-6 ml-3 md:ml-0 md:border-none md:pl-0">
            
            <div class="md:hidden absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5 ring-4 ring-white dark:ring-gray-950"></div>

            <div class="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-4">
              <div>
                <h4 class="text-xl font-bold text-gray-900 dark:text-white">{{ i18n.t(exp.role) }}</h4>
                <div class="text-lg font-medium text-blue-600 dark:text-blue-400">{{ exp.company }}</div>
              </div>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md self-start">
                {{ i18n.t(exp.period) }}
              </div>
            </div>
            
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
              {{ i18n.t(exp.description) }}
            </p>
          </div>
        }
      </div>
    </section>
  `
})
export class ExperienceComponent {
  i18n = inject(I18nService);
  data = PORTFOLIO_DATA;
}