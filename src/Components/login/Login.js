import React, { useState } from "react";
import "./login.css";
import axios from "axios";

function Login() {
  // useState hooks to manage form Data

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [age, setAge] = useState(" ");
  const [date, setDate] = useState(" ");
  const [mahota, setMahota] = useState(false);
  const [malik, setMalik] = useState();

  // form handle event

  function handleDate(e) {
    e.preventDefault();

    //  API post method

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: firstName,
        username: lastName,
        email: password,
        phone: age,
        zipcode: date,
        suite: malik,
        city: mahota,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <main className="mt-4 container">
        <div className="row">
          <div className="colm-logo">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="Logo"
            />
            <h2>
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <form className="colm-form mt-4 pt-4" onSubmit={handleDate}>
            <div className="form-container">
              <input
                type="text"
                placeholder="Enter First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Enter Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Enter Your Age"
                onChange={(e) => setAge(e.target.value)}
                required
              />
              <input type="date" onChange={(e) => setDate(e.target.value)} />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="text-center">
                <p>Select Your Gender</p>
                <select onChange={(e) => setMalik(e.target.value)}>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <input
                type="checkbox"
                onChange={(e) => setMahota(e.target.checked)}
              />
              <span className="my-check-box">
                Agree with terms and conditions
              </span>
              <button type="submit" className="btn-login">
                Login
              </button>
              <a href="#">Forgotten password?</a>
              <button className="btn-new">Create new Account</button>
            </div>
            <p>
              <a href="#">
                <b>Create a Page</b>
              </a>{" "}
              for a celebrity, brand or business.
            </p>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
