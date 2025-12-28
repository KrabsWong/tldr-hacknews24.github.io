(function() {
  'use strict';

  /**
   * Initialize toggle functionality for post titles
   */
  function initToggle() {
    const toggleButtons = document.querySelectorAll('.toggle-titles');
    
    toggleButtons.forEach(button => {
      button.addEventListener('click', function() {
        const postItem = this.closest('.post-item');
        const titlesDiv = postItem.querySelector('.post-titles');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        // Toggle state
        if (isExpanded) {
          // Collapse
          this.setAttribute('aria-expanded', 'false');
          titlesDiv.classList.add('collapsed');
        } else {
          // Expand
          this.setAttribute('aria-expanded', 'true');
          titlesDiv.classList.remove('collapsed');
        }
      });
    });
  }
  
  /**
   * Ensure first visible post is expanded when pagination changes
   */
  function expandFirstVisiblePost() {
    const visiblePosts = Array.from(document.querySelectorAll('.post-item'))
      .filter(item => item.style.display !== 'none');
    
    if (visiblePosts.length > 0) {
      const firstPost = visiblePosts[0];
      const button = firstPost.querySelector('.toggle-titles');
      const titlesDiv = firstPost.querySelector('.post-titles');
      
      if (button && titlesDiv) {
        button.setAttribute('aria-expanded', 'true');
        titlesDiv.classList.remove('collapsed');
      }
    }
  }
  
  // Expose function globally for pagination to use
  window.expandFirstVisiblePost = expandFirstVisiblePost;

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggle);
  } else {
    initToggle();
  }
})();
