import Link from "next/link";
import styles from "./navbar.module.css";

const menus = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/Contact" },
  { name: "Blog", link: "/blog" },
];

const Navbar = () => {
  return (
    <header>
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
    </header>
  );
};

export default Navbar;
