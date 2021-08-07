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
                      src="officerimage.png"
                      alt=""
                    />
                  </div>

                  <div class="row">
                      <img src="president_1.png" class="officerImgLeft"/>
                      <p class="officerTextRight">
                          They called me a madman. And then they called me Viking the Totem Pole. <br />
                          At least I'm the mascot, I thought, but then they replaced me with a statue out front<br />
                          - Vikas Thoutam, Co-president
                </p>
                  </div>
                  <div class="row">
                      <img src="president_2.png" class="officerImgRight" />
                      <p class="officerTextLeft">
                          Guys, I think Farmer John set a trap for m... YO! A PIECE OF HAY! <br />
                          - Sahil Chowdhury, Co-president
                </p>
                  </div>
                  <div class="row">
                      <img src="vice_President_1.png" class="officerImgLeft" />
                      <p class="officerTextRight">
                          My name is Amogha Pokkulandra, affectionately known as "Big Amoghers". I like coding and mobile games because I am broke and have no PC. Do refrain from making any amogus references in my vicinity. POGCHAMP!!! <br />
                          - Amogha Pokkuandra, Vice President
                </p>
                  </div>
                  <div class="row">
                      <img src="vice_President_2.png" class="officerImgRight" />
                      <p class="officerTextLeft">
                          My last name is misspelled. <br />
                          - Dylan You, Vice President
                </p>
                  </div><div class="row">
                      <img src="secretary.png" class="officerImgLeft" />
                      <p class="officerTextRight">
                          Quote didn't make it in time :( <br />
                          - Suhani Goswami, Secretary
                </p>
                  </div>
                  <div class="row">
                      <img src="historian.png" class="officerImgRight" />
                      <p class="officerTextLeft">
                          Quote didn't make it in time :( <br />
                          - Rishindra Davuluri, Historian
                </p>
                  </div>
                  <div class="row">
                      <img src="novice_Coach_1.png" class="officerImgLeftX" />
                      <img src="novice_Coach_2.png" class="officerImgCenterX" />
                      <img src="advanced_Coach_1.png" class="officerImgRightX" />
                     
                  </div>
                  <div class="row">
                      <p class="officerTextLeftX">
                          Quote didn't make it in time :( <br />
                          - Soham (Insert Last Name Here, I'm sorry), Novice Coach
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