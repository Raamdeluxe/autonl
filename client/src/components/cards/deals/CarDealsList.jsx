import styles from "../deals/CarDealsList.module.css";
import CarDealsCard from "../deals/CarDealsCard";
import deals from "../../../assets/data/deals.json";

export default function CarDealsList() {
  return (
    <section className={styles.car__deals__content}>
      <h2>Deals waar je blij van wordt</h2>
      <div className={styles.car__deals__list}>
        {deals.map((deal) => (
          <CarDealsCard key={deal.id} deal={deal} />
        ))}
      </div>
    </section>
  );
}
