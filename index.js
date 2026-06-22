/**
 * MV CREATIVES CENTRAL ANIMATION & INTERACTION ENGINE v2.0
 * Unified Obsidian Dark System (#050505)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Global DOM helper references
  const body = document.body;

  // ==========================================================================
  // 1. PAGE CURTAIN TRANSITIONS
  // ==========================================================================
  (function initCurtainTransition() {
    const curtain = document.createElement('div');
    curtain.className = 'curtain-transition';
    body.appendChild(curtain);

    // Fade out curtain on load
    window.addEventListener('pageshow', () => {
      setTimeout(() => {
        curtain.classList.remove('active');
      }, 100);
    });

    // Intercept site page clicks for smooth transitions
    document.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');
      // Only transition internal, same-origin pages
      if (href && href.startsWith('./') && !href.includes('#') && !link.target) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          curtain.classList.add('active');
          setTimeout(() => {
            window.location.href = href;
          }, 300);
        });
      }
    });
  })();

  // ==========================================================================
  // 2. CUSTOM GLASS CURSOR FOLLOWER
  // ==========================================================================
  (function initCustomCursor() {
    // Only initialize on desktop hover devices
    if (window.matchMedia('(max-width: 1023px)').matches) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Smooth cursor follow with requestAnimationFrame (lag lerp physics)
    function updateCursor() {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * 0.15;
      cursorY += dy * 0.15;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // Toggle active hover state on interactive items
    const interactives = 'a, button, select, input, textarea, .chip-btn, .filter-pill, .capability-trigger';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactives)) {
        cursor.classList.add('hover');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactives)) {
        cursor.classList.remove('hover');
      }
    });
  })();

  // ==========================================================================
  // 3. HEADER SCROLL EFFECT
  // ==========================================================================
  (function initHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    function handleScroll() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
  })();

  // ==========================================================================
  // 4. MOBILE DRAWER TOGGLE
  // ==========================================================================
  (function initMobileDrawer() {
    const toggleBtn = document.getElementById('nav-toggle-btn');
    const drawer = document.getElementById('mobile-menu-drawer');
    if (!toggleBtn || !drawer) return;

    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('active');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close drawer on menu click
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', false);
      });
    });
  })();

  // ==========================================================================
  // 5. TEXT REVEAL ANIMATIONS
  // ==========================================================================
  (function initTextReveals() {
    const revealInners = document.querySelectorAll('.reveal-inner');
    if (!revealInners.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealInners.forEach(el => observer.observe(el));
  })();

  // ==========================================================================
  // 6. PORTFOLIO HOVER MEDIA CONTROLS
  // ==========================================================================
  (function initPortfolioHoverReels() {
    const cards = document.querySelectorAll('.work-card-wrapper, .work-card');
    cards.forEach(card => {
      const video = card.querySelector('video');
      if (!video) return;

      card.addEventListener('mouseenter', () => {
        video.currentTime = 0;
        video.play().catch(() => {});
      });

      card.addEventListener('mouseleave', () => {
        video.pause();
      });
    });
  })();

  // ==========================================================================
  // 7. CAPABILITIES ACCORDIONS
  // ==========================================================================
  (function initCapabilitiesAccordions() {
    const triggers = document.querySelectorAll('.capability-trigger');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const targetId = trigger.getAttribute('data-target');
        const content = document.getElementById(targetId);
        if (!content) return;

        const isActive = content.classList.contains('active');

        // Close all other accordions
        document.querySelectorAll('.capability-content').forEach(c => {
          c.classList.remove('active');
          c.style.maxHeight = null;
        });
        document.querySelectorAll('.capability-trigger').forEach(t => {
          t.setAttribute('aria-expanded', 'false');
          const icon = t.querySelector('.capability-icon');
          if (icon) icon.textContent = '[+]';
        });

        // Toggle selected accordion
        if (!isActive) {
          content.classList.add('active');
          content.style.maxHeight = `${content.scrollHeight + 40}px`;
          trigger.setAttribute('aria-expanded', 'true');
          const icon = trigger.querySelector('.capability-icon');
          if (icon) icon.textContent = '[-]';
        }
      });
    });
  })();

  // ==========================================================================
  // 8. PORTFOLIO FILTER SYSTEM (WORK PAGE)
  // ==========================================================================
  (function initPortfolioFilters() {
    const filterPills = document.querySelectorAll('.filter-pill');
    const items = document.querySelectorAll('.portfolio-grid-item');
    if (!filterPills.length || !items.length) return;

    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        // Toggle active pill
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const category = pill.getAttribute('data-filter');

        // Apply grid filter transitions
        items.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (category === 'all' || itemCat === category) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0) scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px) scale(0.98)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  })();

  // ==========================================================================
  // 9. PREMIUM CONTACT BRIEF BUILDER
  // ==========================================================================
  (function initBriefBuilder() {
    const builder = document.getElementById('brief-builder');
    if (!builder) return;

    let currentStep = 1;
    const totalSteps = 5;

    const steps = builder.querySelectorAll('.brief-step');
    const prevBtn = document.getElementById('builder-prev-btn');
    const nextBtn = document.getElementById('builder-next-btn');
    const submitBtn = document.getElementById('builder-submit-btn');

    // Data Store
    const selectedBriefData = {
      projectType: '',
      budget: '$25k - $50k',
      timeline: '',
      goals: ''
    };

    // Step 1 Selection Chips
    const typeChips = builder.querySelectorAll('.chip-type');
    typeChips.forEach(chip => {
      chip.addEventListener('click', () => {
        typeChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        selectedBriefData.projectType = chip.getAttribute('data-value');
      });
    });

    // Step 2 Budget Slider
    const budgetSlider = document.getElementById('budget-range');
    const budgetVal = document.getElementById('budget-value-display');
    if (budgetSlider && budgetVal) {
      budgetSlider.addEventListener('input', () => {
        const val = budgetSlider.value;
        let txt = '$10k - $25k';
        if (val === '2') txt = '$25k - $50k';
        if (val === '3') txt = '$50k+';
        budgetVal.textContent = txt;
        selectedBriefData.budget = txt;
      });
    }

    // Step 3 Timeline Chips
    const timelineChips = builder.querySelectorAll('.chip-timeline');
    timelineChips.forEach(chip => {
      chip.addEventListener('click', () => {
        timelineChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        selectedBriefData.timeline = chip.getAttribute('data-value');
      });
    });

    // Step 4 Goals Text
    const goalsInput = document.getElementById('builder-goals-text');
    if (goalsInput) {
      goalsInput.addEventListener('input', () => {
        selectedBriefData.goals = goalsInput.value;
      });
    }

    function showStep(stepNum) {
      steps.forEach(step => {
        step.classList.remove('active');
        if (Number(step.getAttribute('data-step')) === stepNum) {
          step.classList.add('active');
        }
      });

      // Show/Hide buttons based on step index
      if (stepNum === 1) {
        prevBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'inline-flex';
      }

      if (stepNum === totalSteps) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-flex';
      } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
      }
    }

    if (nextBtn && prevBtn && submitBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) {
          currentStep++;
          showStep(currentStep);
        }
      });

      prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
          currentStep--;
          showStep(currentStep);
        }
      });

      submitBtn.addEventListener('click', () => {
        // Build final qualification query parameters and redirect to Calendly schedule link
        const calendlyUrl = `https://calendly.com/mahamvohracontra/30min?a1=${encodeURIComponent(
          `Type: ${selectedBriefData.projectType} // Budget: ${selectedBriefData.budget} // Timeline: ${selectedBriefData.timeline} // Goals: ${selectedBriefData.goals}`
        )}`;
        window.open(calendlyUrl, '_blank');
      });
    }

    showStep(currentStep);
  })();

  // ==========================================================================
  // 10. MAGNETIC BUTTON PHYSICS
  // ==========================================================================
  (function initMagneticCTA() {
    if (window.matchMedia('(max-width: 1023px)').matches) return;

    const magnetics = document.querySelectorAll('.filter-pill, .chip-btn');
    magnetics.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
      });
    });
  })();

  // ==========================================================================
  // 11. HORIZONTAL STORYTELLING SCROLLER (CASE STUDY)
  // ==========================================================================
  (function initHorizontalScroll() {
    const scroller = document.getElementById('case-study-scroller');
    if (!scroller) return;

    const sticky = scroller.querySelector('.horizontal-scroll-sticky');
    const slidesContainer = scroller.querySelector('.horizontal-scroll-slides');
    if (!sticky || !slidesContainer) return;

    function handleScroll() {
      const rect = scroller.getBoundingClientRect();
      const scrollHeight = scroller.scrollHeight;
      const stickyHeight = sticky.clientHeight;
      const totalScrollable = scrollHeight - stickyHeight;

      if (rect.top <= 0 && rect.bottom >= stickyHeight) {
        const progress = -rect.top / totalScrollable; // 0 to 1
        const maxTranslate = slidesContainer.scrollWidth - window.innerWidth;
        const translateX = progress * maxTranslate;
        slidesContainer.style.transform = `translate3d(-${translateX}px, 0, 0)`;
      } else if (rect.top > 0) {
        slidesContainer.style.transform = `translate3d(0, 0, 0)`;
      } else if (rect.bottom < stickyHeight) {
        const maxTranslate = slidesContainer.scrollWidth - window.innerWidth;
        slidesContainer.style.transform = `translate3d(-${maxTranslate}px, 0, 0)`;
      }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
  })();

  // ==========================================================================
  // 12. HERO MOUSE DEPTH PARALLAX
  // ==========================================================================
  (function initHeroMouseDepth() {
    const hero = document.getElementById('hero-section');
    if (!hero) return;

    const content = hero.querySelector('.hero-content');
    const overlay = hero.querySelector('.hero-overlay');
    if (!content) return;

    document.addEventListener('mousemove', (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 60;
      const y = (window.innerHeight / 2 - e.clientY) / 60;

      content.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (overlay) {
        overlay.style.transform = `translate3d(${-x * 0.4}px, ${-y * 0.4}px, 0)`;
      }
    });
  })();

  // ==========================================================================
  // 13. PREMIUM LOADING CURTAIN
  // ==========================================================================
  (function initLoadingCurtain() {
    const curtain = document.createElement('div');
    curtain.className = 'loading-curtain';
    curtain.innerHTML = '<div class="loading-logo">MV CREATIVES</div>';
    document.body.appendChild(curtain);

    setTimeout(() => {
      curtain.classList.add('loaded');
      setTimeout(() => {
        curtain.remove();
      }, 800);
    }, 1400);
  })();
});
