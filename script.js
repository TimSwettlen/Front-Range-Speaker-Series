(() => {
  const cfg = window.SPEAKER_SERIES_CONFIG || {};
  const eventUrls = cfg.registrationUrls || {};
  const statusEls = document.querySelectorAll('.registration-status');

  document.querySelectorAll('.js-hsd-link').forEach(a => {
    if (cfg.hsdProgramUrl) a.href = cfg.hsdProgramUrl;
  });
  document.querySelectorAll('.js-map-link').forEach(a => {
    if (cfg.locationMapUrl) a.href = cfg.locationMapUrl;
  });

  document.querySelectorAll('.js-main-register').forEach(a => {
    if (cfg.mainRegistrationUrl) {
      a.href = cfg.mainRegistrationUrl;
      a.target = '_blank';
      a.rel = 'noopener';
    } else {
      a.href = '#register';
    }
  });

  document.querySelectorAll('.js-event-register').forEach(a => {
    const key = a.dataset.event;
    if (eventUrls[key]) {
      a.href = eventUrls[key];
      a.target = '_blank';
      a.rel = 'noopener';
    } else {
      a.href = '#register';
      a.addEventListener('click', () => {
        statusEls.forEach(el => {
          el.textContent = 'The registration form is not connected yet. Once the Google Form is ready, this button can preselect the appropriate speaker.';
        });
      });
    }
  });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }
})();
