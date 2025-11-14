# 🎸 Rockenroll

**Complete copy of Soul Design System** - A comprehensive React component library based on Emplifi's Soul Design System.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/react-18.0%2B-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.2%2B-blue)

## 🌐 Live Demo

**[View Component Showcase →](https://VÁŠ-USERNAME.github.io/rockenroll/)**

Interactive Storybook-like demo with all components!

## ✨ Features

- 🎨 **15+ Production-Ready Components** - Button, Avatar, Badge, Modal, Input, Radio, Link, Container and more
- 🔧 **Custom Hooks** - useAutofocus, usePreviousValue, useToggle, useUniqId
- 🎯 **TypeScript Support** - Full type definitions included
- 📦 **Tree-shakeable** - Import only what you need
- 🌈 **CSS Variables** - Easy theming and customization
- ♿ **Accessible** - ARIA-compliant components
- 📱 **Responsive** - Mobile-first design
- 🚀 **Zero Dependencies** - Lightweight and fast
- 📚 **Interactive Demo** - Storybook-like component showcase

## 📦 Installation

```bash
npm install rockenroll
```

```bash
yarn add rockenroll
```

```bash
pnpm add rockenroll
```

## 🚀 Quick Start

```tsx
import { Button, Avatar, Badge, Modal } from 'rockenroll';

function App() {
  return (
    <div>
      <Button variant="primary">Click me!</Button>
      <Avatar name="John Doe" size="medium" status="online" />
      <Badge variant="success">New</Badge>
    </div>
  );
}
```

## 📚 All Components

| Component | Description |
|-----------|-------------|
| **Avatar** | User avatars with initials, images, and status indicators |
| **Badge** | Labels and tags with various styles |
| **Banner** | Alert banners for notifications |
| **Button** | Primary UI button with variants and states |
| **Checkbox** | Checkbox with indeterminate state |
| **Container** | Responsive content container |
| **Divider** | Visual content separator |
| **Input** | Text input with validation |
| **Link** | Anchor links with variants |
| **Modal** | Overlay dialogs |
| **ProgressBar** | Progress indicators |
| **Radio** | Radio button groups |
| **Spinner** | Loading spinners |
| **Toggle** | Switch/toggle component |
| **Tooltip** | Contextual tooltips |

## 📖 Component Examples

### Button
```tsx
<Button variant="primary" size="medium" loading={false}>
  Click me
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost'`
- `size`: `'small' | 'medium' | 'large'`
- `loading`: `boolean`
- `fullWidth`: `boolean`
- `iconBefore`, `iconAfter`: `React.ReactNode`

### Avatar
```tsx
<Avatar 
  name="John Doe" 
  size="medium" 
  status="online"
  shape="circle"
/>
```

**Props:**
- `name`: `string` - Name for initials fallback
- `src`: `string` - Image source
- `size`: `'small' | 'medium' | 'large' | 'xlarge'`
- `shape`: `'circle' | 'square'`
- `status`: `'online' | 'offline' | 'busy' | 'away'`

### Badge
```tsx
<Badge variant="success" size="medium">
  New Feature
</Badge>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'`
- `size`: `'small' | 'medium' | 'large'`
- `dot`: `boolean`

### Input
```tsx
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error={false}
  helperText="We'll never share your email"
  fullWidth
/>
```

### Modal
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  size="medium"
  footer={
    <>
      <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
      <Button onClick={handleConfirm}>Confirm</Button>
    </>
  }
>
  <p>Modal content goes here</p>
</Modal>
```

### Checkbox
```tsx
<Checkbox
  label="I agree to terms"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
```

### Toggle
```tsx
<Toggle
  label="Enable notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
```

### Spinner
```tsx
<Spinner size="medium" color="primary" />
```

### Tooltip
```tsx
<Tooltip content="Helpful tip" placement="top">
  <Button>Hover me</Button>
</Tooltip>
```

### ProgressBar
```tsx
<ProgressBar 
  value={75} 
  max={100} 
  variant="success"
  showLabel 
/>
```

### Banner
```tsx
<Banner variant="info" onClose={handleClose}>
  This is an informational message
</Banner>
```

### Divider
```tsx
<Divider orientation="horizontal" />
```

## 🪝 Custom Hooks

### useAutofocus
```tsx
const inputRef = useAutofocus<HTMLInputElement>();
return <input ref={inputRef} />;
```

### usePreviousValue
```tsx
const [count, setCount] = useState(0);
const previousCount = usePreviousValue(count);
```

### useToggle
```tsx
const [isOpen, toggle, setIsOpen] = useToggle(false);
```

### useUniqId
```tsx
const id = useUniqId('my-component');
```

## 🎨 Theming

Customize the design system using CSS variables:

```css
:root {
  --soul-color-primary: #0066ff;
  --soul-color-success: #28a745;
  --soul-color-danger: #dc3545;
  
  --soul-font-family: 'Your Font', sans-serif;
  --soul-radius-md: 8px;
  --soul-spacing-md: 1rem;
}
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build

# Build demo
npm run demo:build

# Preview demo
npm run preview
```

## 📖 Demo

Check out the live demo with all components:

```bash
npm run demo:dev
```

Open [http://localhost:5173](http://localhost:5173) to view the demo.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © 2025

## 🙏 Credits

This library is a recreation of [Soul Design System](https://soul.emplifi.io/) by Emplifi.

---

Made with ❤️ by Jan Čermák

