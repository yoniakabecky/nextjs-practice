import { motion } from "framer-motion";
import * as React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import MobileMenuToggle from "./mobileMenuToggle";

const sidebar = {
  open: ({ width, height }) => ({
    clipPath: `circle(${height * 2 + 200}px at ${width - 29}px 2.5rem)`,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 40,
      //   restDelta: 2,
    },
  }),
  closed: ({ width }) => ({
    clipPath: `circle(25px at ${width - 29}px 2.5rem)`,
    opacity: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  }),
};

const items = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function MobileMenu({ menus, windowSize }) {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div
        variants={sidebar}
        custom={windowSize}
        className={styles.background}
      >
        <motion.ul variants={variants} className={styles.mobileMenu}>
          {menus.map((menu, i) => (
            <motion.li
              key={i}
              variants={items}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={styles.menuItem}
            >
              <Link href={menu.link}>
                <a>{menu.name}</a>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <MobileMenuToggle toggle={() => setOpen(!isOpen)} />
    </motion.div>
  );
}
