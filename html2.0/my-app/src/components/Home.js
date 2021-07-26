import React from "react";
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import "./Home.css"

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: 'darkred',
};
function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
        <div class="col-lg-12">
          </div>
          <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="dullescs.png"
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <h1 class="font-weight-light">Dulles Computer Science</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. 
            </p>
          </div>
        </div>
        <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
      </div>
    </div>
    
  );
}

export default Home;