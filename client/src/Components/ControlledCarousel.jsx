import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './ControlledCarousel.css'

const ControlledCarousel = () => {
  const options = {
    items: 1,
    nav: false,
    loop:true,
    autoplay: true,
    slideBy: 1,
    dots: true,
    dotsEach: true,
    dotData: true,
    smartSpeed:1500
  }
  return (
<div className="slide">
  <h1 className="carouselHeader">Входные и межкомнатные двери</h1>
  <OwlCarousel
    className="owl-theme"
    {...options}
  >
    <div className="item">
      <img alt="img1" src="/images/slideImages/images.jpg"/>
    </div>
    <div className="item">
      <img alt="img1" src="/images/slideImages/blue_house.jpg"/>
    </div>
    <div className="item">
      <img alt="img1" src="/images/slideImages/door-image.jpg"/>
    </div>
  </OwlCarousel>
</div>
  )

}


export default ControlledCarousel