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
      let scrollPosition = window.scrollY + window.innerHeight / 2;
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
          end: "bottom 95%",
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
      start: '30% top',
      end: "bottom top",
      scrub: true,
      // markers: true,
    },
  });
  gsap.to(title, {
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: "#p-access",
      start: 'top 40%',
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
    const tl = gsap.timeline({
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: secFirstView,
        start: "25% top",
        end: "70% top",
        scrub: true,
        // markers: true,
      }
    });

    tl.to(title, {
      color: "#fff",
    }, 0); // start from the beginning

    tl.to(title, {
      opacity: 0,
    }, 0.5); // start at 50% scroll (relative timeline)
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
    start: "top 50%",
    end: "bottom top",
    toggleClass: { targets: ".bg-page-access", className: "active" },
    // markers: true,
  });
  ScrollTrigger.create({
    trigger: "#p-design",
    start: "top 50%",
    end: "bottom top",
    toggleClass: { targets: ".bg-page-design", className: "active" },
    // markers: true,
  });
  ScrollTrigger.create({
    trigger: "#p-garden",
    start: "top 50%",
    end: "bottom top",
    toggleClass: { targets: ".bg-page-garden", className: "active" },
    // markers: true,
  });
  ScrollTrigger.create({
    trigger: "#p-quality",
    start: "top 60",
    end: "bottom top",
    toggleClass: { targets: ".bg-page-quality", className: "active" },
    // markers: true,
  });
  ScrollTrigger.create({
    trigger: "#p-plan",
    start: "top 50%",
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
  const btnScrollRight = document.getElementById('js_btn_scroll_right');
  const secInformation = document.getElementById('js_sec_information');

  gsap.to(btnScroll, {
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: secPageWrap,
      start: 'top top',
      end: "top top",
      scrub: true,
      onEnter: () => {
        $(btnScroll).addClass('hide');
      },
      onLeaveBack: () => {
        $(btnScroll).removeClass('hide');
      },
      // markers: true,
    },
  });

  gsap.to(btnScrollRight, {
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: secPageWrap,
      start: 'top top',
      end: "top top",
      scrub: true,
      onEnter: () => {
        $(btnScrollRight).addClass('show');
      },
      onLeaveBack: () => {
        $(btnScrollRight).removeClass('show');
      },
      // markers: true,
    },
  });

  gsap.to(btnScrollRight, {
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: secInformation,
      start: 'top bottom',
      end: "top bottom",
      scrub: true,
      onEnter: () => {
        $(btnScrollRight).removeClass('show').addClass('hide');
      },
      onLeaveBack: () => {
        $(btnScrollRight).addClass('show').removeClass('hide');
      },
      // markers: true,
    },
  });

});

// ____________________________________________________________________________
// ____________________________________________________________________________
// Fixed Menu Buttons PC
$(function () {
  const $fixedMenuButtons = $('#js_fixed_menu_buttons');
  const $secWrapPages = $('#js_sec_p_wrap');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $secWrapPages.offset().top) {
      $fixedMenuButtons.addClass('show');
    } else {
      $fixedMenuButtons.removeClass('show');
    }
  });
});