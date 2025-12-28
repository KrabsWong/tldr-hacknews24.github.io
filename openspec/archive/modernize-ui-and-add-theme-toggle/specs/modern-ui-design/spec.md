# Spec: Modern UI Design

## ADDED Requirements

### Requirement: Modern typography system
The site SHALL use a modern typography system with proper font stack, line heights, and vertical rhythm.

#### Scenario: User views the site on any device
Given the site is loaded
When the user views the content
Then text uses system fonts (San Francisco, Segoe UI, Roboto) for native appearance
And line height is 1.6 for body text
And headings follow a consistent scale with proper spacing
And line length is 60-75 characters for optimal readability

#### Scenario: User views content on mobile device
Given the site is loaded on a mobile device (<768px)
When the user reads content
Then font sizes are appropriately scaled for mobile
And text is still readable without zooming

### Requirement: Consistent color palette
The site SHALL use a consistent color palette with defined primary, secondary, and accent colors for both light and dark themes.

#### Scenario: Site renders in light theme
Given the user has light theme selected
When the site renders
Then primary background is #ffffff
And text primary is #202124
And accent color is #1a73e8
And all colors follow the defined light theme palette

#### Scenario: Site renders in dark theme
Given the user has dark theme selected
When the site renders
Then primary background is #1a1a1a
And text primary is #e8eaed
And accent color is #8ab4f8
And all colors follow the defined dark theme palette

### Requirement: Improved layout structure
The site SHALL have an improved layout structure with better spacing, container sizing, and visual hierarchy.

#### Scenario: User views post page
Given the user navigates to a post page
When the page loads
Then content is centered with max-width of 1000px
And sidebar is 280px wide on desktop
And gap between sidebar and content is 2rem
And consistent padding of 40px on desktop

#### Scenario: User views homepage
Given the user navigates to the homepage
When the page loads
Then post list has consistent card-like styling
And each post item has clear visual separation
And dates and titles are properly aligned

### Requirement: Enhanced component styling
The site SHALL have enhanced styling for all components including buttons, links, and interactive elements.

#### Scenario: User hovers over interactive elements
Given the user interacts with the site
When hovering over a link or button
Then element shows clear hover state with color change
And transition is smooth (0.2s ease)
And feedback is immediate and noticeable

#### Scenario: User views table of contents
Given the user is on a post page
When viewing the sidebar outline
Then active section is visually highlighted
And hover effect indicates interactivity
And links are properly spaced and readable

### Requirement: Responsive design
The site SHALL be fully responsive with optimized layouts for mobile, tablet, and desktop viewports.

#### Scenario: User views site on mobile device
Given the user views site on device <768px wide
When page loads
Then layout switches to single column
And sidebar moves to top or becomes collapsible
And padding is reduced to 20px
And touch targets are at least 44x44px

#### Scenario: User views site on tablet device
Given the user views site on device 768px-1024px wide
When page loads
Then layout maintains sidebar but with reduced width
And content adjusts to fit screen width
And spacing is optimized for tablet reading

### Requirement: Improved spacing system
The site SHALL use a consistent spacing scale throughout the design.

#### Scenario: Elements are spaced in the layout
Given any page is rendered
When elements require spacing
Then spacing uses scale: 0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem
And spacing is consistent across similar elements
And vertical rhythm is maintained

## MODIFIED Requirements

### Requirement: Post content readability
The existing post content layout SHALL be enhanced for improved readability.

#### Scenario: User reads a long post
Given the user is reading a multi-section post
When scrolling through content
Then sections have visual separation with card-like styling
And paragraph spacing is 1.5rem
And blockquotes are clearly distinguished
And code blocks have proper syntax highlighting

#### Scenario: User views post metadata
Given the user views a post page
When displaying post information
Then title is prominent and clearly visible
And date is formatted consistently (YYYY年MM月DD日)
And metadata section has clear visual separation from content
