

import styles from './ProjectGrid.module.css';
import { projectItems } from './projectItems'


export const ProjectGrid = () => {
  return (
    <div id={'projects'} className={styles.container}>
      <div className={styles.container__item}>
        <p className={styles.container__subtitle}>Take a look at..</p>
        <h3>Projects completed</h3>
  
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


