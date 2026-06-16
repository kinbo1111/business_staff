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

  const selectWrap = document.querySelector('.application__select-wrap');
  if (selectWrap) {
    const trigger = selectWrap.querySelector('.application__select-trigger');
    const selectedText = selectWrap.querySelector('.application__select-text');
    const options = selectWrap.querySelectorAll('.application__select-option');
    const hiddenInput = selectWrap.querySelector('#issue');
    const optionsList = selectWrap.querySelector('.application__select-options');

    if (trigger && selectedText && hiddenInput && optionsList && options.length > 0) {
      const closeSelect = () => {
        selectWrap.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        optionsList.hidden = true;
      };

      const openSelect = () => {
        selectWrap.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        optionsList.hidden = false;
      };

      trigger.addEventListener('click', () => {
        const isOpen = selectWrap.classList.contains('is-open');
        if (isOpen) {
          closeSelect();
        } else {
          openSelect();
        }
      });

      options.forEach((option) => {
        option.addEventListener('click', () => {
          const value = option.dataset.value || '';
          selectedText.textContent = option.textContent || '';
          hiddenInput.value = value;
          options.forEach((item) => {
            item.classList.remove('is-selected');
            item.setAttribute('aria-selected', 'false');
          });
          option.classList.add('is-selected');
          option.setAttribute('aria-selected', 'true');
          closeSelect();
        });
      });

      document.addEventListener('click', (event) => {
        if (!selectWrap.contains(event.target)) {
          closeSelect();
        }
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          closeSelect();
        }
      });
    }
  }
});
