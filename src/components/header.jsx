import React, { useEffect, useState } from 'react';
import car0 from "../assests/car0.png"
import car2 from "../assests/car2.png"
import Navbar from './Navbar';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 550px;
  background-image: ${({ backgroundImages }) => `url(${backgroundImages})`};  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 0px -150px;
`

  function Header() {

    const backgroundImages = [
        car0,
        car2,
      ];

      const [currentImageIndex, setCurrentImageIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % backgroundImages.length
          );
         }, 3000);
      
        return () => clearInterval(interval);
      });
      
    return ( 
        <Container backgroundImages={backgroundImages[currentImageIndex]}>
            <Navbar/>
        </Container>
     );
  }
  
  export default Header;