import styles from './ScrollDown.module.css'

const handleClick = () => {
  window.scrollTo({
    top: 500,
    behavior: 'smooth',
  })
}

export const ScrollDown = ()=> {
  return(
    <div className={styles.container} onClick={handleClick}>
      <h6 className={styles.container__text}>read more</h6>  
    </div>
  )
}