import React from "react";
import "./Home.css"
import ReactGoogleSlides from "react-google-slides";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
        <div class="col-lg-12">
          </div>
          <div class="col-lg-6">
            <h1> </h1>
            <h1 class="font-weight-light">Dulles Computer Science</h1>
            <hr size="5" width="80%" color="red"></hr>
            <h1> </h1>
            <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://github.com/dullescompsci/website/blob/4cea4bc66e8d2d11fca27e3f64ecd0e7174ee267/public/dullescs.png?raw=true"
              alt=""
            />
          </div>
          <h1> </h1>
          <h2>About Us</h2>
            <p>
             Welcome to Dulles Computer Science! We are a student led club based in Dulles High School.
             Here our members learn life long coding skills from a wide variety of languages, participate in coding competitions, and most importantlly have fun with their friends while coding.
             We welcome anyone interested to join and, we strive to keep a positive enviornment for our members.
            </p>
            <h1> </h1>
          </div>
        </div>
              <ReactGoogleSlides
      slidesLink="https://docs.google.com/presentation/d/1s5DT5ynZxqoZ4zE2OzgYYSljyG17dtqyN68ya93b_Mg/edit?usp=sharing"
      slideDuration={5}
      position={1}
      showControls
      loop
    />
      </div>
    </div>

  );
}

export default Home;