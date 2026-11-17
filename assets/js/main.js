/* Nhà Xinh – small site behaviours: mobile menu, project filters, forms */
(function () {
  'use strict';

  // ---- Mobile navigation ----
  var body = document.body;
  var toggle = document.querySelector('.menu-toggle');
  var backdrop = document.querySelector('.nav-backdrop');

  function setMenu(open) {
    body.classList.toggle('menu-open', open);
    if (toggle) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
    }
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setMenu(!body.classList.contains('menu-open'));
    });
  }
  if (backdrop) backdrop.addEventListener('click', function () { setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1080) setMenu(false);
  });

  // ---- Project filter tabs ----
  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var buttons = group.querySelectorAll('.filters button');
    var cards = group.querySelectorAll('[data-cat]');
    var empty = group.querySelector('.empty');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var f = btn.getAttribute('data-filter');
        var shown = 0;
        buttons.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle('on', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        cards.forEach(function (card) {
          var match = f === 'all' || card.getAttribute('data-cat') === f;
          card.hidden = !match;
          if (match) shown++;
        });
        if (empty) empty.hidden = shown > 0;
      });
    });
  });

  // ---- CV upload label ----
  document.querySelectorAll('.upload input[type="file"]').forEach(function (input) {
    input.addEventListener('change', function () {
      var label = input.closest('.upload').querySelector('b');
      if (input.files && input.files[0]) label.textContent = input.files[0].name;
    });
  });

  // ---- Forms (static site: no backend yet) ----
  document.querySelectorAll('form[data-static]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-note');
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (note) note.textContent = 'Cảm ơn bạn! Nhà Xinh đã nhận thông tin và sẽ liên hệ sớm.';
      form.reset();
      var label = form.querySelector('.upload b');
      if (label) label.textContent = 'Tải CV lên ↑';
    });
  });

  // ---- "Ứng tuyển" links pre-select the position in the form ----
  var jobSelect = document.getElementById('f-job');
  document.querySelectorAll('[data-job]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (jobSelect) jobSelect.value = link.getAttribute('data-job');
    });
  });

  // ---- Footer year ----
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
