import styles from "./NavBar.module.css";
import logo from "../../assets/png/autonl-logo.png";
import arrows from "../../assets/png/arrows.png";
import search from "../../assets/png/search.png";
import contact from "../../assets/png/contact.png";
import profile from "../../assets/png/profile.png";
import arrowDown from "../../assets/png/arrow-down.png";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav__content}>
        <div className={styles.nav__content__left}>
          <img src={logo} alt="logo" />
          <a href="#kopen">Kopen</a>
          <a href="#private-lease">Private lease</a>
          <a href="#inruilen">Inruilen</a>
          <a href="#meer-informatie">Meer informatie</a>
        </div>
        <div className={styles.nav__content__right}>
          <a href="#vergelijken">
            <img src={arrows}></img>Vergelijken
          </a>
          <a href="#zoeken">
            <img src={search}></img>Zoeken
          </a>
          <a href="#contact" style={{ color: "#3E4FFF" }}>
            <img src={contact}></img>Contact
          </a>
          <button className={styles.nav__btn}>
            <img src={profile}></img>
            <img src={arrowDown}></img>
          </button>
        </div>
      </div>
    </nav>
  );
}
