import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <img className={styles["Image-logo"]} src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-monsters-transparent-png-stickpng-2.png" alt="" />
        <nav className={styles.Nav}>
          <ul className={styles["Nav-list"]}>
            <li>
              <a href="#">Characters</a>
            </li>
            <li>
              <a href="#">Episodes</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
