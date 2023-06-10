import React from 'react';
import { Modal, useMantineTheme } from '@mantine/core';
import { styled } from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import {devices} from "../devices.js";

const HoverContainer = styled.div`
  display: flex;
  gap:50px;
  background-color: #000000;
  color: #FFFFFF;
  z-index: 9999;
  padding: 30px;
  margin: 0px;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
  }
`

const HoverImg = styled.img.attrs(props => ({
    src: props.Img,
}))`
  width: 40%;
  height: max-content-height;
  border-radius: 20px;
  @media ${devices.tablet} {
    width: 90%;
  }
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
const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 6px;
`

const Line = styled.div`
  width: 80px;
  height: 0px;
  border-top: 2px solid red`;

function ProductModel({openModel,setOpenModel,product}){
    const theme = useMantineTheme();
    return ( 
        <Modal
        withCloseButton={false}
        overlayProps={{
            color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[7],
            opacity: 0.25,
            blur: 1,
        }}
        opened={openModel}
        onClose={()=> setOpenModel(false)}
        size="75%"
        transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >
        <HoverContainer>
        <HoverImg Img={product.img}/>
        <HoverContent>
            <Title>{product.title}</Title>
            <Line/>
            <HoverDescription>{product.desc}</HoverDescription>
            <HashLink smooth to="/#quote">
            <HoverButton>Get Quote</HoverButton>
            </HashLink>                        
        </HoverContent>
        </HoverContainer>
        </Modal>
     );
}

export default ProductModel;