"use strict";

// ____________________________________________________________________________
// ____________________________________________________________________________
// Hamburger Menu Image Active
$(function () {
  const activeImage = document.querySelector('#js_hamburger_menu .image img.is-location');
  activeImage.classList.add("active");
});


// ____________________________________________________________________________
// ____________________________________________________________________________
// Change color fixedMenuPages
$(function () {
  const fixedMenuPages = document.querySelector('.js_com_fixed_menu_subpage');
  const sec_position = document.getElementById('sec_position');

  gsap.to(fixedMenuPages, {
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: sec_position,
      start: 'top 50%',
      end: "bottom 50%",
      toggleClass: { targets: fixedMenuPages, className: "is-white" },
      // markers: true,
    },
  });
});