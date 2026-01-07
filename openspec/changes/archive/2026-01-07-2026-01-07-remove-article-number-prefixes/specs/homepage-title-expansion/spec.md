# homepage-title-expansion Specification Delta

## Purpose
Update requirements to remove numeric prefixes from article titles displayed on homepage.

## MODIFIED Requirements

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

### Requirement: Titles maintain clickability to post detail
Each displayed article title MUST be clickable and navigate to the full post detail page, allowing users to read the complete article.

#### Scenario: Title links have proper accessibility
- **GIVEN** an article titled "9. Opus 4.5 与我迄今为止体验过的常规AI智能体截然不同"
- **WHEN** the article title link is rendered on the homepage
- **THEN** the aria-label MUST display "阅读文章: Opus 4.5 与我迄今为止体验过的常规AI智能体截然不同"
- **AND** the numeric prefix "9." MUST NOT be present in the aria-label

## ADDED Requirements

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
