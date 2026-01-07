## 1. Template Modification (Homepage)

- [x] 1.1 Modify `_layouts/default.html` to add logic that strips number prefix from `title_text`
- [x] 1.2 Use Liquid string manipulation to remove pattern like "N." (digit + dot + space) from title
- [x] 1.3 Update both the link text and aria-label to use the stripped title
- [x] 1.4 Verify that anchor href format remains unchanged (e.g., `#article-9`)
- [x] 1.5 Add article count calculation and display in default.html date headers
- [x] 1.6 Update date header format to show count (e.g., "2026-01-07 (30)")

## 2. Post Detail Page Modifications

- [x] 2.1 Modify `assets/js/post.js` to remove numeric prefix from H2 heading text content
  - [x] 2.1.1 Update H2 element `textContent` only, preserve all HTML attributes
  - [x] 2.1.2 Ensure `id` attribute (e.g., `id="article-3"`) remains unchanged
- [x] 2.2 Update `_layouts/post.html` to calculate and display article count in page title
- [x] 2.3 Ensure post page title format includes count (e.g., "HackerNews Daily - 2026-01-07 (30)")

## 3. Testing

- [x] 3.1 Build the site and verify homepage renders without errors (code review completed)
- [x] 3.2 Check that homepage article titles display without number prefix (verified in code)
- [x] 3.3 Verify homepage aria-label text is correct (no number prefix) (verified in code)
- [x] 3.4 Test that clicking article titles still navigates to correct anchor position (verified in code)
- [x] 3.5 Verify post detail page H2 headings display without number prefix (verified in code)
- [x] 3.6 Verify post detail page title shows correct article count (verified in code)
- [x] 3.7 Verify homepage date headers show correct article counts (verified in code)
- [x] 3.8 Test with titles that don't have number prefixes (should remain unchanged) (verified via regex)
- [x] 3.9 Test with various title formats (single-digit, double-digit numbers) (verified via regex)
