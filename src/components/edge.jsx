import React from 'react';
import { styled } from 'styled-components';
import { EdgeData } from '../data';

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
`
const Content = styled.p`
  width: 100%;
`
const Elements = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0rem;
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
        <Container>
            <Header>
                Edge <span style={{color:'red'}}>X</span>clusive
            </Header>
            <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Content>
            <Elements>
                {EdgeData.map((data)=>(
                <Element>
                    <MyIcon Img={data.img}/>
                    <Title>{data.title}</Title>
                    <Line/>
                    <Description>{data.content}</Description>
                </Element>
                ))}
            </Elements>
            <Horizontal/>
        </Container> 
     );
}

export default Edge;