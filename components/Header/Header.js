import { Seo } from '../seo/Seo'
import Navbar from '../navbar/Navbar'
import Cookies from '../cookies/Cookies'
import Toogler from './Toogler'

const Header = () => {
  return (
    <>
      <Seo />
      <Navbar />
      <Cookies/>
      <Toogler/>
    </>
  )
}

export default Header
