import styles from './Header.module.css';

export const Header = ({ client, category, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__item}>
        <p className={styles.container__title}>Project </p>
        <p className={styles.container__subtitle}>{client}</p>
      </div>
      <div className={styles.container__item}>
        <p className={styles.container__title}>Client</p>
        <p className={styles.container__subtitle}>{client}</p>
      </div>
      <div className={styles.container__item}>
        <p className={styles.container__title}>Category</p>
        <p className={styles.container__subtitle}>{category}</p>
      </div>
      <div className={styles.container__item}>
        <p className={styles.container__title}>Short description</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
