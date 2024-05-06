import { MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

const Modal = ({article}) => {

    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex={'-1'}>
        <MDBModalDialog>
            <MDBModalContent>
            <MDBModalHeader>
                <MDBModalTitle>{article.title}</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>{article.content}</MDBModalBody>

            <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
                </MDBBtn>
                <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
    </MDBModal>
  )
}

export default Modal