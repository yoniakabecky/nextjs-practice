import Link from "next/link";
import styles from "./navbar.module.css";

export default function DesktopMenu({ menus }) {
  return (
    <ul className={styles.menuWrapper}>
      {menus.map((menu, key) => (
        <li key={key}>
          <Link href={menu.link}>
            <a>{menu.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
