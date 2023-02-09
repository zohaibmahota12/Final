import React from "react";
import "./card.css";

function Card({ title }) {
  return (
    <div className="card col-lg-3 col-md-4 col-6 mb-3 px-2">
      <a href="">
        <div className="mycard brd-white-cust">
          <div className="card-body pb-2 px-0">
            <img
              src="https://codes.thelastresort.com.pk/storage/images/categories/logo/sm/1669184927_36099.png"
              alt=""
            />
            <h6 className="text-center mt-3 text-dark">{title.slice(0, 10)}</h6>
          </div>
          <div className="card-footer bg-light p-0">
            <div className="cunter d-flex text-center">
              <div className="art-cunter p-2">
                <h6 className="mb-0">1</h6>
                <p className="mb-0">Aritical</p>
              </div>
              <div className="view-cunter p-2">
                <h6 className="mb-0">0</h6>
                <p className="mb-0">view</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
