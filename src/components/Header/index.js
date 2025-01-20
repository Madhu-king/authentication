// Write your JS code here
import './index.css'

const Header = () => (
  <div className="navbar-container">
    <div className="smalldevices-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo-size"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        className="logout-size-style"
      />
    </div>
    <div className="navbar-buttons-container">
      <li className="btn-style">Home</li>
      <li type="button" className="btn-style">
        Product
      </li>
      <li type="button" className="btn-style">
        Cart
      </li>
      <button type="button" className="logout-style">
        Logout
      </button>
    </div>
    <div className="navbar-images-container-1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        className="image-size"
        alt="nav home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
        className="image-size"
        alt="nav products"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        className="image-size"
        alt="nav cart"
      />
    </div>
  </div>
)

export default Header
