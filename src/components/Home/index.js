import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="final-container">
    <Header />
    <div className="body-home-container">
      <div className="body-text-container">
        <h1 className="heading">Clothes That Get YOU Noticed </h1>
        <p className="para">
          Fashion is part of the daily air and it does not quite helps novelty.
          How do you write a fashion description? Five top tips for writing
          high-quality clothing store descriptions Really know your target
          audience. Bring your products into the real world. Use sensory
          language. Incorporate social proof and reviews. Optimise your clothing
          brand descriptions for SEO.
        </p>
        <button type="button" className="shopbtn">
          Shop Now
        </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="image-container"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </div>
)

export default Home
