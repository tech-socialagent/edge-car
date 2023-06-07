import React, { useState } from 'react';
import { styled } from 'styled-components';
import logo from "../assests/logo.png"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  transition: all 0.2s ease-in-out;
`;
const MyIcon = styled.img.attrs(props => ({
    src: props.Img || logo,
  }))`
  width: 210px;
  height: 70px;
  padding: 0px 40px 20px 70px;
  border-radius:0px 0px 250px 300px;
    background-color: #ffffff;
  `;

const Menu = styled.div`
  display: flex;
  gap: 2.5rem;
  font-size: 20px;
  font-weight: 500;
  align-items: center;
  height: 30px;
  margin: 1rem 0 0 0;
`
const MenuItem = styled.div`
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: red;
    scale: 1.05;
  }
`

const Button = styled.button`
  color: #ffffff;
  padding: 7px 20px;
  outline: none;
  background-color: red;
  border: red 2px solid;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color : red;
    background-color: #FFFFFF;
  }
`
const Button1 = styled.button`
  margin-right:20px;
  color: #ffffff;
  padding: 7px 20px;
  outline: none;
  background-color: transparent;    
  border: #ffffff 1px solid;
  border-radius: 5px;
  cursor: pointer;
`

function Navbar() {
    const [navbarColor, setNavbarColor] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 400) {
          setNavbarColor(true)
        } else {
          setNavbarColor(false)
        }
      }
      window.addEventListener('scroll', changeBackground)
    return ( 
        <Container style={{backgroundColor: navbarColor? 'white' : "transparent"}}>
                <MyIcon/>
                <Menu style={{color: navbarColor? 'black' : "white"}}>
                <MenuItem>Home</MenuItem>
                <MenuItem>Products</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Location</MenuItem>
                <Button>Call Now</Button>
                <Button1 style={{color: navbarColor? 'black' : "white",
                                 border: navbarColor? '#000000 1px solid' : "#ffffff 1px solid"}}>Get Quote</Button1>
                </Menu>
        </Container>
        );
}

export default Navbar;