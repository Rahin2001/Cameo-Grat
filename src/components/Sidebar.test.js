./temp_repos/Cameo-Grat/src/components/Sidebar.jsx
javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

const renderSidebar = (props = {}) => {
  const defaultProps = {
    isSidebarOpen: true,
    selectedCategory: 'All',
    setSelectedCategory: jest.fn(),
    onToggleSidebar: jest.fn(),
    ...props,
  };

  return render(
    <BrowserRouter>
      <Sidebar {...defaultProps} />
    </BrowserRouter>
  );
};

describe('Sidebar Component', () => {
  test('renders sidebar with correct title', () => {
    renderSidebar();
    expect(screen.getByText('Cameo-Grat')).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    renderSidebar();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Explore')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Videos')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders category buttons', () => {
    renderSidebar();
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Hair')).toBeInTheDocument();
    expect(screen.getByText('Makeup')).toBeInTheDocument();
    expect(screen.getByText('Nails')).toBeInTheDocument();
    expect(screen.getByText('Fashion')).toBeInTheDocument();
    expect(screen.getByText('Art')).toBeInTheDocument();
  });

  test('applies correct classes when sidebar is open', () => {
    renderSidebar({ isSidebarOpen: true });
    const sidebar = screen.getByRole('navigation');
    expect(sidebar).toHaveClass('sidebar', 'open');
  });

  test('applies correct classes when sidebar is closed', () => {
    renderSidebar({ isSidebarOpen: false });
    const sidebar = screen.getByRole('navigation');
    expect(sidebar).toHaveClass('sidebar');
    expect(sidebar).not.toHaveClass('open');
  });

  test('calls onToggleSidebar when close button is clicked', () => {
    const onToggleSidebar = jest.fn();
    renderSidebar({ onToggleSidebar });
    const closeButton = screen.getByRole('button');
    closeButton.click();
    expect(onToggleSidebar).toHaveBeenCalledTimes(1);
  });

  test('calls setSelectedCategory when category button is clicked', () => {
    const setSelectedCategory = jest.fn();
    renderSidebar({ setSelectedCategory });
    const hairButton = screen.getByText('Hair');
    hairButton.click();
    expect(setSelectedCategory).toHaveBeenCalledWith('Hair');
  });

  test('applies selected class to active category', () => {
    renderSidebar({ selectedCategory: 'Hair' });
    const hairButton = screen.getByText('Hair');
    expect(hairButton).toHaveClass('selected');
  });

  test('renders correct icons for navigation links', () => {
    renderSidebar();
    const homeIcon = screen.getByTitle('Home');
    const globeIcon = screen.getByTitle('Explore');
    const userIcon = screen.getByTitle('About');
    const videoIcon = screen.getByTitle('Videos');
    const messageIcon = screen.getByTitle('Contact');
    
    expect(homeIcon).toBeInTheDocument();
    expect(globeIcon).toBeInTheDocument();
    expect(userIcon).toBeInTheDocument();
    expect(videoIcon).toBeInTheDocument();
    expect(messageIcon).toBeInTheDocument();
  });
});