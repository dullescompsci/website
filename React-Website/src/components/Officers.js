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
                          Contact Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy text
                          ever since the 1500s, when an unknown printer took a galley of
                          type and scrambled it to make a type specimen book.
                </p>
                  </div>
                  <div class="row">
                      <img src="president_2.png" class="officerImgRight" />
                      <p class="officerTextLeft">
                          Contact Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy text
                          ever since the 1500s, when an unknown printer took a galley of
                          type and scrambled it to make a type specimen book.
                </p>
                  </div>
                  <div class="row">
                      <img src="vice_President_1.png" class="officerImgLeft" />
                      <p class="officerTextRight">
                          My name is Amogha Pokkulandra, affectionately known as "Big Amoghers". I like coding and mobile games because I am broke and have no PC. Do refrain from making any amogus references in my vicinity. POGCHAMP!!!
                </p>
                  </div>
                  <div class="row">
                      <img src="vice_President_2.png" class="officerImgRight" />
                      <p class="officerTextLeft">
                          My last name is misspelled.
                </p>
                  </div><div class="row">
                      <img src="secretary.png" class="officerImgLeft" />
                      <p class="officerTextRight">
                          Contact Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy text
                          ever since the 1500s, when an unknown printer took a galley of
                          type and scrambled it to make a type specimen book.
                </p>
                  </div>
                  <div class="row">
                      <img src="historian.png" class="officerImgRight" />
                      <p class="officerTextLeft">
                          Contact Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy text
                          ever since the 1500s, when an unknown printer took a galley of
                          type and scrambled it to make a type specimen book.
                </p>
                  </div>
                  <div class="row">
                      <img src="novice_Coach_1.png" class="officerImgLeftX" />
                      <img src="novice_Coach_2.png" class="officerImgCenterX" />
                      <img src="advanced_Coach_1.png" class="officerImgRightX" />
                     
                  </div>
                  <div class="row">
                      <p class="officerTextLeftX">
                          Contact Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy text
                          ever since the 1500s, when an unknown printer took a galley of
                          type and scrambled it to make a type specimen book.
                </p><p class="officerTextRightX">
                          A Big Mango Potato.<br/>No seriously, he asked for this.
                </p>
                      <p class="officerTextCenterX">
                          Insert Here.
                </p>
                      

                  </div>
        </div>
      </div>
    </div>
  );
}

export default Officers;