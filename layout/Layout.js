import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import BackToTopButton from '../components/backToTopButton/BackToTopButton'
import ProgressBar from '../components/progressBar/ProgressBar'

export const Layout = ( { children } ) => {

  return (
    <div className={'main'}>
      <Header />
      {children}
      <Footer />
      <BackToTopButton />
      <ProgressBar />
      <style jsx>
        {`
                .main{
                    width: calc(100vw - 120px);
                    max-width:1600px;
                    margin: 0 auto;
                }
                @media (max-width:768px){
                    .main{
                    width: calc(100vw - 30px);
                    margin: 0 auto;
                    }
                }
                `}
      </style>
    </div>
  )
}
