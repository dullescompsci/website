//VIKAS add newsimg at the top underneath title

import React from "react";
import Iframe from "react-iframe"
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
              src="https://github.com/dullescompsci/website/blob/4cea4bc66e8d2d11fca27e3f64ecd0e7174ee267/public/newsimage.png?raw=true"
              alt=""
            />
          </div>
                  <div>
                      <h3>
                            General Announcements
                      </h3>
                        <ul>
                          <li>Dues - Undecided</li>
                          <li>How to Join:
                                  <li>Remind: Text @dhscs22 to 81010 or enter code dhscs22 in the Remind App</li>
                                  <li>Check our website here, at... Oh wait you're already here.</li>
                            </li>
                            </ul>
                      <h3>
                          Upcoming Contests
                      </h3>
                      <ul>
                          <li>None at the moment, stay tuned for more!</li>
                        </ul>
                        <h3>Calender</h3>
                        <iframe src="https://calendar.zoho.com/zc/ui/embed/#calendar=f5068150cae25eb1ba30b4612c0994f895da9af9473186480807dd7558f579e095a63f1e392ce41f65b4f0d354fa3aea&title=dullescomputerscience&type=6&language=en&timezone=America%2FChicago&showTitle=1&showTimezone=1&color=1"></iframe>
                        <h3>
                            Remind Feed
                      </h3>
                        <div class="container">
                            <iframe src="https://widgets.remind.com/widget?token=c7f17b30be7f0139bcd60242ac110039&height=500&join=true"></iframe>
                        </div>
                    </div>
        </div>
      </div>
    </div>
  );

}

export default News;