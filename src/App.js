import "./App.css";
import React, { useState } from "react";
// import Manubar from "./Components/manubar/Manubar";
import Login from "./Components/login/Login";
// import logo1 from "./images/zohaiblogo2.png";
import Studentform from "./Components/studentform/Studentform";
// import Attachimage from "./Components/attachimage/Attachimage";
import Home from "./Pages/home/Home";

import Navbar from "./Components/navbar/Navbar";
import Createpost from "./Components/createpost/Createpost";
// import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import UsersList from "./Pages/UsersList";
// import LoginPage from "./Pages/LoginPage";
import Footer from "./Components/Footer";
// import HomePage from "./Components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Components/card/Card";
// import HomePage from "./Pages/home/homepage/HomePage";

function App() {
  // const [myData, setMyData] = useState("");
  // const getmyData = () => {
  //   axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
  //     console.log(res.title.completed.id.userId);
  //   });
  // };

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <BrowserRouter>
          <Navbar />
          {/* <HomePage /> */}
          <Routes>
            {/* <Route path="/" element={<LoginPage />} />
            <Route path="/profile" element={<HomePage />} />
            <Route path="/users" element={<UsersList />} /> */}
            <Route path="/home" element={<Home />} />

            <Route path="/createpost" element={<Createpost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/studentform" element={<Studentform />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </BrowserRouter>


      </>
    )
  );
}

export default App;
