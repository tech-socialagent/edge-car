import React from 'react';
import car0 from "../assests/car0.png"
import Navbar from './Navbar';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 550px;
  background-image: url(${car0});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 0px -150px;`

  function Header() {
    return ( 
        <Container>
            <Navbar/>
        </Container>
     );
  }
  
  export default Header;