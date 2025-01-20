import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    usernameInput: '',
    userPasswordInput: '',
    errorMsg: '',
    erorState: false,
  }

  getusernme = event => {
    this.setState({usernameInput: event.target.value})
  }

  getpassword = event => {
    this.setState({userPasswordInput: event.target.value})
  }

  success = () => {
    const {history} = this.props
    history.replace('/')
  }

  errorMessage = error => {
    this.setState({errorMsg: error, erorState: true})
  }

  getsubmit = async event => {
    event.preventDefault()
    const {userPasswordInput, usernameInput} = this.state
    const userDetails = {username: usernameInput, password: userPasswordInput}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const getdata = await response.json()
    if (response.ok === true) {
      this.success()
    } else {
      this.errorMessage(getdata.error_msg)
    }
  }

  render() {
    const {usernameInput, userPasswordInput, erorState, errorMsg} = this.state

    return (
      <div className="login-outer-container">
        <div className="inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
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
                  placeholder="Username"
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
                  placeholder="Password"
                  onChange={this.getpassword}
                  value={userPasswordInput}
                />
              </div>
              <button type="submit" className="btn">
                Login
              </button>
              {erorState && <p className="error-msg">*{errorMsg}</p>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
