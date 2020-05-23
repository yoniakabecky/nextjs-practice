import gsap from "gsap";

export default (element) => {
  gsap.to(element, {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power4.out",
    stagger: {
      amount: 0.3,
    },
  });
};
