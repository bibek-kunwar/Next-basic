import React from 'react'
import '../login.css'

const Login = () => {
  return (
    <>
      <div className="cointainer1">
        <form action="" className="form1">
          <h2>Login Form </h2>
          <input type="text" name="email" placeholder="enter your username" className="box" />
          <input type="text" name="password" placeholder="enter your password" className="box" />
          <input type="submit" value="SIGN IN" id="submit"/>
          <a href="#">Forget Password</a>
          </form>

        <div className="side">
          <img src="/blog-banner.jpg" alt=""/>
        </div>
      </div>
    </>
  )
}

export default Login