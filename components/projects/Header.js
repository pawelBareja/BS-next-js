import styles from './Header.module.css';

export const Header = ({ client, category, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__first}>
        <p>Project </p>
        <h3>Nazzwa projektu</h3>
        <div className={styles.container__second}>
          <p>Client</p>
          <h3>{client}</h3>
        </div>
        <div className={styles.container__third}>
          <p>Category</p>
          <h3>{category}</h3>
        </div>
        <div className={styles.container__fourth}>
          <p>{description}</p>
        </div>
      </div>
      ); )
    </div>
  );
};
