import { Component, inject, signal, HostListener } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="sticky top-0 z-50 w-full">
      <div class="absolute inset-0 bg-[#0a0a0f]/85 backdrop-blur-xl border-b border-white/5"></div>

      <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div class="flex items-center justify-between h-16">

          <button (click)="scrollTo('hero')" class="font-bold text-lg tracking-tight cursor-pointer">
            <span class="text-indigo-400">Ignacio</span><span class="text-white/90"> Andrade</span>
          </button>

          <div class="hidden md:flex items-center gap-1">
            @for (link of navLinks(); track link.id) {
              <button
                (click)="scrollTo(link.id)"
                class="px-3 py-1.5 text-xs font-semibold tracking-wide text-gray-400 hover:text-white rounded-md hover:bg-white/5 transition-all duration-200">
                {{ i18n.currentLang() === 'es' ? link.labelEs : link.labelEn }}
              </button>
            }
          </div>

          <div class="flex items-center gap-1">
            <button
              (click)="i18n.toggleLanguage()"
              class="px-3 py-1.5 text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-white rounded-md hover:bg-white/5 transition-all duration-200">
              {{ i18n.currentLang() === 'es' ? 'EN' : 'ES' }}
            </button>

            <button
              (click)="theme.toggleTheme()"
              class="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              [attr.aria-label]="theme.isDarkMode() ? 'Modo claro' : 'Modo oscuro'">
              @if (theme.isDarkMode()) {
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>
              } @else {
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
                </svg>
              }
            </button>

            <button
              (click)="toggleMobile()"
              class="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label="Menú">
              @if (mobileOpen()) {
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              } @else {
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              }
            </button>
          </div>
        </div>

        @if (mobileOpen()) {
          <div class="md:hidden border-t border-white/5 py-3 space-y-0.5">
            @for (link of navLinks(); track link.id) {
              <button
                (click)="scrollTo(link.id)"
                class="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
                {{ i18n.currentLang() === 'es' ? link.labelEs : link.labelEn }}
              </button>
            }
          </div>
        }
      </div>
    </nav>
  `
})
export class NavbarComponent {
  theme = inject(ThemeService);
  i18n = inject(I18nService);

  mobileOpen = signal(false);

  navLinks = signal([
    { id: 'skills',     labelEs: 'Stack',       labelEn: 'Stack' },
    { id: 'experience', labelEs: 'Experiencia', labelEn: 'Experience' },
    { id: 'projects',   labelEs: 'Proyectos',   labelEn: 'Projects' },
    { id: 'education',  labelEs: 'Educación',   labelEn: 'Education' },
    { id: 'contact',    labelEs: 'Contacto',    labelEn: 'Contact' },
  ]);

  toggleMobile() {
    this.mobileOpen.update(v => !v);
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const offset = 72; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    this.mobileOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  closeMobile() {
    this.mobileOpen.set(false);
  }
}
