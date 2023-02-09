import React from "react";
import "./sidenavbar.css";

function Sidenavbar() {
  return (
    <>
      <div class="header">
        <div class="side-nav">
        <div class="profile">
                <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture"/>
                <h3>Malik Zohaib </h3>
                <p>Programmer</p>
            </div>
          <ul class="nav-links">
            <li>
              <a href="#">
                <i class="fa-solid fa-house-user"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-comment-dots"></i>
                <p>Message</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-user"></i>
                <p>users</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-box-open"></i>
                <p>Rewards</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-chart-pie"></i>
                <p>Report</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-screwdriver-wrench"></i>
                <p>Setting</p>
              </a>
            </li>
            <div class="active"></div>
          </ul>
        </div>
         
          </div>
    </>
  );
}

export default Sidenavbar;
