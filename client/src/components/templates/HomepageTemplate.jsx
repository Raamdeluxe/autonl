import styles from "./HomepageTemplate.module.css";
import Ratings from "../groups/Ratings";
import NavBar from "../sections/NavBar";
import HeroSection from "../sections/HeroSection";
import CarCategoryList from "../cards/category/CarCategoryList";
import CarDealsList from "../cards/deals/CarDealsList";

export default function HomepageTemplate() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.header__review__content}>
            <Ratings />
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
        <CarDealsList />
      </main>
    </div>
  );
}
