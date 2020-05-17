import styles from "./layout.module.css";
import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
