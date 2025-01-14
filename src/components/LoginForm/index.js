import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    usernameInput: '',
    userPasswordInput: '',
  }

  getusernme = event => {
    this.setState({usernameInput: event.target.value})
  }

  getpassword = event => {
    this.setState({userPasswordInput: event.target.value})
  }

  getsubmit = async event => {
    event.preventDefault()
    const {userPasswordInput, usernameInput} = this.state
    const userDetails = {usernameInput, userPasswordInput}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const getdata = await response.json()

    console.log(response)
  }

  render() {
    const {usernameInput, userPasswordInput} = this.state

    return (
      <div className="login-outer-container">
        <div className="inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="login-img"
          />
          <form className="form-container" onSubmit={this.getsubmit}>
            <div className="align">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                className="logo-size"
              />
              <div className="user-input-container">
                <label className="color-label" htmlFor="username">
                  USERNAME
                </label>
                <input
                  type="text"
                  className="user-input"
                  id="username"
                  placeholder=" Username"
                  onChange={this.getusernme}
                  value={usernameInput}
                />
              </div>

              <div className="user-input-container">
                <label className="color-label" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  type="password"
                  className="user-input"
                  id="password"
                  placeholder=" Password"
                  onChange={this.getpassword}
                  value={userPasswordInput}
                />
              </div>
              <button type="Submit" className="btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
