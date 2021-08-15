import Link from 'next/link';
import styles from './ProjectGrid.module.css';
import { projectItems } from './projectItems';

export const ProjectGrid = () => {
  return (
    <div id={'projects'} className={styles.container}>
      <div className={styles.container__item}>
        <p className={styles.container__subtitle}>Take a look at..</p>
        <h3>Projects completed</h3>
      </div>
      {projectItems.map((item) => {
        return (
          <Link href={item.link}>
            <div className={styles.container__item} key={item.name}>
              <div className={styles.overlay}>
                <div className={styles.container__text}>
                  <h4 className={styles.container__title}>{item.name}</h4>
                  <h3 className={styles.container__subtitle}>{item.type}</h3>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
