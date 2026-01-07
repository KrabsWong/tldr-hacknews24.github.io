# homepage-title-expansion Specification

## Purpose
Enable users to view all article titles from each daily post directly on the homepage, improving content discoverability and reducing navigation friction.

## ADDED Requirements

### Requirement: Homepage displays all article titles per post
The homepage MUST extract and display all article titles (H2 headings) from each post's content, allowing users to see the full list of articles without clicking through.

#### Scenario: View all titles for a single day's post
Given a post titled "HackerNews Daily - 2025-12-28" with 10 articles (H2 headings)
When the user visits the homepage
Then all 10 article titles should be displayed below the date
And each title should be clearly distinguishable
And titles should maintain their original numbering (e.g., "1. Title", "2. Title")

#### Scenario: Titles preserve multilingual content
Given a post with article titles in English and Chinese
When the titles are displayed on the homepage
Then both English and Chinese titles should render correctly
And character encoding should be preserved
And text should not be truncated or garbled

#### Scenario: Empty or malformed posts
Given a post with no H2 headings or malformed content
When the post is displayed on the homepage
Then the system should display a fallback message (e.g., "无文章标题") or the original excerpt
And the layout should not break
And no JavaScript errors should occur

### Requirement: Titles are extracted via server-side templating
The system MUST use Jekyll's Liquid templating to extract article titles during the build process, ensuring titles are available without JavaScript.

#### Scenario: Server-side title extraction from markdown
Given a post with markdown content containing H2 headings like "## 1. Article Title"
When Jekyll builds the site
Then the Liquid template should parse the content and extract all H2 headings
And titles should be rendered as HTML elements (e.g., `<div class="article-title">`)
And extraction should work for posts with 1 to 100+ articles

#### Scenario: Title extraction handles special characters
Given article titles containing special markdown characters (e.g., `[`, `]`, `**`, links)
When the titles are extracted
Then special characters should be properly escaped or rendered as plain text
And markdown links should be converted to clickable HTML links
And bold/italic formatting should be preserved

### Requirement: Titles are visually distinct from excerpts
Article titles MUST be styled differently from the existing excerpt text to create clear visual hierarchy and improve scannability.

#### Scenario: Title list styling on desktop
Given multiple article titles displayed under a post date
When viewed on a desktop browser (>768px)
Then titles should be displayed as a list (ordered or unordered)
And each title should have a font size of approximately 0.9rem
And titles should use a secondary text color (e.g., `var(--text-secondary)`)
And list items should have comfortable line spacing (e.g., 1.5 line-height)
And the title list should be visually separated from the date (e.g., 0.5rem margin-top)

#### Scenario: Title list styling on mobile
Given multiple article titles displayed under a post date
When viewed on a mobile device (<768px)
Then titles should maintain readability with font size around 0.85rem
And list padding should be reduced for compact display
And titles should wrap naturally without horizontal scrolling

#### Scenario: Title hover effects
Given a user hovers over an article title on the homepage
When the mouse enters the title area
Then the title should change color (e.g., to `var(--accent-color)`) to indicate interactivity
And the cursor should change to a pointer if titles are clickable
And the transition should be smooth (e.g., 0.2s ease)

### Requirement: Titles maintain clickability to post detail
Each displayed article title MUST be clickable and navigate to the full post detail page, allowing users to read the complete article.

#### Scenario: Click title to navigate to post
Given a user clicks on an article title displayed on the homepage
When the click event is triggered
Then the browser should navigate to the full post detail page (e.g., `/2025/12/28/daily.html`)
And the page should scroll to the specific article heading (using anchor links)
And the navigation should work without page refresh (optional: smooth scroll)

#### Scenario: Title links have proper accessibility
Given article titles are rendered as clickable links
When a screen reader user navigates the page
Then each title link should have descriptive text (e.g., "阅读文章: 标题")
And links should be keyboard accessible (tab navigation)
And focus indicators should be clearly visible

### Requirement: Homepage displays title list instead of excerpts
The homepage MUST display a structured title list instead of truncated excerpts to show all article titles.

#### Scenario: View post with title list instead of excerpt
Given a post with substantial content and 5 article titles
When the post is displayed on the homepage
Then the title list should be displayed below the date instead of a text excerpt
And no excerpt preview should be visible
And the title list should show all 5 titles without truncation

#### Scenario: Post item height adjusts dynamically
Given posts with varying numbers of articles (e.g., 3 vs 20 articles)
When displayed on the homepage
Then each post item should expand to fit all titles
And spacing between post items should remain consistent (e.g., 1.5rem margin-bottom)
And long title lists should not cause layout issues
## Requirements
### Requirement: Homepage displays all article titles per post
The homepage MUST extract and display all article titles (H2 headings) from each post's content, allowing users to see the full list of articles without clicking through.

#### Scenario: View all titles for a single day's post
- **GIVEN** a post titled "HackerNews Daily - 2025-12-28" with 10 articles (H2 headings)
- **WHEN** user visits the homepage
- **THEN** all 10 article titles MUST be displayed below the date
- **AND** each title MUST be clearly distinguishable
- **AND** titles MUST NOT include their original numeric prefix (e.g., display "Article Title" instead of "9. Article Title")

#### Scenario: Titles preserve multilingual content
- **GIVEN** a post with article titles in English and Chinese
- **WHEN** the titles are displayed on the homepage
- **THEN** both English and Chinese titles MUST render correctly
- **AND** character encoding MUST be preserved
- **AND** text MUST NOT be truncated or garbled

#### Scenario: Empty or malformed posts
- **GIVEN** a post with no H2 headings or malformed content
- **WHEN** the post is displayed on the homepage
- **THEN** the system MUST display a fallback message (e.g., "无文章标题") or the original excerpt
- **AND** the layout MUST NOT break
- **AND** no JavaScript errors MUST occur

### Requirement: Titles are extracted via server-side templating
The system MUST use Jekyll's Liquid templating to extract article titles during the build process, ensuring titles are available without JavaScript.

#### Scenario: Server-side title extraction from markdown
Given a post with markdown content containing H2 headings like "## 1. Article Title"
When Jekyll builds the site
Then the Liquid template should parse the content and extract all H2 headings
And titles should be rendered as HTML elements (e.g., `<div class="article-title">`)
And extraction should work for posts with 1 to 100+ articles

#### Scenario: Title extraction handles special characters
Given article titles containing special markdown characters (e.g., `[`, `]`, `**`, links)
When the titles are extracted
Then special characters should be properly escaped or rendered as plain text
And markdown links should be converted to clickable HTML links
And bold/italic formatting should be preserved

### Requirement: Titles are visually distinct from excerpts
Article titles MUST be styled differently from the existing excerpt text to create clear visual hierarchy and improve scannability.

#### Scenario: Title list styling on desktop
Given multiple article titles displayed under a post date
When viewed on a desktop browser (>768px)
Then titles should be displayed as a list (ordered or unordered)
And each title should have a font size of approximately 0.9rem
And titles should use a secondary text color (e.g., `var(--text-secondary)`)
And list items should have comfortable line spacing (e.g., 1.5 line-height)
And the title list should be visually separated from the date (e.g., 0.5rem margin-top)

#### Scenario: Title list styling on mobile
Given multiple article titles displayed under a post date
When viewed on a mobile device (<768px)
Then titles should maintain readability with font size around 0.85rem
And list padding should be reduced for compact display
And titles should wrap naturally without horizontal scrolling

#### Scenario: Title hover effects
Given a user hovers over an article title on the homepage
When the mouse enters the title area
Then the title should change color (e.g., to `var(--accent-color)`) to indicate interactivity
And the cursor should change to a pointer if titles are clickable
And the transition should be smooth (e.g., 0.2s ease)

### Requirement: Titles maintain clickability to post detail
Each displayed article title MUST be clickable and navigate to the full post detail page, allowing users to read the complete article.

#### Scenario: Title links have proper accessibility
- **GIVEN** an article titled "9. Opus 4.5 与我迄今为止体验过的常规AI智能体截然不同"
- **WHEN** the article title link is rendered on the homepage
- **THEN** the aria-label MUST display "阅读文章: Opus 4.5 与我迄今为止体验过的常规AI智能体截然不同"
- **AND** the numeric prefix "9." MUST NOT be present in the aria-label

### Requirement: Homepage displays title list instead of excerpts
The homepage MUST display a structured title list instead of truncated excerpts to show all article titles.

#### Scenario: View post with title list instead of excerpt
Given a post with substantial content and 5 article titles
When the post is displayed on the homepage
Then the title list should be displayed below the date instead of a text excerpt
And no excerpt preview should be visible
And the title list should show all 5 titles without truncation

#### Scenario: Post item height adjusts dynamically
Given posts with varying numbers of articles (e.g., 3 vs 20 articles)
When displayed on the homepage
Then each post item should expand to fit all titles
And spacing between post items should remain consistent (e.g., 1.5rem margin-bottom)
And long title lists should not cause layout issues

### Requirement: Detail page handles anchor navigation on load
The post detail page MUST detect and scroll to the target element when the URL contains an anchor fragment.

#### Scenario: Page loads with anchor in URL
- **WHEN** a user navigates to a post detail page with an anchor fragment (e.g., `/2025/12/28/daily/#article-5`)
- **THEN** the page MUST wait for the DOM to be fully loaded
- **AND** the page MUST rewrite all H2 IDs to sequential format before processing the anchor
- **AND** the page MUST locate the element with the matching ID
- **AND** the page MUST smoothly scroll to that element

#### Scenario: Page loads without anchor
- **WHEN** a user navigates to a post detail page without an anchor fragment
- **THEN** the page MUST display from the top as usual
- **AND** no automatic scrolling MUST occur

#### Scenario: Anchor element not found
- **WHEN** a user navigates to a post detail page with an invalid anchor fragment
- **THEN** the page MUST display from the top without errors
- **AND** no JavaScript errors MUST be thrown

### Requirement: Detail page TOC uses rewritten IDs
The table of contents on the post detail page MUST use the same sequential ID format for navigation links.

#### Scenario: Desktop sidebar TOC links
- **WHEN** the desktop sidebar TOC is generated
- **THEN** each link MUST use the rewritten H2 ID (e.g., `#article-1`)
- **AND** clicking a link MUST smoothly scroll to the corresponding heading

#### Scenario: Mobile drawer TOC links
- **WHEN** the mobile navigation drawer TOC is generated
- **THEN** each link MUST use the rewritten H2 ID (e.g., `#article-1`)
- **AND** clicking a link MUST close the drawer and smoothly scroll to the corresponding heading

### Requirement: Homepage displays article count in date headers
The homepage MUST display the total number of articles for each day next to the date header.

#### Scenario: Date header shows article count
- **GIVEN** a post dated "2026-01-07" containing 30 articles
- **WHEN** the homepage renders the date header
- **THEN** the header MUST display "2026-01-07 (30)"
- **AND** the count MUST accurately reflect the number of H2 headings in the post

#### Scenario: Single article count display
- **GIVEN** a post dated "2026-01-06" containing 1 article
- **WHEN** the homepage renders the date header
- **THEN** the header MUST display "2026-01-06 (1)"
- **AND** the count format MUST be consistent with multi-article posts

### Requirement: Post detail page removes number prefixes from headings
The post detail page MUST remove numeric prefixes from H2 heading text content while preserving all HTML attributes (including `id` attribute for anchor navigation).

#### Scenario: H2 headings display without number prefix but preserve attributes
- **GIVEN** a post with H2 heading `<h2 id="article-9">9. Opus 4.5...</h2>`
- **WHEN** the post detail page is rendered
- **THEN** the H2 tag MUST keep its `id="article-9"` attribute unchanged
- **AND** the H2 tag MUST keep all other attributes unchanged
- **AND** the H2 heading text content MUST display only "Opus 4.5..." without the "9." prefix
- **AND** anchor navigation via `#article-9` MUST continue to work correctly

#### Scenario: TOC navigation preserves clean titles
- **GIVEN** the post detail page displays a table of contents
- **WHEN** the TOC is generated
- **THEN** TOC items MUST display titles without numeric prefixes
- **AND** TOC links MUST still navigate to the correct heading via anchor

### Requirement: Post detail page displays article count in title
The post detail page MUST display the total number of articles in the page title.

#### Scenario: Post title includes article count
- **GIVEN** a post titled "HackerNews Daily - 2026-01-07" with 30 articles
- **WHEN** the post detail page is rendered
- **THEN** the page title MUST display "HackerNews Daily - 2026-01-07 (30)"
- **AND** the count MUST be calculated from the number of H2 headings

#### Scenario: Count matches actual articles
- **GIVEN** a post with 15 H2 headings
- **WHEN** the post detail page is rendered
- **THEN** the displayed count MUST be "15"
- **AND** the count MUST match the actual number of visible article sections

