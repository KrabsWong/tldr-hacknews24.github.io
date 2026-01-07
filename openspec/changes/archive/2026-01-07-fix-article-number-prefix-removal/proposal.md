# Change: Fix article number prefix removal from homepage

## Why

Article titles on the homepage still display numeric prefixes (e.g., "2. 越南禁止不可跳过的广告") despite an existing implementation attempt. These prefixes are redundant because:
1. Articles are displayed in an ordered list, making the numeric ordering visually apparent
2. The number prefix adds visual clutter without adding information value
3. The aria-label also includes the number prefix, making it less accessible

The existing `remove_number_prefix` filter is implemented and applied in the template, but titles still show numbers, indicating a bug in either:
- The filter implementation
- The filter registration
- The template logic
- Or the site hasn't been rebuilt with the changes

## What Changes

- **Fix number prefix removal**: Debug and fix the issue causing number prefixes to still appear in homepage article titles
- **Verify filter implementation**: Ensure the `remove_number_prefix` filter correctly strips the pattern `/^\d+\.\s+/` from title text
- **Update aria-label**: Ensure the aria-label also displays the title without the number prefix
- **Preserve anchor links**: Keep the href anchor format unchanged (e.g., `#article-2`) for navigation functionality
- **Test and validate**: Build the site and verify the changes work correctly

## Impact

- Affected specs: `homepage-title-expansion` (fixes the number prefix removal requirement)
- Affected code:
  - `_layouts/default.html`: Verify template logic for title processing (lines 50-63)
  - `_plugins/remove_number_prefix.rb`: Verify filter implementation and registration
- No breaking changes to existing functionality
- Improves visual cleanliness and accessibility

## Dependencies

- Builds on existing `homepage-title-expansion` spec implementation
- Depends on Jekyll build environment to test changes
- No external dependencies

## Alternatives Considered

1. **Keep number prefixes**: Current broken state, but adds visual clutter
2. **Client-side removal**: Use JavaScript to remove prefixes after page load - rejected as less performant and creates FOUC (Flash of Unstyled Content)
3. **Edit markdown files**: Remove numbers from all post files - rejected as too invasive and loses the original numbering information

## Success Metrics

- Homepage article titles display without number prefix (e.g., "越南禁止不可跳过的广告" instead of "2. 越南禁止不可跳过的广告")
- Homepage aria-label contains only the title text without number prefix
- Anchor links continue to function correctly (e.g., `#article-2` works)
- No visual layout issues or broken links
- Site builds without errors
