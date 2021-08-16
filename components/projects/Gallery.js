import styles from './Gallery.module.css';

const Gallery = ({ thumbnail, image2, image3, image4 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__item}>
        <img src={`/${thumbnail}`} width="100%" height="auto" />{' '}
      </div>
      <div className={styles.container__item}>
        {image2 && <img src={`/${image2}`} width="100%" height="auto" />}
      </div>
      <div className={styles.container__item}>
        {image3 && <img src={`/${image3}`} width="100%" height="auto" />}
      </div>
      <div className={styles.container__item}>
        {image4 && <img src={`/${image4}`} width="100%" height="auto" />}
      </div>
    </div>
  );
};

export default Gallery;
