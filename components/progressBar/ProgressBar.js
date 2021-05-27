import { useState, useEffect }  from 'react'

const ProgressBar = () =>  {

  const [width, setWidth] = useState(0)

  const scrolled = () => {
    const windowWidth = window.innerWidth
    
    const windowTotalHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
          
    const scrolled = window.scrollY
    
    const progress = scrolled / windowTotalHeight
    
    setWidth(progress * windowWidth)

  }

  useEffect(()=> {
    window.addEventListener('scroll', ()=> scrolled())
    return window.removeEventListener('scroll', ()=>scrolled())
  } , [])
    
  

  const style = {
    zIndex: '100',
    position: 'fixed',
    left: '0',
    bottom: '0',
    height: '5px',
    backgroundColor: '#4e96f8',
    backgroundImage:
         'linear-gradient(120deg, #ffa4c1 0%, #ffa4c1 100%)',
    width
  }

  return (
    <>
      <div style={style}></div>
    </>
  )

}

export default ProgressBar