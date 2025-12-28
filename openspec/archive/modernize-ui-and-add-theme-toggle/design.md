# Design: Modern UI and Theme Toggle

## Architecture Overview

The solution uses CSS custom properties (CSS variables) for theming and vanilla JavaScript for theme management. No external frameworks or dependencies are required.

## Theme System

### CSS Custom Properties Approach
Use CSS variables defined at the `:root` level for all colors and spacing values. Theme-specific values are defined in:
- `:root` - Light theme (default)
- `[data-theme="dark"]` - Dark theme
- `@media (prefers-color-scheme: dark)` - System dark preference fallback

### Theme States
1. **Light**: Explicit light theme selected by user
2. **Dark**: Explicit dark theme selected by user
3. **Auto**: Follows system preference

### Implementation Details

#### CSS Structure
```css
:root {
  /* Light theme colors */
  --bg-primary: #ffffff;
  --text-primary: #202124;
  --accent-color: #1a73e8;
  /* ... more variables */
}

[data-theme="dark"] {
  /* Dark theme colors */
  --bg-primary: #1a1a1a;
  --text-primary: #e8eaed;
  --accent-color: #8ab4f8;
  /* ... more variables */
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    /* Auto mode - follows system */
    --bg-primary: #1a1a1a;
    --text-primary: #e8eaed;
  }
}
```

#### JavaScript Theme Manager
- Read theme preference from localStorage on page load
- Detect system preference using `window.matchMedia('(prefers-color-scheme: dark)')`
- Apply theme by setting `data-theme` attribute on `<html>` element
- Listen for system theme changes and update automatically in auto mode
- Persist user selection in localStorage

## Modern UI Design System

### Typography
- Font family: System font stack (San Francisco, Segoe UI, Roboto) for native feel
- Line height: 1.6 for body text
- Heading scale with consistent vertical rhythm

### Color Palette (Light Theme)
- Primary background: #ffffff
- Secondary background: #f8f9fa
- Text primary: #202124
- Text secondary: #5f6368
- Accent color: #1a73e8 (blue)
- Border color: #dadce0

### Color Palette (Dark Theme)
- Primary background: #1a1a1a
- Secondary background: #2d2d2d
- Text primary: #e8eaed
- Text secondary: #9aa0a6
- Accent color: #8ab4f8
- Border color: #3c4043

### Spacing System
Use consistent spacing scale: 0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem

### Component Design

#### Header/Navigation
- Sticky header with site title and theme toggle
- Clean, minimal design

#### Sidebar
- Site info section at top
- Table of contents with active state highlighting
- Smooth scroll behavior

#### Post Content
- Improved typography with better line length (60-75 characters)
- Card-like section separators
- Enhanced link styling

#### Theme Toggle Button
- Icon-based (sun/moon icons)
- Positioned in header
- Three states: Light, Dark, Auto
- Accessible with ARIA labels

### Responsive Design
- **Mobile** (< 768px): Single column layout, collapsible sidebar
- **Tablet** (768px - 1024px): Reduced sidebar width
- **Desktop** (> 1024px): Full layout as currently designed

## File Structure

```
assets/
  css/
    theme.css          # Theme variables and base styles
    layout.css         # Layout and responsive styles
    components.css     # Component-specific styles
  js/
    theme-toggle.js    # Theme management logic
_layouts/
  post.html           # Updated with new styles
  default.html        # Updated homepage layout
index.md              # May need layout updates
```

## Browser Support
- Modern browsers with CSS custom properties support
- JavaScript for theme toggle (graceful degradation without JS)
- System preference detection requires `window.matchMedia`

## Performance Considerations
- CSS variables are performant and don't require JavaScript recalculation
- Theme toggle uses simple DOM attribute manipulation
- No external dependencies to load
- CSS can be inlined in head for faster initial render

## Accessibility
- Theme toggle properly labeled with ARIA attributes
- Sufficient color contrast ratios (WCAG AA or better)
- Respect reduced motion preferences for theme transitions
- Theme changes don't trigger reflow that disrupts reading position
