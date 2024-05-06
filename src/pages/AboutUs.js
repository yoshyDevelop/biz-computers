import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';

const AboutUs = () => {
  const teamMembers = [
    { name: 'Miembro 1', role: 'Rol 1', image: 'https://images.squarespace-cdn.com/content/v1/5b14d6b9e17ba3952cac9f04/1529194285863-CJKZQYFQW19BZULFH1N4/AlebertoCarmona-500x500.jpg' },
    { name: 'Miembro 2', role: 'Rol 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQffzsaXUhbs8Q1M3DNFfPZTrFXw5llprowR98FghXBw&s' },
    { name: 'Miembro 2', role: 'Rol 2', image: 'https://617mediagroup.com/wp-content/uploads/2019/06/jaclyn-kessel-scaled-500x500.jpg' },
    { name: 'Miembro 2', role: 'Rol 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVuikenBS5TFnQmvKgB-WJIVbrM1QSsibzF-Z0Aq-JA&s' },
    // Añade más miembros aquí
];

  return (
    <MDBContainer className="mt-3">
            <MDBRow>
                <MDBCol>
                    <MDBTypography variant="h1">Acerca de nosotros</MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3">
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBTypography variant="h2">Nuestra historia</MDBTypography>
                            <MDBTypography variant="p">
                            Somos una pequeña empresa de tecnología llamada TechWorks, fundada por dos amigos apasionados por la innovación, Alex y Laura. Nuestra visión es crear productos que no solo sean funcionales, sino también impactantes en el mercado.

Comenzamos en un modesto garaje, donde prototipamos nuestra primera invención: un dispositivo portátil que combinaba las funcionalidades de un teléfono inteligente y una computadora personal. Después de meses de arduo trabajo y pruebas, lanzamos el "TechPad" al mercado y recibimos una respuesta abrumadoramente positiva.

Con el éxito del TechPad, TechWorks empezó a crecer rápidamente. Contratamos a ingenieros y diseñadores talentosos que compartían nuestra pasión por la tecnología. Pronto, expandimos nuestra línea de productos para incluir laptops ultradelgadas, wearables inteligentes y sistemas de domótica para hogares conectados.

Lo que nos diferenció fue nuestro enfoque en la experiencia del usuario. Cada producto fue diseñado meticulosamente para ser intuitivo y eficiente, brindando a nuestros clientes una sensación de empoderamiento tecnológico.

A medida que TechWorks crecía, también nos comprometimos con la responsabilidad social y ambiental. Implementamos prácticas sostenibles en nuestra cadena de suministro y colaboramos con organizaciones benéficas para llevar la tecnología a comunidades desatendidas.

Con el tiempo, TechWorks se convirtió en una marca reconocida a nivel mundial, conocida por su calidad, innovación y compromiso con la sociedad. Alex y Laura siguen liderando la empresa con pasión y visión, manteniendo viva la chispa que nos llevó a iniciar este emocionante viaje tecnológico.
                            </MDBTypography>
                            
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3">
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBTypography variant="h2">Nuestro equipo</MDBTypography>
                            
                            <MDBRow className='g-4'>
                                {teamMembers.map((member, index) => (
                                    <MDBCol key={index}>
                                        <MDBCard style={{ maxWidth: '22rem' }}>
                                        <MDBCol className='text-center'>
                                          <img
                                            src={member.image}
                                            className='rounded-circle'
                                            alt=''
                                            width={100}
                                            height={100}
                                          />
                                        </MDBCol>
                                            <MDBCardBody>
                                                <MDBTypography variant="h5">{member.name}</MDBTypography>
                                                <MDBTypography variant="p">{member.role}</MDBTypography>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                ))}
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
  )
}

export default AboutUs