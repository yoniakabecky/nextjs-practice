import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import DesktopMenu from "./desktopMenu";
import MobileMenu from "./mobileMenu";
import MobileMenuToggle from "./mobileMenuToggle";
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
  let windowSize = useWindowSize();
  let isMobile = windowSize.width < 1024;

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
        {isMobile ? (
          <MobileMenu menus={menus} windowSize={windowSize} />
        ) : (
          <DesktopMenu menus={menus} />
        )}
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
