import Carousel from "../carousel"
import Header from "../common/Header"
import AllProductsSection from '../products'
import './index.css'

const Home = () => {
  return <div className="home">
    <Header />
    <Carousel />
    <AllProductsSection />
  </div>
}

export default Home