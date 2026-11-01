document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  document.querySelectorAll('form.enquiry-form').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      const action = form.getAttribute('action') || '';
      if (!action) {
        e.preventDefault();
        const status = form.querySelector('.form-status');
        if (status) {
          status.textContent = 'This form is not yet connected. Please email daniel.rourke@lawhivelegal.com directly.';
          status.classList.remove('success');
          status.classList.add('error', 'visible');
        }
        return;
      }

      e.preventDefault();
      const status = form.querySelector('.form-status');
      const submitBtn = form.querySelector('button[type="submit"]');
      const data = new FormData(form);

      if (submitBtn) submitBtn.disabled = true;

      try {
        const response = await fetch(action, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          form.reset();
          if (status) {
            status.textContent = "Thanks — your enquiry has been sent. I'll be in touch soon.";
            status.classList.remove('error');
            status.classList.add('success', 'visible');
          }
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        if (status) {
          status.textContent = 'Sorry, something went wrong sending your enquiry. Please email daniel.rourke@lawhivelegal.com directly.';
          status.classList.remove('success');
          status.classList.add('error', 'visible');
        }
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.toggle('active', b === btn));
      const f = btn.dataset.filter;
      document.querySelectorAll('.writing-list .writing-item').forEach((item) => {
        item.hidden = f !== 'all' && item.dataset.type !== f;
      });
    });
  });
});

/* Writing page: surface the newest item of each type in a "Latest" strip */
document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.latest');
  if (!box) return;
  const grid = box.querySelector('.latest-grid');
  const newest = {};
  document.querySelectorAll('.writing-list .writing-item').forEach((el) => {
    const t = el.dataset.type;
    if (!newest[t] || el.dataset.date > newest[t].dataset.date) newest[t] = el;
  });
  ['article', 'publication', 'commentary'].forEach((t) => {
    if (!newest[t]) return;
    const card = newest[t].cloneNode(true);
    card.classList.add('latest-card');
    grid.appendChild(card);
  });
  box.hidden = !grid.children.length;
});
