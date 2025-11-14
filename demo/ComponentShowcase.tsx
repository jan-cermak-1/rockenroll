import React, { useState } from 'react';
import {
  Button,
  Avatar,
  Badge,
  Banner,
  Checkbox,
  Container,
  Divider,
  Input,
  Link,
  Modal,
  ProgressBar,
  Radio,
  Spinner,
  Toggle,
  Tooltip,
} from '../src';
import './ComponentShowcase.css';

interface ComponentSection {
  id: string;
  title: string;
  render: () => React.ReactNode;
}

export function ComponentShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [toggleValue, setToggleValue] = useState(false);

  const sections: ComponentSection[] = [
    {
      id: 'buttons',
      title: 'Buttons',
      render: () => (
        <div className="showcase-grid">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="small">Small</Button>
          <Button size="large">Large</Button>
          <Button loading>Loading</Button>
          <Button fullWidth>Full Width</Button>
        </div>
      ),
    },
    {
      id: 'avatars',
      title: 'Avatars',
      render: () => (
        <div className="showcase-grid">
          <Avatar name="John Doe" size="small" />
          <Avatar name="Jane Smith" size="medium" status="online" />
          <Avatar name="Bob Johnson" size="large" status="busy" />
          <Avatar name="Alice Williams" size="xlarge" status="away" shape="square" />
        </div>
      ),
    },
    {
      id: 'badges',
      title: 'Badges',
      render: () => (
        <div className="showcase-grid">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
          <Badge size="small">Small</Badge>
          <Badge size="large">Large</Badge>
          <Badge dot>●</Badge>
        </div>
      ),
    },
    {
      id: 'banners',
      title: 'Banners',
      render: () => (
        <div className="showcase-stack">
          <Banner variant="info">This is an informational message.</Banner>
          <Banner variant="success">Operation completed successfully!</Banner>
          <Banner variant="warning">Please review your settings.</Banner>
          <Banner variant="danger">An error occurred. Please try again.</Banner>
        </div>
      ),
    },
    {
      id: 'forms',
      title: 'Form Controls',
      render: () => (
        <div className="showcase-stack">
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            helperText="We'll never share your email"
            fullWidth
          />
          <Input
            label="Error State"
            type="text"
            error
            errorMessage="This field is required"
            fullWidth
          />
          <Checkbox
            label="I agree to the terms and conditions"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <Checkbox label="Indeterminate" indeterminate />
          <Checkbox label="Disabled" disabled />
          
          <div className="showcase-radio-group">
            <Radio
              label="Option 1"
              name="demo"
              value="option1"
              checked={radioValue === 'option1'}
              onChange={(e) => setRadioValue(e.target.value)}
            />
            <Radio
              label="Option 2"
              name="demo"
              value="option2"
              checked={radioValue === 'option2'}
              onChange={(e) => setRadioValue(e.target.value)}
            />
          </div>
          
          <Toggle
            label="Enable notifications"
            checked={toggleValue}
            onChange={(e) => setToggleValue(e.target.checked)}
          />
          <Toggle label="Small size" size="small" />
          <Toggle label="Large size" size="large" />
        </div>
      ),
    },
    {
      id: 'progress',
      title: 'Progress Indicators',
      render: () => (
        <div className="showcase-stack">
          <ProgressBar value={30} variant="primary" showLabel />
          <ProgressBar value={60} variant="success" showLabel />
          <ProgressBar value={85} variant="warning" showLabel />
          <ProgressBar value={100} variant="danger" showLabel />
          <div className="showcase-grid">
            <Spinner size="small" />
            <Spinner size="medium" />
            <Spinner size="large" />
            <Spinner color="secondary" />
          </div>
        </div>
      ),
    },
    {
      id: 'modal',
      title: 'Modal & Overlays',
      render: () => (
        <div className="showcase-grid">
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Tooltip content="This is a tooltip" placement="top">
            <Button>Tooltip Top</Button>
          </Tooltip>
          <Tooltip content="Bottom tooltip" placement="bottom">
            <Button>Tooltip Bottom</Button>
          </Tooltip>
          <Tooltip content="Left tooltip" placement="left">
            <Button>Tooltip Left</Button>
          </Tooltip>
          <Tooltip content="Right tooltip" placement="right">
            <Button>Tooltip Right</Button>
          </Tooltip>
        </div>
      ),
    },
    {
      id: 'layout',
      title: 'Layout Components',
      render: () => (
        <div className="showcase-stack">
          <Container maxWidth="sm" padding="md" className="showcase-container-demo">
            Small Container (640px)
          </Container>
          <Container maxWidth="md" padding="sm" className="showcase-container-demo">
            Medium Container (768px)
          </Container>
          <Divider />
          <p>Horizontal Divider Above</p>
        </div>
      ),
    },
    {
      id: 'navigation',
      title: 'Navigation',
      render: () => (
        <div className="showcase-stack">
          <Link href="#" variant="primary">Primary Link</Link>
          <Link href="#" variant="secondary">Secondary Link</Link>
          <Link href="#" variant="danger">Danger Link</Link>
          <Link href="https://github.com" external>External Link</Link>
          <Link href="#" underline="always">Always Underlined</Link>
          <Link href="#" underline="none">No Underline</Link>
        </div>
      ),
    },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

  return (
    <div className="showcase">
      <aside className="showcase-sidebar">
        <div className="showcase-sidebar-header">
          <h2>🎸 Rockenroll</h2>
          <p>Component Library</p>
        </div>
        <nav className="showcase-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`showcase-nav-item ${
                activeSection === section.id ? 'active' : ''
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </nav>
        <div className="showcase-footer">
          <p>Based on Soul Design System</p>
          <p className="showcase-version">v1.0.0</p>
        </div>
      </aside>

      <main className="showcase-main">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`showcase-section ${
              activeSection === section.id ? 'active' : ''
            }`}
          >
            <h1 className="showcase-title">{section.title}</h1>
            <div className="showcase-content">{section.render()}</div>
          </div>
        ))}
      </main>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Example Modal"
        size="medium"
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setModalOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p>This is a modal dialog. You can put any content here.</p>
        <p>Click outside, press Escape, or click the X to close.</p>
      </Modal>
    </div>
  );
}

