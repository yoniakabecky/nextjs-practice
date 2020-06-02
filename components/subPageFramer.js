import * as React from "react";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 100,
    opacity: 0,
    transition: { duration: 2, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
      staggerChildren: 0.1,
    },
  },
};

export default function SubPageHero3({ title, subTitle }) {
  if (title) {
    const arr = title.split("");
    title = arr.map((char, key) => (
      <motion.span variants={fadeInUp} key={key}>
        {char}
      </motion.span>
    ));
  }

  return (
    <div style={{ position: "relative" }}>
      <div className="root">
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.h1 variants={fadeInUp}>
            <span className="title">{title}</span>
          </motion.h1>
          <motion.h4 variants={fadeInUp} className="subTitle">
            {subTitle}
          </motion.h4>
        </motion.div>
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
        .title span {
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
