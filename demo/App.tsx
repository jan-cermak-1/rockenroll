import React, { useState } from 'react';
import {
  Button,
  Avatar,
  Badge,
  Banner,
  Checkbox,
  Divider,
  Input,
  Modal,
  ProgressBar,
  Spinner,
  Toggle,
  Tooltip,
} from '../src';
import './App.css';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <div className="demo-container">
      <header className="demo-header">
        <h1>🎸 Rockenroll</h1>
        <p>Soul Design System Components - React Component Library</p>
      </header>

      <main className="demo-main">
        {/* Buttons */}
        <section className="demo-section">
          <h2>Buttons</h2>
          <div className="demo-grid">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
            <Button loading>Loading</Button>
          </div>
        </section>

        <Divider />

        {/* Avatars */}
        <section className="demo-section">
          <h2>Avatars</h2>
          <div className="demo-grid">
            <Avatar name="John Doe" size="small" />
            <Avatar name="Jane Smith" size="medium" />
            <Avatar name="Bob Johnson" size="large" status="online" />
            <Avatar name="Alice Williams" size="xlarge" status="busy" />
          </div>
        </section>

        <Divider />

        {/* Badges */}
        <section className="demo-section">
          <h2>Badges</h2>
          <div className="demo-grid">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </section>

        <Divider />

        {/* Banner */}
        <section className="demo-section">
          <h2>Banner</h2>
          <div className="demo-stack">
            <Banner variant="info">
              This is an informational message.
            </Banner>
            <Banner variant="success">
              Operation completed successfully!
            </Banner>
            <Banner variant="warning">
              Please review your settings.
            </Banner>
            <Banner variant="danger">
              An error occurred. Please try again.
            </Banner>
          </div>
        </section>

        <Divider />

        {/* Form Controls */}
        <section className="demo-section">
          <h2>Form Controls</h2>
          <div className="demo-stack">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              fullWidth
            />
            <Checkbox
              label="I agree to the terms and conditions"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <Toggle
              label="Enable notifications"
              checked={toggleValue}
              onChange={(e) => setToggleValue(e.target.checked)}
            />
          </div>
        </section>

        <Divider />

        {/* Progress */}
        <section className="demo-section">
          <h2>Progress</h2>
          <div className="demo-stack">
            <ProgressBar value={30} variant="primary" showLabel />
            <ProgressBar value={60} variant="success" showLabel />
            <ProgressBar value={85} variant="warning" showLabel />
            <ProgressBar value={100} variant="danger" showLabel />
          </div>
        </section>

        <Divider />

        {/* Modal & Spinner */}
        <section className="demo-section">
          <h2>Modal & Spinner</h2>
          <div className="demo-grid">
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
            <Spinner size="small" />
            <Spinner size="medium" />
            <Spinner size="large" />
          </div>
        </section>

        <Divider />

        {/* Tooltip */}
        <section className="demo-section">
          <h2>Tooltip</h2>
          <div className="demo-grid">
            <Tooltip content="Top tooltip" placement="top">
              <Button>Top</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" placement="bottom">
              <Button>Bottom</Button>
            </Tooltip>
            <Tooltip content="Left tooltip" placement="left">
              <Button>Left</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" placement="right">
              <Button>Right</Button>
            </Tooltip>
          </div>
        </section>
      </main>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Example Modal"
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
        <p>Click outside or press Escape to close.</p>
      </Modal>
    </div>
  );
}

