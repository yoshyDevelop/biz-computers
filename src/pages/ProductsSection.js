import React from 'react'
import ProductCard from '../components/ProductCard'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
  } from "mdb-react-ui-kit";
const ProductsSection = () => {

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
        {
          id: 5,
          name: "Nordli",
          price: 1650000,
          quantity: 5,
          image: "https://www.mtm.com.co/wp-content/uploads/2023/05/06240.jpg"
        },
        {
          id: 6,
          name: "Kullen",
          price: 1450000,
          quantity: 1,
          image: "https://exitocol.vtexassets.com/arquivos/ids/20295780/Computador-Portatil-HP-Intel-Core-i5-10-Nucleos-8-GB-RAM-512-GB-SSD-3470341_a.jpg?v=638357698064800000"
        },
      ];

  return (
    <div>
        <MDBContainer fluid className="my-5">
        <MDBRow>
            {products.map((p) => (
                <MDBCol md="12" lg="4" className="my-4 mb-lg-0">
                    <ProductCard product={p} />
                </MDBCol>
            ))}
        </MDBRow>
    </MDBContainer>
    </div>
  )
}

export default ProductsSection