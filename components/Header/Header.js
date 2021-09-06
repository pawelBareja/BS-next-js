import { Seo } from '../seo/Seo'
import Navbar from '../navbar/Navbar'
import Cookies from '../cookies/Cookies'

const Header = () => {
  return (
    <>
      <Seo />
      <Navbar />
      <Cookies/>
    </>
  )
}

export default Header
