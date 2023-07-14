import React, { useContext } from 'react';
import { styled } from 'styled-components';
import { EdgeData } from '../data';
import { devices } from '../devices';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import ProductContext from '../context';

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
  cursor: pointer;
`

const SingleImage = styled.div`
  width: 100%;
  border: 1px solid #ffffff4e;
  overflow: hidden;
`

const MyIcon = styled.img.attrs(props => ({
  src: props.Img,
}))`
  width: 100%;
  transition: all 0.4s ease-in-out;

  ${Element}:hover & {
    transform: scale(1.1);
  }
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

  const navigate = useNavigate();
  const { setValue } = useContext(ProductContext);

  const handleClick = (event,param) => {
    event.preventDefault();
    setValue(param);
    navigate('./products');
  }

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
        Welcome to Edge Car Accessories, your one-stop shop for high-quality car accessories. Whether you're looking to upgrade your vehicle's performance, enhance its appearance, or improve its functionality, we have everything you need to take your car to the next level. Explore our wide range of car accessories and discover the perfect additions to make your ride truly stand out on the road.      </Content>
      <Elements>
        {EdgeData.map((data,id) => (
          <Element key={id} onClick={event => handleClick(event, data.product)}>
          <SingleImage>
            <MyIcon Img={data.img} />
          </SingleImage>  
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