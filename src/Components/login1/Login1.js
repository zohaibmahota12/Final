import React, { useState } from "react";
import "./login1.css";
function Login1() {
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [age, setAge] = useState(" ");
  const [date, setDate] = useState(" ");
  // const [malik, setMalik] = useState(" ");
  // const [mahota, setMahota] = useState(false);

  function handleDate(e) {
    e.preventDefault();

    let user = {
      Firstname: firstName,
      LastName: lastName,
      password: password,
      age: age,
      dateOfBirth: date,
      // Gender: malik,
      // checkbox: mahota,
    };

    console.log(user);
  }

  return (
    <>
      {/* ############  this form is fully responsive  ##### in this page we get name last age dob pass  ################# */}

      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form onSubmit={handleDate}>
        <h3>Sign Up</h3>

        <label for="username">Enter First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          id="firstname"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label for="LastName">Enter Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          id="lastname"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label for="userage">Enter Your Age </label>
        <input
          type="number"
          placeholder="Enter Your Age"
          id="age"
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <label for="userdob">Enter Your Date Of Birth </label>
        <input
          type="date"
          placeholder="Enter Your Date  Of Birth "
          id="date"
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log In</button>
        <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </>
  );
}

export default Login1;
