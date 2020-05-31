import anime from "animejs";
import { useEffect, useRef } from "react";

export default function SubPageHero({ title, subTitle }) {
  if (title) {
    const arr = title.split("");
    title = arr.map((char, key) => <span key={key}>{char}</span>);
  }

  let titleRef = useRef();
  let subTitleRef = useRef();

  useEffect(() => {
    anime
      .timeline({
        easing: "easeInOutQuad",
      })
      .add({
        targets: titleRef.current.children,
        opacity: [0, 1],
        duration: 2000,
        delay: (el, i) => 150 * (i - 1),
      })
      .add(
        {
          targets: subTitleRef.current,
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 500,
        },
        "-=500"
      );
  }, [titleRef, subTitleRef]);

  return (
    <>
      <div className="root">
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
