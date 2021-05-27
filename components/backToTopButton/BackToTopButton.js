import { useEffect, useState } from 'react'
import styles from './BackToTop.module.css'


const BackToTopButton = () => {

  const [visible, setVisible] = useState(false)
  useEffect(()=> toggleVisibility(), [])

  const toggleVisibility = ()=> {

    const setVisibility = () =>  window.pageYOffset > 500 ? setVisible(true) : setVisible(false)
    window.addEventListener('scroll', () => setVisibility())

    return window.removeEventListener('scroll', () => setVisibility());
  }

  const handleClick = ()=> {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }


  return (
    <div>
      {visible &&
      <div className={styles.container} onClick={handleClick}>
        <h6 className={styles.container__text}>back to top</h6>  
      </div>
      }
    </div>
  )
}

export default BackToTopButton 

