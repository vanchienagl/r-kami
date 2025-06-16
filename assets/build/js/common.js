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
// SCROLL
$(function () {
  const fixedMenuFooter = document.getElementById("fixedMenuFooter");
  function showHeaderActive() {
    if ($(window).scrollTop() > 0) {
      $('header').addClass("scroll");
      fixedMenuFooter.classList.add("show");
    } else {
      $('header').removeClass("scroll");
      fixedMenuFooter.classList.remove("show");
    }
  }
  window.addEventListener('scroll', showHeaderActive);
  window.addEventListener('load', showHeaderActive);
});

$(document).ready(function () {
  const fixedMenuButtons = document.getElementById('js_fixed_menu_buttons');
  const comScroll = document.getElementById('js_com_scroll');
  const secIntro = document.getElementById('js_sec_intro');
  const backToTopBtn = document.getElementById("backToTop");
  const footer = document.getElementById("footer");
  const footerTop = footer.offsetTop;
  let sW = window.innerWidth;

  // Back To Top
  window.addEventListener("scroll", () => {
    const windowBottom = window.scrollY + window.innerHeight;
    if (windowBottom > footerTop) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // js_fixed_menu_buttons
  gsap.to(fixedMenuButtons, {
    x: "0",
    opacity: 1,
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: secIntro,
      start: 'top top',
      endTrigger: secIntro,
      end: "top top",
      scrub: true,
      // markers: true,
    },
  });

  // js_com_scroll
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
      comScroll.classList.add("hide");
    } else {
      comScroll.classList.remove("hide");
    }
  });
  gsap.to(comScroll, {
    right: setRight,
    bottom: setBottom,
    left: "unset",
    xPercent: 0,
    scrollTrigger: {
      invalidateOnRefresh: true,
      trigger: secIntro,
      start: 'top top',
      endTrigger: secIntro,
      end: "top top",
      scrub: true,
      // markers: true,
    },
  });
  
});