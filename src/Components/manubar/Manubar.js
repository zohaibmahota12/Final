import React from "react";
import "./manubar.css";
import { Link } from "react-router-dom";

function Manubar() {
  return (
    <>
      <nav>
        <ul>
          <li class="logo">
            <div class="profile">
              <img
                src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
                alt="profile_picture"
              />
              <h3>Malik Zohaib </h3>
              <p>Programmer</p>
            </div>
          </li>

          <li>
            <Link to="/login">
              <i class="fa fa-home"></i>&nbsp; Registration form
            </Link>
          </li>
          <li>
            <Link to="/studentform">
              <i class="fa fa-book"></i>&nbsp; Student Form
            </Link>
          </li>
          <li>
            <Link to="/attachimage">
              <i class="fa fa-users"></i>&nbsp; Post Your Gig
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class="fa fa-picture-o"></i>&nbsp; Pictures
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class="fa fa-phone"></i>&nbsp; Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div class="wrapper">
        <div class="section">
          
        </div>
      </div>
    </>
  );
}

export default Manubar;
