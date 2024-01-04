import styles from "./HomepageTemplate.module.css";
import { IoIosStar } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";
import NavBar from "../sections/NavBar";
import HeroSection from "../sections/HeroSection";
import CarCategoryList from "../cards/category/CarCategoryList";

export default function HomepageTemplate() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.header__review__content}>
            <IoIosStar
              style={{ color: "#FFC400", width: "14px", height: "15px" }}
            />
            <IoIosStar
              style={{ color: "#FFC400", width: "14px", height: "15px" }}
            />
            <IoIosStar
              style={{ color: "#FFC400", width: "14px", height: "15px" }}
            />
            <IoIosStar
              style={{ color: "#FFC400", width: "14px", height: "15px" }}
            />
            <FaStarHalfAlt
              style={{ color: "#FFC400", width: "14px", height: "15px" }}
            />
            <p>9 op basis van ruim 900 tevreden klanten</p>
          </div>
          <div className={styles.header__links}>
            <a href="#veelgestelde-vragen">Veelgestelde vragen</a>
            <a href="#blogs">Blogs</a>
          </div>
        </div>
      </header>
      <NavBar />
      <main className={styles.main}>
        <HeroSection />
        <CarCategoryList />
      </main>
    </div>
  );
}
