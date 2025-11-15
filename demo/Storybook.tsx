import React, { useState, useMemo, useEffect } from 'react';
import './Storybook.css';
import { componentDocsTemplate, ComponentDoc, categories } from './componentData';
import { 
  Accordion, Alert, Avatar, AvatarGroup, Badge, Banner, Breadcrumb,
  Button, Card, Checkbox, Chip, Container, DatePicker, Dialog, Divider,
  Dropdown, EmptyState, Grid, GridItem, Icon, Input, Link, Menu, Modal,
  Pagination, ProgressBar, Radio, Rating, Select, SkeletonLoader, Slider,
  Spinner, Stack, Stepper, Switch, Table, Tabs, Textarea, Toggle, Tooltip
} from '../src';

// Hash-based routing for GitHub Pages
const useHashRouter = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (newHash: string) => {
    window.location.hash = newHash;
  };

  return { hash, navigate };
};

// Add live examples to component docs
const createComponentDocs = (states: {
  checkboxState: boolean;
  setCheckboxState: (v: boolean) => void;
  radioValue: string;
  setRadioValue: (v: string) => void;
  toggleState: boolean;
  setToggleState: (v: boolean) => void;
  switchState: boolean;
  setSwitchState: (v: boolean) => void;
  dropdownValue: string;
  setDropdownValue: (v: string) => void;
  selectValue: string;
  setSelectValue: (v: string) => void;
  sliderValue: number;
  setSliderValue: (v: number) => void;
  ratingValue: number;
  setRatingValue: (v: number) => void;
  dateValue: string;
  setDateValue: (v: string) => void;
  currentPage: number;
  setCurrentPage: (v: number) => void;
  modalOpen: boolean;
  setModalOpen: (v: boolean) => void;
  dialogOpen: boolean;
  setDialogOpen: (v: boolean) => void;
}): ComponentDoc[] => {
  const {
    checkboxState, setCheckboxState,
    radioValue, setRadioValue,
    toggleState, setToggleState,
    switchState, setSwitchState,
    dropdownValue, setDropdownValue,
    selectValue, setSelectValue,
    sliderValue, setSliderValue,
    ratingValue, setRatingValue,
    dateValue, setDateValue,
    currentPage, setCurrentPage,
    modalOpen, setModalOpen,
    dialogOpen, setDialogOpen
  } = states;

  return componentDocsTemplate.map(doc => {
    let examples: ComponentDoc['examples'] = [];

    switch (doc.id) {
      case 'button':
        examples = [
          {
            title: 'Button Variants',
            code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="ghost">Ghost</Button>`,
            preview: (
              <Stack direction="horizontal" spacing="md" wrap>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
              </Stack>
            ),
          },
          {
            title: 'Button Sizes',
            code: `<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`,
            preview: (
              <Stack direction="horizontal" spacing="md" align="center" wrap>
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </Stack>
            ),
          },
          {
            title: 'Full Width & Disabled',
            code: `<Button fullWidth>Full Width</Button>
<Button disabled>Disabled</Button>`,
            preview: (
              <Stack spacing="md">
                <Button fullWidth>Full Width</Button>
                <Button disabled>Disabled Button</Button>
              </Stack>
            ),
          },
        ];
        break;

      case 'input':
        examples = [
          {
            title: 'Basic Input',
            code: `<Input 
  label="Email" 
  placeholder="your@email.com" 
  fullWidth 
/>`,
            preview: <Input label="Email" placeholder="your@email.com" fullWidth />,
          },
          {
            title: 'Input States',
            code: `<Input label="Normal" fullWidth />
<Input label="Disabled" disabled fullWidth />
<Input label="Error" error errorMessage="Invalid input" fullWidth />`,
            preview: (
              <Stack spacing="md">
                <Input label="Normal Input" fullWidth />
                <Input label="Disabled Input" disabled fullWidth />
                <Input label="Error Input" error errorMessage="This field is required" fullWidth />
              </Stack>
            ),
          },
        ];
        break;

      case 'textarea':
        examples = [
          {
            title: 'Textarea',
            code: `<Textarea 
  label="Description" 
  placeholder="Enter description..." 
  fullWidth 
/>`,
            preview: <Textarea label="Description" placeholder="Enter your description here..." fullWidth />,
          },
        ];
        break;

      case 'checkbox':
        examples = [
          {
            title: 'Checkbox',
            code: `<Checkbox 
  label="I agree to terms" 
  checked={checked}
  onChange={setChecked}
/>`,
            preview: (
              <Stack spacing="sm">
                <Checkbox label="Option 1" checked={checkboxState} onChange={setCheckboxState} />
                <Checkbox label="Option 2" />
                <Checkbox label="Disabled" disabled />
              </Stack>
            ),
          },
        ];
        break;

      case 'radio':
        examples = [
          {
            title: 'Radio Buttons',
            code: `<Radio 
  label="Option 1" 
  name="group"
  checked={value === 'option1'}
  onChange={() => setValue('option1')}
/>`,
            preview: (
              <Stack spacing="sm">
                <Radio label="Option 1" name="demo" value="option1" checked={radioValue === 'option1'} onChange={() => setRadioValue('option1')} />
                <Radio label="Option 2" name="demo" value="option2" checked={radioValue === 'option2'} onChange={() => setRadioValue('option2')} />
                <Radio label="Option 3" name="demo" value="option3" checked={radioValue === 'option3'} onChange={() => setRadioValue('option3')} />
              </Stack>
            ),
          },
        ];
        break;

      case 'toggle':
        examples = [
          {
            title: 'Toggle',
            code: `<Toggle 
  label="Enable notifications" 
  checked={checked}
  onChange={setChecked}
/>`,
            preview: (
              <Stack spacing="sm">
                <Toggle label="Enable notifications" checked={toggleState} onChange={setToggleState} />
                <Toggle label="Disabled toggle" disabled />
              </Stack>
            ),
          },
        ];
        break;

      case 'switch':
        examples = [
          {
            title: 'Switch',
            code: `<Switch 
  label="Dark Mode" 
  checked={checked}
  onChange={setChecked}
/>`,
            preview: (
              <Stack spacing="sm">
                <Switch label="Dark Mode" checked={switchState} onChange={(e) => setSwitchState(e.target.checked)} />
                <Switch label="Small" size="small" />
                <Switch label="Large" size="large" />
              </Stack>
            ),
          },
        ];
        break;

      case 'select':
        examples = [
          {
            title: 'Select',
            code: `<Select
  label="Country"
  options={options}
  value={value}
  onChange={setValue}
  fullWidth
/>`,
            preview: (
              <Select
                label="Country"
                options={[
                  { value: '', label: 'Choose country...' },
                  { value: 'us', label: 'United States' },
                  { value: 'uk', label: 'United Kingdom' },
                  { value: 'cz', label: 'Czech Republic' },
                ]}
                value={selectValue}
                onChange={setSelectValue}
                fullWidth
              />
            ),
          },
        ];
        break;

      case 'dropdown':
        examples = [
          {
            title: 'Dropdown',
            code: `<Dropdown
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Select option"
  fullWidth
/>`,
            preview: (
              <Dropdown
                options={[
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                  { value: '3', label: 'Option 3' },
                  { value: '4', label: 'Option 4' },
                ]}
                value={dropdownValue}
                onChange={setDropdownValue}
                placeholder="Select an option"
                fullWidth
              />
            ),
          },
        ];
        break;

      case 'slider':
        examples = [
          {
            title: 'Slider',
            code: `<Slider
  label="Volume"
  value={value}
  onChange={setValue}
  min={0}
  max={100}
/>`,
            preview: (
              <Slider
                label="Volume"
                value={sliderValue}
                onChange={setSliderValue}
                min={0}
                max={100}
              />
            ),
          },
        ];
        break;

      case 'datepicker':
        examples = [
          {
            title: 'DatePicker',
            code: `<DatePicker
  label="Select Date"
  value={value}
  onChange={setValue}
  fullWidth
/>`,
            preview: (
              <DatePicker
                label="Select Date"
                value={dateValue}
                onChange={setDateValue}
                fullWidth
              />
            ),
          },
        ];
        break;

      case 'rating':
        examples = [
          {
            title: 'Rating',
            code: `<Rating
  value={value}
  onChange={setValue}
  max={5}
/>`,
            preview: (
              <Stack spacing="md">
                <Rating value={ratingValue} onChange={setRatingValue} max={5} />
                <Rating value={3} readOnly />
              </Stack>
            ),
          },
        ];
        break;

      case 'avatar':
        examples = [
          {
            title: 'Avatar',
            code: `<Avatar name="John Doe" />
<Avatar name="Jane Smith" status="online" />`,
            preview: (
              <Stack direction="horizontal" spacing="md" align="center">
                <Avatar name="John Doe" />
                <Avatar name="Jane Smith" status="online" />
                <Avatar name="Bob Johnson" status="busy" />
                <Avatar name="Alice Brown" size="small" />
                <Avatar name="Charlie Davis" size="large" />
              </Stack>
            ),
          },
        ];
        break;

      case 'avatargroup':
        examples = [
          {
            title: 'AvatarGroup',
            code: `<AvatarGroup
  avatars={[
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Bob Johnson' },
  ]}
  max={3}
/>`,
            preview: (
              <AvatarGroup
                avatars={[
                  { name: 'John Doe', status: 'online' },
                  { name: 'Jane Smith', status: 'busy' },
                  { name: 'Bob Johnson' },
                  { name: 'Alice Brown' },
                  { name: 'Charlie Davis' },
                ]}
                max={3}
              />
            ),
          },
        ];
        break;

      case 'badge':
        examples = [
          {
            title: 'Badge',
            code: `<Badge variant="primary">New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Error</Badge>`,
            preview: (
              <Stack direction="horizontal" spacing="md" align="center" wrap>
                <Badge variant="primary">New</Badge>
                <Badge variant="secondary">Beta</Badge>
                <Badge variant="success">Active</Badge>
                <Badge variant="warning">Pending</Badge>
                <Badge variant="error">Error</Badge>
                <Badge size="small">Small</Badge>
              </Stack>
            ),
          },
        ];
        break;

      case 'chip':
        examples = [
          {
            title: 'Chip',
            code: `<Chip label="React" />
<Chip label="TypeScript" color="success" />
<Chip label="Removable" onDelete={() => {}} />`,
            preview: (
              <Stack direction="horizontal" spacing="sm" wrap>
                <Chip label="React" />
                <Chip label="TypeScript" color="success" />
                <Chip label="JavaScript" color="warning" />
                <Chip label="Removable" onDelete={() => alert('Deleted!')} />
                <Chip label="Outlined" variant="outlined" />
                <Chip label="Small" size="small" />
              </Stack>
            ),
          },
        ];
        break;

      case 'card':
        examples = [
          {
            title: 'Card Variants',
            code: `<Card variant="default">
  <h3>Card Title</h3>
  <p>Card content...</p>
</Card>`,
            preview: (
              <Grid columns={2} gap="md">
                <GridItem>
                  <Card variant="default" padding="md">
                    <h4 style={{ margin: '0 0 0.5rem 0' }}>Default Card</h4>
                    <p style={{ margin: 0, color: '#666' }}>This is a default card with border.</p>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card variant="elevated" padding="md">
                    <h4 style={{ margin: '0 0 0.5rem 0' }}>Elevated Card</h4>
                    <p style={{ margin: 0, color: '#666' }}>This card has elevated shadow.</p>
                  </Card>
                </GridItem>
              </Grid>
            ),
          },
        ];
        break;

      case 'alert':
        examples = [
          {
            title: 'Alert Variants',
            code: `<Alert variant="info">Info message</Alert>
<Alert variant="success">Success message</Alert>
<Alert variant="warning">Warning message</Alert>
<Alert variant="error">Error message</Alert>`,
            preview: (
              <Stack spacing="md">
                <Alert variant="info" title="Information">This is an informational message.</Alert>
                <Alert variant="success">Operation completed successfully!</Alert>
                <Alert variant="warning">Please review your changes carefully.</Alert>
                <Alert variant="error">An error has occurred. Please try again.</Alert>
              </Stack>
            ),
          },
        ];
        break;

      case 'banner':
        examples = [
          {
            title: 'Banner',
            code: `<Banner variant="info">
  Important announcement
</Banner>`,
            preview: (
              <Stack spacing="md">
                <Banner variant="info">Important system update scheduled for tonight.</Banner>
                <Banner variant="warning">Your session will expire in 5 minutes.</Banner>
              </Stack>
            ),
          },
        ];
        break;

      case 'tooltip':
        examples = [
          {
            title: 'Tooltip',
            code: `<Tooltip content="Helpful information">
  <Button>Hover me</Button>
</Tooltip>`,
            preview: (
              <Stack direction="horizontal" spacing="md">
                <Tooltip content="This is a helpful tooltip">
                  <Button>Hover me</Button>
                </Tooltip>
                <Tooltip content="Bottom tooltip" position="bottom">
                  <Button>Bottom</Button>
                </Tooltip>
              </Stack>
            ),
          },
        ];
        break;

      case 'icon':
        examples = [
          {
            title: 'Icons',
            code: `<Icon name="check" />
<Icon name="close" />
<Icon name="search" />`,
            preview: (
              <Stack direction="horizontal" spacing="md" align="center">
                <Icon name="check" />
                <Icon name="close" />
                <Icon name="search" />
                <Icon name="user" />
                <Icon name="settings" />
                <Icon name="info" size="large" color="#0066ff" />
              </Stack>
            ),
          },
        ];
        break;

      case 'skeletonloader':
        examples = [
          {
            title: 'Skeleton Loader',
            code: `<SkeletonLoader variant="text" count={3} />
<SkeletonLoader variant="circular" />
<SkeletonLoader variant="rectangular" height={100} />`,
            preview: (
              <Stack spacing="md">
                <SkeletonLoader variant="text" count={3} />
                <Stack direction="horizontal" spacing="md">
                  <SkeletonLoader variant="circular" />
                  <Stack spacing="sm" style={{ flex: 1 }}>
                    <SkeletonLoader variant="text" />
                    <SkeletonLoader variant="text" />
                  </Stack>
                </Stack>
                <SkeletonLoader variant="rectangular" height={100} />
              </Stack>
            ),
          },
        ];
        break;

      case 'emptystate':
        examples = [
          {
            title: 'Empty State',
            code: `<EmptyState
  title="No results found"
  description="Try adjusting your search"
  action={<Button>Clear filters</Button>}
/>`,
            preview: (
              <EmptyState
                title="No data available"
                description="There are no items to display at the moment."
                action={<Button variant="primary">Add New Item</Button>}
              />
            ),
          },
        ];
        break;

      case 'table':
        examples = [
          {
            title: 'Table',
            code: `<Table
  columns={columns}
  data={data}
  striped
  hoverable
/>`,
            preview: (
              <Table
                columns={[
                  { key: 'name', header: 'Name' },
                  { key: 'email', header: 'Email' },
                  { key: 'role', header: 'Role' },
                ]}
                data={[
                  { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
                  { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
                  { name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
                ]}
                striped
                hoverable
              />
            ),
          },
        ];
        break;

      case 'link':
        examples = [
          {
            title: 'Links',
            code: `<Link href="#">Primary Link</Link>
<Link href="#" variant="secondary">Secondary</Link>
<Link href="#" external>External Link</Link>`,
            preview: (
              <Stack spacing="sm">
                <Link href="#">Primary Link</Link>
                <Link href="#" variant="secondary">Secondary Link</Link>
                <Link href="#" variant="danger">Danger Link</Link>
                <Link href="https://github.com" external>External Link</Link>
              </Stack>
            ),
          },
        ];
        break;

      case 'breadcrumb':
        examples = [
          {
            title: 'Breadcrumb',
            code: `<Breadcrumb
  items={[
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Details' },
  ]}
/>`,
            preview: (
              <Breadcrumb
                items={[
                  { label: 'Home', href: '#' },
                  { label: 'Products', href: '#' },
                  { label: 'Category', href: '#' },
                  { label: 'Item Details' },
                ]}
              />
            ),
          },
        ];
        break;

      case 'tabs':
        examples = [
          {
            title: 'Tabs',
            code: `<Tabs
  items={[
    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
  ]}
/>`,
            preview: (
              <Tabs
                items={[
                  { id: 'tab1', label: 'Overview', content: <p style={{ margin: '1rem 0' }}>Overview content goes here.</p> },
                  { id: 'tab2', label: 'Details', content: <p style={{ margin: '1rem 0' }}>Detailed information goes here.</p> },
                  { id: 'tab3', label: 'Settings', content: <p style={{ margin: '1rem 0' }}>Settings panel goes here.</p> },
                ]}
              />
            ),
          },
        ];
        break;

      case 'menu':
        examples = [
          {
            title: 'Menu',
            code: `<Menu
  trigger={<Button>Open Menu</Button>}
  items={[
    { id: '1', label: 'Edit', onClick: () => {} },
    { id: '2', label: 'Delete', onClick: () => {} },
  ]}
/>`,
            preview: (
              <Menu
                trigger={<Button>Open Menu</Button>}
                items={[
                  { id: '1', label: 'Edit', onClick: () => alert('Edit clicked') },
                  { id: '2', label: 'Duplicate', onClick: () => alert('Duplicate clicked') },
                  { id: 'div', label: '', divider: true },
                  { id: '3', label: 'Delete', onClick: () => alert('Delete clicked') },
                ]}
              />
            ),
          },
        ];
        break;

      case 'container':
        examples = [
          {
            title: 'Container',
            code: `<Container maxWidth="md">
  Content goes here
</Container>`,
            preview: (
              <Container maxWidth="md" style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ margin: 0 }}>This content is inside a container with max-width constraint.</p>
              </Container>
            ),
          },
        ];
        break;

      case 'grid':
        examples = [
          {
            title: 'Grid Layout',
            code: `<Grid columns={3} gap="md">
  <GridItem>Item 1</GridItem>
  <GridItem>Item 2</GridItem>
  <GridItem>Item 3</GridItem>
</Grid>`,
            preview: (
              <Grid columns={3} gap="md">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <GridItem key={i}>
                    <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '6px', textAlign: 'center' }}>
                      Item {i}
                    </div>
                  </GridItem>
                ))}
              </Grid>
            ),
          },
        ];
        break;

      case 'stack':
        examples = [
          {
            title: 'Stack',
            code: `<Stack direction="horizontal" spacing="md">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>`,
            preview: (
              <>
                <Stack direction="horizontal" spacing="md" style={{ marginBottom: '1rem' }}>
                  <div style={{ padding: '0.75rem 1.5rem', backgroundColor: '#f5f5f5', borderRadius: '6px' }}>Item 1</div>
                  <div style={{ padding: '0.75rem 1.5rem', backgroundColor: '#f5f5f5', borderRadius: '6px' }}>Item 2</div>
                  <div style={{ padding: '0.75rem 1.5rem', backgroundColor: '#f5f5f5', borderRadius: '6px' }}>Item 3</div>
                </Stack>
                <Stack direction="vertical" spacing="sm">
                  <div style={{ padding: '0.75rem 1.5rem', backgroundColor: '#e3f2fd', borderRadius: '6px' }}>Vertical 1</div>
                  <div style={{ padding: '0.75rem 1.5rem', backgroundColor: '#e3f2fd', borderRadius: '6px' }}>Vertical 2</div>
                </Stack>
              </>
            ),
          },
        ];
        break;

      case 'divider':
        examples = [
          {
            title: 'Divider',
            code: `<Divider />`,
            preview: (
              <Stack spacing="md">
                <p style={{ margin: 0 }}>Content above</p>
                <Divider />
                <p style={{ margin: 0 }}>Content below</p>
              </Stack>
            ),
          },
        ];
        break;

      case 'modal':
        examples = [
          {
            title: 'Modal',
            code: `<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
>
  Modal content
</Modal>`,
            preview: (
              <>
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                <Modal
                  isOpen={modalOpen}
                  onClose={() => setModalOpen(false)}
                  title="Example Modal"
                  footer={
                    <Stack direction="horizontal" spacing="md" justify="end">
                      <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
                      <Button variant="primary" onClick={() => setModalOpen(false)}>Save</Button>
                    </Stack>
                  }
                >
                  <p>This is the modal content. You can put any content here.</p>
                </Modal>
              </>
            ),
          },
        ];
        break;

      case 'dialog':
        examples = [
          {
            title: 'Dialog',
            code: `<Dialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
>
  Are you sure?
</Dialog>`,
            preview: (
              <>
                <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
                <Dialog
                  isOpen={dialogOpen}
                  onClose={() => setDialogOpen(false)}
                  title="Confirm Delete"
                  size="small"
                  footer={
                    <Stack direction="horizontal" spacing="md" justify="end">
                      <Button variant="ghost" onClick={() => setDialogOpen(false)}>Cancel</Button>
                      <Button variant="danger" onClick={() => setDialogOpen(false)}>Delete</Button>
                    </Stack>
                  }
                >
                  <p>Are you sure you want to delete this item? This action cannot be undone.</p>
                </Dialog>
              </>
            ),
          },
        ];
        break;

      case 'accordion':
        examples = [
          {
            title: 'Accordion',
            code: `<Accordion
  items={[
    { id: '1', title: 'Section 1', content: <p>Content 1</p> },
    { id: '2', title: 'Section 2', content: <p>Content 2</p> },
  ]}
/>`,
            preview: (
              <Accordion
                items={[
                  { id: '1', title: 'What is Rockenroll?', content: <p style={{ margin: 0 }}>Rockenroll is a comprehensive React component library with 39 production-ready components.</p> },
                  { id: '2', title: 'How do I install it?', content: <p style={{ margin: 0 }}>Simply run: npm install rockenroll</p> },
                  { id: '3', title: 'Is it free?', content: <p style={{ margin: 0 }}>Yes, it's completely free and open source!</p> },
                ]}
              />
            ),
          },
        ];
        break;

      case 'pagination':
        examples = [
          {
            title: 'Pagination',
            code: `<Pagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
/>`,
            preview: (
              <Stack spacing="md" align="center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={10}
                  onPageChange={setCurrentPage}
                />
                <p style={{ margin: 0, color: '#666' }}>Current page: {currentPage}</p>
              </Stack>
            ),
          },
        ];
        break;

      case 'stepper':
        examples = [
          {
            title: 'Stepper',
            code: `<Stepper
  steps={steps}
  activeStep={1}
/>`,
            preview: (
              <Stepper
                steps={[
                  { id: '1', label: 'Account', description: 'Create your account' },
                  { id: '2', label: 'Profile', description: 'Fill your profile' },
                  { id: '3', label: 'Complete', description: 'Get started' },
                ]}
                activeStep={1}
              />
            ),
          },
        ];
        break;

      case 'spinner':
        examples = [
          {
            title: 'Spinner',
            code: `<Spinner size="small" />
<Spinner size="medium" />
<Spinner size="large" />`,
            preview: (
              <Stack direction="horizontal" spacing="lg" align="center">
                <Spinner size="small" />
                <Spinner size="medium" />
                <Spinner size="large" />
              </Stack>
            ),
          },
        ];
        break;

      case 'progressbar':
        examples = [
          {
            title: 'ProgressBar',
            code: `<ProgressBar value={75} showLabel />
<ProgressBar value={50} variant="success" />`,
            preview: (
              <Stack spacing="md">
                <ProgressBar value={75} showLabel />
                <ProgressBar value={50} variant="success" />
                <ProgressBar value={30} variant="warning" />
                <ProgressBar value={10} variant="error" />
              </Stack>
            ),
          },
        ];
        break;

      default:
        examples = [];
    }

    return { ...doc, examples };
  });
};

export const StorybookApp: React.FC = () => {
  const { hash, navigate } = useHashRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Component states
  const [checkboxState, setCheckboxState] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [toggleState, setToggleState] = useState(false);
  const [switchState, setSwitchState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [ratingValue, setRatingValue] = useState(3);
  const [dateValue, setDateValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Parse component ID from hash (#/component/button)
  const selectedComponentFromHash = hash.replace('#/component/', '') || 'button';
  const [selectedComponent, setSelectedComponent] = useState<string>(selectedComponentFromHash);

  // Update selected component when hash changes
  useEffect(() => {
    const componentId = hash.replace('#/component/', '') || 'button';
    setSelectedComponent(componentId);
    
    // Scroll to top when component changes
    window.scrollTo(0, 0);
  }, [hash]);

  const componentDocs = useMemo(() => createComponentDocs({
    checkboxState, setCheckboxState,
    radioValue, setRadioValue,
    toggleState, setToggleState,
    switchState, setSwitchState,
    dropdownValue, setDropdownValue,
    selectValue, setSelectValue,
    sliderValue, setSliderValue,
    ratingValue, setRatingValue,
    dateValue, setDateValue,
    currentPage, setCurrentPage,
    modalOpen, setModalOpen,
    dialogOpen, setDialogOpen
  }), [
    checkboxState, radioValue, toggleState, switchState,
    dropdownValue, selectValue, sliderValue, ratingValue,
    dateValue, currentPage, modalOpen, dialogOpen
  ]);
  
  const filteredDocs = componentDocs.filter(doc =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedDoc = componentDocs.find(doc => doc.id === selectedComponent);

  const categorizedDocs = categories.slice(1).map(category => ({
    name: category,
    docs: filteredDocs.filter(doc => doc.category === category),
  }));

  const handleComponentSelect = (componentId: string) => {
    navigate(`/component/${componentId}`);
  };

  return (
    <div className="storybook">
      <header className="storybook__header">
        <div className="storybook__logo">
          <span className="storybook__logo-icon">🎸</span>
          <span className="storybook__logo-text">Rockenroll Design System</span>
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
            title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {sidebarCollapsed ? '→' : '←'}
          </button>

          {!sidebarCollapsed && (
            <nav className="storybook__nav">
              {categorizedDocs.map(category => {
                if (category.docs.length === 0) return null;

                return (
                  <div key={category.name} className="storybook__nav-section">
                    <div className="storybook__nav-category">{category.name}</div>
                    {category.docs.map(doc => (
                      <button
                        key={doc.id}
                        className={`storybook__nav-item ${selectedComponent === doc.id ? 'active' : ''}`}
                        onClick={() => handleComponentSelect(doc.id)}
                      >
                        {doc.name}
                      </button>
                    ))}
                  </div>
                );
              })}
            </nav>
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

              {selectedDoc.examples.length > 0 && (
                <>
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
                </>
              )}

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
            <div className="storybook__content">
              <EmptyState
                title="No component found"
                description={searchQuery ? `No components match "${searchQuery}". Try a different search term.` : 'Select a component from the sidebar to view its documentation.'}
                action={searchQuery ? <Button onClick={() => setSearchQuery('')}>Clear Search</Button> : undefined}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
