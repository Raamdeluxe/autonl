import styles from "./CarCategoryCard.module.css";

export default function CarCategoryCard({ category }) {
  return (
    <div className={styles.category__card}>
      <img src={category.image} alt={category.category} />
    </div>
  );
}
