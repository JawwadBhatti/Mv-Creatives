/* ==========================================================================
   MV CREATIVES CENTRAL SCRIPT FILE v1.1
   Vanilla JS implementing Cursors, Reveals, Accordions, Filters, and Validation.
   All modularized with ARIA accessibility compliance handlers.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     MODULE 1: GLOBAL CONFIG, MOBILE MENU & ARIA INITIALIZERS
     -------------------------------------------------------------------------- */
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');

  // Initialize ARIA defaults
  if (navToggle && drawer) {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Toggle main navigation menu');
    drawer.setAttribute('aria-label', 'Mobile navigation panel');
    
    navToggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
      const isOpen = drawer.classList.contains('open');
      
      // Update ARIA expand state
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      navToggle.innerHTML = isOpen 
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;
    });
  }

  // Header Scroll State
  const header = document.querySelector('header.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  /* --------------------------------------------------------------------------
     MODULE 2: CUSTOM CURSOR PHYSICS ENGINE
     -------------------------------------------------------------------------- */
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  cursor.setAttribute('aria-hidden', 'true'); // Hide cursor div from screen readers
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  const speed = 0.15; // spring damping coefficient

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    cursorX += dx * speed;
    cursorY += dy * speed;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(animateCursor);
  }
  
  // Disable custom cursor physics on touch screens
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (!isTouchDevice) {
    animateCursor();
  }

  // Hover animations on standard interactive nodes
  const interactiveElements = document.querySelectorAll('a, button, select, input, textarea, .accordion-header, [role="button"], .tab-btn');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  // Hover animations on featured portfolio cards
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', () => cursor.classList.add('card-hover'));
    card.addEventListener('mouseleave', () => cursor.classList.remove('card-hover'));
  });

  // Mousedown compressed states
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
  });
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });


  /* --------------------------------------------------------------------------
     MODULE 3: INTERACTIVE CONTROLS (Accordions & Tabs)
     -------------------------------------------------------------------------- */
  const accordions = document.querySelectorAll('.accordion-item');
  accordions.forEach(item => {
    const accHeader = item.querySelector('.accordion-header');
    
    if (accHeader) {
      // Set initial ARIA expanded defaults
      const isActive = item.classList.contains('active');
      accHeader.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      
      accHeader.addEventListener('click', () => {
        const itemActive = item.classList.contains('active');
        
        // Close siblings
        const parent = item.parentElement;
        const activeSiblings = parent.querySelectorAll('.accordion-item.active');
        activeSiblings.forEach(sibling => {
          if (sibling !== item) {
            sibling.classList.remove('active');
            const siblingHeader = sibling.querySelector('.accordion-header');
            if (siblingHeader) siblingHeader.setAttribute('aria-expanded', 'false');
          }
        });
        
        // Toggle current
        if (itemActive) {
          item.classList.remove('active');
          accHeader.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          accHeader.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });


  /* --------------------------------------------------------------------------
     MODULE 4: MASONRY FILTER ENGINE
     -------------------------------------------------------------------------- */
  const filterPills = document.querySelectorAll('.filter-pill');
  const gridItems = document.querySelectorAll('.portfolio-grid-item');
  
  if (filterPills.length > 0 && gridItems.length > 0) {
    filterPills.forEach(pill => {
      // Set initial accessibility role attributes
      pill.setAttribute('role', 'tab');
      pill.setAttribute('aria-selected', pill.classList.contains('active') ? 'true' : 'false');
      
      pill.addEventListener('click', () => {
        filterPills.forEach(p => {
          p.classList.remove('active');
          p.setAttribute('aria-selected', 'false');
        });
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');

        const category = pill.getAttribute('data-filter');

        gridItems.forEach(item => {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          
          setTimeout(() => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
              item.style.display = 'block';
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
              }, 50);
            } else {
              item.style.display = 'none';
            }
          }, 200);
        });
      });
    });
  }


  /* --------------------------------------------------------------------------
     MODULE 5: SMART FORM VALIDATION & PATH SELECTIONS
     -------------------------------------------------------------------------- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const contactForm = document.getElementById('qualification-form');
  
  if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
      // Initialize tab accessibility
      btn.setAttribute('aria-expanded', btn.classList.contains('active') ? 'true' : 'false');
      
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-expanded', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        
        const path = btn.getAttribute('data-path');
        const formBlock = document.querySelector('.form-block');
        const redirectBlock = document.querySelector('.redirect-block');
        
        if (path === 'start-project') {
          if (formBlock) formBlock.style.display = 'block';
          if (redirectBlock) redirectBlock.style.display = 'none';
        } else {
          if (formBlock) formBlock.style.display = 'none';
          if (redirectBlock) {
            redirectBlock.style.display = 'block';
            const redirectTitle = redirectBlock.querySelector('.redirect-title');
            const redirectBtn = redirectBlock.querySelector('.redirect-btn');
            
            if (path === 'view-work') {
              redirectTitle.textContent = "Browse our latest client projects";
              redirectBtn.textContent = "View Our Work";
              redirectBtn.setAttribute('href', './work.html');
            } else if (path === 'hire-contra') {
              redirectTitle.textContent = "Ready to start a contract on Contra?";
              redirectBtn.textContent = "Hire on Contra";
              redirectBtn.setAttribute('href', 'https://contra.com/mv_creatives');
            }
          }
        }
      });
    });
  }

  // Real-time Input Validation
  if (contactForm) {
    const inputs = contactForm.querySelectorAll('.form-input[required]');
    
    inputs.forEach(input => {
      // Validate on lose-focus
      input.addEventListener('blur', () => {
        validateField(input);
      });
      // Clear error highlights on input typing
      input.addEventListener('input', () => {
        const group = input.closest('.form-group');
        if (group) {
          group.classList.remove('has-error');
          input.removeAttribute('aria-invalid');
        }
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      
      inputs.forEach(input => {
        if (!validateField(input)) {
          isValid = false;
        }
      });

      if (isValid) {
        const formWrapper = document.querySelector('.form-wrapper');
        const successWrapper = document.querySelector('.success-wrapper');
        
        if (formWrapper && successWrapper) {
          formWrapper.style.opacity = '0';
          setTimeout(() => {
            formWrapper.style.display = 'none';
            successWrapper.style.display = 'block';
            setTimeout(() => {
              successWrapper.style.opacity = '1';
              successWrapper.focus(); // Shift focus to success message for accessibility
            }, 50);
          }, 300);
        }
      }
    });
  }

  function validateField(input) {
    const group = input.closest('.form-group');
    if (!group) return true;
    
    let isFieldValid = true;
    
    if (input.value.trim() === '') {
      isFieldValid = false;
    } else if (input.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        isFieldValid = false;
      }
    }

    if (!isFieldValid) {
      group.classList.add('has-error');
      input.setAttribute('aria-invalid', 'true');
    } else {
      group.classList.remove('has-error');
      input.removeAttribute('aria-invalid');
    }
    
    return isFieldValid;
  }

  // --- 6. Reveal-on-scroll Intersection Observer ---
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
