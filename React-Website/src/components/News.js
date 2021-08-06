//VIKAS add newsimg at the top underneath title

import React from "react";
import './News.css';

function News() {
  return (
    <div className="news">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">News</h1>
          </div>
          <div class="col-lg-5">
            <img
              class="coolimg"
              src="newsimage.png"
              alt=""
            />
          </div>
          <div>
                      <h3>
                          General Announcements
                      </h3>
                      <ul>
                          <li>FISH Camp on August 7th, 2021</li>
                          <li>Dues - Undecided</li>
                          <li>How to Join:
                              <ul></ul>
                          </li>
                      </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;