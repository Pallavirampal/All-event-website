import React from 'react'
import Nav from "../components/nav.jsx"
import Slider from "../components/slider.jsx"
import Container from '../components/container.jsx';
import Footer from "../components/footer.jsx"


export default function home() {
  return (
    <>
      <Nav></Nav>
      <Slider></Slider>
      <Container></Container>
      <Footer></Footer>
      
    </>
  )
}
