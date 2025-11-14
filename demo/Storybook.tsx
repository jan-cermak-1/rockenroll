import React, { useState } from 'react';
import './Storybook.css';
import { 
  Accordion, Alert, Avatar, AvatarGroup, Badge, Banner, Breadcrumb,
  Button, Card, Checkbox, Chip, Container, DatePicker, Dialog, Divider,
  Dropdown, EmptyState, Grid, GridItem, Icon, Input, Link, Menu, Modal,
  Pagination, ProgressBar, Radio, Rating, Select, SkeletonLoader, Slider,
  Spinner, Stack, Stepper, Switch, Table, Tabs, Textarea, Toggle, Tooltip
} from '../src';

interface ComponentDoc {
  id: string;
  name: string;
  category: string;
  description: string;
  props: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
  }>;
  examples: Array<{
    title: string;
    code: string;
    preview: React.ReactNode;
  }>;
}

const componentDocs: ComponentDoc[] = [
  {
    id: 'button',
    name: 'Button',
    category: 'Form',
    description: 'Buttons allow users to take actions with a single tap.',
    props: [
      { name: 'variant', type: '"primary" | "secondary" | "danger" | "ghost"', default: '"primary"', description: 'Button style variant' },
      { name: 'size', type: '"small" | "medium" | "large"', default: '"medium"', description: 'Button size' },
      { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Make button full width' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable button' },
      { name: 'onClick', type: '() => void', description: 'Click handler' },
    ],
    examples: [
      {
        title: 'Variants',
        code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="ghost">Ghost</Button>`,
        preview: (
          <Stack direction="horizontal" spacing="md">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </Stack>
        ),
      },
      {
        title: 'Sizes',
        code: `<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`,
        preview: (
          <Stack direction="horizontal" spacing="md" align="center">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </Stack>
        ),
      },
    ],
  },
  {
    id: 'input',
    name: 'Input',
    category: 'Form',
    description: 'Input fields let users enter and edit text.',
    props: [
      { name: 'label', type: 'string', description: 'Input label' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text' },
      { name: 'error', type: 'boolean', default: 'false', description: 'Error state' },
      { name: 'helperText', type: 'string', description: 'Helper or error message' },
      { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Full width input' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' },
    ],
    examples: [
      {
        title: 'Basic',
        code: `<Input label="Email" placeholder="your@email.com" />`,
        preview: <Input label="Email" placeholder="your@email.com" fullWidth />,
      },
      {
        title: 'With Error',
        code: `<Input label="Email" error errorMessage="Invalid email" />`,
        preview: <Input label="Email" error errorMessage="Invalid email" fullWidth />,
      },
    ],
  },
  {
    id: 'card',
    name: 'Card',
    category: 'Display',
    description: 'Cards contain content and actions about a single subject.',
    props: [
      { name: 'variant', type: '"default" | "outlined" | "elevated"', default: '"default"', description: 'Card style' },
      { name: 'padding', type: '"none" | "sm" | "md" | "lg"', default: '"md"', description: 'Internal padding' },
      { name: 'clickable', type: 'boolean', default: 'false', description: 'Clickable card' },
    ],
    examples: [
      {
        title: 'Variants',
        code: `<Card variant="default">Default Card</Card>
<Card variant="elevated">Elevated Card</Card>`,
        preview: (
          <Stack spacing="md">
            <Card variant="default" padding="md">
              <h4 style={{ margin: 0 }}>Default Card</h4>
              <p style={{ margin: '0.5rem 0 0' }}>This is a default card variant.</p>
            </Card>
            <Card variant="elevated" padding="md">
              <h4 style={{ margin: 0 }}>Elevated Card</h4>
              <p style={{ margin: '0.5rem 0 0' }}>This card has elevated shadow.</p>
            </Card>
          </Stack>
        ),
      },
    ],
  },
  {
    id: 'alert',
    name: 'Alert',
    category: 'Display',
    description: 'Alerts display brief messages for the user without interrupting their use of the app.',
    props: [
      { name: 'variant', type: '"info" | "success" | "warning" | "error"', default: '"info"', description: 'Alert type' },
      { name: 'title', type: 'string', description: 'Alert title' },
      { name: 'onClose', type: '() => void', description: 'Close handler' },
    ],
    examples: [
      {
        title: 'Variants',
        code: `<Alert variant="info">Info message</Alert>
<Alert variant="success">Success message</Alert>
<Alert variant="warning">Warning message</Alert>
<Alert variant="error">Error message</Alert>`,
        preview: (
          <Stack spacing="md">
            <Alert variant="info">This is an informational message.</Alert>
            <Alert variant="success">Operation completed successfully!</Alert>
            <Alert variant="warning">Please review your changes.</Alert>
            <Alert variant="error">An error has occurred.</Alert>
          </Stack>
        ),
      },
    ],
  },
  // Add more component docs...
];

export const StorybookApp: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>('button');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const categories = ['Form', 'Display', 'Navigation', 'Layout', 'Interactive', 'Feedback'];
  
  const filteredDocs = componentDocs.filter(doc =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedDoc = componentDocs.find(doc => doc.id === selectedComponent);

  return (
    <div className="storybook">
      <header className="storybook__header">
        <div className="storybook__logo">
          <span className="storybook__logo-icon">🎸</span>
          <span className="storybook__logo-text">Rockenroll</span>
        </div>
        <div className="storybook__search">
          <Icon name="search" size="small" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="storybook__search-input"
          />
        </div>
      </header>

      <div className="storybook__container">
        <aside className={`storybook__sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <button
            className="storybook__sidebar-toggle"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            {sidebarCollapsed ? '→' : '←'}
          </button>

          {!sidebarCollapsed && (
            <>
              <nav className="storybook__nav">
                {categories.map(category => {
                  const categoryDocs = filteredDocs.filter(doc => doc.category === category);
                  if (categoryDocs.length === 0) return null;

                  return (
                    <div key={category} className="storybook__nav-section">
                      <div className="storybook__nav-category">{category} Components</div>
                      {categoryDocs.map(doc => (
                        <button
                          key={doc.id}
                          className={`storybook__nav-item ${selectedComponent === doc.id ? 'active' : ''}`}
                          onClick={() => setSelectedComponent(doc.id)}
                        >
                          {doc.name}
                        </button>
                      ))}
                    </div>
                  );
                })}
              </nav>
            </>
          )}
        </aside>

        <main className="storybook__main">
          {selectedDoc ? (
            <div className="storybook__content">
              <div className="storybook__title-section">
                <h1 className="storybook__title">{selectedDoc.name}</h1>
                <span className="storybook__category-badge">{selectedDoc.category}</span>
              </div>
              <p className="storybook__description">{selectedDoc.description}</p>

              <Divider />

              <section className="storybook__section">
                <h2>Examples</h2>
                {selectedDoc.examples.map((example, index) => (
                  <div key={index} className="storybook__example">
                    <h3>{example.title}</h3>
                    <div className="storybook__preview">
                      {example.preview}
                    </div>
                    <details className="storybook__code-details">
                      <summary>View Code</summary>
                      <pre className="storybook__code">
                        <code>{example.code}</code>
                      </pre>
                    </details>
                  </div>
                ))}
              </section>

              <Divider />

              <section className="storybook__section">
                <h2>Props</h2>
                <div className="storybook__props-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedDoc.props.map((prop, index) => (
                        <tr key={index}>
                          <td><code>{prop.name}</code></td>
                          <td><code>{prop.type}</code></td>
                          <td>{prop.default ? <code>{prop.default}</code> : '—'}</td>
                          <td>{prop.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          ) : (
            <EmptyState
              title="No component selected"
              description="Select a component from the sidebar to view its documentation."
            />
          )}
        </main>
      </div>
    </div>
  );
};

