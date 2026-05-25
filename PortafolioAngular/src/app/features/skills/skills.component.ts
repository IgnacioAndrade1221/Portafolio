import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { PORTFOLIO_DATA } from '../../core/data/portafolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="py-12 border-t border-gray-200 dark:border-gray-800">
      <h3 class="text-3xl font-bold mb-8">
        {{ i18n.currentLang() === 'es' ? 'Stack Tecnológico' : 'Tech Stack' }}
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400">Core</h4>
          <div class="flex flex-wrap gap-2">
            @for (skill of mainSkills; track skill.name) {
              <span class="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800/50">
                {{ skill.name }}
              </span>
            }
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Complementary</h4>
          <div class="flex flex-wrap gap-2">
            @for (skill of compSkills; track skill.name) {
              <span class="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700">
                {{ skill.name }}
              </span>
            }
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Cloud & Tools</h4>
          <div class="flex flex-wrap gap-2">
            @for (skill of toolSkills; track skill.name) {
              <span class="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700">
                {{ skill.name }}
              </span>
            }
          </div>
        </div>

      </div>
    </section>
  `
})
export class SkillsComponent {
  i18n = inject(I18nService);
  
  mainSkills = PORTFOLIO_DATA.skills.filter(s => s.category === 'main');
  compSkills = PORTFOLIO_DATA.skills.filter(s => s.category === 'complementary');
  toolSkills = PORTFOLIO_DATA.skills.filter(s => s.category === 'tools');
}