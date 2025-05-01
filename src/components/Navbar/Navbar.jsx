import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
