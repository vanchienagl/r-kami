"use strict";
// ____________________________________

//section animation
// ____________________________________
gsap.to("#bg01", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#sec02",
    start: "top 80%",
    end: "bottom 40%",
    scrub: true
  }
});

gsap.to("#js_split_title .title", {
  color: "#fff",
  duration: 1,
  scrollTrigger: {
    trigger: "#sec02",
    start: "top -20%",
    end: "top 0",
    toggleActions: "play none none reverse"
  }
});

gsap.to("#bg02_img", {
  scale: 1,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#sec02",
    start: "top 70%",
    end: "top 0",
    scrub: true
  }
});

gsap.to("#bg03", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#sec02",
    start: "top -30%",
    end: "bottom -20%",
    scrub: true
  }
});

gsap.to("#js_split_title .title", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#sec04",
    start: "top 50%",
    toggleActions: "play none none reverse"
  }
});

gsap.to("#bg04", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#sec04",
    start: "top 50%",
    end: "top 0",
    scrub: true
  }
});

gsap.to("#bg05", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#sec05",
    start: "top 50%",
    end: "top 0",
    scrub: true
  }
});

gsap.to("#bg06", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#sec06",
    start: "top 50%",
    end: "top 0",
    scrub: true
  }
});

gsap.to("#bg07", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#sec07",
    start: "top 50%",
    end: "top 0",
    scrub: true
  }
});

gsap.to("#bg08", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#sec08",
    start: "top 50%",
    end: "top 0",
    scrub: true
  }
});

// menu handle
ScrollTrigger.create({
  trigger: "#sec02",
  start: "top -30%",
  endTrigger: "#sec08", 
  end: "bottom 99%", 
  scrub: true,
  toggleClass: {
    targets: "#js_fixed_menu_pages",
    className: "show"
  }
});

const listMenuSection = document.querySelectorAll(".js-submenu-sec");
const subMenuLinks = document.querySelectorAll("#js_fixed_menu_pages .menu li a");

listMenuSection.forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => {
      const id = section.id;
      subMenuLinks.forEach((link) => {
        if (link.getAttribute("href").includes(id)) {
          link.parentElement.classList.add("active");
        } else {
          link.parentElement.classList.remove("active");
        }
      });
    },
    onEnterBack: () => {
      const id = section.id;
      subMenuLinks.forEach((link) => {
        if (link.getAttribute("href").includes(id)) {
          link.parentElement.classList.add("active");
        } else {
          link.parentElement.classList.remove("active");
        }
      });
    }
  });
});