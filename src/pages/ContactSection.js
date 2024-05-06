import { MDBBtn, MDBCheckbox, MDBInput } from 'mdb-react-ui-kit'
import React from 'react'

const ContactSection = () => {
  return (
    <div className=" d-flex align-items-center justify-content-center">
      <form className='p-5' style={{backgroundColor: 'white'}}>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Nombre' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Dirección de correo electrónico' />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Mensaje' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Envíame una copia de este mensaje'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4' block>
        Enviar
      </MDBBtn>
    </form>
    </div>
  )
}

export default ContactSection