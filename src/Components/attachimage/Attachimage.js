import React, { useState } from "react";
import "./attachimage.css";
function Attachimage({ mylogo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(" ");
  const [image, setImage] = useState(" ");
  const [drama, setDrama] = useState(" ");
  const [movies, setMovies] = useState(" ");
  const [email, setEmail] = useState(" ");
 

  function handleDate(e) {
    e.preventDefault();

    let fillform = {
      Title: title,
      Description: description,

      image: image,
      Drama: drama,
      Movies: movies,
      Email: email,
    };
    console.log(fillform);
  }
  return (
    <div>
      <div className="img-fluid text-center">
        <img src={mylogo} alt="" />
      </div>
      <div className="brand-name text-center">
        <span className="text-center"> Malik Institute</span>
      </div>
      <hr />

      {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$  form section start here     $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
      <section className="my-form">
        <form onSubmit={handleDate}>
          <div className="container">
            <div className="form-title">
              <h1 className="text-center mb-4 mt-4"> Fill The Form</h1>
            </div>
            <div className="row">
              <div className="col-10">
                <div className="input-name">
                  <h5> Title</h5>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter *title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-10 mt-4">
                <div className="input-name">
                  <h5> *Description</h5>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-4 mt-4">
                <div className="input-name">
                  <h5> Attach Image </h5>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Last Name"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-3 mt-4">
                <div className="input-name">
                  <h5> Select Drama</h5>
                  <select
                    class="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) => setDrama(e.target.value)}
                  >
                    <option selected>choose....</option>
                    <option>tum may</option>
                    <option>Rishty</option>
                    <option>Piyar</option>
                    <option>Khuwaish</option>
                  </select>
                </div>
              </div>
              <div className="col-3 mt-4">
                <div className="input-name">
                  <h5> Select Movies</h5>
                  <select
                    class="form-select"
                    id="inputGroupSelect02"
                    onChange={(e) => setMovies(e.target.value)}
                  >
                    <option selected>choose....</option>
                    <option>Avangers </option>
                    <option>BatMan</option>
                    <option>Sultan</option>
                    <option>Punjab Nahi Jaogi</option>
                  </select>
                </div>
              </div>

              <div className="col-6 mt-4">
                <div className="input-name">
                  <h5>Enter Your Email</h5>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Attachimage;
