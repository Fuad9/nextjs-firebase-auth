import React, { useState } from "react";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import loginStyles from "../styles/Login.module.scss";

export default function Login() {
  firebaseClient();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [signupError, setSignupError] = useState("");
  const [loginError, setLoginError] = useState("");

  return (
    <section className="container">
      <div className="split">
        <div className={loginStyles.loginContainer}>
          <h3>Login/Signup</h3>
          <form>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="emailAddress"
                placeholder="email"
                value={email}
                aria-describedby="email-helper-text"
              />
            </div>

            <div>
              <input
                onChange={(e) => setPass(e.target.value)}
                type="password"
                id="pass"
                placeholder="password"
                value={pass}
                aria-describedby="password-helper-text"
              />
            </div>
          </form>

          <div>
            <button
              onClick={async () => {
                await firebase
                  .auth()
                  .createUserWithEmailAndPassword(email, pass)
                  .then(function (firebaseUser) {
                    alert("account created successfully");
                    window.location.href = "/dashboard";
                  })
                  .catch((error) => {
                    console.log(error);
                    error && setSignupError(error.message);
                  });
              }}
            >
              Create account
            </button>

            <button
              onClick={async () => {
                await firebase
                  .auth()
                  .signInWithEmailAndPassword(email, pass)
                  .then(function (firebaseUser) {
                    alert("loggedin successfully");
                    window.location.href = "/dashboard";
                  })
                  .catch(function (error) {
                    console.log(error.message);
                    error && setLoginError(error.message);
                  });
              }}
            >
              Log in
            </button>

            <h6>{signupError}</h6>
            <h6>{loginError}</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
