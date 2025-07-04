"use strict";
// ____________________________________
// ____________________________________
// ユーザーエージェント________________
var userAgentCheck = (function () {
  var body = document.querySelector('body');
  var userAgent = window.navigator.userAgent.toLowerCase();
  // pc,tablet,sp
  if (
    navigator.userAgent.indexOf('iPhone') > 0 ||
    navigator.userAgent.indexOf('iPod') > 0 ||
    (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)
  ) {
    body.classList.add('sp');
  } else if (
    navigator.userAgent.indexOf('iPad') > 0 ||
    navigator.userAgent.indexOf('Android') > 0 ||
    (navigator.userAgent.indexOf('Safari') > 0 && typeof document.ontouchstart !== 'undefined')
  ) {
    body.classList.add('tl');
  } else {
    body.classList.add('pc');
  }
  // OS
  if (userAgent.indexOf("windows nt") !== -1) {
    body.classList.add('Windows');
  } else if (userAgent.indexOf("android") !== -1) {
    body.classList.add('Android');
  } else if (userAgent.indexOf("iphone") !== -1 || userAgent.indexOf("ipad") !== -1) {
    body.classList.add('iOS');
  } else if (userAgent.indexOf("mac os x") !== -1) {
    body.classList.add('macOS');
  } else {
    body.classList.add('other_os');
  }
  // Browser
  if (userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
    body.classList.add('IE');
  } else if (userAgent.indexOf('edge') != -1) {
    body.classList.add('Edge');
  } else if (userAgent.indexOf('chrome') != -1) {
    body.classList.add('Chrome');
  } else if (userAgent.indexOf('safari') != -1) {
    body.classList.add('Safari');
  } else if (userAgent.indexOf('firefox') != -1) {
    body.classList.add('FireFox');
  } else if (userAgent.indexOf('opera') != -1) {
    body.classList.add('Opera');
  } else {
    body.classList.add('other_browser');
  }
})();
// ____________________________________
// ____________________________________
// ウインドウサイズ____________________
var windowResize = (function () {
  var sW = document.documentElement.clientWidth;
  var sH = document.documentElement.clientHeight;
  var main = document.querySelector('main');
  if (sW >= sH) {
    main.classList.add('w_base');
    main.classList.remove('h_base');
  } else {
    main.classList.add('h_base');
    main.classList.remove('w_base');
  }
  if ((sW * 9) > (sH * 16)) {
    main.classList.add('v_w_base');
    main.classList.remove('v_h_base');
  } else {
    main.classList.add('v_h_base');
    main.classList.remove('v_w_base');
  }
});
window.addEventListener("resize", function (event) {
  windowResize();
});
// ロード画面削除____________________
var loadFunc = (function () {
  var loadWrap = document.getElementById('loadWrap');
  var mainWrap = document.getElementById('mainWrap');
  windowResize();

  var startFunc = (function () {
    loadWrap.classList.add('no_active');
    mainWrap.classList.add('active');
  })
  setTimeout(startFunc, 500)
})();

// ____________________________________
// ____________________________________
// アンカーリンク______________________
/*$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 800;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});*/
//$(document).ready(function(){
//
//  //通常のクリック時
//  $('a[href^="#"]').click(function() {
//    //ページ内リンク先を取得
//    //var href= $(this).attr("href");
//     var href= $(this).attr("href");
//    //リンク先が#か空だったらhtmlに
//    //var hash = href == "#" || href == "" ? 'html' : href;
//    //スクロール実行
//    scrollToAnker(href);
//    //リンク無効化
//    //return false;
//  });
//  
//  
//  // 関数：スムーススクロール
//  // 指定したアンカー(#ID)へアニメーションでスクロール
//  function scrollToAnker(href) {
//    var target = $(href);
//    var position = target.offset().top;
//    $('body,html').stop().animate({scrollTop:position}, 500);
//  }
//})
// ____________________________________
// ____________________________________
// ナビボタン__________________________
var navFunc = (function () {
  var navBtn = document.getElementById('jsNavBtn');
  var hamburgerMenu = document.getElementById('js_hamburger_menu');
  var btnCloseH = document.getElementById('js_btn_close_h');
  
  navBtn.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    
    if (navBtn.classList.contains('active') == true) {
      navBtn.classList.remove('active');
      hamburgerMenu.classList.remove('active');
    } else {
      navBtn.classList.add('active');
      hamburgerMenu.classList.add('active');
    }
  });

  // close button hamburgur menu
  btnCloseH.addEventListener("click", function (event) {
    hamburgerMenu.classList.remove('active');
    navBtn.classList.remove('active');
  });
})();


// ____________________________________________________________________________
// ____________________________________________________________________________
// ____________________________________________________________________________
// Hamburger Menu Image
$(function () {
  const menuItems = document.querySelectorAll('#js_hamburger_menu .menu-item');
  const allImages = document.querySelectorAll('#js_hamburger_menu .image img');
  const defaultImage = document.querySelector('#js_hamburger_menu .image img.is-top');

  // When hover on menu-item
  menuItems.forEach(menuItem => {
    menuItem.addEventListener('mouseenter', () => {
      const matchedClass = Array.from(menuItem.classList).find(c => c.startsWith('is-'));

      // Remove all class active
      allImages.forEach(img => img.classList.remove('active'));

      const targetImage = document.querySelector(`#js_hamburger_menu .image img.${matchedClass}`);
      if (targetImage) {
        targetImage.classList.add('active');
      }
    });
  });

  // When leave menu-box
  const menuWrapper = document.querySelector('#js_hamburger_menu .menus');
  const path = window.location.pathname;
  const segments = path.split('/');
  const pageName = segments.pop().split('.')[0];
  let activeImagePage = '';

  if (pageName === '') {
    activeImagePage = document.querySelector(`#js_hamburger_menu .image img.is-top`);
  } else {
    activeImagePage = document.querySelector(`#js_hamburger_menu .image img.is-${pageName}`);
  }
  
  menuWrapper.addEventListener('mouseleave', () => {
    allImages.forEach(img => img.classList.remove('active'));
    activeImagePage.classList.add('active');
  });
});


// ____________________________________________________________________________
// ____________________________________________________________________________
// ____________________________________________________________________________
// スクロールアニメーション
$(document).ready(function () {
  $('.m_left').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass('m_left_on');
    }
  });
  $('.m_right').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass('m_right_on');
    }
  });
  $('.m_op').on('inview', function (isInView) {
    if (isInView) {
      $(this).stop().addClass('m_op_on');
    }
  });
  $('.m_down').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass('m_down_on');
    }
  });
  $('.m_up').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass('m_up_on');
    }
  });
  $('.m_scale').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass('m_scale_on');
    }
  });
});

// ____________________________________________________________________________
// ____________________________________________________________________________
// Header Menu
$(function () {
  function showHeaderMenu() {
    if ($(window).scrollTop() > 0) {
      $('header').addClass("scroll");
    } else {
      $('header').removeClass("scroll");
    }
  }
  window.addEventListener('scroll', showHeaderMenu);
  window.addEventListener('load', showHeaderMenu);
});

// ____________________________________________________________________________
// ____________________________________________________________________________
// Fixed Menu Footer SP
$(function () {
  function showFixedMenuFooter() {
    if ($(window).scrollTop() > 0) {
      $('.js_fixed_menu_footer').addClass("show");
    } else {
      $('.js_fixed_menu_footer').removeClass("show");
    }
  }
  window.addEventListener('scroll', showFixedMenuFooter);
  window.addEventListener('load', showFixedMenuFooter);
});

// ____________________________________________________________________________
// ____________________________________________________________________________
// Button Back To Top
$(function () {
  const $backToTopBtn = $("#backToTop");
  const $footer = $("#footer");
  const footerTop = $footer.offset().top;

  $(window).on("scroll", function () {
    const windowBottom = $(window).scrollTop() + $(window).height();

    if (windowBottom > footerTop) {
      $backToTopBtn.addClass("show");
    } else {
      $backToTopBtn.removeClass("show");
    }
  });

  $backToTopBtn.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "smooth");
  });
});

// ____________________________________________________________________________
// ____________________________________________________________________________
// Common MV
$(function () {
  function scaleMV() {
    if ($(window).scrollTop() > 0) {
      $('.js_com_mv').addClass("active");
    } else {
      $('.js_com_mv').removeClass("active");
    }
  }
  window.addEventListener('scroll', scaleMV);
  window.addEventListener('load', scaleMV);
});


// ____________________________________________________________________________
// ____________________________________________________________________________
// Show Fixed Menu Sub Pages
const loadFixedMenuSubPage = (() => {
  document.addEventListener("DOMContentLoaded", () => {
    const fixedMenuPages = document.querySelector('.js_com_fixed_menu_subpage');
    const links = document.querySelectorAll('.js_com_fixed_menu_subpage .link');
    const secPages = document.querySelectorAll('.js_sec_page');
    const secShowMenu = secPages[0];
    const secHideMenu = secPages[secPages.length - 1];

    if (fixedMenuPages) {
      gsap.to(fixedMenuPages, {
        scrollTrigger: {
          invalidateOnRefresh: true,
          trigger: secShowMenu,
          start: 'top 50%',
          endTrigger: secHideMenu,
          end: "bottom 25%",
          toggleClass: { targets: fixedMenuPages, className: "show" },
          // markers: true,
        },
      });
    }

    function updateActiveMenu() {
      let scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentId = '';

      secPages.forEach(section => {
        if (scrollPosition >= section.offsetTop) {
          currentId = section.id;
        }
      });

      links.forEach(link => {
        const hash = link.getAttribute('href');
        const targetId = hash.replace('#', '');
        const isActive = targetId === currentId;
        link.parentNode.classList.toggle('active', isActive);
      });
    }

    window.addEventListener('scroll', updateActiveMenu);
    window.addEventListener('load', updateActiveMenu);
  });
})();

// ____________________________________________________________________________
// ____________________________________________________________________________
// js_text_front Common Intro Subpage
$(function () {
  const comIntro = document.querySelector(".js_com_intro");
  const textFront = document.querySelectorAll('.js_text_front');
  
  if (comIntro) {
    for (let i = 0; i < textFront.length; i++) {
      gsap.to(textFront[i], {
        clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)',
        scrollTrigger: {
          invalidateOnRefresh: true,
          trigger: textFront[i],
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
          // markers: true,
        }
      });
    }
  }
});