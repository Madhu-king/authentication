// Write your JS code here
import './index.css'

const Header = () => (
  <div className="navbar-container">
    <div className="align">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="logo-size"
        alt="website logo"
      />
      <div className="navbar-buttons-container">
        <ul className="unorder-container">
          <li className="btn-style">Home</li>
          <li className="btn-style">Products</li>
          <li className="btn-style">Cart</li>
        </ul>
        <button type="button" className="logout-style">
          Logout
        </button>
      </div>
    </div>

    <div>
      <div className="smalldevices-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="logo-size"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          className="logout-size-style"
          alt="nav logoout"
        />
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
  </div>
)

export default Header
