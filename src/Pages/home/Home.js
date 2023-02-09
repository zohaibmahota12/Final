import React, { useState, useEffect } from "react";
import "./home.css";
import Card from "./../../Components/card/Card";
import axios from "axios";

function Home() {
  const [myData, setMydata] = useState([]);
  // const [title, setTitle] = useState([]);

  // const getApiData = async () => {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/todos"
  //   );
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);
  // const data = [{ title: "asad" }, { title: "Zohaib" }];

  useEffect(() => {
    // Make a get request with axios sample code
    getApis();
  }, []);

  const getApis = async () => {
   
    await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log(response?.data?.slice(0, 8));
        // return;
        let data = response?.data?.slice(0, 8);
        setMydata(data);

        // console.log(myData.length);
      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  // console.log(myData);
  //
  return (
    <>
      <div className="conatiner">
        <div className="row">
          <div className="main-title mt-3 p-2">
            <h1 className="text-center">Featured Categories</h1>
          </div>
          {myData.map((item) => (
            <Card title={item?.title} key={item.key} />
          ))}
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="main-title mt-3 p-2">
            <h1>Featured Categories</h1>
          </div>
          {myData.slice(0, 2).map((item, i) => (
            <Card data={item} key={i} />
          ))}
        </div>
      </div> */}
    </>
  );
}

export default Home;
