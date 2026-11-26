/* =====================================================
   PORTFOLIO JS — Pangeran Christian Pasaribu
   ===================================================== */

'use strict';

// =================== LUCIDE ICONS INIT ===================
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initSkillBars();
  initActiveNavLinks();
  initBackToTop();
  initSmoothScroll();
});

// =================== NAVBAR SCROLL ===================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// =================== MOBILE MENU ===================
function initMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-icon');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');

    if (isOpen) {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
      if (icon) {
        icon.setAttribute('data-lucide', 'menu');
        if (typeof lucide !== 'undefined') lucide.createIcons({ nodes: [icon] });
      }
    } else {
      menu.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
      if (icon) {
        icon.setAttribute('data-lucide', 'x');
        if (typeof lucide !== 'undefined') lucide.createIcons({ nodes: [icon] });
      }
    }
  });

  // Close on mobile nav link click
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
      if (icon) {
        icon.setAttribute('data-lucide', 'menu');
        if (typeof lucide !== 'undefined') lucide.createIcons({ nodes: [icon] });
      }
    });
  });
}

// =================== SCROLL REVEAL ===================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          // Stagger children
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
          const delay = siblings.indexOf(entry.target) * 80;

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  reveals.forEach(el => observer.observe(el));
}

// =================== SKILL BARS ===================
function initSkillBars() {
  const skillCards = document.querySelectorAll('.skill-card');

  if (!skillCards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target.querySelector('.skill-fill');
          if (fill) {
            const targetWidth = fill.style.width;
            fill.style.width = '0%';
            requestAnimationFrame(() => {
              setTimeout(() => {
                fill.style.width = targetWidth;
              }, 200);
            });
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  skillCards.forEach(card => observer.observe(card));
}

// =================== ACTIVE NAV LINKS ===================
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      threshold: 0.4,
      rootMargin: '-80px 0px -40% 0px',
    }
  );

  sections.forEach(section => observer.observe(section));
}

// =================== BACK TO TOP ===================
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// =================== SMOOTH SCROLL ===================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const navHeight = document.getElementById('navbar')?.offsetHeight || 70;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    });
  });
}

// =================== TYPING EFFECT (Hero) ===================
(function initTypingEffect() {
  // Lightweight "cursor blink" for the profession titles — purely cosmetic
  const badge = document.querySelector('.hero-animate:first-child');
  if (!badge) return;
})();

// =================== PARALLAX (subtle) ===================
(function initParallax() {
  const orbs = document.querySelectorAll('#hero .rounded-full.blur-3xl');
  if (!orbs.length) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        orbs.forEach((orb, i) => {
          const speed = i % 2 === 0 ? 0.08 : 0.05;
          const dir = i % 2 === 0 ? 1 : -1;
          orb.style.transform = `translateY(${scrollY * speed * dir}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

// =================== COUNTER ANIMATION ===================
(function initCounters() {
  const counters = document.querySelectorAll('.achievement-card .text-gradient-animated');

  const parseValue = (text) => {
    const num = parseFloat(text.replace(/[^0-9.]/g, ''));
    const suffix = text.replace(/[0-9. ]/g, '');
    return { num, suffix };
  };

  const animateCounter = (el, target, suffix, duration = 1800) => {
    let start = 0;
    const step = target / (duration / 16);
    const isDecimal = target % 1 !== 0;

    const update = () => {
      start += step;
      if (start >= target) {
        el.textContent = isDecimal ? target.toFixed(0) + suffix : Math.floor(target) + suffix;
        return;
      }
      el.textContent = (isDecimal ? start.toFixed(1) : Math.floor(start)) + suffix;
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const original = el.textContent;
          const { num, suffix } = parseValue(original);

          if (num && num > 0) {
            animateCounter(el, num, suffix);
          }

          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
})();
