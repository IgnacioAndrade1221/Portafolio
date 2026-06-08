import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { PORTFOLIO_DATA } from '../../core/data/portafolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="py-20 section-divider">

      <div class="flex items-center gap-4 mb-12">
        <h3 class="text-2xl font-bold text-white/90">
          {{ i18n.currentLang() === 'es' ? 'Stack Tecnológico' : 'Tech Stack' }}
        </h3>
        <div class="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <!-- Core -->
        <div class="group relative rounded-2xl p-6 card-glass hover:border-indigo-500/30 transition-all duration-300">
          <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
               style="background: linear-gradient(135deg, rgba(99,102,241,0.05), transparent);">
          </div>
          <div class="relative">
            <div class="flex items-center gap-2 mb-5">
              <div class="w-1.5 h-5 rounded-full bg-indigo-500"></div>
              <h4 class="text-xs font-bold tracking-[0.2em] uppercase text-indigo-400">Core</h4>
            </div>
            <div class="flex flex-wrap gap-2">
              @for (skill of mainSkills; track skill.name) {
                <span class="px-3 py-1.5 text-xs font-semibold rounded-lg text-indigo-200 transition-colors duration-200 hover:text-white"
                      style="background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.25);">
                  {{ skill.name }}
                </span>
              }
            </div>
          </div>
        </div>

        <!-- Complementary -->
        <div class="group relative rounded-2xl p-6 card-glass hover:border-violet-500/20 transition-all duration-300">
          <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
               style="background: linear-gradient(135deg, rgba(139,92,246,0.04), transparent);">
          </div>
          <div class="relative">
            <div class="flex items-center gap-2 mb-5">
              <div class="w-1.5 h-5 rounded-full bg-violet-500"></div>
              <h4 class="text-xs font-bold tracking-[0.2em] uppercase text-violet-400">
                {{ i18n.currentLang() === 'es' ? 'Complementario' : 'Complementary' }}
              </h4>
            </div>
            <div class="flex flex-wrap gap-2">
              @for (skill of compSkills; track skill.name) {
                <span class="px-3 py-1.5 text-xs font-medium rounded-lg text-gray-300 hover:text-white transition-colors duration-200"
                      style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
                  {{ skill.name }}
                </span>
              }
            </div>
          </div>
        </div>

        <!-- Tools -->
        <div class="group relative rounded-2xl p-6 card-glass hover:border-sky-500/20 transition-all duration-300">
          <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
               style="background: linear-gradient(135deg, rgba(14,165,233,0.04), transparent);">
          </div>
          <div class="relative">
            <div class="flex items-center gap-2 mb-5">
              <div class="w-1.5 h-5 rounded-full bg-sky-500"></div>
              <h4 class="text-xs font-bold tracking-[0.2em] uppercase text-sky-400">Cloud & Tools</h4>
            </div>
            <div class="flex flex-wrap gap-2">
              @for (skill of toolSkills; track skill.name) {
                <span class="px-3 py-1.5 text-xs font-medium rounded-lg text-gray-300 hover:text-white transition-colors duration-200"
                      style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
                  {{ skill.name }}
                </span>
              }
            </div>
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
