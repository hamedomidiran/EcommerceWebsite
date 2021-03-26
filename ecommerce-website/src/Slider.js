import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

function ImageSlider() {
    let settings = {
        dot:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        cssEase: "linear"
    }
    return (
      <Slider {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
            </div>
            <div className="details">
                <h2>
                    John Doe
                    <span className="job-title">UI Developer</span>
                </h2>
            </div>
          </div>
        </div>
        
      </Slider>
    );
}

export default ImageSlider
