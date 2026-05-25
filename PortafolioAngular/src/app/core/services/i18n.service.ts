import { Injectable, signal } from '@angular/core';
import { Language, Translation } from '../models/portafolio.Interfaces';

@Injectable({ providedIn: 'root' })
export class I18nService {
  currentLang = signal<Language>('es');

  toggleLanguage() {
    this.currentLang.update(lang => lang === 'es' ? 'en' : 'es');
  }

  t(translationObj: Translation): string {
    return translationObj[this.currentLang()];
  }
}