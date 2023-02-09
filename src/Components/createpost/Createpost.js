import React, { useState } from "react";
import "./createpost.css";

function Createpost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(" ");
  const [cetdescription, setCetDescription] = useState(" ");
  const [image, setImage] = useState(" ");
  const [drama, setDrama] = useState(" ");
  //   const [movies, setMovies] = useState(" ");
  //   const [email, setEmail] = useState(" ");

  function handleDate(e) {
    e.preventDefault();

    let fillform = {
      Title: title,
      Description: description,
      CetDescription: cetdescription,
      image: image,
      Field: drama,
      //   Movies: movies,
      //   Email: email,
    };
    console.log(fillform);
  }

  return (
    <>
      <div className="container-fluid my-form">
        <div className="form-title">
          <h1 className="text-center mt-4"> Post Your Gig</h1>
          <div className="row">
            <form onSubmit={handleDate}>
              <div className="col-6 p-2 ps-4">
                <div className="form-inner-title">
                  <h6>*Title</h6>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter *title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-6 p-2 ps-4">
                <div className="form-inner-title">
                  <h6>*Description</h6>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 p-2 ps-4">
                <div className="form-inner-title">
                  <h6>*Attach Image & CV </h6>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Last Name"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12 col-md-12 p-2 ps-4 mt-4">
                <div className="form-inner-title">
                  <div className="section-title">
                    <h4 className="text-center">Select Your Categories</h4>
                    <div className="section-inner-title col-2">
                      <h6>*Choose Categorie </h6>
                      <select
                        class="form-select mb-4"
                        id="inputGroupSelect02"
                        onChange={(e) => setDrama(e.target.value)}
                      >
                        <option selected>choose....</option>
                        <option>Html</option>
                        <option>CSS</option>
                        <option>BootStrap</option>
                        <option>Javscript</option>
                      </select>
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        onChange={(e) => setCetDescription(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary  mt-4">
                  {" "}
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Createpost;
