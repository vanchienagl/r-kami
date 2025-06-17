"use strict";

// ____________________________________________________________________________
// ____________________________________________________________________________
// Load Fixed Menu Pages
const loadFixedMenuPages = (() => {
  document.addEventListener("DOMContentLoaded", () => {

    const fixedMenuPages = document.getElementById('js_fixed_menu_pages');
    const links = document.querySelectorAll('#js_fixed_menu_pages .menu .link');
    const secPages = document.querySelectorAll('.sec-p');
    const secPagesWrap = document.getElementById('js_sec_p_wrap');
  
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

      gsap.to(fixedMenuPages, {
        scrollTrigger: {
          invalidateOnRefresh: true,
          trigger: secPagesWrap,
          start: 'top top',
          end: "bottom 50%",
          toggleClass: { targets: fixedMenuPages, className: "show" },
          // markers: true,
        },
      });
      
      links.forEach(link => {
        link.parentNode.classList.toggle('active', link.dataset.target === currentId);
      });
    }
    window.addEventListener('scroll', updateActiveMenu);
    window.addEventListener('load', updateActiveMenu);
  });
})();

// ____________________________________________________________________________
// ____________________________________________________________________________
// Scroll Trigger Section Pages
$(function () {
  const secPageWrap = document.getElementById('js_sec_p_wrap');
  const secFirstView = document.getElementById('js_sec_firstview');
  const imgBox = document.getElementById('js_img_box');
  const logo = document.getElementById('js_logo');
  const btnScroll = document.getElementById('js_btn_scroll');
  let sW = window.innerWidth;
  const footer = document.getElementById("footer");
  const footerTop = footer.offsetTop;
  const bgSecPages = document.getElementById('js_bg_sec_pages');

  // First View
  ScrollTrigger.create({
    invalidateOnRefresh: true,
    trigger: secFirstView,
    start: 'top top',
    end: "bottom top",
    pin: secFirstView,
    // markers: true,
  });

  // ScrollTrigger.create({
  //   invalidateOnRefresh: true,
  //   trigger: imgBox,
  //   start: 'top top',
  //   end: "bottom top",
  //   pin: imgBox,
  //   markers: true,
  // });

  gsap.to(imgBox, {
    width: '100vw',
    opacity: 1,
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: imgBox,
      start: 'top top',
      end: "bottom top",
      scrub: true,
      onEnter: () => {
        $(logo).addClass("hide");
      },
      onLeaveBack: () => {
        $(logo).removeClass("hide");
      },
      markers: true,
    },
  });

  // Scroll trigger section pages
  // gsap.to(bgSecPages, {
  //   scrollTrigger: {
  //     trigger: secPagesWrap,
  //     start: 'top top',
  //     endTrigger: secPagesWrap,
  //     end: "bottom top",
  //     // pin: bgSecPages,
  //     // pinSpacing: false,
  //     // position: "fixed",
  //     toggleClass: { targets: bgSecPages, className: "active" },
  //     // markers: true,
  //   },
  // });

  ScrollTrigger.create({
    trigger: "#p-top",
    start: "top top",
    end: "bottom top",
    toggleClass: { targets: ".bg-page-top", className: "active" },
    // markers: true,
  });
  ScrollTrigger.create({
    trigger: "#p-access",
    start: "top top",
    end: "bottom top",
    toggleClass: { targets: ".bg-page-access", className: "active" },
    // markers: true,
  });
  ScrollTrigger.create({
    trigger: "#p-design",
    start: "top top",
    end: "bottom top",
    toggleClass: { targets: ".bg-page-design", className: "active" },
    // markers: true,
  });
  ScrollTrigger.create({
    trigger: "#p-garden",
    start: "top top",
    end: "bottom top",
    toggleClass: { targets: ".bg-page-garden", className: "active" },
    // markers: true,
  });
  ScrollTrigger.create({
    trigger: "#p-quality",
    start: "top top",
    end: "bottom top",
    toggleClass: { targets: ".bg-page-quality", className: "active" },
    // markers: true,
  });
  ScrollTrigger.create({
    trigger: "#p-plan",
    start: "top top",
    end: "bottom top",
    toggleClass: { targets: ".bg-page-plan", className: "active" },
    // markers: true,
  });

  // js_btn_scroll
  let setBottom = '';
  let setRight = '';
  if (sW > 750) {
    setBottom = "5rem";
    setRight = "7.8rem";
  } else {
    setBottom = "16.5rem";
    setRight = "3.2rem";
  }
  window.addEventListener("scroll", () => {
    const windowBottom = window.scrollY + window.innerHeight;
    if (windowBottom > footerTop) {
      btnScroll.classList.add("hide");
    } else {
      btnScroll.classList.remove("hide");
    }
  });
  gsap.to(btnScroll, {
    right: setRight,
    bottom: setBottom,
    left: "unset",
    xPercent: 0,
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: secPageWrap,
      start: 'top top',
      end: "top top",
      scrub: true,
      // markers: true,
    },
  });

});