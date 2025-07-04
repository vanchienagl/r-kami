"use strict";

// ____________________________________________________________________________
// ____________________________________________________________________________
// Hamburger Menu Image Active
$(function () {
  const activeImage = document.querySelector('#js_hamburger_menu .image img.is-access');
  activeImage.classList.add("active");
});

// ____________________________________________________________________________
// ____________________________________________________________________________
// Change color fixedMenuPages
$(function () {
  const fixedMenuPages = document.querySelector('.js_com_fixed_menu_subpage');
  const sec_connected = document.getElementById('sec_connected');

  gsap.to(fixedMenuPages, {
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: sec_connected,
      start: 'top 50%',
      end: "bottom 40%",
      toggleClass: { targets: fixedMenuPages, className: "is-white" },
      // markers: true,
    },
  });
});