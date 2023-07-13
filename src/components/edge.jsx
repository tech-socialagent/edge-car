import React from 'react';
import { styled } from 'styled-components';
import { EdgeData } from '../data';
import { devices } from '../devices';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
  @media ${devices.tablet}{
    margin: 0rem 1rem;
}
`

const Header = styled.h1`
  font-size: 40px;
  font-weight: medium;
  width: max-content;
  border-bottom: 2px solid red;
  margin-bottom: 5px;`

const Content = styled.p`
  width: 100%;
`
const Elements = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(30.333%, 1fr));
  gap: 1rem;
  margin: 1rem 0rem;
  @media ${devices.tablet}{
    grid-template-columns: repeat(auto-fill,minmax(45%, 1fr));
  }
  @media ${devices.mobileL}{
    display: flex;
    flex-direction: column;
  }
`

const Element = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
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
const Description = styled.p`

`
const Line = styled.div`
width: 80px;
height: 0px;
border-top: 2px solid red`

const Horizontal = styled.hr`
  width: 100%;
  color: #FFFFFF;`

function Edge() {

  return (
    <Container
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header>
        Edge <span style={{ color: 'red' }}>X</span>clusive
      </Header>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Content>
      <Elements>
        {EdgeData.map((data,id) => (
          <Element key={id}>
            <MyIcon Img={data.img} />
            <Title>{data.title}</Title>
            <Line />
            <Description>{data.content}</Description>
          </Element>
        ))}
      </Elements>
      <Horizontal />
    </Container>
  );
}

export default Edge;