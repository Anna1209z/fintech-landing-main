"use client";

import Image from "next/image";

import styles from "./Benefits.module.css";

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.container}>
        <h2 className={styles.title}>YOUR BENEFITS WITH US</h2>
        <ul>
          <li>
            <span>Instant SEPA & SWIFT settlement</span>
          </li>
          <li>
            <span>Crypto payments at market speed</span>
          </li>
          <li>
            <span>Fast approval, global coverage</span>
          </li>
          <li>
            <span>Community impact investments</span>
          </li>
        </ul>
      </div>
      <Image
        className={styles.LeftIcon}
        src="/icons/kvitka-big-icon.svg"
        alt=" "
        width={113}
        height={85}
      />

      <Image
        className={styles.RightIcon}
        src="/icons/kvitka-small-icon.svg"
        alt=" "
        width={90}
        height={90}
      />
    </div>
  );
};

export default Benefits;
