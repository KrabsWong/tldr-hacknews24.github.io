# expand-homepage-titles

## Why
Currently, the homepage displays only one truncated title per post as a preview (via `{{ post.excerpt }}`), which limits users' ability to quickly scan and determine if the daily content is relevant to their interests. Users must click through to individual posts to see all article titles, creating unnecessary friction in content discovery.

## What Changes
1. **Expand title display**: Modify the homepage to show all article titles (H2 headings) from each daily post, extracted from the post content, giving users a complete overview at a glance.
2. **Add pagination**: Implement client-side pagination to manage the increased content length, displaying a configurable number of posts per page (e.g., 5-10 posts) with navigation controls.

This change introduces two new specs:
- **homepage-title-expansion**: Display all article titles on homepage
- **homepage-pagination**: Client-side pagination for post list

## Dependencies
- Depends on existing `homepage-list-enhancement` spec (Jekyll post structure)
- No breaking changes to existing functionality

## Alternatives Considered
1. **Server-side pagination with Jekyll Paginate**: More complex, requires Jekyll rebuild
2. **Infinite scroll**: Less predictable, harder to navigate to specific dates
3. **Accordion/collapsible sections**: Adds interaction complexity

## Success Metrics
- Users can see all article titles without clicking through
- Page load time remains under 2 seconds
- Pagination controls are intuitive and responsive
