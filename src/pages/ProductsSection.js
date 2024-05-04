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
          price: 9900,
          quantity: 1
        },
        {
          id: 2,
          name: "Nordli",
          price: 16500,
          quantity: 5
        },
        {
          id: 3,
          name: "Kullen",
          price: 4500,
          quantity: 1
        },
      ];

  return (
    <div>
        <MDBContainer fluid className="my-5">
        <MDBRow>
            {products.map((p) => (
                <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
                    <ProductCard product={p} />
                </MDBCol>
            ))}
        </MDBRow>
    </MDBContainer>
    </div>
  )
}

export default ProductsSection