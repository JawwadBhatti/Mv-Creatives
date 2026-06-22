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
    document.documentElement.classList.add('no-touch');
    animateCursor();
  } else {
    document.documentElement.classList.add('touch');
    cursor.style.display = 'none';
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

  /* --------------------------------------------------------------------------
     INTERACTION PROTOTYPE SCRIPT ADDITIONS
     -------------------------------------------------------------------------- */

  // A. Magnetic CTA System
  if (!isTouchDevice) {
    const magneticBtns = document.querySelectorAll('.btn-primary, .btn-secondary');
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - (rect.width / 2);
        const y = e.clientY - rect.top - (rect.height / 2);
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.02)`;
        btn.style.boxShadow = `0 10px 30px rgba(92,108,250,0.25)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px) scale(1)';
        btn.style.boxShadow = '';
      });
    });
  }

  // B. Interactive Capability Explorer Switching
  const explorerMenuBtns = document.querySelectorAll('.capability-menu-item');
  const explorerViews = document.querySelectorAll('.capability-view');
  const explorerContainer = document.querySelector('.capability-explorer');

  if (explorerMenuBtns.length > 0 && explorerViews.length > 0 && explorerContainer) {
    explorerMenuBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle Active Menu Button
        explorerMenuBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Toggle Active View
        const activeId = btn.getAttribute('data-target');
        explorerViews.forEach(view => {
          view.classList.remove('active');
          if (view.id === activeId) {
            view.classList.add('active');
          }
        });

        // Swap visual room environments based on selected capability
        const roomType = btn.getAttribute('data-room');
        explorerContainer.className = 'capability-explorer'; // Reset
        const parentSection = document.getElementById('capabilities-section');
        if (roomType === 'light') {
          explorerContainer.classList.add('theme-light-room');
          if (parentSection) {
            parentSection.classList.remove('theme-dark');
            parentSection.classList.add('theme-light');
          }
        } else {
          explorerContainer.classList.add('theme-dark-room');
          if (parentSection) {
            parentSection.classList.remove('theme-light');
            parentSection.classList.add('theme-dark');
          }
        }
      });
    });
  }

  // C. Editorial ↔ Technical Directory Toggle
  const toggleViewBtn = document.querySelector('.btn-toggle-view');
  const masonryGrid = document.getElementById('masonry-grid');

  if (toggleViewBtn && masonryGrid) {
    toggleViewBtn.addEventListener('click', () => {
      const isTechView = masonryGrid.classList.contains('tech-directory-view');
      if (isTechView) {
        masonryGrid.classList.remove('tech-directory-view');
        toggleViewBtn.textContent = "Technical Directory";
      } else {
        masonryGrid.classList.add('tech-directory-view');
        toggleViewBtn.textContent = "Editorial Grid";
      }
    });
  }

  // D. Case Study Horizontal Pinned Scroll
  const scrollSection = document.querySelector('.horizontal-scroll-section');
  const scrollContainer = document.querySelector('.horizontal-scroll-container');
  const scrollSlides = document.querySelector('.horizontal-scroll-slides');

  if (scrollSection && scrollContainer && scrollSlides) {
    window.addEventListener('scroll', () => {
      if (window.innerWidth < 1024) {
        scrollSlides.style.transform = 'none';
        return;
      }
      const sectionTop = scrollContainer.offsetTop;
      const sectionHeight = scrollContainer.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY >= sectionTop && scrollY <= (sectionTop + sectionHeight - windowHeight)) {
        const scrolledPercentage = (scrollY - sectionTop) / (sectionHeight - windowHeight);
        const maxTranslate = scrollSlides.scrollWidth - window.innerWidth;
        scrollSlides.style.transform = `translate3d(-${scrolledPercentage * maxTranslate}px, 0px, 0px)`;
      }
    });
  }

  // E. Studio Particle Constellation Canvas
  const canvas = document.getElementById('constellation-canvas');
  if (canvas) {
    const isMobileCanvas = window.innerWidth < 768 || isTouchDevice;
    if (isMobileCanvas) {
      canvas.style.display = 'none';
    } else {
      const ctx = canvas.getContext('2d');
      let points = [];
      const maxPoints = 60;
      let mouse = { x: null, y: null, active: false };

      // Resize handler
      function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Initial points distribution
      for (let i = 0; i < maxPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          originX: null,
          originY: null
        });
      }

      // Event listeners
      const parentSection = canvas.closest('section') || document.body;
      parentSection.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        mouse.active = true;
      });
      parentSection.addEventListener('mouseleave', () => {
        mouse.active = false;
      });

      function drawConstellation() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid blueprint background lines
        ctx.strokeStyle = 'rgba(92, 108, 250, 0.03)';
        ctx.lineWidth = 1;
        const gridSize = 40;
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        // Draw points & lines
        ctx.fillStyle = 'rgba(92,108,250,0.5)';
        ctx.strokeStyle = 'rgba(92, 108, 250, 0.15)';
        
        points.forEach(p => {
          // Handle particle movement
          p.x += p.vx;
          p.y += p.vy;

          // Boundary bounce
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          // Pull to mouse cursor (Architectural alignment)
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 180) {
              p.x += dx * 0.02; // Attract
              p.y += dy * 0.02;
            }
          }

          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fill();

          // Connect particles within proximity
          points.forEach(other => {
            if (p === other) return;
            const dx = p.x - other.x;
            const dy = p.y - other.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          });
        });
        requestAnimationFrame(drawConstellation);
      }
      drawConstellation();
    }
  }

  // F. Conversational Contact Qualification Form Flow
  const steps = document.querySelectorAll('.conversational-step');
  const prevBtns = document.querySelectorAll('.step-nav-prev');
  const nextBtns = document.querySelectorAll('.step-nav-next');
  let currentStepIndex = 0;

  if (steps.length > 0) {
    function showStep(index) {
      steps.forEach((step, i) => {
        step.classList.remove('active');
        if (i === index) {
          step.classList.add('active');
          const input = step.querySelector('input, select, textarea');
          if (input) input.focus();
        }
      });
      currentStepIndex = index;
    }
    
    // Initialize first step
    showStep(0);

    nextBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentStep = steps[currentStepIndex];
        const inputsInStep = currentStep.querySelectorAll('input[required], select[required], textarea[required]');
        
        let stepValid = true;
        inputsInStep.forEach(input => {
          if (input.value.trim() === '') {
            stepValid = false;
            const group = input.closest('.form-group');
            if (group) group.classList.add('has-error');
          }
        });

        if (stepValid && currentStepIndex < steps.length - 1) {
          showStep(currentStepIndex + 1);
        } else if (stepValid && currentStepIndex === steps.length - 1) {
          // Submit final form
          const form = document.getElementById('qualification-form');
          if (form) {
            // Trigger actual submit handler
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.click();
          }
        }
      });
    });

    prevBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentStepIndex > 0) {
          showStep(currentStepIndex - 1);
        }
      });
    });

    // Intake Pill toggles
    const intakePills = document.querySelectorAll('.intake-pill');
    const selectEl = document.getElementById('form-project-type');
    
    if (intakePills.length > 0 && selectEl) {
      intakePills.forEach(pill => {
        pill.addEventListener('click', (e) => {
          e.preventDefault();
          intakePills.forEach(p => p.classList.remove('selected'));
          pill.classList.add('selected');
          
          const val = pill.getAttribute('data-value');
          selectEl.value = val;
          
          // Clear error highlighting
          const group = selectEl.closest('.form-group');
          if (group) group.classList.remove('has-error');
        });
      });
    }
  }

  // ==========================================================================
  // 10. SCROLL-CONTROLLED CINEMATIC BACKGROUND VIDEO
  // ==========================================================================
  (function initScrollControlledVideo() {
    const videoBg = document.getElementById("video-bg");
    if (!videoBg) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      videoBg.playbackRate = 1.0;
      videoBg.play().catch(() => {});
      return;
    }

    videoBg.play().catch(() => {});

    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let targetPlaybackRate = 1.0;
    let currentPlaybackRate = 1.0;

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      const currentTime = performance.now();
      const dt = Math.max(1, currentTime - lastTime);
      const dy = Math.abs(currentScrollY - lastScrollY);

      const velocity = dy / dt;
      targetPlaybackRate = 1.0 + Math.min(1.5, velocity * 0.45);

      lastScrollY = currentScrollY;
      lastTime = currentTime;
    }, { passive: true });

    function updatePlaybackRate() {
      currentPlaybackRate += (targetPlaybackRate - currentPlaybackRate) * 0.08;
      targetPlaybackRate += (1.0 - targetPlaybackRate) * 0.05;

      const clampedRate = Math.max(0.5, Math.min(2.5, currentPlaybackRate));
      try {
        videoBg.playbackRate = clampedRate;
      } catch (e) {}

      requestAnimationFrame(updatePlaybackRate);
    }

    requestAnimationFrame(updatePlaybackRate);
  })();


  // ==========================================================================
  // 11. ARCHITECTURAL PARTICLE / CROSSHAIR LAYER
  // ==========================================================================
  (function initArchitecturalParticles() {
    const canvas = document.getElementById("particles-canvas");
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isTouch || isMobile) {
      canvas.style.display = "none";
      return;
    }

    const ctx = canvas.getContext("2d");
    const mouse = { x: -9999, y: -9999 };
    let points = [];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createPoints();
    }

    function createPoints() {
      points = [];
      const count = Math.min(70, Math.max(28, Math.floor((window.innerWidth * window.innerHeight) / 18000)));

      for (let i = 0; i < count; i++) {
        points.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          size: Math.random() > 0.5 ? 4 : 6
        });
      }
    }

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    function drawCrosshair(x, y, s) {
      ctx.beginPath();
      ctx.moveTo(x - s, y);
      ctx.lineTo(x + s, y);
      ctx.moveTo(x, y - s);
      ctx.lineTo(x, y + s);
      ctx.stroke();
    }

    function tick() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.strokeStyle = "rgba(240,240,248,0.12)";
      ctx.lineWidth = 1;

      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = window.innerWidth + 20;
        if (p.x > window.innerWidth + 20) p.x = -20;
        if (p.y < -20) p.y = window.innerHeight + 20;
        if (p.y > window.innerHeight + 20) p.y = -20;

        drawCrosshair(p.x, p.y, p.size);

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 180) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = "rgba(92,108,250,0.08)";
          ctx.stroke();
          ctx.strokeStyle = "rgba(240,240,248,0.12)";
        }
      }

      requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(tick);
  })();

  // ==========================================================================
  // 12. STICKY FEATURED WORK STORIES WITH GRADIENT WIPES
  // ==========================================================================
  const workTrigger = document.getElementById('featured-work-trigger');
  const workSticky = document.getElementById('featured-work-sticky');
  const cardsGridContainer = document.getElementById('featured-cards-grid');

  if (workTrigger && workSticky && cardsGridContainer && !isTouchDevice && window.innerWidth >= 1024) {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      function tickFeaturedWorkScroll() {
        const rect = workTrigger.getBoundingClientRect();
        const triggerHeight = workTrigger.offsetHeight;
        const windowHeight = window.innerHeight;

        const travel = triggerHeight - windowHeight;
        let progress = -rect.top / travel;
        progress = Math.max(0, Math.min(1, progress));

        const revealPct = progress * 135;
        cardsGridContainer.style.webkitMaskImage = `linear-gradient(to right, black ${revealPct - 25}%, transparent ${revealPct}%)`;
        cardsGridContainer.style.maskImage = `linear-gradient(to right, black ${revealPct - 25}%, transparent ${revealPct}%)`;

        const card1 = document.getElementById('feat-card-1');
        const card2 = document.getElementById('feat-card-2');
        if (card1 && card2) {
          const t1 = (progress - 0.5) * -40;
          const t2 = 60 + (progress - 0.5) * 50;
          card1.style.transform = `translate3d(0, ${t1}px, 0)`;
          card2.style.transform = `translate3d(0, ${t2}px, 0)`;
        }

        requestAnimationFrame(tickFeaturedWorkScroll);
      }
      requestAnimationFrame(tickFeaturedWorkScroll);
    }
  }

  // ==========================================================================
  // 13. PORTFOLIO CARD HOVER VIDEO REEL CONTROLS
  // ==========================================================================
  (function initHoverReels() {
    const cards = document.querySelectorAll(".work-card");

    cards.forEach((card) => {
      const video = card.querySelector(".work-card__video");
      if (!video) return;

      card.addEventListener("mouseenter", () => {
        video.style.opacity = "0.95";
        video.currentTime = 0;
        video.play().catch(() => {});
      });

      card.addEventListener("mouseleave", () => {
        video.style.opacity = "0";
        video.pause();
        video.currentTime = 0;
      });

      // Touch / Mobile accessibility toggle
      card.addEventListener("touchstart", (e) => {
        if (video.paused) {
          e.preventDefault();
          document.querySelectorAll(".work-card__video").forEach(v => {
            v.style.opacity = "0";
            v.pause();
          });
          video.style.opacity = "0.95";
          video.play().catch(() => {});
        }
      }, { passive: false });
    });
  })();

  // ==========================================================================
  // 14. ANIMATED COUNTERS / STATS
  // ==========================================================================
  (function initCounters() {
    const counters = document.querySelectorAll(".counter");
    if (!counters.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function animateCounter(el) {
      const value = Number(el.dataset.value || "0");
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const decimals = Number(el.dataset.decimals || "0");

      if (reduceMotion) {
        el.textContent = prefix + value.toFixed(decimals) + suffix;
        return;
      }

      const start = performance.now();
      const duration = 1200;

      function tick(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = value * eased;

        el.textContent = prefix + current.toFixed(decimals) + suffix;

        if (t < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.05 });

    counters.forEach((counter) => observer.observe(counter));
  })();

  // ==========================================================================
  // 15. INTERACTIVE COMPETITIVE POSITIONING MATRIX (QUADRANT)
  // ==========================================================================
  (function initPositioningMatrix() {
    const quadrant = document.getElementById('positioning-quadrant');
    if (!quadrant) return;

    const nodes = quadrant.querySelectorAll('.quadrant-node');
    const guideX = document.getElementById('guide-x');
    const guideY = document.getElementById('guide-y');
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Set initial position of nodes to origin (0, 0)
    nodes.forEach(node => {
      if (!prefersReducedMotion) {
        node.style.left = '0%';
        node.style.bottom = '0%';
        node.style.opacity = '0';
      } else {
        const x = node.getAttribute('data-x');
        const y = node.getAttribute('data-y');
        node.style.left = `${x}%`;
        node.style.bottom = `${y}%`;
        node.style.opacity = '1';
      }
    });

    // Plotting animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!prefersReducedMotion) {
            nodes.forEach((node, index) => {
              const x = node.getAttribute('data-x');
              const y = node.getAttribute('data-y');
              
              // Staggered plotting animation
              setTimeout(() => {
                node.style.transition = 'left 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), bottom 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease';
                node.style.left = `${x}%`;
                node.style.bottom = `${y}%`;
                node.style.opacity = '1';
              }, index * 200);
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(quadrant);

    // Guide lines interaction on hover
    nodes.forEach(node => {
      node.addEventListener('mouseenter', () => {
        const x = node.getAttribute('data-x');
        const y = node.getAttribute('data-y');
        
        // Position guides
        if (guideX) {
          guideX.style.left = `${x}%`;
          guideX.style.height = `${y}%`;
          guideX.style.opacity = '1';
        }
        if (guideY) {
          guideY.style.bottom = `${y}%`;
          guideY.style.width = `${x}%`;
          guideY.style.opacity = '1';
        }
      });

      node.addEventListener('mouseleave', () => {
        if (guideX) guideX.style.opacity = '0';
        if (guideY) guideY.style.opacity = '0';
      });
    });
  })();

});

