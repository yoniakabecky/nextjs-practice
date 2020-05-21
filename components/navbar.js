import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const menus = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/Contact" },
  { name: "Blog", link: "/blog" },
];

const headerHight = 64;

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);

  let scrollPos = 0;
  let lastScrollPos = 0;

  useEffect(() => {
    const handleScroll = () => {
      scrollPos = window.scrollY;
      if (showNav && scrollPos > headerHight && scrollPos > lastScrollPos) {
        setShowNav(false);
      }
      if (scrollPos <= headerHight || scrollPos <= lastScrollPos) {
        setShowNav(true);
      }
      lastScrollPos = scrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} header`}>
      <nav className={styles.navWrapper}>
        <div className={styles.logo}>Logo</div>
        <span className={styles.flexGrow} />
        <ul className={styles.menuWrapper}>
          {menus.map((menu, key) => (
            <li key={key}>
              <Link href={menu.link}>
                <a>{menu.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        .header {
          transform: ${showNav ? "translateY(0)" : "translateY(-150%)"};
        }
      `}</style>
    </header>
  );
};

export default Navbar;
