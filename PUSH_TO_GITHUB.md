# 🚀 PUSH TO GITHUB - Návod Krok Za Krokem

## ⚡ Quick Start (5 minut)

### 1️⃣ Vytvořte GitHub Repository

Otevřete: **https://github.com/new**

- **Repository name**: `rockenroll`
- **Description**: `Soul Design System components - Interactive component library`
- **Public** ✅
- **NEZAŠKRTÁVEJTE** "Add a README file"

Klikněte **Create repository**

### 2️⃣ Nahrajte Kód

Zkopírujte a spusťte (nahraďte `YOUR-USERNAME`):

```bash
cd /Users/jancermak/dev/rockenroll

git remote add origin https://github.com/YOUR-USERNAME/rockenroll.git

git push -u origin main
```

### 3️⃣ Aktivujte GitHub Pages

1. Jděte na `https://github.com/YOUR-USERNAME/rockenroll`
2. **Settings** → **Pages**
3. **Source**: `GitHub Actions`
4. ✅ Hotovo!

### 4️⃣ Počkejte na Deploy (2-3 minuty)

1. **Actions** tab
2. Čekejte na zelený ✅ "Deploy to GitHub Pages"
3. Váš web je live!

## 🌐 Výsledek

**Repository**: `https://github.com/YOUR-USERNAME/rockenroll`

**Live Demo**: `https://YOUR-USERNAME.github.io/rockenroll/`

---

## 📊 Co Máte

### ✅ Komponenty (15)
Avatar, Badge, Banner, Button, Checkbox, Container, Divider, Input, Link, Modal, ProgressBar, Radio, Spinner, Toggle, Tooltip

### ✅ Hooks (4)
useAutofocus, usePreviousValue, useToggle, useUniqId

### ✅ Features
- 🎨 Storybook-like demo with sidebar navigation
- 📱 Responsive design
- 🚀 Auto-deploy to GitHub Pages
- 📖 Complete documentation
- 💻 TypeScript support
- 🌈 CSS variables for theming

## 📝 Další Úpravy

Po nahrání můžete:

1. **Přidat další komponenty**
   ```bash
   # Přidejte novou komponentu
   git add .
   git commit -m "Add NewComponent"
   git push
   # Automaticky se deployne na GitHub Pages!
   ```

2. **Upravit demo**
   - Editujte `demo/ComponentShowcase.tsx`
   - Commit & push → auto-deploy

3. **Změnit styling**
   - Editujte `src/styles/variables.css`
   - Commit & push → auto-deploy

## ❓ Problémy?

### GitHub Pages nefunguje?
- Počkejte 5-10 minut po prvním push
- Zkontrolujte Actions tab (mělo by být zelené ✅)
- Settings → Pages musí být nastaveno na "GitHub Actions"

### Build selhává?
```bash
cd /Users/jancermak/dev/rockenroll
npm install
npm run demo:build
```

Pokud funguje lokálně, mělo by fungovat i na GitHubu.

## 📚 Dokumentace

- **README.md** - Hlavní dokumentace
- **DEPLOYMENT.md** - Podrobné deployment instrukce
- **COMPONENT_STATUS.md** - Stav všech komponent
- **GITHUB_SETUP.md** - Rozšířené GitHub instrukce

---

## 🎉 Gratulujeme!

Váš projekt je na GitHubu a má živé demo!

Sdílejte: `https://YOUR-USERNAME.github.io/rockenroll/`

Made with ❤️ by Jan Čermák

