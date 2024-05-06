import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter
} from 'mdb-react-ui-kit';

export default function App() {
  const [basicModal, setBasicModal] = useState(false);
  const [selectArticle, setSelectArticle] = useState([])
  const toggleOpen = () => setBasicModal(!basicModal);

  const articles = [
    { id: 1, image:'https://d1pc5hp1w29h96.cloudfront.net/magefan_blog/5_buenas_razones_para_tener_una_desktop_todo_en_uno.jpg', title: 'Los Avances Tecnológicos en Computadoras del 2024', content: 'Explora las últimas innovaciones en tecnología de computadoras, desde procesadores más rápidos hasta pantallas de alta resolución. Descubre cómo estas mejoras están cambiando la forma en que trabajamos y nos entretenemos.' },
    { id: 2, image:'https://www.silicon.es/wp-content/uploads/2022/04/nuevo-modelo-de-negocio-auge-del-ecommerce-ok-800x445-1-1280x720.jpg', title: 'Guía para Elegir la Computadora Perfecta para Tu Negocio', content: '¿Estás buscando una computadora para tu empresa? Esta guía te ayudará a entender qué características son más importantes según tus necesidades, desde la potencia de procesamiento hasta la seguridad de los datos.' },
    { id: 3, image:'https://www.ionos.es/digitalguide/fileadmin/_processed_/2/3/csm_e-commerce_8519c50017.webp', title: 'Cómo Mantener Tu Computadora en Óptimas Condiciones', content: 'Consejos prácticos para mantener tu computadora funcionando de manera eficiente y prolongar su vida útil. Desde la limpieza adecuada hasta la gestión del almacenamiento, aprende a cuidar tu dispositivo para un rendimiento óptimo.' },
  ];

  useEffect(() => {
    console.log('selectArticle',selectArticle)
  }, [selectArticle])
  
  const handleSelectArticle = (articleId) => {
    const article = articles.filter((article)=>{ return article.id === articleId})
    setSelectArticle(article?.[0])
    toggleOpen()
  }

  return (
    <>
    <MDBRow>
        {articles.map((article) => (
          <>
          <MDBCol key={article.id} md={4} className="mb-4">
            <MDBCard>
              <MDBCardImage src={article.image} position='top' alt='...' />
              <MDBCardBody>
                <MDBCardTitle>{article.title}</MDBCardTitle>
                <MDBCardText>
                  {article.content}
                </MDBCardText>
                <MDBBtn onClick={() => handleSelectArticle(article.id)}>Leer Más</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
          <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex={'-1'}>
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader>
                  { console.log(selectArticle)}
                  <MDBModalTitle>{selectArticle?.title}</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={() => toggleOpen()}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>{selectArticle?.content}</MDBModalBody>

                <MDBModalFooter>
                  <MDBBtn color='secondary' onClick={() => toggleOpen()}>
                    Close
                  </MDBBtn>
          
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
          </>
        ))}
    </MDBRow>
    </>
  );
}