# homepage-pagination Specification

## Purpose
Implement client-side pagination to manage the display of numerous posts on the homepage, preventing excessive page length and improving user experience with large content volumes.

## ADDED Requirements

### Requirement: Homepage implements client-side pagination
The homepage MUST implement JavaScript-based pagination to display a limited number of posts per page, with navigation controls to move between pages.

#### Scenario: Initial page load shows first page
Given the site has 24 posts (representing 24 days of content)
And pagination is configured to show 10 posts per page
When a user first visits the homepage
Then only the first 10 posts (most recent) should be visible
And posts 11-24 should be hidden via CSS display:none
And the pagination controls should display "第 1 页 / 共 3 页"

#### Scenario: Navigate to next page
Given a user is viewing page 1 of 3
When the user clicks the "下一页 →" button
Then posts 1-10 should be hidden
And posts 11-20 should be displayed
And the page counter should update to "第 2 页 / 共 3 页"
And the "上一页 ←" button should become enabled
And the page should scroll to the top of the post list

#### Scenario: Navigate to previous page
Given a user is viewing page 2 of 3
When the user clicks the "上一页 ←" button
Then posts 11-20 should be hidden
And posts 1-10 should be displayed
And the page counter should update to "第 1 页 / 共 3 页"
And the "上一页 ←" button should become disabled (first page)

#### Scenario: Pagination on last page
Given a user is viewing page 3 of 3 (last page with 4 posts)
When the page is rendered
Then posts 21-24 should be displayed
And the "下一页 →" button should be disabled
And the "上一页 ←" button should be enabled
And the page counter should display "第 3 页 / 共 3 页"

### Requirement: Pagination controls are visually clear
Pagination controls MUST be displayed prominently below the post list with clear visual indicators of current state and available actions.

#### Scenario: Pagination control layout on desktop
Given pagination controls are rendered on desktop (>768px)
When displayed below the post list
Then controls should be centered horizontally
And the layout should be: [← 上一页] [第 X 页 / 共 Y 页] [下一页 →]
And buttons should have comfortable padding (e.g., 0.75rem 1.5rem)
And the current page indicator should use accent color (e.g., `var(--accent-color)`)
And controls should have a margin-top of 2rem from the last post

#### Scenario: Disabled button styling
Given a pagination button is in a disabled state (e.g., "上一页" on page 1)
When rendered
Then the button should have reduced opacity (e.g., 0.5)
And the cursor should be "not-allowed"
And the button should not respond to click events
And the button color should be muted (e.g., `var(--text-tertiary)`)

#### Scenario: Enabled button hover effect
Given a pagination button is enabled
When a user hovers over the button
Then the button background should change (e.g., to `var(--bg-secondary)`)
And the border color should change to accent color (e.g., `var(--accent-color)`)
And the transition should be smooth (0.2s ease)

### Requirement: Pagination state is configurable
The pagination system MUST allow configuration of posts per page and should adapt to different device sizes.

#### Scenario: Desktop displays 10 posts per page
Given the viewport width is greater than 768px
When pagination is initialized
Then `itemsPerPage` should be set to 10
And total pages should be calculated as Math.ceil(totalPosts / 10)

#### Scenario: Mobile displays 5 posts per page
Given the viewport width is less than or equal to 768px
When pagination is initialized
Then `itemsPerPage` should be set to 5
And total pages should be calculated as Math.ceil(totalPosts / 5)
And pagination controls should be styled for mobile (smaller buttons, stacked layout)

#### Scenario: Recalculate pagination on window resize
Given a user resizes the browser window from desktop to mobile
When the resize event is triggered
Then pagination should recalculate `itemsPerPage` based on new viewport width
And current page should be adjusted if it exceeds new total pages
And the display should update to show correct posts for the new page size

### Requirement: Pagination preserves accessibility
Pagination controls MUST be keyboard accessible and provide appropriate ARIA labels for screen readers.

#### Scenario: Keyboard navigation of pagination
Given a keyboard user tabs to pagination controls
When the user presses Tab
Then focus should move to the "上一页" button first
And pressing Tab again should move to the "下一页" button
And pressing Enter or Space on a button should trigger page navigation
And focus should remain on the same button after navigation (unless disabled)

#### Scenario: Screen reader announces page changes
Given a screen reader user navigates to a different page
When the page content updates
Then an ARIA live region should announce "已加载第 X 页，共 Y 页"
And the announcement should occur after the DOM updates
And the screen reader should not read out hidden posts

#### Scenario: Pagination buttons have ARIA labels
Given pagination buttons are rendered
When a screen reader inspects the buttons
Then the "上一页" button should have `aria-label="上一页"`
And the "下一页" button should have `aria-label="下一页"`
And disabled buttons should have `aria-disabled="true"`

### Requirement: Pagination JavaScript is modular and maintainable
The pagination JavaScript code MUST be organized as a reusable module with clear separation of concerns.

#### Scenario: Pagination initialization on DOM ready
Given the homepage HTML includes post items with class `.post-item`
When the DOM content is fully loaded
Then the pagination module should initialize automatically
And it should query all `.post-item` elements
And calculate total pages based on item count
And render pagination controls in the designated container
And display the first page of posts

#### Scenario: Pagination state management
Given the pagination module is initialized
When the state changes (e.g., current page increments)
Then the state object should update with new values
And the UI should re-render based on the new state
And all posts should be checked for visibility (show/hide)
And button states should be updated (enabled/disabled)

#### Scenario: No pagination for small post counts
Given the site has only 8 posts
And `itemsPerPage` is configured to 10
When pagination initializes
Then pagination controls should not be rendered (or hidden)
And all 8 posts should be visible simultaneously
And no navigation buttons should appear
