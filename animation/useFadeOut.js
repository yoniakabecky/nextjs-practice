import gsap from "gsap";

export default (element) => {
  gsap.to(element, {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power4.out",
  });
};
