
/**
 * Smoke & behavior tests for the single-page portfolio.
 * These align with CI pipeline stages (test/build/deploy).
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

beforeAll(() => {
  // mock smooth scroll
  Element.prototype.scrollIntoView = jest.fn();
});

test('renders without crashing and shows navbar', () => {
  render(<App />);
  // Navbar brand
  expect(screen.getAllByText(/nadil/i)[0]).toBeInTheDocument();
  // Navbar buttons
  const navButtons = ['Home','About','Skills','Projects','Contact'];
  navButtons.forEach(label => {
    expect(screen.getAllByRole('button', { name: label })[0]).toBeInTheDocument();
  });
});

test('sections are present via anchors/ids', () => {
  render(<App />);
  const ids = ['home','about','skills','projects','contact'];
  ids.forEach(id => {
    const el = document.querySelector('#' + id);
    expect(el).toBeTruthy();
  });
});

test('clicking navbar triggers smooth scroll (scrollIntoView called)', async () => {
  render(<App />);
  const aboutBtn = screen.getAllByRole('button', { name: 'About' })[0];
  await userEvent.click(aboutBtn);
  expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
});

test('external profile links exist', () => {
  render(<App />);
  const linkedin = screen.getAllByRole('link', { name: /linkedin/i })[0];
  const github = screen.getAllByRole('link', { name: /github/i })[0];
  expect(linkedin).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
  expect(github).toHaveAttribute('href', expect.stringContaining('github.com'));
});
