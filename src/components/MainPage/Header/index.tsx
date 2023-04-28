import CharacteresPage from "@/components/CharactaresPage";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <img className={styles["Image-logo"]} src="/images/logo.svg" alt="" />
        <nav className={styles.Nav}>
          <ul className={styles["Nav-list"]}>
            <li>
              <a href="">Characters</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Episodes</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
