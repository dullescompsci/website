//VIKAS add officerimg at the top underneath title

import React from "react";
import './Officers.css';

function Officers() {
  return (
    <div className="officers">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Officers</h1>
            </div>

                  <div>
                    <img
                      class="coolimg"
                      src="https://github.com/dullescompsci/website/blob/4cea4bc66e8d2d11fca27e3f64ecd0e7174ee267/public/officerimage.png?raw=true"
                      alt=""
                    />
                  </div>

                  <div class="row">
                      <img src="https://github.com/dullescompsci/website/blob/4cea4bc66e8d2d11fca27e3f64ecd0e7174ee267/public/president_1.png?raw=true" class="officerImgLeft"/>
                      <p class="officerTextRight">
                          Yo, my name is Vikas Thoutam, affectionately known as "Vikachu".
                          I am actually a chad C++ enjoyer, and not an average Java fan.
                          Just in case you were wondering, my favorite waifu is Rin Tohsaka from the Fate series. You're welcome.<br />
                          - Vikas Thoutam, Co-president
                </p>
                  </div>
                  <div class="row">
                      <img src="https://github.com/dullescompsci/website/blob/4cea4bc66e8d2d11fca27e3f64ecd0e7174ee267/public/president_2.png?raw=true" class="officerImgRight" />
                      <p class="officerTextLeft">
                          Guys, I think Farmer John set a trap for m... YO! A PIECE OF HAY! <br />
                          - Sahil Chowdhury, Co-president
                </p>
                  </div>
                  <div class="row">
                      <img src="https://github.com/dullescompsci/website/blob/4cea4bc66e8d2d11fca27e3f64ecd0e7174ee267/public/vice_President_1.png?raw=true" class="officerImgLeft" />
                      <p class="officerTextRight">
                          My name is Amogha Pokkulandra, affectionately known as "Big Amoghers". I like coding and mobile games because I am broke and have no PC. Do refrain from making any amogus references in my vicinity. POGCHAMP!!! <br />
                          - Amogha Pokkuandra, Vice President
                </p>
                  </div>
                  <div class="row">
                      <img src="https://github.com/dullescompsci/website/blob/4cea4bc66e8d2d11fca27e3f64ecd0e7174ee267/public/vice_president_2.png?raw=true" class="officerImgRight" />
                      <p class="officerTextLeft">
                          My last name is misspelled. <br />
                          - Dylan You, Vice President
                </p>
                  </div><div class="row">
                      <img src="https://github.com/dullescompsci/website/blob/4cea4bc66e8d2d11fca27e3f64ecd0e7174ee267/public/secretary.png?raw=true" class="officerImgLeft" />
                      <p class="officerTextRight">
                          Quote didn't make it in time :( <br />
                          - Suhani Goswami, Secretary
                </p>
                  </div>
                  <div class="row">
                      <img src="https://github.com/dullescompsci/website/blob/4cea4bc66e8d2d11fca27e3f64ecd0e7174ee267/public/historian.png?raw=true" class="officerImgRight" />
                      <p class="officerTextLeft">
                          Quote didn't make it in time :( <br />
                          - Rishindra Davuluri, Historian
                </p>
                  </div>
                  <div class="row">
                      <img src="https://github.com/dullescompsci/website/blob/4cea4bc66e8d2d11fca27e3f64ecd0e7174ee267/public/novice_Coach_1.png?raw=true" class="officerImgLeftX" />
                      <img src="https://github.com/dullescompsci/website/blob/4cea4bc66e8d2d11fca27e3f64ecd0e7174ee267/public/novice_Coach_2.png?raw=true" class="officerImgCenterX" />
                      <img src="https://github.com/dullescompsci/website/blob/4cea4bc66e8d2d11fca27e3f64ecd0e7174ee267/public/advanced_Coach_1.png?raw=true" class="officerImgRightX" />

                  </div>
                  <div class="row">
                      <p class="officerTextLeftX">
                          Quote didn't make it in time :( <br />
                          - Videet Mehta, Novice Coach
                </p><p class="officerTextRightX">
                          A Big Mango Potato.<br />No seriously, he asked for this.<br />
                          - Rushil Shah, Advanced Coach
                </p>
                      <p class="officerTextCenterX">
                          Quote didn't make it in time :( <br />
                          - Athulya Saravanakumar, Novice Coach
                </p>


                  </div>
        </div>
      </div>
    </div>
  );
}

export default Officers;