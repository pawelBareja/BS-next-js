
import Link from 'next/link'
import styles from './ProjectGrid.module.css';
import { projectItems } from './projectItems'


export const ProjectGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__item}>
        <h3>Projects completed</h3>
        <p className={styles.container__subtitle}>Take a look</p>
      </div>
      {projectItems.map(item=>{
        return (
          <div className={styles.container__item} key={item.name}>
            <div className={styles.container__text}>
              <h4>{item.name}</h4>
              <h3>{item.type}</h3>
            </div>
          </div>
        )
      })}

    </div>
  );
};


