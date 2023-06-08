import React, { useState } from 'react';
import { styled } from 'styled-components';
import { brands } from '../data';
import { HoverCard, Group } from '@mantine/core';
import { HashLink } from 'react-router-hash-link';
import ProductModel from './productModel';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 3rem;
`
const Header = styled.h1`
  font-size: 40px;
  font-weight: medium;
  text-decoration: underline;
  text-decoration-color:red;
  text-decoration-thickness:2px;
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
`

const Element = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  `
const MyIcon = styled.img.attrs(props => ({
    src: props.Img,
  }))`
  width: 100%;
  `;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 6px;
`

const Line = styled.div`
  width: 80px;
  height: 0px;
  border-top: 2px solid red`;

const HoverContainer = styled.div`
  display: flex;
  gap:20px;
  background-color: #000000;
  color: #FFFFFF;
  z-index: 9999;
`

const HoverImg = styled.img.attrs(props => ({
    src: props.Img,
}))`
  width: 50%;
  height: max-content-height;
`
const HoverContent = styled.div`
  display: flex;
  flex-direction: column;`

const HoverDescription = styled.p`
    font-size: 16px;
    font-weight: normal;
`

const HoverButton = styled.button`
    margin-right:20px;
    color: #ffffff;
    padding: 7px 20px;
    outline: none;
    background-color: transparent;    
    border: #ffffff 1px solid;
    border-radius: 5px;
    cursor: pointer;
`



function Brands() {

    const [currentBrand, setCurrentBrand] = useState("sony");
    const [openModel,setOpenModel] = useState(false);

    const handleClick = (event, param) => {
        event.preventDefault();
        setCurrentBrand(param)
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
            <SubHeading>
                Brands
            </SubHeading>
            <BrandContainer>
                <ProductModel openModel={openModel} setOpenModel={setOpenModel}/>
                <BrandMenu>
                    <BrandList>
                        <Brand onClick={event => handleClick(event, 'sony')}>Sony</Brand>
                        <Brand onClick={event => handleClick(event, 'samsung')}>Samsung</Brand>
                        <Brand onClick={event => handleClick(event, 'pioneer')}>Pioneer</Brand>
                        <Brand onClick={event => handleClick(event, 'jbl')}>JBL</Brand>
                        <Brand onClick={event => handleClick(event, 'boss')}>Boss</Brand>
                        <Brand onClick={event => handleClick(event, 'alpine')}>Alpine</Brand>
                        <Brand onClick={event => handleClick(event, 'focal')}>Focal</Brand>
                        <Brand onClick={event => handleClick(event, 'kicker')}>Kicker</Brand>
                        <Brand onClick={event => handleClick(event, 'polkAudio')}>Polk Audio</Brand>
                        <Brand onClick={event => handleClick(event, 'jlAudio')}>JL Audio</Brand>
                    </BrandList>
                </BrandMenu>
                <ProductList>
                {brands.map((data)=>(
                    data.name === currentBrand ? 
                    (
                        <Group position="center">
                        <HoverCard width={600} shadow="md" withArrow openDelay={400} closeDelay={100}>
                          <HoverCard.Target>
                                <Element  onClick={() => {setOpenModel(true)}}>
                                <MyIcon Img={data.img}/>
                                <Title>{data.title}</Title>
                                <Line/>
                                </Element>
                          </HoverCard.Target>
                          <HoverCard.Dropdown style={{backgroundColor:"#000000"}}>
                                <HoverContainer>
                                    <HoverImg Img={data.img}/>
                                    <HoverContent>
                                        <Title>{data.title}</Title>
                                        <Line/>
                                        <HoverDescription>{data.desc}</HoverDescription>
                                        <HashLink smooth to="/#quote">
                                        <HoverButton>Get Quote</HoverButton>
                                        </HashLink>                        
                                    </HoverContent>
                                </HoverContainer>
                          </HoverCard.Dropdown>
                        </HoverCard>
                      </Group>) : null
                    ))}
                    </ProductList>
            </BrandContainer>
        </Container>
     );
}

export default Brands;