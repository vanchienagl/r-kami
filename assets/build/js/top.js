"use strict";
// ____________________________________
$(document).ready(function () {
  // Scroll active fixed_menu_pages
  const links = document.querySelectorAll('#js_fixed_menu_pages .menu .link');
  const secPages = document.querySelectorAll('.sec-p');
  const secPagesWrap = document.getElementById('js_sec_p_wrap');
  const fixedMenuPages = document.getElementById('js_fixed_menu_pages');
  const secIntro = document.getElementById('js_sec_intro');
  const secIntroBg = document.querySelector('#js_sec_intro .bg-color');
  const secIntroTitile = document.querySelector('#js_sec_intro .title');
  const secPagesWrapTop = secPagesWrap.offsetTop;
  const secPagesWrapOffset = secPagesWrap.offsetHeight;

  function updateActiveMenu() {
    let scrollPosition = window.scrollY;
    let currentId = '';

    for (let section of secPages) {
      const offsetTop = section.offsetTop;
      if (scrollPosition >= offsetTop) {
        currentId = section.id;
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    }

    if (scrollPosition >= secPagesWrapTop && scrollPosition < secPagesWrapTop + secPagesWrapOffset) {
      fixedMenuPages.classList.add('show');
    } else {
      fixedMenuPages.classList.remove('show');
    }
    
    links.forEach(link => {
      link.parentNode.classList.toggle('active', link.dataset.target === currentId);
    });
  }
  window.addEventListener('scroll', updateActiveMenu);
  window.addEventListener('load', updateActiveMenu);

  // Scroll trigger section pages
  ScrollTrigger.create({
    invalidateOnRefresh: true,
    trigger: secIntro,
    start: 'top top',
    endTrigger: secPagesWrap,
    end: "top top",
    pin: secIntro,
    pinSpacing: false,
    // markers: true,
  });

  gsap.to(secIntroBg, {
    opacity: '0.9',
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: secIntro,
      start: 'top top',
      endTrigger: secPagesWrap,
      end: "top top",
      scrub: true,
      // markers: true,
    },
  });

  gsap.to(secIntroTitile, {
    color: '#fff',
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: secIntro,
      start: 'top top',
      endTrigger: secPagesWrap,
      end: "top top",
      scrub: true,
      // markers: true,
    },
  });
  
  // sec-p
  // secPages.forEach((secPage) => {
  //   ScrollTrigger.create({
  //     invalidateOnRefresh: true,
  //     trigger: secPage,
  //     start: 'top top',
  //     endTrigger: secPage,
  //     end: "bottom top",
  //     toggleClass: { targets: secPage, className: "active" },
  //     pin: secPage,
  //     // pinSpacing: false,
  //     scrub: true,
  //     markers: true,
  //   });
  // });

});