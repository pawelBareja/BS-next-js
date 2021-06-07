import { Layout } from '../layout/Layout'
import { Hero } from '../components/hero/Hero'
import { Button } from '../components/button/Button'
// import { SectionTitle } from '../components/sectionTitle/SectionTitle'
import { OfferGrid } from '../components/offerGrid/OfferGrid'
import { ProjectGrid } from '../components/projectGrid/ProjectGrid'
import Carousel from '../components/Carousel/Carousel'



function HomePage() {

  return ( 
    <>
      <Layout>
        <Hero />
        {/* <SectionTitle title={'What can I do for you?'} subtitle={'Main offer'}/> */}
        <OfferGrid/>
        <ProjectGrid/>
        {/* <Carousel/> */}

        <p>dalej</p>
        <Button />
      </Layout>
      <style jsx>{`
        // div {
        //   background: red;
        // }
      `}</style>
    </>
  )}

export default HomePage