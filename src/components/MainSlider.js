import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
export default function MainSlider() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src={slider1} className='d-block w-100' alt='...' />
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={slider2} className='d-block w-100' alt='...' />
        
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src={slider3} className='d-block w-100' alt='...' />
        
      </MDBCarouselItem>
    </MDBCarousel>
  );
}