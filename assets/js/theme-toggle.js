(function() {
  'use strict';

  const ThemeManager = {
    STORAGE_KEY: 'theme-preference',
    THEMES: ['light', 'dark', 'auto'],

    init() {
      this.loadTheme();
      this.setupToggleButton();
      this.setupSystemListener();
    },

    getSavedTheme() {
      try {
        return localStorage.getItem(this.STORAGE_KEY) || 'auto';
      } catch (e) {
        return 'auto';
      }
    },

    saveTheme(theme) {
      try {
        localStorage.setItem(this.STORAGE_KEY, theme);
      } catch (e) {
        console.warn('Failed to save theme preference:', e);
      }
    },

    getSystemTheme() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    },

    applyTheme(theme) {
      const html = document.documentElement;
      const actualTheme = theme === 'auto' ? this.getSystemTheme() : theme;

      if (theme === 'auto') {
        html.removeAttribute('data-theme');
      } else {
        html.setAttribute('data-theme', actualTheme);
      }

      this.updateToggleButton(theme);
    },

    cycleTheme() {
      const currentTheme = this.getSavedTheme();
      const currentIndex = this.THEMES.indexOf(currentTheme);
      const nextIndex = (currentIndex + 1) % this.THEMES.length;
      const nextTheme = this.THEMES[nextIndex];

      this.saveTheme(nextTheme);
      this.applyTheme(nextTheme);
    },

    loadTheme() {
      const savedTheme = this.getSavedTheme();
      this.applyTheme(savedTheme);
    },

    setupToggleButton() {
      const toggle = document.querySelector('.theme-toggle');
      if (!toggle) return;

      toggle.addEventListener('click', () => {
        this.cycleTheme();
      });
    },

    setupSystemListener() {
      if (!window.matchMedia) return;

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', () => {
        if (this.getSavedTheme() === 'auto') {
          this.applyTheme('auto');
        }
      });
    },

    updateToggleButton(theme) {
      const toggle = document.querySelector('.theme-toggle');
      if (!toggle) return;

      const icon = toggle.querySelector('.theme-toggle-icon');
      const label = toggle.querySelector('.theme-toggle-label');

      if (icon && label) {
        const iconMap = {
          'light': '☀️',
          'dark': '🌙',
          'auto': '🔄'
        };

        const labelMap = {
          'light': 'Light',
          'dark': 'Dark',
          'auto': 'Auto'
        };

        icon.textContent = iconMap[theme];
        label.textContent = labelMap[theme];
      }

      toggle.setAttribute('aria-label', `Current theme: ${theme}. Click to cycle themes.`);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
  } else {
    ThemeManager.init();
  }
})();
