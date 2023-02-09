import React, { useState } from "react";
import "./studentform.css";
import axios from "axios";

function Studentform({}) {
  //  %%%%%%%%%%%%%%%% axios post method   %%%%%%%%%%%%%%%%

  // const option = {
  //   url: "https://jsonplaceholder.typicode.com/users",
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     contentType: "application/jason;charset=UTF-8",
  //   },
  //   data: {
  //     name: firstName,
  //     Middlename: middleName,
  //     username: lastName,
  //     email,
  //     phone: Phone,
  //     lat: passingYear,
  //     street: homeAddress,
  //     catchPhrase: otherPhone,

  //     lng: select,
  //     city: massage,
  //   },
  // };

  const [studentData, setStudentData] = useState({
    firstName: "",
    middleName: "",
    // lastName: "",
    email: "",
    phone: "",
    passingYear: "",
    homeAddress: "",
    otherPhone: "",

    // select: "",
    massage: "",
  });

  const handleChagge = (e) => {
    setStudentData({
      ...studentData,
      [e.target.className]: e.target.value,
    });
  };

  function handleDate(e) {
    e.preventDefault();
    console.log("data....?", studentData);
    return;
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: studentData.firstName,
        Middlename: studentData.middleName,
        username: studentData.lastName,
        email: studentData.email,
        phone: studentData.phone,
        lat: studentData.passingYear,
        street: studentData.homeAddress,
        catchPhrase: studentData.otherPhone,
        lng: studentData.select,
        city: studentData.massage,
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
      {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$  form section start here     $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
      <section className="student-form  ">
        <form onSubmit={handleDate}>
          <div className="container">
            <div className="form-title">
              <h1 className="text-center "> </h1>
            </div>
            <div className="row">
              <div className="col-4 ">
                <div className="input-name">
                  <h5> Enter First Name</h5>
                  <input
                    type="text"
                    name='firstName'
                    className="form-control"
                    placeholder="First Name"
                    onChange={handleChagge}
                    required
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="input-name">
                  <h5> Middel Name</h5>
                  <input
                    type="text"
                    name='last'
                    className="form-control"
                    placeholder="Middle Name"
                    onChange={handleChagge}
                    required
                  />
                </div>
              </div>
              {/* <div className="col-4">
                <div className="input-name">
                  <h5> Enter Last Name</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    onChange={(e) =>
                      setStudentData({
                        ...studentData,
                        [e.target.lastName]: e.target.value,
                      })
                    }
                  />
                </div>
              </div> */}
              <div className="col-6 mt-4">
                <div className="input-name">
                  <h5> Student #Phone NO</h5>
                  <input
                    type="number"
                    name='fon'
                    className="form-control"
                    placeholder="Personal Number "
                    onChange={handleChagge}
                    required
                  />
                </div>
              </div>
              <div className="col-6 mt-4">
                <div className="input-name">
                  <h5>Select Passing Year</h5>
                  <input
                    type="date"
                    name='date'
                    className="form-control"
                    onChange={handleChagge}
                    required
                  />
                </div>
              </div>
              {/* <div className="col-6 mt-4">
                <div className="input-name">
                  <h5> Select Dgree</h5>
                  <select
                    class="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) =>
                      setStudentData({
                        ...studentData,
                        [e.target.select]: e.target.value,
                      })
                    }
                  >
                    <option selected>choose....</option>
                    <option>Bs Computer Science </option>
                    <option>BS English</option>
                    <option>BS Physics</option>
                    <option>Master in Computer Science</option>
                  </select>
                </div>
              </div> */}
              <div className="col-6 mt-4">
                <div className="input-name">
                  <h5>Enter Your Email</h5>
                  <input
                    type="email"
                    name='eame'
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={handleChagge}
                    required
                  />
                </div>
              </div>
              <div className="col-6 mt-4 mb-4">
                <div className="input-name">
                  <h5> Other #Phone NO</h5>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Other Phone Number "
                    onChange={handleChagge}
                    required
                  />
                </div>
              </div>
              <div className="col-6 mt-4 mb-4">
                <div className="input-name">
                  <h5>Enter Home Address</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Home Address "
                    onChange={handleChagge}
                    required
                  />
                </div>
              </div>
              <div className="col-8 mt-4 mb-4">
                <div className="input-name">
                  <h5>Send Me Massage</h5>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="send me a massage "
                    onChange={handleChagge}
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  {" "}
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Studentform;
