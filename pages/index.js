import { Layout } from '../layout/Layout'
import { Hero } from '../components/hero/Hero'
import { Button } from '../components/button/Button'
// import { SectionTitle } from '../components/sectionTitle/SectionTitle'
import { OfferGrid } from '../components/offerGrid/OfferGrid'


function HomePage() {
  return ( 
    <>
      <Layout>
        <Hero />
        {/* <SectionTitle title={'What can I do for you?'} subtitle={'Main offer'}/> */}
        <OfferGrid/>
        <h1>bareja studio</h1>
        <h1>bareja studio</h1>
        <h1>bareja studio</h1>
        <h2>jakaś treść</h2>
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