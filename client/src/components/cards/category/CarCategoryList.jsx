import styles from "./CarCategoryList.module.css";
import CarCategoryCard from "../category/CarCategoryCard";
import HogeInstap from "../../../assets/png/hoge-instap.png";
import Hybride from "../../../assets/png/hybride.png";
import Elektrisch from "../../../assets/png/elektrisch.png";
import Stadsautos from "../../../assets/png/stadsautos.png";
import Gezinsautos from "../../../assets/png/gezinsautos.png";

export default function CarCategoryList() {
  const CarCategory = [
    {
      id: 1,
      category: "Hoge instap",
      image: HogeInstap,
    },
    {
      id: 2,
      category: "Hybride",
      image: Hybride,
    },
    {
      id: 3,
      category: "Elektrisch",
      image: Elektrisch,
    },
    {
      id: 4,
      category: "Stadsauto's",
      image: Stadsautos,
    },
    {
      id: 5,
      category: "Gezinsauto's",
      image: Gezinsautos,
    },
  ];

  return (
    <section className={styles.category__content}>
      <h2>Wat voor type auto zoek je?</h2>
      <div className={styles.category__list}>
        {CarCategory.map((category) => (
          <CarCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
