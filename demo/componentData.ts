import React from 'react';

export interface ComponentProp {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export interface ComponentExample {
  title: string;
  code: string;
  preview: React.ReactNode;
}

export interface ComponentDoc {
  id: string;
  name: string;
  category: string;
  description: string;
  props: ComponentProp[];
  examples: ComponentExample[];
}

export const categories = [
  'Getting Started',
  'Form Components',
  'Display Components',
  'Navigation',
  'Layout',
  'Interactive',
  'Feedback'
];

// This will be populated in Storybook.tsx with live examples
export const componentDocsTemplate: Omit<ComponentDoc, 'examples'>[] = [
  // FORM COMPONENTS
  {
    id: 'button',
    name: 'Button',
    category: 'Form Components',
    description: 'Buttons allow users to take actions and make choices with a single tap. They communicate actions that users can take.',
    props: [
      { name: 'variant', type: '"primary" | "secondary" | "danger" | "ghost"', default: '"primary"', description: 'Visual style variant of the button' },
      { name: 'size', type: '"small" | "medium" | "large"', default: '"medium"', description: 'Size of the button' },
      { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Makes button take full width of container' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button' },
      { name: 'onClick', type: '() => void', description: 'Click event handler' },
      { name: 'children', type: 'React.ReactNode', description: 'Button content' },
    ],
  },
  {
    id: 'input',
    name: 'Input',
    category: 'Form Components',
    description: 'Text input fields allow users to enter single-line text. They appear in forms and dialogs.',
    props: [
      { name: 'label', type: 'string', description: 'Label text displayed above input' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text shown when empty' },
      { name: 'type', type: 'string', default: '"text"', description: 'HTML input type attribute' },
      { name: 'error', type: 'boolean', default: 'false', description: 'Shows error state styling' },
      { name: 'errorMessage', type: 'string', description: 'Error message to display' },
      { name: 'helperText', type: 'string', description: 'Helper text below input' },
      { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Full width input' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
      { name: 'value', type: 'string', description: 'Controlled input value' },
      { name: 'onChange', type: '(e: ChangeEvent) => void', description: 'Change event handler' },
    ],
  },
  {
    id: 'textarea',
    name: 'Textarea',
    category: 'Form Components',
    description: 'Textarea allows users to enter multi-line text. Perfect for longer form inputs like comments or descriptions.',
    props: [
      { name: 'label', type: 'string', description: 'Label text' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text' },
      { name: 'error', type: 'boolean', default: 'false', description: 'Error state' },
      { name: 'errorMessage', type: 'string', description: 'Error message text' },
      { name: 'helperText', type: 'string', description: 'Helper text' },
      { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Full width' },
      { name: 'resize', type: '"none" | "vertical" | "horizontal" | "both"', default: '"vertical"', description: 'Resize behavior' },
      { name: 'rows', type: 'number', description: 'Number of visible rows' },
    ],
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    category: 'Form Components',
    description: 'Checkboxes allow users to select one or more items from a set. They can be used to turn an option on or off.',
    props: [
      { name: 'label', type: 'React.ReactNode', description: 'Checkbox label' },
      { name: 'checked', type: 'boolean', description: 'Checked state' },
      { name: 'onChange', type: '(checked: boolean) => void', description: 'Change handler' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
      { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Indeterminate state' },
    ],
  },
  {
    id: 'radio',
    name: 'Radio',
    category: 'Form Components',
    description: 'Radio buttons allow users to select a single option from a set of mutually exclusive choices.',
    props: [
      { name: 'label', type: 'React.ReactNode', description: 'Radio label' },
      { name: 'name', type: 'string', description: 'Radio group name' },
      { name: 'value', type: 'string', description: 'Radio value' },
      { name: 'checked', type: 'boolean', description: 'Checked state' },
      { name: 'onChange', type: '() => void', description: 'Change handler' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
    ],
  },
  {
    id: 'toggle',
    name: 'Toggle',
    category: 'Form Components',
    description: 'Toggle switches are best used for changing settings that take effect immediately.',
    props: [
      { name: 'checked', type: 'boolean', description: 'Toggle state' },
      { name: 'onChange', type: '(checked: boolean) => void', description: 'Change handler' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
      { name: 'label', type: 'string', description: 'Toggle label' },
    ],
  },
  {
    id: 'switch',
    name: 'Switch',
    category: 'Form Components',
    description: 'iOS-style switch component for toggling between two states.',
    props: [
      { name: 'label', type: 'React.ReactNode', description: 'Switch label' },
      { name: 'size', type: '"small" | "medium" | "large"', default: '"medium"', description: 'Switch size' },
      { name: 'variant', type: '"default" | "ios"', default: '"default"', description: 'Visual style' },
      { name: 'checked', type: 'boolean', description: 'Checked state' },
      { name: 'onChange', type: '(e: ChangeEvent) => void', description: 'Change handler' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
    ],
  },
  {
    id: 'select',
    name: 'Select',
    category: 'Form Components',
    description: 'Native select dropdown for choosing a single option from a list.',
    props: [
      { name: 'options', type: 'SelectOption[]', description: 'Array of options' },
      { name: 'label', type: 'string', description: 'Select label' },
      { name: 'value', type: 'string', description: 'Selected value' },
      { name: 'onChange', type: '(value: string) => void', description: 'Change handler' },
      { name: 'error', type: 'boolean', default: 'false', description: 'Error state' },
      { name: 'helperText', type: 'string', description: 'Helper text' },
      { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Full width' },
    ],
  },
  {
    id: 'dropdown',
    name: 'Dropdown',
    category: 'Form Components',
    description: 'Custom dropdown component with search and filtering capabilities.',
    props: [
      { name: 'options', type: 'DropdownOption[]', description: 'Array of options' },
      { name: 'value', type: 'string', description: 'Selected value' },
      { name: 'onChange', type: '(value: string) => void', description: 'Change handler' },
      { name: 'placeholder', type: 'string', default: '"Select option"', description: 'Placeholder text' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
      { name: 'error', type: 'boolean', default: 'false', description: 'Error state' },
      { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Full width' },
    ],
  },
  {
    id: 'slider',
    name: 'Slider',
    category: 'Form Components',
    description: 'Sliders allow users to make selections from a range of values.',
    props: [
      { name: 'label', type: 'string', description: 'Slider label' },
      { name: 'min', type: 'number', default: '0', description: 'Minimum value' },
      { name: 'max', type: 'number', default: '100', description: 'Maximum value' },
      { name: 'step', type: 'number', default: '1', description: 'Step increment' },
      { name: 'value', type: 'number', description: 'Current value' },
      { name: 'onChange', type: '(value: number) => void', description: 'Change handler' },
      { name: 'showValue', type: 'boolean', default: 'true', description: 'Show current value' },
      { name: 'marks', type: 'Mark[]', description: 'Marks along slider' },
    ],
  },
  {
    id: 'datepicker',
    name: 'DatePicker',
    category: 'Form Components',
    description: 'Date picker input for selecting dates from a calendar.',
    props: [
      { name: 'label', type: 'string', description: 'Label text' },
      { name: 'value', type: 'string', description: 'Selected date (ISO string)' },
      { name: 'onChange', type: '(value: string) => void', description: 'Change handler' },
      { name: 'min', type: 'string', description: 'Minimum date' },
      { name: 'max', type: 'string', description: 'Maximum date' },
      { name: 'error', type: 'boolean', default: 'false', description: 'Error state' },
      { name: 'helperText', type: 'string', description: 'Helper text' },
      { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Full width' },
    ],
  },
  {
    id: 'rating',
    name: 'Rating',
    category: 'Form Components',
    description: 'Star rating component for collecting user feedback and ratings.',
    props: [
      { name: 'value', type: 'number', default: '0', description: 'Current rating' },
      { name: 'max', type: 'number', default: '5', description: 'Maximum rating' },
      { name: 'onChange', type: '(value: number) => void', description: 'Change handler' },
      { name: 'readOnly', type: 'boolean', default: 'false', description: 'Read-only mode' },
      { name: 'size', type: '"small" | "medium" | "large"', default: '"medium"', description: 'Star size' },
      { name: 'precision', type: 'number', default: '1', description: 'Rating precision' },
    ],
  },

  // DISPLAY COMPONENTS
  {
    id: 'avatar',
    name: 'Avatar',
    category: 'Display Components',
    description: 'Avatars represent users or entities. They can display images, initials, or icons.',
    props: [
      { name: 'name', type: 'string', description: 'User name for initials' },
      { name: 'src', type: 'string', description: 'Image source URL' },
      { name: 'size', type: '"small" | "medium" | "large"', default: '"medium"', description: 'Avatar size' },
      { name: 'status', type: '"online" | "offline" | "busy" | "away"', description: 'Status indicator' },
    ],
  },
  {
    id: 'avatargroup',
    name: 'AvatarGroup',
    category: 'Display Components',
    description: 'Display multiple avatars in a compact group format with overflow indicator.',
    props: [
      { name: 'avatars', type: 'Avatar[]', description: 'Array of avatar data' },
      { name: 'max', type: 'number', default: '3', description: 'Maximum visible avatars' },
      { name: 'size', type: '"small" | "medium" | "large"', default: '"medium"', description: 'Avatar size' },
    ],
  },
  {
    id: 'badge',
    name: 'Badge',
    category: 'Display Components',
    description: 'Badges are used to highlight an item\'s status, count, or other short text for quick recognition.',
    props: [
      { name: 'children', type: 'React.ReactNode', description: 'Badge content' },
      { name: 'variant', type: '"primary" | "secondary" | "success" | "warning" | "error"', default: '"primary"', description: 'Badge color variant' },
      { name: 'size', type: '"small" | "medium"', default: '"medium"', description: 'Badge size' },
      { name: 'dot', type: 'boolean', default: 'false', description: 'Display as dot' },
    ],
  },
  {
    id: 'chip',
    name: 'Chip',
    category: 'Display Components',
    description: 'Chips are compact elements that represent an input, attribute, or action.',
    props: [
      { name: 'label', type: 'string', description: 'Chip text' },
      { name: 'variant', type: '"filled" | "outlined"', default: '"filled"', description: 'Visual style' },
      { name: 'color', type: '"primary" | "secondary" | "success" | "warning" | "error"', default: '"primary"', description: 'Chip color' },
      { name: 'size', type: '"small" | "medium"', default: '"medium"', description: 'Chip size' },
      { name: 'onDelete', type: '() => void', description: 'Delete handler' },
      { name: 'onClick', type: '() => void', description: 'Click handler' },
      { name: 'icon', type: 'React.ReactNode', description: 'Leading icon' },
    ],
  },
  {
    id: 'card',
    name: 'Card',
    category: 'Display Components',
    description: 'Cards contain content and actions about a single subject.',
    props: [
      { name: 'variant', type: '"default" | "outlined" | "elevated"', default: '"default"', description: 'Card style variant' },
      { name: 'padding', type: '"none" | "sm" | "md" | "lg"', default: '"md"', description: 'Internal padding' },
      { name: 'clickable', type: 'boolean', default: 'false', description: 'Clickable card' },
      { name: 'onClick', type: '() => void', description: 'Click handler' },
      { name: 'children', type: 'React.ReactNode', description: 'Card content' },
    ],
  },
  {
    id: 'alert',
    name: 'Alert',
    category: 'Display Components',
    description: 'Alerts display brief messages for the user without interrupting their use of the app.',
    props: [
      { name: 'variant', type: '"info" | "success" | "warning" | "error"', default: '"info"', description: 'Alert type' },
      { name: 'title', type: 'string', description: 'Alert title' },
      { name: 'children', type: 'React.ReactNode', description: 'Alert message' },
      { name: 'onClose', type: '() => void', description: 'Close handler' },
      { name: 'icon', type: 'React.ReactNode', description: 'Custom icon' },
    ],
  },
  {
    id: 'banner',
    name: 'Banner',
    category: 'Display Components',
    description: 'Banners display important messages at the top of a page or section.',
    props: [
      { name: 'variant', type: '"info" | "success" | "warning" | "error"', default: '"info"', description: 'Banner type' },
      { name: 'children', type: 'React.ReactNode', description: 'Banner content' },
      { name: 'onClose', type: '() => void', description: 'Close handler' },
      { name: 'action', type: 'React.ReactNode', description: 'Action button' },
    ],
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    category: 'Display Components',
    description: 'Tooltips display informative text when users hover over, focus on, or tap an element.',
    props: [
      { name: 'content', type: 'React.ReactNode', description: 'Tooltip content' },
      { name: 'children', type: 'React.ReactNode', description: 'Trigger element' },
      { name: 'position', type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: 'Tooltip position' },
      { name: 'delay', type: 'number', default: '200', description: 'Show delay in ms' },
    ],
  },
  {
    id: 'icon',
    name: 'Icon',
    category: 'Display Components',
    description: 'Icon component with built-in SVG icons for common UI elements.',
    props: [
      { name: 'name', type: 'string', description: 'Icon name' },
      { name: 'size', type: '"small" | "medium" | "large" | number', default: '"medium"', description: 'Icon size' },
      { name: 'color', type: 'string', description: 'Icon color' },
      { name: 'onClick', type: '() => void', description: 'Click handler' },
    ],
  },
  {
    id: 'skeletonloader',
    name: 'SkeletonLoader',
    category: 'Display Components',
    description: 'Skeleton screens provide a placeholder while content is loading.',
    props: [
      { name: 'variant', type: '"text" | "circular" | "rectangular"', default: '"text"', description: 'Skeleton shape' },
      { name: 'width', type: 'string | number', description: 'Skeleton width' },
      { name: 'height', type: 'string | number', description: 'Skeleton height' },
      { name: 'count', type: 'number', default: '1', description: 'Number of skeletons' },
    ],
  },
  {
    id: 'emptystate',
    name: 'EmptyState',
    category: 'Display Components',
    description: 'Empty states communicate that there\'s no data to display.',
    props: [
      { name: 'title', type: 'string', description: 'Title text' },
      { name: 'description', type: 'string', description: 'Description text' },
      { name: 'icon', type: 'React.ReactNode', description: 'Custom icon' },
      { name: 'action', type: 'React.ReactNode', description: 'Action button' },
    ],
  },
  {
    id: 'table',
    name: 'Table',
    category: 'Display Components',
    description: 'Tables display sets of data organized in rows and columns.',
    props: [
      { name: 'columns', type: 'TableColumn[]', description: 'Column definitions' },
      { name: 'data', type: 'any[]', description: 'Table data' },
      { name: 'striped', type: 'boolean', default: 'false', description: 'Striped rows' },
      { name: 'bordered', type: 'boolean', default: 'false', description: 'Table borders' },
      { name: 'hoverable', type: 'boolean', default: 'true', description: 'Hover effect' },
      { name: 'compact', type: 'boolean', default: 'false', description: 'Compact spacing' },
    ],
  },

  // NAVIGATION
  {
    id: 'link',
    name: 'Link',
    category: 'Navigation',
    description: 'Links allow users to navigate to different pages or sections.',
    props: [
      { name: 'href', type: 'string', description: 'Link destination' },
      { name: 'variant', type: '"primary" | "secondary" | "danger"', default: '"primary"', description: 'Link style' },
      { name: 'underline', type: '"none" | "hover" | "always"', default: '"hover"', description: 'Underline behavior' },
      { name: 'external', type: 'boolean', default: 'false', description: 'External link (opens in new tab)' },
      { name: 'children', type: 'React.ReactNode', description: 'Link text' },
    ],
  },
  {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    category: 'Navigation',
    description: 'Breadcrumbs show the current page location within a navigational hierarchy.',
    props: [
      { name: 'items', type: 'BreadcrumbItem[]', description: 'Breadcrumb items' },
      { name: 'separator', type: 'React.ReactNode', default: '"/"', description: 'Separator element' },
    ],
  },
  {
    id: 'tabs',
    name: 'Tabs',
    category: 'Navigation',
    description: 'Tabs organize content across different screens and views.',
    props: [
      { name: 'items', type: 'TabItem[]', description: 'Tab items' },
      { name: 'defaultTab', type: 'string', description: 'Default active tab' },
      { name: 'onChange', type: '(tabId: string) => void', description: 'Tab change handler' },
      { name: 'variant', type: '"default" | "pills"', default: '"default"', description: 'Tab style' },
    ],
  },
  {
    id: 'menu',
    name: 'Menu',
    category: 'Navigation',
    description: 'Menus display a list of choices on a temporary surface.',
    props: [
      { name: 'trigger', type: 'React.ReactNode', description: 'Menu trigger element' },
      { name: 'items', type: 'MenuItem[]', description: 'Menu items' },
      { name: 'position', type: '"bottom-left" | "bottom-right" | "top-left" | "top-right"', default: '"bottom-left"', description: 'Menu position' },
    ],
  },

  // LAYOUT
  {
    id: 'container',
    name: 'Container',
    category: 'Layout',
    description: 'Containers center your content horizontally with max-width constraints.',
    props: [
      { name: 'maxWidth', type: '"sm" | "md" | "lg" | "xl"', default: '"lg"', description: 'Maximum width' },
      { name: 'padding', type: 'boolean', default: 'true', description: 'Apply padding' },
      { name: 'children', type: 'React.ReactNode', description: 'Container content' },
    ],
  },
  {
    id: 'grid',
    name: 'Grid',
    category: 'Layout',
    description: 'CSS Grid layout system for creating complex layouts.',
    props: [
      { name: 'columns', type: '1 | 2 | 3 | 4 | 6 | 12 | "auto"', default: '12', description: 'Number of columns' },
      { name: 'gap', type: '"none" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: 'Grid gap' },
      { name: 'alignItems', type: '"start" | "center" | "end" | "stretch"', default: '"stretch"', description: 'Align items' },
      { name: 'children', type: 'React.ReactNode', description: 'Grid items' },
    ],
  },
  {
    id: 'stack',
    name: 'Stack',
    category: 'Layout',
    description: 'Stack arranges elements in a horizontal or vertical layout with consistent spacing.',
    props: [
      { name: 'direction', type: '"horizontal" | "vertical"', default: '"vertical"', description: 'Stack direction' },
      { name: 'spacing', type: '"none" | "xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: 'Space between items' },
      { name: 'align', type: '"start" | "center" | "end" | "stretch"', default: '"stretch"', description: 'Align items' },
      { name: 'justify', type: '"start" | "center" | "end" | "space-between"', default: '"start"', description: 'Justify content' },
      { name: 'wrap', type: 'boolean', default: 'false', description: 'Allow wrapping' },
      { name: 'children', type: 'React.ReactNode', description: 'Stack items' },
    ],
  },
  {
    id: 'divider',
    name: 'Divider',
    category: 'Layout',
    description: 'Dividers separate content into clear groups.',
    props: [
      { name: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'Divider orientation' },
      { name: 'spacing', type: '"none" | "sm" | "md" | "lg"', default: '"md"', description: 'Spacing around divider' },
    ],
  },
  {
    id: 'modal',
    name: 'Modal',
    category: 'Layout',
    description: 'Modals focus user attention on a particular task or message.',
    props: [
      { name: 'isOpen', type: 'boolean', description: 'Modal visibility' },
      { name: 'onClose', type: '() => void', description: 'Close handler' },
      { name: 'title', type: 'string', description: 'Modal title' },
      { name: 'children', type: 'React.ReactNode', description: 'Modal content' },
      { name: 'footer', type: 'React.ReactNode', description: 'Modal footer' },
      { name: 'size', type: '"small" | "medium" | "large"', default: '"medium"', description: 'Modal size' },
    ],
  },

  // INTERACTIVE
  {
    id: 'dialog',
    name: 'Dialog',
    category: 'Interactive',
    description: 'Dialogs inform users about a task and can contain critical information or require decisions.',
    props: [
      { name: 'isOpen', type: 'boolean', description: 'Dialog visibility' },
      { name: 'onClose', type: '() => void', description: 'Close handler' },
      { name: 'title', type: 'string', description: 'Dialog title' },
      { name: 'children', type: 'React.ReactNode', description: 'Dialog content' },
      { name: 'footer', type: 'React.ReactNode', description: 'Dialog footer' },
      { name: 'size', type: '"small" | "medium" | "large" | "fullscreen"', default: '"medium"', description: 'Dialog size' },
      { name: 'closeOnOverlayClick', type: 'boolean', default: 'true', description: 'Close on outside click' },
    ],
  },
  {
    id: 'accordion',
    name: 'Accordion',
    category: 'Interactive',
    description: 'Accordions allow users to expand and collapse sections of content.',
    props: [
      { name: 'items', type: 'AccordionItem[]', description: 'Accordion items' },
      { name: 'allowMultiple', type: 'boolean', default: 'false', description: 'Allow multiple open' },
      { name: 'defaultOpen', type: 'string[]', default: '[]', description: 'Default open items' },
    ],
  },
  {
    id: 'pagination',
    name: 'Pagination',
    category: 'Interactive',
    description: 'Pagination divides content into discrete pages.',
    props: [
      { name: 'currentPage', type: 'number', description: 'Current page number' },
      { name: 'totalPages', type: 'number', description: 'Total number of pages' },
      { name: 'onPageChange', type: '(page: number) => void', description: 'Page change handler' },
      { name: 'siblingCount', type: 'number', default: '1', description: 'Siblings on each side' },
    ],
  },
  {
    id: 'stepper',
    name: 'Stepper',
    category: 'Interactive',
    description: 'Steppers display progress through a sequence of logical steps.',
    props: [
      { name: 'steps', type: 'Step[]', description: 'Array of steps' },
      { name: 'activeStep', type: 'number', description: 'Current active step index' },
      { name: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'Stepper orientation' },
    ],
  },

  // FEEDBACK
  {
    id: 'spinner',
    name: 'Spinner',
    category: 'Feedback',
    description: 'Spinners provide a visual cue that an action is processing.',
    props: [
      { name: 'size', type: '"small" | "medium" | "large"', default: '"medium"', description: 'Spinner size' },
      { name: 'color', type: 'string', description: 'Spinner color' },
    ],
  },
  {
    id: 'progressbar',
    name: 'ProgressBar',
    category: 'Feedback',
    description: 'Progress bars show the completion progress of a task.',
    props: [
      { name: 'value', type: 'number', description: 'Progress value (0-100)' },
      { name: 'variant', type: '"default" | "success" | "warning" | "error"', default: '"default"', description: 'Progress bar style' },
      { name: 'showLabel', type: 'boolean', default: 'false', description: 'Show percentage label' },
      { name: 'height', type: 'number', default: '8', description: 'Bar height in pixels' },
    ],
  },
];

