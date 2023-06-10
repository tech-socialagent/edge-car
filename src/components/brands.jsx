import React, { useState } from 'react';
import { styled } from 'styled-components';
import { brands } from '../data';
import ProductModel from './productModel';
import { Products } from '../data.js';
import { devices, devicesMin } from '../devices';
import { FiFilter } from 'react-icons/fi';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 3rem;
    @media ${devices.tablet}{
      margin: 0rem 1rem;
  }
`
const Header = styled.h1`
  width: max-content;
  font-size: 40px;
  font-weight: medium;
  border-bottom: 1px solid red;
  margin-bottom: 5px;
  margin-top: 7rem;
`
const Content = styled.p`
  width: 100%%;
  margin-bottom:5px;
`
const SubHeading = styled.h2`
    font-size: 30px;
    font-weight: medium;
    margin-bottom: 5px
`

const BrandContainer = styled.h1`
    display: flex;
    flex-direction: row;
    margin: 0;
`
const BrandMenu = styled.div`
    width: 20%;
    border-top: 1px solid #FFFFFF;
    padding-top: 10px;
    @media ${devices.tablet}{
      display: none;
    }
`
const BrandList = styled.ul`
    display: flex;
    flex-direction: column;
    font-size:16px;
    font-weight: normal;
    gap: 10px;
`
const Brand = styled.li`
    display: flex;
    list-style:none;
    transition: all 0.3s ease-in-out;
    &::before {
        content: "•"; 
        color: #FFFFFF60;
    }
    gap: 10px;
    &:hover {
        color: red;
        scale: 1.02;
    }
    cursor: pointer;
`
const ProductList = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(260px, 1fr));
    gap: 1rem;
    padding: 0 1rem;
    margin-bottom: 3rem;
    @media ${devices.laptop}{
      grid-template-columns: repeat(auto-fill,minmax(220px, 1fr));
    }
    @media ${devices.tablet}{
      width: 100%;
      grid-template-columns: repeat(auto-fill,minmax(170px, 1fr));
    }   
`

const Element = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  `
const ImgContainer = styled.div`
    width: 100%;
    height: 270px;
    overflow:hidden;
`
  
const MyIcon = styled.img.attrs(props => ({
    src: props.Img,
  }))`
  width: 100%;
  height:100%;
  transition: all 0.5s ease-in-out;
  ${Element} : hover & {
    transform: scale(1.15)
  }
  `;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 6px;
  transition: all 0.5s ease-in-out;
  ${Element}:hover & {
    color: red; 
  }
`

const Line = styled.div`
  width: 80px;
  height: 0px;
  border-top: 4px solid red;
  border-radius: 25%;
  transition: all 0.5s ease-in-out; 
  ${Element}:hover & {
    width:120px;
  }`
;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap : .5rem;
  margin-top: 1rem;
  margin-right: 2rem;
  margin-bottom : 2rem; 
`
const DropdownMenu = styled.div`
  width : 8rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  gap : 7px;
  align-items: center;
  border-bottom : 2px solid #FFFFFF;
  padding : 0px 6px;
  @media ${devicesMin.tablet}{
    display: none;
  }
`

const Button = styled.p`
  font-size: 20px;
  margin-top: 25px;
  cursor: pointer;
`
const CurrentMenu = styled.p`
  width : 6rem;
  overflow: hidden;
`

const BrandListTablet = styled.ul`
  width:70%;
  font-size:16px;
  gap : 20px;
  font-weight: normal;
  display: ${({toggle})=>(toggle ? 'grid' : 'none')};
  grid-template-columns: repeat(auto-fill,minmax(25.333%, 1fr));
  background-color: #FFFFFF30;
  padding: 20px 20px;
  border-radius: 20px;
  @media ${devicesMin.tablet}{
    display: none;
  }
`

const BrandTablet = styled.li`
    display: flex;
    list-style:none;
    transition: all 0.3s ease-in-out;
    gap: 10px;
    &::before {
      content: "•"; 
      color: #FFFFFF60;
  }
    &:hover {
        color: red;
        scale: 1.02;
    }
    cursor: pointer;
`


function Brands() {

    const [currentBrand, setCurrentBrand] = useState("Sony");
    const [openModel,setOpenModel] = useState(false);
    const [currentProduct, setCurrentProduct] = useState({});
    const [dropDown, setDropDown] = useState(false);

    const handleClick = (event, param) => {
        event.preventDefault();
        setCurrentBrand(param);
        setDropDown(false);
      };

    const handlePopup = (event,data) => {
        event.preventDefault();
        setCurrentProduct(data);
        setOpenModel(true)
    }

    const toggleMenu = () => {
      setDropDown(!dropDown);
    };

    return ( 
        <Container>
            <Header>
                Our Products
            </Header>
            <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Content>
            <DropdownContainer>
              <SubHeading>
                Brands
              </SubHeading>
              <DropdownMenu>
                <CurrentMenu>
                    {currentBrand}
                </CurrentMenu>
                <Button onClick={toggleMenu}>
                  <FiFilter/>
                </Button>
              </DropdownMenu>
              <BrandListTablet toggle={dropDown}>
                      {Products.map((item,index)=>(
                        <BrandTablet onClick={event => handleClick(event, item.name)}>{item.name}</BrandTablet>
                      ))}
              </BrandListTablet>
            </DropdownContainer>
            <BrandContainer>
                <ProductModel openModel={openModel} setOpenModel={setOpenModel} product={currentProduct}/>
                <BrandMenu>
                    <BrandList>
                      {Products.map((item,index)=>(
                        <Brand onClick={event => handleClick(event, item.name)}>{item.name}</Brand>
                      ))}
                    </BrandList>
                </BrandMenu>
                <ProductList>
                {brands.map((data)=>(
                    data.name === currentBrand ?  
                    ( 
                      <Element onClick={event => handlePopup(event,data)}>
                      <ImgContainer>
                        <MyIcon Img={data.img}/>
                      </ImgContainer>
                      <Title>{data.title}</Title>
                      <Line/>
                      </Element>) : null
                    ))}
                    </ProductList>
            </BrandContainer>
        </Container>
     );
}

export default Brands;