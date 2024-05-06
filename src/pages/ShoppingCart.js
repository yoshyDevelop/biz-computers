import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from 'react'
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const ShoppingCart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p>Tu carrito está vacío</p>;

  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">

                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                            Carrito de Compras
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            3 artículos
                          </MDBTypography>
                        </div>

                        <hr className="my-4" />
                        {items.map((item) => (
                          <>
                            <MDBRow key={item.id} className="mb-4 d-flex justify-content-between align-items-center">
                              <MDBCol md="2" lg="2" xl="2">
                                <MDBCardImage
                                  src={item.image}
                                  fluid className="rounded-3" alt="Camiseta de algodón" />
                              </MDBCol>
                              <MDBCol md="3" lg="3" xl="3">
                                <MDBTypography tag="h6" className="text-muted">
                                  Producto
                                </MDBTypography>
                                <MDBTypography tag="h6" className="text-black mb-0">
                                  {item.name}
                                </MDBTypography>
                              </MDBCol>
                              <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                                <MDBBtn color="link" className="px-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                  <MDBIcon fas icon="minus" />
                                </MDBBtn>

                                <MDBInput type="number" min="0" defaultValue={item.quantity} value={item.quantity} size="sm" />

                                <MDBBtn color="link" className="px-2" onClick={() => { updateItemQuantity(item.id, item.quantity + 1) }}>
                                  <MDBIcon fas icon="plus" />
                                </MDBBtn>
                              </MDBCol>
                              <MDBCol md="3" lg="2" xl="2" className="text-end">
                                <MDBTypography tag="h6" className="mb-0">
                                  $ {item.price * item.quantity}
                                </MDBTypography>
                              </MDBCol>
                              <MDBCol md="1" lg="1" xl="1" className="text-end">
                                <MDBBtn href="#!" onClick={() => removeItem(item.id)}>
                                  <MDBIcon fas icon="times" />
                                </MDBBtn>
                              </MDBCol>
                            </MDBRow>
                          </>
                        ))}

                        <hr className="my-4" />

                        <div className="pt-5">
                          <MDBTypography tag="h6" className="mb-0">
                            <MDBCardText tag="a" href="#!" className="text-body">
                              <MDBIcon fas icon="long-arrow-alt-left me-2" />
                              <Link to={'/products'}>
                              Volver
                              a la tienda
                              </Link>
                               
                            </MDBCardText>
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                          Resumen
                        </MDBTypography>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Artículos 3
                          </MDBTypography>
                          <MDBTypography tag="h5">€ 132.00</MDBTypography>
                        </div>

                        

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Código promocional
                        </MDBTypography>

                        <div className="mb-5">
                          <MDBInput size="lg" label="Ingresa tu código" />
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Precio total
                          </MDBTypography>
                          <MDBTypography tag="h5">€ 137.00</MDBTypography>
                        </div>
                        <Link to={'/payment'}>
                        <MDBBtn color="secondary" block size="lg">
                          
                          
                            Checkout
                         
                          
                        </MDBBtn>
                        </Link>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default ShoppingCart