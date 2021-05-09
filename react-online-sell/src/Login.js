import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [passowrd, setPassowrd] = useState("");
  const history = useHistory();

  const onSign = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, passowrd)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const onRegister = (e) => {
    e.preventDefault();
    console.log("Register Called");
    auth
      .createUserWithEmailAndPassword(email, passowrd)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/SellerForums/amz/amazon-seller-forums-logo-small-1._CB488193639_.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form onSubmit={onSign}>
          <h5>email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>password</h5>
          <input
            type="password"
            value={passowrd}
            onChange={(e) => setPassowrd(e.target.value)}
          />
          <button type="submit" className="login__signinbtn">
            Sign In
          </button>
          <button onClick={onRegister} className="login__registerbtn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
