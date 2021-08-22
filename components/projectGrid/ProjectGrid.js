import Link from 'next/link';
import styles from './ProjectGrid.module.css';
import { projectItems } from './projectItems';

export const ProjectGrid = () => {
  return (
    <div id={'projects'} className={styles.container}>
      <div className={styles.container__item}>
        <p className={styles.container__subtitle}>Take a look at..</p>
        <h3>Completed projects</h3>
      </div>
      {projectItems.map((item) => {
        return (
          <Link href={`projects/${item.link}`}>
            <div className={styles.container__item} key={item.name}>
              <div className={styles.overlay}>
                <div className={styles.container__text}>
                  <p className={styles.container__subtitle}>{item.type}</p>
                  <h3 className={styles.container__title}>{item.name}</h3>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
