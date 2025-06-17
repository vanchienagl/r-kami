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
          start: 'top-=100 top',
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
  const secFirstView = document.getElementById('js_sec_firstview');
  const logo = document.getElementById('js_logo');
  const imgBox = document.getElementById('js_img_box');
  const img = document.getElementById('js_img');
  const bg = document.getElementById('js_bg');
  const title = document.getElementById('js_title');
  let sW = window.innerWidth;

  // First View
  gsap.to(imgBox, {
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: secFirstView,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onEnter: () => {
        $(imgBox).addClass("active");
        $(logo).addClass("hide");
        $(img).addClass("active");
      },
      onLeaveBack: () => {
        $(imgBox).removeClass("active");
        $(logo).removeClass("hide");
        $(img).removeClass("active");
      },
      // markers: true,
    },
  });

  gsap.to(bg, {
    opacity: 0.8,
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: secFirstView,
      start: 'top top',
      end: "bottom top",
      scrub: true,
      onEnter: () => {
        $(bg).addClass("active");
      },
      onLeaveBack: () => {
        $(bg).removeClass("active");
      },
      // markers: true,
    },
  });

  gsap.to(title, {
    color: '#fff',
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: secFirstView,
      start: '25% top',
      end: "bottom top",
      scrub: true,
      // markers: true,
    },
  });
  gsap.to(title, {
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: "#p-access",
      start: 'top top',
      end: "top top",
      onEnter: () => {
        $(title).addClass("hide");
      },
      onLeaveBack: () => {
        $(title).removeClass("hide");
      },
      // markers: true,
    },
  });
  if (sW < 750) {
    gsap.to(title, {
      opacity: 0,
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: secFirstView,
        start: '25% top',
        end: "80% top",
        scrub: true,
        // markers: true,
      },
    });
  }

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
});

// ____________________________________________________________________________
// ____________________________________________________________________________
// Button Scroll
$(function () {
  const secPageWrap = document.getElementById('js_sec_p_wrap');
  const btnScroll = document.getElementById('js_btn_scroll');
  const footer = document.getElementById("footer");
  const footerTop = footer.offsetTop;

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