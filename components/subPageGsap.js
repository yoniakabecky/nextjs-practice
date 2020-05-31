import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function SubPageHero2({ title, subTitle }) {
  if (title) {
    const arr = title.split("");
    title = arr.map((char, key) => <span key={key}>{char}</span>);
  }

  let sectionRef = useRef();
  let titleRef = useRef();
  let subTitleRef = useRef();
  let tl = gsap.timeline();

  useEffect(() => {
    gsap.to(sectionRef.current, 0, { css: { visibility: "visible" } });
    tl.from(titleRef.current, {
      duration: 2,
      y: 200,
      ease: "power3.out",
    })
      .from(
        titleRef.current.children,
        {
          duration: 1,
          opacity: 0,
          stagger: 0.1,
        },
        0.1
      )
      .from(
        subTitleRef.current,
        {
          duration: 2,
          y: 20,
          opacity: 0,
          ease: "power3.inOut",
        },
        0.8
      );
  }, [tl]);

  return (
    <>
      <div className="root" ref={sectionRef}>
        <h1 className="title" ref={titleRef}>
          {title}
        </h1>
        <h4 className="subTitle" ref={subTitleRef}>
          {subTitle}
        </h4>
      </div>
      <style jsx>{`
        .root {
          display: flex;
          visibility: hidden;
          flex-direction: column;
          justify-content: center;
          height: calc(100vh - 64px);
        }
        .title {
          text-transform: capitalize;
        }
      `}</style>
    </>
  );
}
