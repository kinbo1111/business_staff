document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.header__menu-btn');
  const drawer = document.querySelector('.header__drawer');

  if (menuBtn && drawer) {
    const closeDrawer = () => {
      menuBtn.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('is-open');
      drawer.hidden = true;
      menuBtn.setAttribute('aria-label', 'メニューを開く');
    };

    const openDrawer = () => {
      menuBtn.setAttribute('aria-expanded', 'true');
      drawer.classList.add('is-open');
      drawer.hidden = false;
      menuBtn.setAttribute('aria-label', 'メニューを閉じる');
    };

    menuBtn.addEventListener('click', () => {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeDrawer();
      }
    });
  }
  var voiceSlider = new Swiper(".voice__slider", {
    loop: true,
    slidesPerView: 'auto',
    speed: 12000,
    allowTouchMove: false,
    loopAdditionalSlides: 5,
    spaceBetween: 28,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true,
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
      },
    },
  });

  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach((item) => {
    const button = item.querySelector('.faq__question');
    if (!button) return;

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      faqItems.forEach((faqItem) => {
        faqItem.classList.remove('is-open');
        const faqButton = faqItem.querySelector('.faq__question');
        if (faqButton) {
          faqButton.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isOpen) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
