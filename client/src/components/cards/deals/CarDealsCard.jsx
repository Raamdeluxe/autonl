import styles from "./CarDealsCard.module.css";

export default function CarDealsCard({ deal }) {
  return (
    <div className={styles.car__deal__card}>
      <img src={deal.image} alt={deal.title} />
      <h3>{deal.title}</h3>
      <p>{deal.subtitle}</p>
      <div className={styles.car__specs}>
        <span className={styles.car__km}>{deal.km} km</span>
        <span className={styles.car__year}>{deal.year}</span>
        <span className={styles.car__fuel}>{deal.fuel}</span>
        <span className={styles.car__label}>
          <img src={deal.label} />
        </span>
      </div>
      <div className={styles.car__price}>
        <span className={styles.car__price__before}>€ {deal.priceBefore}</span>
        <span className={styles.car__current__price}>
          Nu € {deal.currentPrice}
        </span>
      </div>
    </div>
  );
}
