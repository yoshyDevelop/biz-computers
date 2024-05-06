import React, { useRef, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
  MDBRadio,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function PaymentGateway() {
  const [basicModal, setBasicModal] = useState(false);
  const formPaymentCard = useRef(null)
  const toggleOpen = () => setBasicModal(!basicModal);
  const [paymentCards, setPaymentCards] = useState([

  ])

  const handlePaymentCard = (e) => {
    e.preventDefault();
    console.log("Payment card added");
    // Get payment card data
    const cardNumber = formPaymentCard.current.children[0].children[0].children[0].value
    const cardHolder = formPaymentCard.current.children[2].children[0].children[0].value
    const expiration = formPaymentCard.current.children[3].children[0].children[0].value
    const cvv = formPaymentCard.current.children[4].children[0].children[0].value
    // Add payment card

    const newPaymentCard = {
      id: paymentCards.length + 1,
      cardType: "Visa",
      cardNumber: cardNumber,
      cardHolder: cardHolder,
      expiration: expiration,
      cvv: cvv,
    }
    setPaymentCards([...paymentCards, newPaymentCard]);
  }
  return (
    <MDBContainer fluid className="p-5" style={{ backgroundColor: "#eee" }}>
      <MDBCard>
        <MDBCardBody>
          <MDBRow className="d-flex justify-content-center pb-5">
            <MDBCol md="7" xl="5" className="mb-4 mb-md-0">
           
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">Datos de facturación</MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <form>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='First name' type='text' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='Last name' type='text' />
                  </MDBCol>
                </MDBRow>

                <MDBInput label='Company name' type='text' className="mb-4" />
                <MDBInput label='Address' type='text' className="mb-4" />
                <MDBInput label='Email' type='text' className="mb-4" />
                <MDBInput label='Phone' type='text' className="mb-4" />
                <MDBTextArea label='Additional information' rows={4} className="mb-4" />

                <div className="d-flex justify-content-center">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Create an account?' defaultChecked />
                </div>
              </form>
            </MDBCardBody>
          
              <hr />
              <div className="pt-2">
                <div className="d-flex pb-2">
                 
                  <div className="ms-auto" onClick={() => {toggleOpen()}}>
                    <MDBBtn outline className="text-primary">
                      <MDBIcon
                        fas
                        icon="plus-circle"
                        className="text-primary pe-1"
                        
                      />
                      Agregar tarjeta de pago
                    </MDBBtn>
                  </div>
                </div>
                {paymentCards.map((card) => {
                  return (
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
                      </div>
                      <div className="rounded border d-flex w-100 p-3 align-items-center">
                        <p className="mb-0">
                          <MDBIcon
                            fab
                            icon="cc-visa"
                            size="lg"
                            className="text-primary pe-2"
                          />{" "}
                          Tarjeta de débito Visa
                        </p>
                        <div className="ms-auto">{card.cardNumber}</div>
                      </div>
                    </div>
                  );
                })}
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-2">
                    <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
                  </div>
                  <div className="rounded border d-flex w-100 p-3 align-items-center">
                    <p className="mb-0">
                      <MDBIcon
                        fab
                        icon="cc-visa"
                        size="lg"
                        className="text-primary pe-2"
                      />{" "}
                      Tarjeta de débito Visa
                    </p>
                    <div className="ms-auto">************3456</div>
                  </div>
                </div>
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-2">
                    <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
                  </div>
                  <div className="rounded border d-flex w-100 p-3 align-items-center">
                    <p className="mb-0">
                      <MDBIcon
                        fab
                        icon="cc-mastercard"
                        size="lg"
                        className="text-dark pe-2"
                      />{" "}
                      Mastercard Office
                    </p>
                    <div className="ms-auto">************1038</div>
                  </div>
                </div>
                <MDBBtn block size="lg">
                  Proceder al pago
                </MDBBtn>
              </div>
            </MDBCol>
            <MDBCol md="5" xl="4" offsetXl="1">
              {" "}
              <div className="py-4 d-flex justify-content-end">
                <h6>
                  <Link to={"/cart"}>
                  Cancelar y volver al carrito
                  </Link>
                </h6>
              </div>
              <div
                className="rounded d-flex flex-column p-2"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="p-2 me-3">
                  <h4>Resumen del pedido</h4>
                </div>
                <div className="p-2 d-flex">
                  <MDBCol size="8">Precio</MDBCol>
                  <div className="ms-auto">$186.76</div>
                </div>            
                <div className="border-top px-2 mx-2"></div>

               
                <div className="border-top px-2 mx-2"></div>
                <div className="p-2 d-flex pt-3">
                  <MDBCol size="8">
                    <b>Total</b>
                  </MDBCol>
                  <div className="ms-auto">
                    <b className="text-success">$186.76</b>
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            
            <MDBModalBody style={{padding: '0'}}>

            <MDBCard>
              <MDBCardBody>

                <MDBRow ref={formPaymentCard} className="d-flex align-items-center">
                  
                  <MDBCol size="9">
                    <MDBInput
                      label="Card Number"
                      id="form1"
                      type="text"
                      placeholder="1234 5678 9012 3457"
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <img
                      src="https://img.icons8.com/color/48/000000/visa.png"
                      alt="visa"
                      width="64px"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <MDBInput
                      label="Cardholder's Name"
                      id="form2"
                      type="text"
                      placeholder="Cardholder's Name"
                    />
                  </MDBCol>

                  <MDBCol size="6">
                    <MDBInput
                      label="Expiration"
                      id="form2"
                      type="text"
                      placeholder="MM/YYYY"
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <MDBInput
                      label="CVV"
                      id="form2"
                      type="text"
                      placeholder="&#9679;&#9679;&#9679;"
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <MDBBtn color="info" rounded size="lg" onClick={handlePaymentCard}>
                      <MDBIcon fas icon="arrow-right" />
                    </MDBBtn>
                  </MDBCol>
                  
                </MDBRow>

              </MDBCardBody>
            </MDBCard>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>

            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBContainer>
  );
}