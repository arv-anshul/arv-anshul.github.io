function themeInit() {
  const STORAGE_KEY = "colorTheme";

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function applyTheme(theme) {
    const resolved = theme === "system" || !theme ? getSystemTheme() : theme;
    document.documentElement.classList.toggle("dark", resolved === "dark");
    document.documentElement.setAttribute("data-theme", resolved);
  }

  applyTheme(getStoredTheme());

  // System preference change listener
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const stored = getStoredTheme();
      if (!stored || stored === "system") {
        applyTheme("system");
      }
    });

  // Global API
  window.__theme = {
    get: getStoredTheme,
    set(theme) {
      localStorage.setItem(STORAGE_KEY, theme);
      applyTheme(theme);
    },
    toggle() {
      const isDark = document.documentElement.classList.contains("dark");
      this.set(isDark ? "light" : "dark");
    },
  };
}

themeInit();
document.addEventListener("astro:after-swap", themeInit);
