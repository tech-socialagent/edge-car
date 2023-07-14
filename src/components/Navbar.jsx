import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import vector from "../assests/vector.png";
import logo from "../assests/logo.png";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { devices, devicesMin } from '../devices';
import { AiOutlineMenuFold } from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai';

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: ${({navbarcolor}) => (navbarcolor ? "white" : "#0000004e")}; 
  transition: all 0.2s ease-in-out;
  z-index: 1;
  @media ${devices.tablet} {
    background-color: #FFFFFF;
  }
`;

const MyIcon = styled.img.attrs(props => ({
  src: props.Img
}))`
  @media ${devices.tablet} {
    display: none;
  }
  `;

  const MyIconTablet = styled.img.attrs(props => ({
    src: props.Img
  }))`
    width: 30%;
    padding-left: 10px;
    @media ${devicesMin.tablet} {
      display: none;
    }
    `;

const Menu = styled.div`
  display: flex;
  gap: 2.5rem;
  font-size: 20px;
  font-weight: 500;
  align-items: center;
  height: 30px;
  margin: 1rem 0 0 0;
  @media ${devices.tablet} {
    display: none;
  }
  @media ${devices.laptop} {
    gap : 1.5rem;
  }
`


const MenuItem = styled.div`
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  color: ${({navbarcolor}) => (navbarcolor ? 'black': 'white')};
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
  color: ${({navbarcolor}) => (navbarcolor ? 'black': 'white')};
  padding: 7px 20px;
  outline: none;
  border: ${({navbarcolor}) => (navbarcolor ? 'black 1px solid': 'white 1px solid')};
  background-color: transparent;    
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border: red 1px solid;
    color: red;
  }

  @media ${devices.laptop} {
    display: none;
  }
`
const Icon = styled.span`
  font-size: 30px;
  color: ${({navbarcolor}) => (navbarcolor ? 'black': 'white')};
  padding: 25px;
  cursor: pointer;
  @media ${devicesMin.tablet} {
    display: none;
  }
  @media ${devices.tablet} {
    color: #000000;
  }
`
const PhoneMenu = styled.div`
  color: #ffffff;
  height : 100vh;
  width :40%;
  position:absolute;
  border-left: 2px solid white;
  background-color: #000000;
  right: ${({open})=>(open? '0%': '-40%')};
  transition : all 0.7s ease-in-out;
`
const CloseIcon = styled.div`
  padding: 5%;
  font-size : 24px;
  cursor : pointer;
`
const MenuForPhone = styled.div`
 display: flex;
 flex-direction: column;
  text-align: center;
  gap: 20px;
  align-items: center;
`

function Navbar(props) {
  const [navbarcolor, setNavbarcolor] = useState(false)
  const [open, setOpen] = useState(false)
  const changeBackground = () => {
    if (props.page === "product" && window.scrollY >= 40) {
      setNavbarcolor(true)
    }
    else if (window.scrollY >= 400) {
      setNavbarcolor(true)
    }
    else {
      setNavbarcolor(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

  const phoneNumber = '987656543210';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    
    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 70;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };


  return (
    <Container navbarcolor={navbarcolor}> 
      <MyIcon Img={vector} navbarcolor={navbarcolor}/>
      <MyIconTablet Img ={logo} navbarcolor={navbarcolor}/>
      <div></div>
      <Menu style={{ color: navbarcolor ? 'black' : "white" }}>
        <Link to="/" style={{ textDecoration: 'none'}}>
          <MenuItem navbarcolor={navbarcolor}>Home</MenuItem>
        </Link>
        <Link to="/products" style={{ textDecoration: 'none', color: navbarcolor ? 'black' : "white" }}>
          <MenuItem navbarcolor={navbarcolor}>Products</MenuItem>
        </Link>
        <MenuItem navbarcolor={navbarcolor} onClick={(e) => handleClick(e,"testimonials")}>Testimonials</MenuItem>
        <MenuItem navbarcolor={navbarcolor} onClick={(e) => handleClick(e,"Location")}>Location</MenuItem>
        <Button>Call Now</Button>
        <Button1 navbarcolor={navbarcolor} onClick={(e) => handleClick(e,"quote")}>Get Quote</Button1>
      </Menu>
      <Icon navbarcolor={navbarcolor} onClick={()=> setOpen(true)} >
        <AiOutlineMenuFold />
      </Icon>
      <PhoneMenu open={open}>
        <CloseIcon onClick={()=> setOpen(false)}>
          <AiOutlineClose/>
        </CloseIcon>
        <MenuForPhone style={{ color: "white" }}>
        <Link to="/" style={{ textDecoration: 'none', color: "white" }}>
          <MenuItem>Home</MenuItem>
        </Link>
        <Link to="/products" style={{ textDecoration: 'none', color: "white" }}>
          <MenuItem>Products</MenuItem>
        </Link>
        <HashLink smooth to="/#testimonials" style={{ textDecoration: 'none', color: "white" }}>
          <MenuItem>Testimonials</MenuItem>
        </HashLink>
        <HashLink smooth to="/#Location" style={{ textDecoration: 'none', color: "white" }}>
          <MenuItem>Location</MenuItem>
        </HashLink>
        <a href="tel:9008536537" style={{textDecoration:'none'}}>
          <Button onClick={handleCall}>Call Now</Button>
        </a>
        <HashLink smooth to="/#quote">
          <Button1 navbarcolor={navbarcolor} >Get Quote</Button1>
        </HashLink>
      </MenuForPhone>
      </PhoneMenu>
    </Container>
  );
}

export default Navbar;