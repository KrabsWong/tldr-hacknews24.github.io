# Change: Remove article number prefixes from homepage display

## Why

Currently, the homepage displays article titles with their original number prefixes (e.g., "9. Opus 4.5 与我迄今为止体验过的常规AI智能体截然不同"). These numbers are redundant because:
1. The titles are already ordered in a list, so the numerical ordering is visually apparent
2. The number prefix adds visual clutter without adding information value
3. The aria-label also includes the number prefix, making it less accessible and concise

## What Changes

- **Remove number prefixes from article title display**: Modify the homepage template to strip the numeric prefix (e.g., "9.") from article titles when displaying them in the article list
- **Update aria-label**: Ensure the aria-label also displays the title without the number prefix
- **Preserve anchor links**: Keep the href anchor format unchanged (e.g., `#article-9`) for navigation functionality
- **Remove number prefixes from post detail page**: Remove numeric prefix from H2 heading text content in post detail pages while preserving all HTML attributes (especially `id` attribute like `id="article-3"`)
- **Add article count to post detail title**: Display total article count in post detail page title (e.g., "HackerNews Daily - 2026-01-07 (30)")
- **Add article count to homepage date headers**: Display total article count after each date on homepage (e.g., "2026-01-07 (30)")

## Impact

- Affected specs: `homepage-title-expansion` (MODIFIED: titles should not maintain their original numbering)
- Affected code:
  - `_layouts/default.html`: Modify the title processing logic to remove number prefix before display and add article count to date headers
  - `_layouts/post.html`: Add article count to page title
  - `assets/js/post.js`: Remove numeric prefix from H2 headings in post content
  - `_plugins/remove_number_prefix.rb`: Custom Liquid filter for removing numeric prefixes
- No breaking changes to existing functionality
- Improves visual cleanliness and accessibility

## Dependencies

- Depends on existing `homepage-title-expansion` spec implementation
- No external dependencies

## Alternatives Considered

1. **Keep number prefixes**: Current state, but adds visual clutter
2. **Move number prefix to list index**: Add separate list numbers (1, 2, 3...) next to titles - rejected as redundant with list visual ordering
3. **Remove numbers from markdown content**: Would require editing all post files - rejected as too invasive

## Success Metrics

- Homepage article titles display without number prefix (e.g., "Opus 4.5..." instead of "9. Opus 4.5...")
- Homepage aria-label contains only the title text without number prefix
- Post detail page H2 headings display without number prefix
- Post detail page title shows article count (e.g., "HackerNews Daily - 2026-01-07 (30)")
- Homepage date headers show article count (e.g., "2026-01-07 (30)")
- Anchor links continue to function correctly
- No visual layout issues or broken links
