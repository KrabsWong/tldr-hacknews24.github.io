# homepage-title-clean-titles Specification

## Purpose
Ensure article titles on the homepage display without numeric prefixes, improving visual cleanliness and accessibility.

## MODIFIED Requirements

### Requirement: Homepage displays all article titles per post
The homepage MUST extract and display all article titles (H2 headings) from each post's content, allowing users to see the full list of articles without clicking through.

#### Scenario: View all titles for a single day's post
- **GIVEN** a post titled "HackerNews Daily - 2026-01-07" with 30 articles (H2 headings)
- **WHEN** the user visits the homepage
- **THEN** all 30 article titles MUST be displayed below the date
- **AND** each title MUST be clearly distinguishable
- **AND** titles MUST NOT include their original numeric prefix (e.g., display "越南禁止不可跳过的广告" instead of "2. 越南禁止不可跳过的广告")

#### Scenario: Titles preserve multilingual content
- **GIVEN** a post with article titles in English and Chinese
- **WHEN** the titles are displayed on the homepage
- **THEN** both English and Chinese titles MUST render correctly
- **AND** character encoding MUST be preserved
- **AND** text MUST NOT be truncated or garbled
- **AND** numeric prefixes MUST be removed from all titles

#### Scenario: Empty or malformed posts
- **GIVEN** a post with no H2 headings or malformed content
- **WHEN** the post is displayed on the homepage
- **THEN** the system MUST display a fallback message (e.g., "无文章标题") or the original excerpt
- **AND** the layout MUST NOT break
- **AND** no JavaScript errors MUST occur

### Requirement: Titles are extracted via server-side templating
The system MUST use Jekyll's Liquid templating to extract article titles during the build process, ensuring titles are available without JavaScript.

#### Scenario: Server-side title extraction from markdown
- **GIVEN** a post with markdown content containing H2 headings like "## 1. Article Title"
- **WHEN** Jekyll builds the site
- **THEN** the Liquid template MUST parse the content and extract all H2 headings
- **AND** titles MUST be rendered as HTML elements (e.g., `<a>` tags with class `article-title`)
- **AND** numeric prefixes MUST be removed from the extracted titles
- **AND** extraction MUST work for posts with 1 to 100+ articles

#### Scenario: Title extraction handles special characters
- **GIVEN** article titles containing special markdown characters (e.g., `[`, `]`, `**`, links)
- **WHEN** the titles are extracted
- **THEN** special characters MUST be properly escaped or rendered as plain text
- **AND** markdown links MUST be converted to clickable HTML links
- **AND** bold/italic formatting MUST be preserved

### Requirement: Titles are visually distinct from excerpts
Article titles MUST be styled differently from the existing excerpt text to create clear visual hierarchy and improve scannability.

#### Scenario: Title list styling on desktop
- **GIVEN** multiple article titles displayed under a post date
- **WHEN** viewed on a desktop browser (>768px)
- **THEN** titles MUST be displayed as a list
- **AND** each title MUST have a font size of approximately 0.9rem
- **AND** titles MUST use a secondary text color (e.g., `var(--text-secondary)`)
- **AND** list items MUST have comfortable line spacing (e.g., 1.5 line-height)
- **AND** the title list MUST be visually separated from the date (e.g., 0.5rem margin-top)

#### Scenario: Title list styling on mobile
- **GIVEN** multiple article titles displayed under a post date
- **WHEN** viewed on a mobile device (<768px)
- **THEN** titles MUST maintain readability with font size around 0.85rem
- **AND** list padding MUST be reduced for compact display
- **AND** titles MUST wrap naturally without horizontal scrolling

#### Scenario: Title hover effects
- **GIVEN** a user hovers over an article title on the homepage
- **WHEN** the mouse enters the title area
- **THEN** the title MUST change color (e.g., to `var(--accent-color)`) to indicate interactivity
- **AND** the cursor MUST change to a pointer
- **AND** the transition MUST be smooth (e.g., 0.2s ease)

### Requirement: Titles maintain clickability to post detail
Each displayed article title MUST be clickable and navigate to the full post detail page, allowing users to read the complete article.

#### Scenario: Click title to navigate to post
- **GIVEN** a user clicks on an article title displayed on the homepage
- **WHEN** the click event is triggered
- **THEN** the browser MUST navigate to the full post detail page (e.g., `/2026/01/07/daily.html`)
- **AND** the page MUST scroll to the specific article heading (using anchor links)
- **AND** the navigation MUST work smoothly

#### Scenario: Title links have proper accessibility
- **GIVEN** an article titled "2. 越南禁止不可跳过的广告"
- **WHEN** the article title link is rendered on the homepage
- **THEN** the aria-label MUST display "阅读文章: 越南禁止不可跳过的广告"
- **AND** the numeric prefix "2." MUST NOT be present in the aria-label
- **AND** links MUST be keyboard accessible (tab navigation)
- **AND** focus indicators MUST be clearly visible

#### Scenario: Anchor links preserve original IDs
- **GIVEN** article titles are linked to specific positions in the post detail page
- **WHEN** the title links are generated
- **THEN** the href attribute MUST use the original article index (e.g., `href="/2026/01/07/daily/#article-2"`)
- **AND** the anchor ID MUST match the JavaScript-generated IDs on the detail page
- **AND** anchor navigation MUST continue to work correctly

### Requirement: Homepage displays title list instead of excerpts
The homepage MUST display a structured title list instead of truncated excerpts to show all article titles.

#### Scenario: View post with title list instead of excerpt
- **GIVEN** a post with substantial content and 5 article titles
- **WHEN** the post is displayed on the homepage
- **THEN** the title list MUST be displayed below the date instead of a text excerpt
- **AND** no excerpt preview MUST be visible
- **AND** the title list MUST show all 5 titles without truncation
- **AND** each title MUST display without its numeric prefix

#### Scenario: Post item height adjusts dynamically
- **GIVEN** posts with varying numbers of articles (e.g., 3 vs 20 articles)
- **WHEN** displayed on the homepage
- **THEN** each post item MUST expand to fit all titles
- **AND** spacing between post items MUST remain consistent (e.g., 1.5rem margin-bottom)
- **AND** long title lists MUST NOT cause layout issues

## ADDED Requirements

### Requirement: Jekyll filter removes number prefixes
The custom Jekyll Liquid filter MUST correctly remove numeric prefixes from article title strings during the build process.

#### Scenario: Filter removes single-digit prefixes
- **GIVEN** a string "1. Article Title"
- **WHEN** the `remove_number_prefix` filter is applied
- **THEN** the result MUST be "Article Title"
- **AND** the pattern `\d+\.\s+` MUST be matched and removed

#### Scenario: Filter removes double-digit prefixes
- **GIVEN** a string "42. Another Article Title"
- **WHEN** the `remove_number_prefix` filter is applied
- **THEN** the result MUST be "Another Article Title"
- **AND** the pattern `\d+\.\s+` MUST be matched and removed

#### Scenario: Filter handles titles without prefixes
- **GIVEN** a string "Article Title Without Number"
- **WHEN** the `remove_number_prefix` filter is applied
- **THEN** the result MUST remain "Article Title Without Number"
- **AND** no modification MUST be made to the original string

#### Scenario: Filter handles multilingual content
- **GIVEN** a string "1. 越南禁止不可跳过的广告"
- **WHEN** the `remove_number_prefix` filter is applied
- **THEN** the result MUST be "越南禁止不可跳过的广告"
- **AND** Chinese characters MUST be preserved correctly
