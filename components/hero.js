import { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import styles from "./hero.module.css";

const Hero = () => {
  let sectionRef = useRef(null);
  let imageRef = useRef(null);
  let contentRef = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    // Images variable
    const girlImageWrapper = imageRef.firstElementChild;
    const girlImage = girlImageWrapper.firstElementChild;
    const boyImageWrapper = imageRef.lastElementChild;
    const boyImage = boyImageWrapper.firstElementChild;

    // content variable
    const headlineFirst = contentRef.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = contentRef.children[1];
    const contentBtn = contentRef.children[2];

    TweenMax.to(sectionRef, 0, { css: { visibility: "visible" } });

    // Image Animation
    tl.from(girlImageWrapper, 1.2, { y: 1200, ease: Power3.easeOut })
      .from(girlImage, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)
      .from(boyImageWrapper, 1.2, { y: 1200, ease: Power3.easeOut }, 0.2)
      .from(boyImage, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2);

    // Content Animation
    tl.from(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      {
        duration: 1,
        y: 44,
        ease: Power3.easeOut,
        delay: 0.5,
        stagger: 0.2,
      },
      0.15,
      "Start"
    )
      .from(
        contentP,
        { duration: 1, y: 20, opacity: 0, ease: Power3.easeOut },
        1.4
      )
      .from(
        contentBtn,
        { duration: 1, x: -100, opacity: 0, ease: Power3.easeOut },
        1.4
      );
  }, [tl]);

  return (
    <section className={styles.hero} ref={(el) => (sectionRef = el)}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <div
            className={styles.heroContentInner}
            ref={(el) => (contentRef = el)}
          >
            <h1>
              <div className={styles.heroContentLine}>
                <div className={styles.heroContentLineInner}>
                  Reliving the burden
                </div>
              </div>
              <div className={styles.heroContentLine}>
                <div className={styles.heroContentLineInner}>
                  of disease caused
                </div>
              </div>
              <div className={styles.heroContentLine}>
                <div className={styles.heroContentLineInner}>by behaviors.</div>
              </div>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non
              labore asperiores aperiam. Excepturi, natus itaque! Accusantium
              illum sit quidem saepe adipisci illo iste, ipsum numquam fugit
              neque a ipsa.
            </p>
            <div className={styles.btnRow}>
              <button className={styles.exploreButton}>
                Explore
                <div className={styles.arrowIcon}>
                  <img src="/images/arrow.svg" alt="row" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.heroImages}>
          <div className={styles.heroImagesInner} ref={(el) => (imageRef = el)}>
            <div className={styles.heroImageGirl}>
              <img src="/images/girl.jpg" alt="girl" />
            </div>
            <div className={styles.heroImageBoy}>
              <img src="/images/boy.jpg" alt="boy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
