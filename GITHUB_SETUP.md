# 🚀 GitHub Setup Guide

Váš projekt **Rockenroll** je připraven! Nyní ho nahrajte na GitHub.

## Krok 1: Vytvořte GitHub Repository

1. Jděte na [github.com/new](https://github.com/new)
2. **Repository name**: `rockenroll`
3. **Description**: "Complete copy of Soul Design System - React component library"
4. **Visibility**: Public ✅ (nebo Private)
5. **NEZAŠKRTÁVEJTE** "Add a README file" (už máme)
6. Klikněte **"Create repository"**

## Krok 2: Nahrajte kód na GitHub

Zkopírujte a spusťte tyto příkazy (nahraďte `VÁŠ-USERNAME` vaším GitHub uživatelským jménem):

```bash
cd /Users/jancermak/dev/rockenroll

# Přidejte GitHub jako remote
git remote add origin https://github.com/VÁŠ-USERNAME/rockenroll.git

# Nahrajte kód
git branch -M main
git push -u origin main
```

## Krok 3: (Volitelné) Aktivace GitHub Pages

Pokud chcete publikovat demo:

1. Jděte na vaše repository: `https://github.com/VÁŠ-USERNAME/rockenroll`
2. Klikněte na **Settings**
3. V levém menu klikněte na **Pages**
4. V sekci "Build and deployment":
   - **Source**: Změňte na **GitHub Actions**
5. Vytvořte soubor `.github/workflows/deploy.yml`:

```yaml
name: Deploy Demo

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run demo:build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist-demo
```

## 🎉 Hotovo!

Váš projekt je nyní na GitHubu:
- Repository: `https://github.com/VÁŠ-USERNAME/rockenroll`
- Demo (s GitHub Pages): `https://VÁŠ-USERNAME.github.io/rockenroll/`

## 📦 Co projekt obsahuje

✅ **13 React komponent**:
- Avatar, Badge, Banner, Button, Checkbox
- Divider, Input, Modal, ProgressBar, Spinner
- Toggle, Tooltip

✅ **4 Custom Hooks**:
- useAutofocus, usePreviousValue, useToggle, useUniqId

✅ **Utility funkce**:
- classNames, debounce

✅ **Styles**:
- CSS Variables
- Global styles

✅ **Demo aplikace**:
- Interaktivní showcase všech komponent

✅ **Dokumentace**:
- README.md s příklady použití
- TypeScript definice

## 🔧 Další kroky

1. **Instalace závislostí**:
   ```bash
   npm install
   ```

2. **Spuštění dev serveru**:
   ```bash
   npm run dev
   ```

3. **Spuštění demo**:
   ```bash
   npm run demo:dev
   ```

4. **Build pro produkci**:
   ```bash
   npm run build
   ```

---

Made with ❤️ by Jan Čermák

