import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0 font-bold text-xl tracking-tight text-blue-600 dark:text-blue-400">
            Ignacio<span class="text-gray-900 dark:text-white">.dev</span>
          </div>
          
          <div class="flex items-center gap-4">
            <button (click)="i18n.toggleLanguage()" class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition">
              {{ i18n.currentLang() === 'es' ? 'EN' : 'ES' }}
            </button>
            
            <button (click)="theme.toggleTheme()" class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              @if(theme.isDarkMode()) {
                <span>☀️</span> } @else {
                <span>🌙</span>
              }
            </button>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  theme = inject(ThemeService);
  i18n = inject(I18nService);
}