import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useCart } from "react-use-cart";

function ProductCard({ product}) {
    const { addItem } = useCart();
  return (
        <MDBCard key={product?.id}>
            <div className="d-flex justify-content-between p-3">
              <p className="lead mb-0">{product?.name}</p>
              <div
                className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                style={{ width: "35px", height: "35px" }}
              >
                <p className="text-white mb-0 small">
                    {/* {product?.quantity} */}
                    1
                </p>
              </div>
            </div>
            <MDBCardImage
              src={product?.image}
              width={400}
              // height={}
              position="top"
              alt="Laptop"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Laptops
                  </a>
                </p>
                <p className="small text-danger">
                  <s>$1099</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">HP Notebook</h5>
                <h5 className="text-dark mb-0">$999</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <p class="text-muted mb-0">
                  Available: <span class="fw-bold">6</span>
                </p>
                <div class="ms-auto text-warning">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                </div>
                
              </div>
              <div class="d-flex justify-content-between mb-2">
                <div class="d-flex align-items-center">
                  <MDBBtn outline onClick={() => addItem(product)}><MDBIcon fas icon="cart-plus" /> Agregar al carrito</MDBBtn >
                </div>
              </div>
            </MDBCardBody>
        </MDBCard>
  );
}

export default ProductCard;