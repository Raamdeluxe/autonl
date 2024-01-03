import React from "react";
import styles from "./HeroSection.module.css";
import cursor from "../../assets/svg/cursor.svg";
import mobile from "../../assets/svg/mobile.svg";
import steer from "../../assets/svg/steer.svg";
import check from "../../assets/svg/check.svg";

export default function HeroSection() {
  return (
    <section className={styles.hero__section}>
      <div className={styles.hero__content}>
        <div className={styles.hero__content__text}>
          <h2>De webshop voor auto's</h2>
          <div className={styles.hero__content__text__sub}>
            <div className={styles.hero__content__text__sub__item}>
              <img src={cursor} style={{ color: "#231F20" }} />
              <p>Gemakkelijk online bestellen</p>
            </div>
            <div className={styles.hero__content__text__sub__item}>
              <img src={mobile} style={{ color: "#231F20" }} />
              <p>Plan een videogesprek</p>
            </div>
            <div className={styles.hero__content__text__sub__item}>
              <img src={steer} style={{ color: "#231F20" }} />
              <p>Kom langs voor een proefrit</p>
            </div>
          </div>
        </div>
        <div className={styles.hero__content__image}></div>
      </div>
      <div className={styles.hero__usp__container}>
        <div className={styles.hero__usp__content}>
          <div className={styles.hero__usp__item}>
            <img src={check} />
            <p>14 dagen bedenktermijn</p>
          </div>
          <div className={styles.hero__usp__item}>
            <img src={check} />
            <p>Onderdeel van Louwman</p>
          </div>
          <div className={styles.hero__usp__item}>
            <img src={check} />
            <p>1 jaar garantie</p>
          </div>
          <div className={styles.hero__usp__item}>
            <img src={check} />
            <p>Thuisbezorgen mogelijk</p>
          </div>
        </div>
      </div>
    </section>
  );
}
