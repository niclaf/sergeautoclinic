/*
 * Main JavaScript file for Serge Auto Clinic Website
 * Handles:
 * 1. Page load-in animation.
 * 2. Revealing content sections on scroll.
 * 3. Smooth-scrolling for navigation links.
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Page Load-in animation
  const loader = document.getElementById('loader');
  
  // On window load, trigger the animation and then hide the loader
  window.addEventListener('load', () => {
    // Add the class to the body to trigger the animations
    document.body.classList.add('page-loaded');

    // Hide the loader screen after a short delay to let animations start
    setTimeout(() => {
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 100); // REVERTED: Back to shorter delay
  });
  
  // As a fallback, if the load event fails or takes too long, 
  // still run the animation and hide the loader.
  setTimeout(() => {
    document.body.classList.add('page-loaded');
    if (loader) {
        loader.classList.add('hidden');
    }
  }, 2000); // REDUCED: Shortened fallback timer


  // 2. Reveal on scroll functionality
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% of the element must be visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optional: stop observing the element once it's visible
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    observer.observe(el);
  });
  
  // 3. Navigation smooth-scrolling
  const smoothScroll = (selector, targetId) => {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener('click', () => {
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
    }
  };

  smoothScroll('#mainTitle', 'about');
  smoothScroll('.block-about', 'contact');
  smoothScroll('.block-services', 'services');
  smoothScroll('.block-contact', 'about');

});
