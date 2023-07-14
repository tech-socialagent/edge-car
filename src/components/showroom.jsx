import React from 'react';
import { styled } from 'styled-components';
import { ShowroomImg } from '../data';
import { devices } from '../devices';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3rem 2rem;
  @media ${devices.tablet}{
    margin: 0rem 1rem 2rem;
}
`

const Header = styled.h1`
  font-size: 40px;
  font-weight: medium;
  border-bottom: 2px solid red;
  width: max-content;
  margin-bottom: 5px;
`
const Content = styled.p`
  width: 100%;
  margin-bottom:25px;
`
const Text = styled.p`
  color: red;
  margin-bottom:8px;
`

const ImageContainer = styled.div`
  width:100%;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(30.333%, 1fr));
  gap: 1rem`

const SingleImage = styled.div`
  width: 100%;
  overflow: hidden;
  cursor: pointer;
`

const MyIcon = styled.img.attrs(props => ({
    src: props.Img,
  }))`
  width: 100%;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
  `;

function Showroom() {
    return ( 
        <Container>
            <Header>Showroom</Header>
            <Text>“Its One Reason To Work With Us.”</Text>
            <Content>
              Experience exceptional customer service and find the perfect car accessories to elevate your driving experience. Shop with us and enjoy quality products, expert guidance, and a seamless shopping journey.
            </Content>
            <ImageContainer>
            {ShowroomImg.map((each)=>(
              <SingleImage>
                <MyIcon Img={each.img}/>
              </SingleImage>
            ))}
            </ImageContainer>
        </Container>
     );
}

export default Showroom;