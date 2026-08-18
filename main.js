/* ----------------------------------------------------
   CLARITY AI INTERACTIVE ENGINE & ANIMATIONS
   ---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initScrollProgress();
  initBackToTop();
  initScrollReveal();
  initStickyHeader();
  initMegaMenuTabs();
  initIsometricBlockScroll();
  initFAQAccordion();
  initOffcanvasDrawer();
  initPillarsScrollAnimation();
  initMainPageEditorialMorph();
  initServicesPinnedMorphStage();
  initStatsCounterAnimation();
  initBottlenecksAnimation();
  initEcosystemOrchestrationAnimation();
  initManifestoScrollReveal();
  initDualityScrollReveal();
});

/* Luxury Custom Cursor Engine */
function initCustomCursor() {
  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(animateRing);
  }
  requestAnimationFrame(animateRing);

  // Hover detection on interactive elements
  const hoverTargets = document.querySelectorAll('a, button, [data-open-drawer], .solution-card, .iso-left-title, .editorial-nav-link');
  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    target.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });
}

/* Scroll Reading Progress Bar Engine */
function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;
  });
}

/* Floating Back-to-Top Button */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* IntersectionObserver Scroll Reveal Engine */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.animate-on-scroll');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add subtle stagger delay based on index inside grid
        setTimeout(() => {
          entry.target.classList.add('animated');
        }, (index % 3) * 120);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* Sticky Header on Scroll */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* Desktop Mega Menu Interactive Tabs */
function initMegaMenuTabs() {
  const megaTabs = document.querySelectorAll('.mega-tab-btn');
  megaTabs.forEach(tab => {
    tab.addEventListener('mouseenter', () => {
      const parentMenu = tab.closest('.mega-menu');
      if (!parentMenu) return;

      parentMenu.querySelectorAll('.mega-tab-btn').forEach(b => b.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.getAttribute('data-tab-target');
      if (!targetId) return;

      parentMenu.querySelectorAll('.mega-content-panel').forEach(panel => {
        panel.style.display = 'none';
      });

      const activePanel = parentMenu.querySelector(`#${targetId}`);
      if (activePanel) {
        activePanel.style.display = 'flex';
      }
    });
  });
}

/* ISOMETRIC 3D BLOCK STACKING ENGINE */
function initIsometricBlockScroll() {
  const section = document.querySelector('.isometric-stacked-section');
  const stage = document.querySelector('.iso-center-stage');
  const leftTitles = document.querySelectorAll('.iso-left-title');
  const rightContents = document.querySelectorAll('.iso-right-content');
  const stepBtns = document.querySelectorAll('.iso-step-btn');

  if (!section || !stage) return;

  let currentStep = 1;
  const totalSteps = 4;

  function setStep(stepNum) {
    currentStep = stepNum;
    
    // Update Stage Class for 3D block stacking
    stage.className = `iso-center-stage step-${currentStep}`;

    // Update Left Titles
    leftTitles.forEach((title, idx) => {
      if (idx + 1 === currentStep) {
        title.classList.add('active');
      } else {
        title.classList.remove('active');
      }
    });

    // Update Right Content
    rightContents.forEach((content, idx) => {
      if (idx + 1 === currentStep) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });

    // Update Step Indicator Buttons
    stepBtns.forEach((btn, idx) => {
      if (idx + 1 === currentStep) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Click handler for Step Buttons
  stepBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      setStep(idx + 1);
    });
  });

  // GSAP ScrollTrigger Integration for Pinned Scroll Step-Through
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: '.isometric-stacked-section',
      start: 'top top',
      end: '+=2000',
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        let targetStep = Math.floor(progress * totalSteps) + 1;
        if (targetStep > totalSteps) targetStep = totalSteps;
        if (targetStep !== currentStep) {
          setStep(targetStep);
        }
      }
    });
  } else {
    // Automatic Slideshow Timer fallback if scrolltrigger is unpinned
    setInterval(() => {
      let nextStep = currentStep + 1;
      if (nextStep > totalSteps) nextStep = 1;
      setStep(nextStep);
    }, 3500);
  }
}

/* FAQ Accordion Handling */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-button');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(other => other.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* Offcanvas Modal Drawer ("Talk to an Expert") */
function initOffcanvasDrawer() {
  const openBtns = document.querySelectorAll('[data-open-drawer]');
  const closeBtns = document.querySelectorAll('[data-close-drawer]');
  const drawer = document.querySelector('#expert-drawer');
  const backdrop = document.querySelector('#drawer-backdrop');
  const form = document.querySelector('#expert-contact-form');

  function openDrawer() {
    if (drawer) drawer.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openDrawer();
  }));

  closeBtns.forEach(btn => btn.addEventListener('click', closeDrawer));
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
        setTimeout(() => {
          alert('Thank you! Your request has been sent to our expert team.');
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Talk to an Expert';
          closeDrawer();
          form.reset();
        }, 1200);
      }
    });
  }
}

/* THREE PILLARS PINNED CARD STACKING SCROLL ANIMATION ENGINE */
function initPillarsScrollAnimation() {
  const stackWrapper = document.getElementById('pillars-stack-wrapper');
  if (!stackWrapper) return;

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const card1 = document.querySelector('.pillar-card-1');
    const card2 = document.querySelector('.pillar-card-2');
    const card3 = document.querySelector('.pillar-card-3');

    if (!card1 || !card2 || !card3) return;

    // Set initial positions: Card 1 active, Card 2 & 3 hidden below
    gsap.set(card1, { opacity: 1, y: 0, scale: 1 });
    gsap.set(card2, { opacity: 0, y: 350, scale: 0.94 });
    gsap.set(card3, { opacity: 0, y: 350, scale: 0.94 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#pillars-stack-wrapper',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2
      }
    });

    // STEP 1: Card 2 slides up and stacks over Card 1
    tl.to(card1, { scale: 0.94, y: -20, duration: 1 }, 0)
      .to(card2, { opacity: 1, y: 0, scale: 1, duration: 1 }, 0)

    // STEP 2: Card 3 slides up and stacks over Card 2
      .to(card1, { scale: 0.88, y: -40, duration: 1 }, 2)
      .to(card2, { scale: 0.94, y: -20, duration: 1 }, 2)
      .to(card3, { opacity: 1, y: 0, scale: 1, duration: 1 }, 2);
  }
}

/* MAIN PAGE TRESMARES-STYLE EDITORIAL MORPHING ENGINE */
function initMainPageEditorialMorph() {
  const scrollWrapper = document.getElementById('editorial-scroll-wrapper');
  if (!scrollWrapper) return;

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const shapes = {
      rect: "M 50,140 C 150,140 250,140 350,140 C 350,180 350,220 350,260 C 250,260 150,260 50,260 C 50,220 50,180 50,140 Z",
      cube: "M 200,40 C 270,80 340,120 340,120 C 340,173 340,226 340,280 C 270,320 200,360 200,360 C 130,320 60,280 60,280 C 60,226 60,173 60,120 C 130,80 200,40 200,40 Z",
      circle: "M 200,60 C 277,60 340,123 340,200 C 340,277 277,340 200,340 C 123,340 60,277 60,200 C 60,123 123,60 200,60 Z",
      slab: "M 30,160 C 140,160 260,160 370,160 C 370,190 370,220 370,240 C 260,240 140,240 30,240 C 30,220 30,190 30,160 Z"
    };

    const navLinks = document.querySelectorAll('.editorial-nav-link');
    const morphTarget = document.getElementById('main-morph-path');
    const slidesCount = 4;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#editorial-scroll-wrapper',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        onUpdate: (self) => {
          const step = Math.min(Math.floor(self.progress * slidesCount), slidesCount - 1);
          navLinks.forEach((link, idx) => {
            link.classList.toggle('active', idx === step);
          });
        }
      }
    });

    // Initial State (Slide 0 Active)
    gsap.set('#main-title-0, #main-desc-0, #main-metrics-0, #main-illu-0', { opacity: 1, y: 0 });

    // SLIDE 0 -> SLIDE 1
    tl.to('#main-title-0', { y: -80, opacity: 0, duration: 1 }, 0)
      .to('#main-desc-0, #main-metrics-0', { opacity: 0, y: -20, duration: 0.6 }, 0)
      .to('#main-illu-0', { opacity: 0, y: -120, duration: 0.8 }, 0)
      .to(morphTarget, { attr: { d: shapes.cube }, duration: 1.2, ease: 'power2.inOut' }, 0)
      .fromTo('#main-illu-1', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 0.4)
      .fromTo('#main-title-1', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.6)
      .fromTo('#main-desc-1, #main-metrics-1', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.8)

    // SLIDE 1 -> SLIDE 2
    tl.to('#main-title-1', { y: -80, opacity: 0, duration: 1 }, 2)
      .to('#main-desc-1, #main-metrics-1', { opacity: 0, y: -20, duration: 0.6 }, 2)
      .to('#main-illu-1', { opacity: 0, y: -120, duration: 0.8 }, 2)
      .to(morphTarget, { attr: { d: shapes.circle }, duration: 1.2, ease: 'power2.inOut' }, 2)
      .fromTo('#main-illu-2', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 2.4)
      .fromTo('#main-title-2', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 2.6)
      .fromTo('#main-desc-2, #main-metrics-2', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 2.8)

    // SLIDE 2 -> SLIDE 3
    tl.to('#main-title-2', { y: -80, opacity: 0, duration: 1 }, 4)
      .to('#main-desc-2, #main-metrics-2', { opacity: 0, y: -20, duration: 0.6 }, 4)
      .to('#main-illu-2', { opacity: 0, y: -120, duration: 0.8 }, 4)
      .to(morphTarget, { attr: { d: shapes.slab }, duration: 1.2, ease: 'power2.inOut' }, 4)
      .fromTo('#main-illu-3', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 4.4)
      .fromTo('#main-title-3', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 4.6)
      .fromTo('#main-desc-3, #main-metrics-3', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 4.8);

    // Nav Click Handlers
    navLinks.forEach((link, idx) => {
      link.addEventListener('click', () => {
        const totalScroll = document.getElementById('editorial-scroll-wrapper').offsetHeight - window.innerHeight;
        const target = (idx / (slidesCount - 1)) * totalScroll;
        const wrapperTop = document.getElementById('editorial-scroll-wrapper').offsetTop;
        window.scrollTo({ top: wrapperTop + target, behavior: 'smooth' });
      });
    });
  }
}

/* FULL-WIDTH STATS NUMERIC COUNT-UP ANIMATION ENGINE */
function initStatsCounterAnimation() {
  const statNums = document.querySelectorAll('.fullwidth-stat-num[data-counter]');
  if (!statNums.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = parseInt(el.getAttribute('data-counter'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        
        const duration = 1800; // ms
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          // Ease out cubic
          const easeOutProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeOutProgress * targetVal);

          el.textContent = `${prefix}${currentVal}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = `${prefix}${targetVal}${suffix}`;
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  statNums.forEach(num => observer.observe(num));
}

/* FOUR BOTTLENECKS GSAP STAGGERED ENTRANCE ANIMATION */
function initBottlenecksAnimation() {
  const bottleneckCards = document.querySelectorAll('.solutions-grid .solution-card');
  if (!bottleneckCards.length) return;

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(bottleneckCards,
      {
        y: 60,
        rotateX: -8,
        opacity: 0,
        scale: 0.94
      },
      {
        y: 0,
        rotateX: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.solutions-grid',
          start: 'top 82%'
        }
      }
    );
  }
}

/* HYBRID TRESMARES EXECUTIVE SCROLL & TAB STAGE ENGINE */
function initServicesPinnedMorphStage() {
  const scrollWrapper = document.getElementById('services-scroll-wrapper');
  if (!scrollWrapper) return;

  const shapes = {
    rect: "M 50,140 C 150,140 250,140 350,140 C 350,180 350,220 350,260 C 250,260 150,260 50,260 C 50,220 50,180 50,140 Z",
    cube: "M 200,40 C 270,80 340,120 340,120 C 340,173 340,226 340,280 C 270,320 200,360 200,360 C 130,320 60,280 60,280 C 60,226 60,173 60,120 C 130,80 200,40 200,40 Z",
    circle: "M 200,60 C 277,60 340,123 340,200 C 340,277 277,340 200,340 C 123,340 60,277 60,200 C 60,123 123,60 200,60 Z",
    diamond: "M 200,30 C 280,115 360,200 360,200 C 280,285 200,370 200,370 C 120,285 40,200 40,200 C 120,115 200,30 200,30 Z"
  };

  const shapeList = [shapes.rect, shapes.cube, shapes.circle, shapes.diamond];
  const tabBtns = document.querySelectorAll('.services-tab-btn');
  const morphTarget = document.getElementById('serv-morph-path');
  const slidesCount = 4;

  const contentSlides = [
    document.getElementById('serv-slide-0'),
    document.getElementById('serv-slide-1'),
    document.getElementById('serv-slide-2'),
    document.getElementById('serv-slide-3')
  ];

  const illuLayers = [
    document.getElementById('serv-illu-0'),
    document.getElementById('serv-illu-1'),
    document.getElementById('serv-illu-2'),
    document.getElementById('serv-illu-3')
  ];

  let currentStep = 0;

  function updateActiveState(step) {
    if (step < 0 || step >= slidesCount) return;
    currentStep = step;

    // Update Tab Buttons
    tabBtns.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === step);
    });

    // Update Right Content Slides
    contentSlides.forEach((slide, idx) => {
      if (slide) {
        if (idx === step) {
          slide.style.opacity = '1';
          slide.style.transform = 'translateY(0)';
          slide.style.pointerEvents = 'auto';
        } else {
          slide.style.opacity = '0';
          slide.style.transform = idx < step ? 'translateY(-15px)' : 'translateY(15px)';
          slide.style.pointerEvents = 'none';
        }
      }
    });
  }

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#services-scroll-wrapper',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        onUpdate: (self) => {
          const step = Math.min(Math.floor(self.progress * slidesCount), slidesCount - 1);
          updateActiveState(step);
        }
      }
    });

    // INITIAL STATE
    gsap.set('#serv-slide-0, #serv-illu-0', { opacity: 1, y: 0, scale: 1 });
    gsap.set('.serv-morph-svg-container', { transformOrigin: 'center center' });

    // SLIDE 0 -> SLIDE 1
    tl.to('#serv-illu-0', { opacity: 0, y: -30, scale: 0.9, duration: 1, ease: 'power2.inOut' }, 0)
      .to(morphTarget, { attr: { d: shapes.cube }, duration: 1.6, ease: 'power2.inOut' }, 0)
      .to('.serv-morph-svg-container', { scale: 1.06, duration: 0.8, ease: 'power2.out' }, 0)
      .to('.serv-morph-svg-container', { scale: 1, duration: 0.8, ease: 'power2.in' }, 0.8)
      .fromTo('#serv-illu-1', { opacity: 0, y: 30, scale: 1.08 }, { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power3.out' }, 0.6);

    // SLIDE 1 -> SLIDE 2
    tl.to('#serv-illu-1', { opacity: 0, y: -30, scale: 0.9, duration: 1, ease: 'power2.inOut' }, 2)
      .to(morphTarget, { attr: { d: shapes.circle }, duration: 1.6, ease: 'power2.inOut' }, 2)
      .to('.serv-morph-svg-container', { scale: 1.06, duration: 0.8, ease: 'power2.out' }, 2)
      .to('.serv-morph-svg-container', { scale: 1, duration: 0.8, ease: 'power2.in' }, 2.8)
      .fromTo('#serv-illu-2', { opacity: 0, y: 30, scale: 1.08 }, { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power3.out' }, 2.6);

    // SLIDE 2 -> SLIDE 3
    tl.to('#serv-illu-2', { opacity: 0, y: -30, scale: 0.9, duration: 1, ease: 'power2.inOut' }, 4)
      .to(morphTarget, { attr: { d: shapes.diamond }, duration: 1.6, ease: 'power2.inOut' }, 4)
      .to('.serv-morph-svg-container', { scale: 1.06, duration: 0.8, ease: 'power2.out' }, 4)
      .to('.serv-morph-svg-container', { scale: 1, duration: 0.8, ease: 'power2.in' }, 4.8)
      .fromTo('#serv-illu-3', { opacity: 0, y: 30, scale: 1.08 }, { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power3.out' }, 4.6);

    // Interactive Tab Click Engine (Smooth Scroll & Direct SVG Morph)
    tabBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        updateActiveState(idx);
        
        // Direct SVG Animation Switch
        illuLayers.forEach((layer, lIdx) => {
          if (lIdx === idx) {
            gsap.to(layer, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power2.out' });
          } else {
            gsap.to(layer, { opacity: 0, y: lIdx < idx ? -20 : 20, scale: 0.92, duration: 0.4, ease: 'power2.in' });
          }
        });

        if (morphTarget && shapeList[idx]) {
          gsap.to(morphTarget, { attr: { d: shapeList[idx] }, duration: 0.9, ease: 'power2.inOut' });
          gsap.fromTo('.serv-morph-svg-container', { scale: 0.96 }, { scale: 1, duration: 0.6, ease: 'back.out(1.4)' });
        }

        const totalScroll = scrollWrapper.offsetHeight - window.innerHeight;
        const target = (idx / (slidesCount - 1)) * totalScroll;
        const wrapperTop = scrollWrapper.offsetTop;
        window.scrollTo({ top: wrapperTop + target, behavior: 'smooth' });
      });
    });
  }
}

/* ----------------------------------------------------
   THE ECOSYSTEM — GSAP SCROLL & INTERACTIVE ORCHESTRATION
   ---------------------------------------------------- */
function initEcosystemOrchestrationAnimation() {
  const ecoSection = document.getElementById('ecosystem');
  const cardLeft = document.getElementById('eco-card-left');
  const cardRight = document.getElementById('eco-card-right');
  const cardCenter = document.getElementById('eco-card-center');
  const svgNetwork = document.querySelector('.ecosystem-svg-network');
  const valueItems = document.querySelectorAll('.ecosystem-value-item');

  if (!ecoSection) return;

  // Guarantee cards are immediately visible in DOM
  [cardLeft, cardRight, cardCenter].forEach(c => {
    if (c) {
      c.style.opacity = '1';
      c.style.visibility = 'visible';
    }
  });

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    // Safe entrance animation that starts from current visible state
    gsap.fromTo(cardCenter, 
      { scale: 0.92, y: 20 },
      { 
        scale: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '#ecosystem',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(cardLeft,
      { x: -30 },
      {
        x: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#ecosystem',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(cardRight,
      { x: 30 },
      {
        x: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#ecosystem',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Interactive Hover Signal Acceleration
  const signalPaths = document.querySelectorAll('.eco-signal-path, .eco-signal-path-fast');
  
  if (cardLeft) {
    cardLeft.addEventListener('mouseenter', () => {
      signalPaths.forEach(p => p.style.animationDuration = '0.6s');
      if (cardCenter) cardCenter.style.borderColor = 'rgba(128, 0, 32, 0.9)';
    });
    cardLeft.addEventListener('mouseleave', () => {
      signalPaths.forEach(p => p.style.animationDuration = '');
      if (cardCenter) cardCenter.style.borderColor = '';
    });
  }

  if (cardRight) {
    cardRight.addEventListener('mouseenter', () => {
      signalPaths.forEach(p => p.style.animationDuration = '0.6s');
      if (cardCenter) cardCenter.style.borderColor = 'rgba(128, 0, 32, 0.9)';
    });
    cardRight.addEventListener('mouseleave', () => {
      signalPaths.forEach(p => p.style.animationDuration = '');
      if (cardCenter) cardCenter.style.borderColor = '';
    });
  }

  if (cardCenter) {
    cardCenter.addEventListener('mouseenter', () => {
      signalPaths.forEach(p => p.style.animationDuration = '0.4s');
    });
    cardCenter.addEventListener('mouseleave', () => {
      signalPaths.forEach(p => p.style.animationDuration = '');
    });
  }
}

/* ----------------------------------------------------
   EDITORIAL MANIFESTO — WORD-BY-WORD SCROLL SCRUB REVEAL
   ---------------------------------------------------- */
function initManifestoScrollReveal() {
  const section = document.querySelector('#manifesto');
  const words = document.querySelectorAll('.manifesto-word');
  const author = document.querySelector('.manifesto-author-wrapper');
  const quoteMark = document.querySelector('.manifesto-quote-mark');

  if (!section || !words.length) return;

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    const manifestoTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#manifesto',
        start: 'top 75%',
        end: 'bottom 45%',
        scrub: 0.7,
      }
    });

    if (quoteMark) {
      manifestoTl.fromTo(quoteMark, 
        { opacity: 0.1, scale: 0.8 },
        { opacity: 0.35, scale: 1, duration: 0.5, ease: 'power1.out' }
      );
    }

    words.forEach((word, idx) => {
      manifestoTl.fromTo(word,
        { opacity: 0.15, y: 8, filter: 'blur(3px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out'
        },
        idx * 0.45
      );
    });

    if (author) {
      manifestoTl.fromTo(author,
        { opacity: 0.1, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        },
        words.length * 0.45 + 0.1
      );
    }
  } else {
    // Fallback IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          words.forEach((w, i) => {
            setTimeout(() => {
              w.style.opacity = '1';
              w.style.transform = 'translateY(0)';
              w.style.filter = 'blur(0px)';
            }, i * 160);
          });
          if (author) {
            setTimeout(() => {
              author.style.opacity = '1';
              author.style.transform = 'translateY(0)';
            }, words.length * 160 + 200);
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    observer.observe(section);
  }
}

/* ----------------------------------------------------
   PHILOSOPHY DUALITY — WORD-BY-WORD SCROLL SCRUB REVEAL
   ---------------------------------------------------- */
function initDualityScrollReveal() {
  const section = document.querySelector('#philosophy-duality');
  const words = document.querySelectorAll('.duality-word');
  const badge = document.querySelector('#philosophy-duality .top-banner-badge');

  if (!section || !words.length) return;

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    const dualityTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#philosophy-duality',
        start: 'top 75%',
        end: 'bottom 45%',
        scrub: 0.7,
      }
    });

    if (badge) {
      dualityTl.fromTo(badge,
        { opacity: 0.2, y: 8 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power1.out' }
      );
    }

    words.forEach((word, idx) => {
      dualityTl.fromTo(word,
        { opacity: 0.16, y: 8, filter: 'blur(3px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out'
        },
        idx * 0.35 + 0.1
      );
    });
  } else {
    // Fallback IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          words.forEach((w, i) => {
            setTimeout(() => {
              w.style.opacity = '1';
              w.style.transform = 'translateY(0)';
              w.style.filter = 'blur(0px)';
            }, i * 140);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    observer.observe(section);
  }
}



