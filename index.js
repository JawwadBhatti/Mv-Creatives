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
  // 2. CUSTOM CURSOR REMOVED (FINAL UX POLISH PASS)
  // ==========================================================================


  // ==========================================================================
  // 3. HEADER SCROLL EFFECT
  // ==========================================================================
  (function initHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    let ticking = false;
    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 20) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  })();

  // ==========================================================================
  // 4. MOBILE DRAWER TOGGLE & ACCORDION
  // ==========================================================================
  (function initMobileDrawer() {
    const toggleBtn = document.getElementById('nav-toggle-btn');
    const drawer = document.getElementById('mobile-menu-drawer');
    if (!toggleBtn || !drawer) return;

    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('active');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close drawer on menu click (except for accordion trigger)
    drawer.querySelectorAll('a').forEach(link => {
      if (link.classList.contains('accordion-trigger')) return;
      link.addEventListener('click', () => {
        drawer.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', false);
      });
    });

    // Mobile Accordion Toggle for Services
    const accordionTrigger = drawer.querySelector('.accordion-trigger');
    const accordionPanel = drawer.querySelector('.mob-accordion-panel');
    
    if (accordionTrigger && accordionPanel) {
      accordionTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const isActive = accordionPanel.classList.toggle('active');
        accordionTrigger.classList.toggle('active');
        
        if (isActive) {
          accordionPanel.style.maxHeight = accordionPanel.scrollHeight + 'px';
        } else {
          accordionPanel.style.maxHeight = '0';
        }
      });
    }
  })();

  // ==========================================================================
  // 5. PREMIUM SCROLL REVEAL SYSTEM
  // ==========================================================================
  (function initScrollReveal() {
    // Respect user reduced motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-section, .reveal-card, .reveal-line, .reveal-on-scroll, .reveal-inner').forEach(el => {
        el.classList.add('revealed');
      });
      return;
    }

    const revealItems = document.querySelectorAll('.reveal-section, .reveal-card, .reveal-line, .reveal-on-scroll, .reveal-inner');
    if (!revealItems.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          
          // Handle stagger delays for reveal-card or reveal-line inside a container
          if (el.classList.contains('reveal-card') || el.classList.contains('reveal-line')) {
            const parent = el.parentElement;
            if (parent) {
              const cards = Array.from(parent.querySelectorAll('.reveal-card, .reveal-line'));
              const index = cards.indexOf(el);
              if (index !== -1) {
                const delay = Math.min(index * 80, 400); // 80ms stagger, max 400ms
                el.style.transitionDelay = `${delay}ms`;
              }
            }
          }

          el.classList.add('revealed');
          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach(item => observer.observe(item));
  })();


  // ==========================================================================
  // 6. PORTFOLIO HOVER MEDIA CONTROLS
  // ==========================================================================
  (function initPortfolioHoverReels() {
    const cards = document.querySelectorAll('.work-card-wrapper, .work-card, .stacked-card');
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
    const bookBtn = document.getElementById('builder-book-btn');

    // Data Store
    const selectedBriefData = {
      projectType: '',
      projectStage: '',
      timeline: '',
      name: '',
      email: '',
      company: '',
      message: ''
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

    // Step 2 Stage Chips
    const stageChips = builder.querySelectorAll('.chip-stage');
    stageChips.forEach(chip => {
      chip.addEventListener('click', () => {
        stageChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        selectedBriefData.projectStage = chip.getAttribute('data-value');
      });
    });

    // Step 3 Timeline Chips
    const timelineChips = builder.querySelectorAll('.chip-timeline');
    timelineChips.forEach(chip => {
      chip.addEventListener('click', () => {
        timelineChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        selectedBriefData.timeline = chip.getAttribute('data-value');
      });
    });

    // Step 4 Text Inputs
    const nameInput = document.getElementById('builder-name');
    const emailInput = document.getElementById('builder-email');
    const companyInput = document.getElementById('builder-company');
    const messageInput = document.getElementById('builder-message');

    function syncStep4Data() {
      if (nameInput) selectedBriefData.name = nameInput.value;
      if (emailInput) selectedBriefData.email = emailInput.value;
      if (companyInput) selectedBriefData.company = companyInput.value;
      if (messageInput) selectedBriefData.message = messageInput.value;
    }

    if (nameInput) nameInput.addEventListener('input', syncStep4Data);
    if (emailInput) emailInput.addEventListener('input', syncStep4Data);
    if (companyInput) companyInput.addEventListener('input', syncStep4Data);
    if (messageInput) messageInput.addEventListener('input', syncStep4Data);

    function showStep(stepNum) {
      steps.forEach(step => {
        if (Number(step.getAttribute('data-step')) === stepNum) {
          step.style.display = 'block';
          // Force reflow for opacity & translate transition
          step.offsetHeight;
          step.classList.add('active');
        } else {
          step.classList.remove('active');
          step.style.display = 'none';
        }
      });

      // Show/Hide navigation buttons
      if (stepNum === 1) {
        prevBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'inline-flex';
      }

      if (stepNum === totalSteps) {
        nextBtn.style.display = 'none';
      } else {
        nextBtn.style.display = 'inline-flex';
      }
    }

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) {
          if (currentStep === 4) {
            syncStep4Data();
          }
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
    }

    if (bookBtn) {
      bookBtn.addEventListener('click', () => {
        syncStep4Data();
        const briefSummary = `Type: ${selectedBriefData.projectType} // Stage: ${selectedBriefData.projectStage} // Timeline: ${selectedBriefData.timeline} // Contact: ${selectedBriefData.name} <${selectedBriefData.email}> (${selectedBriefData.company}) // Message: ${selectedBriefData.message}`;
        const calendlyUrl = `https://calendly.com/mahamvohracontra/30min?a1=${encodeURIComponent(briefSummary)}&name=${encodeURIComponent(selectedBriefData.name)}&email=${encodeURIComponent(selectedBriefData.email)}`;
        window.open(calendlyUrl, '_blank');
      });
    }

    showStep(currentStep);
  })();

  // ==========================================================================
  // 10. MAGNETIC BUTTON & DEPTH PARALLAX REMOVED (UX POLISH)
  // ==========================================================================


  // ==========================================================================
  // 12. PREMIUM FIRST-LOAD PAGE LOADER
  // ==========================================================================
  (function initLoadingCurtain() {
    const loader = document.getElementById('page-loader');
    if (!loader) {
      document.body.classList.add('loader-finished');
      return;
    }

    // Ensure loader runs for exactly 750ms to showcase animations, then exits smoothly by 900ms.
    setTimeout(() => {
      loader.classList.add('fade-out');
      document.body.classList.add('loader-finished');
    }, 750);

    setTimeout(() => {
      loader.remove();
    }, 900);
  })();

  // ==========================================================================
  // 13. STACKED PORTFOLIO SCROLLER (WORK PAGE)
  // ==========================================================================
  (function initStackedCards() {
    const cards = document.querySelectorAll('.stacked-card');
    if (!cards.length) return;

    function updateCardStacking() {
      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop) {
        cards.forEach(card => {
          card.style.transform = 'none';
          card.style.opacity = '1';
        });
        return;
      }

      const stickyTop = 96;

      cards.forEach((card, index) => {
        const nextCard = cards[index + 1];
        if (!nextCard) {
          card.style.transform = 'scale(1) translateY(0)';
          card.style.opacity = '1';
          return;
        }

        const rectNext = nextCard.getBoundingClientRect();
        const cardHeight = card.getBoundingClientRect().height;

        const coverStart = stickyTop + cardHeight;
        const coverEnd = stickyTop;

        if (rectNext.top < coverStart) {
          const progress = Math.min(Math.max((coverStart - rectNext.top) / (coverStart - coverEnd), 0), 1);
          // Scale down previous card slightly
          const scale = 1 - (progress * 0.03);
          const translateY = -progress * 15;
          const opacity = 1 - (progress * 0.2);

          card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
          card.style.opacity = opacity;
        } else {
          card.style.transform = 'scale(1) translateY(0)';
          card.style.opacity = '1';
        }
      });
    }

    let stackedTicking = false;
    window.addEventListener('scroll', () => {
      if (!stackedTicking) {
        window.requestAnimationFrame(() => {
          updateCardStacking();
          stackedTicking = false;
        });
        stackedTicking = true;
      }
    }, { passive: true });
    window.addEventListener('resize', updateCardStacking, { passive: true });
    updateCardStacking();
  })();

  // ==========================================================================
  // 14. IMAGE FADE-IN AFTER LOAD
  // ==========================================================================
  (function initImageFadeIn() {
    const lazyImages = document.querySelectorAll('img');
    lazyImages.forEach(img => {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => {
          img.classList.add('loaded');
        });
        img.addEventListener('error', () => {
          img.classList.add('load-error');
        });
      }
    });
  })();
});
