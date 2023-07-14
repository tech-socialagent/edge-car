import React, { useEffect, useState } from 'react';
import car0 from "../assests/banner/banner1.webp"
import car1 from "../assests/banner/banner2.webp"
import car2 from "../assests/banner/banner3.webp"
import car3 from "../assests/banner/banner4.webp"
import Navbar from './Navbar';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${({ backgroundImages }) => `url(${backgroundImages})`};  
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover; 
  background-position:center;
`

const Content = styled.div`
  max-width: 30%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 15% 8%;
  @media (max-width: 750px) {
    display: none;
  }
`

const Title = styled.div`
  margin:0;
  font-size: 45px;
  color: #f01f36;
  font-weight: 700;
`

const Paragraph = styled.p`
  margin:0;
  font-size: 25px;
  color: #000;
`

function Header() {

  const backgroundImages = [
    car0,
    car3,
    car1,
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
      <Navbar />
      <Content>
        <Title>Elevate Your Drive</Title>
        <Paragraph>Discover premium car accessories to enhance your vehicle's performance, style, and comfort.</Paragraph>
      </Content>
    </Container>
  );
}

export default Header;