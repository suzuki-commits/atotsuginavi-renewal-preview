(() => {
  'use strict';

  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');

  const closeMenu = () => {
    if (!menuButton || !menu) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'メニューを開く');
    menu.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  };

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(willOpen));
      menuButton.setAttribute('aria-label', willOpen ? 'メニューを閉じる' : 'メニューを開く');
      menu.classList.toggle('is-open', willOpen);
      document.body.classList.toggle('nav-open', willOpen);
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  const topicOptions = [...document.querySelectorAll('[data-topic]')];
  const selectedTopic = document.querySelector('[data-selected-topic]');
  const officialForm = document.querySelector('[data-official-form]');

  topicOptions.forEach((option) => {
    option.addEventListener('click', () => {
      topicOptions.forEach((item) => item.setAttribute('aria-pressed', 'false'));
      option.setAttribute('aria-pressed', 'true');

      const topic = option.dataset.topic || '';
      if (selectedTopic) selectedTopic.textContent = topic;
      if (officialForm) {
        officialForm.setAttribute('aria-label', `${topic}について、公式フォームへ進む`);
      }
    });
  });

})();
