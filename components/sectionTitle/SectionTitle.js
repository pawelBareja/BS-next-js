
import styles from './SectionTitle.module.css'

export const SectionTitle = ({ title, subtitle }) => {

  return (
    <div className={styles.container}>
      <h3 className={styles.container__title}>{title}</h3>
      <p className={styles.container__subtitle}>{subtitle}</p>
    </div>
  )
}
