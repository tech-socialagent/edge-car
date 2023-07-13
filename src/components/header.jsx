import React, { useEffect, useState } from 'react';
import car0 from "../assests/banner/banner1.png"
import car1 from "../assests/banner/banner2.png"
import car2 from "../assests/banner/banner3.png"
import car3 from "../assests/banner/banner4.png"
import Navbar from './Navbar';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 550px;
  background-image: ${({ backgroundImages }) => `url(${backgroundImages})`};  
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: 0px -100px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15% 15%;
`

const Title = styled.div`
  font-size: 50px;
  color: #f01f36;
  font-weight: 700;
`

const Paragraph = styled.p`
`

function Header() {

    const backgroundImages = [
        car0,
        car1,
        car2,
        car3,
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
            <Content>
              <Title>Title</Title>
              <Paragraph>Paragraph</Paragraph>
            </Content>
        </Container>
     );
  }
  
  export default Header;