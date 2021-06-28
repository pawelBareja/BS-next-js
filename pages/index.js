import { Layout } from '../layout/Layout';
import { Hero } from '../components/hero/Hero';
// import { SectionTitle } from '../components/sectionTitle/SectionTitle'
import { OfferGrid } from '../components/offerGrid/OfferGrid';
import { ProjectGrid } from '../components/projectGrid/ProjectGrid';
import Carousel from '../components/Carousel/Carousel';
import { About } from  '../components/about/About'
import { Form } from  '../components/contactForm/Form'

function HomePage() {
  return (
    <>
      <Layout>
        <Hero />
        {/* <SectionTitle title={'What can I do for you?'} subtitle={'Main offer'}/> */}
        <OfferGrid />
        <ProjectGrid />
        <Carousel
          tools={[
            '/images/companies/cogen.png',
            '/images/companies/iloftu.png',
            '/images/companies/metrostal.png',
            '/images/companies/niepozytywnarodzina.jpg',
            '/images/companies/mewa.jpg',
            '/images/companies/worker.jpg',
            '/images/companies/gmood.png',
            '/images/companies/viva.png',
            '/images/companies/aluflam.png',
            '/images/companies/marine.png',
          ]}
        />
        <About/>
        <h3>Let's talk</h3>
        <Form/>
      </Layout>
      <style jsx>{`
        // div {
        //   background: red;
        // }
      `}</style>
    </>
  );
}

export default HomePage;
