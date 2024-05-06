import React from 'react'
import Header from '../components/Header'
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import MainSlider from '../components/MainSlider';
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: "Malm",
    price: 9900000,
    quantity: 1,
    image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
  },
  {
    id: 2,
    name: "Nordli",
    price: 1650000,
    quantity: 5,
    image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
  },
  {
    id: 3,
    name: "Kullen",
    price: 1450000,
    quantity: 1,
    image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp"
  },
  {
    id: 4,
    name: "Malm",
    price: 9900000,
    quantity: 1,
    image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Home = () => {
  return (
    <MDBContainer breakpoint="sm">
      <MainSlider />
      <MDBRow className='my-2'>
        <MDBCol size='md' className='my-1'>
        <img
      src={banner1}
      className='img-fluid hover-shadow'
      alt=''
    />
        </MDBCol>
        <MDBCol size='md' className='my-1'>
        <img
      src={banner2}
      className='img-fluid hover-shadow'
      alt=''
    />
        </MDBCol>
        <MDBCol size='md' className='my-1'>
        <img
      src={banner3}
      className='img-fluid hover-shadow'
      alt=''
    />
        </MDBCol>
      </MDBRow>
      <MDBRow className='my-2'>
        <MDBTypography tag='div' className='display-5 pb-3 mb-1 mt-3 border-bottom'>
        Ofertas Especiales        
        </MDBTypography>
        <MDBTypography className='lead mb-0'>
        Descubre nuestras increíbles promociones en una amplia gama de productos.
      </MDBTypography>
      </MDBRow>
      <MDBRow>
        <Carousel responsive={responsive}>
          {products.map((p) => (
                <MDBCol className="mb-4 mx-2">
                    <ProductCard product={p} />
                </MDBCol>
          ))}
        </Carousel>
      </MDBRow>
      
    </MDBContainer>
  )
}

export default Home