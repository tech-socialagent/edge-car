import React from 'react';
import { styled } from 'styled-components';
import { BsQuote } from 'react-icons/bs'
import Slider from 'react-slick';
import { TestimonialContent } from '../data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {devices} from '../devices.js';

const Container = styled.div`
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
  border-bottom: 2px solid red;
  width: max-content;
`

const Main = styled.div`
  display: flex !important;
  flex-direction: row;
  gap: 4rem;
  @media ${devices.tablet}{
    flex-direction: column;
    align-items: center;
    text-align:center;
    gap : 10px;
  }
`

const MyIcon = styled.img.attrs(props => ({
    src: props.Img,
}))`
  min-width: 450px;
  height: 300px;
  object-fit: cover;
  border: 1px solid #ffffff4e;  
  @media ${devices.laptop}{
    min-width: 350px
  }
  `;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
`
const Content = styled.p`
  width: 90%;
  font-weight: 100;
  margin-top: 0px;
  @media ${devices.tablet}{
    width: 100%;
  }
`
const Quote = styled.h1`
  font-size: 60px;
  color: #FFFFFF40;
  margin-bottom: 0px;
  margin-top: 0px;
  @media ${devices.tablet}{
    font-size: 40px;
  }
`
const Horizontal = styled.hr`
  width: 100%;
  color: #FFFFFF;
  margin-top: 4rem;`

function Testimonials() {
    const settings = {
        fade: true,
        speed: 500, // ms
        autoplay: true,
        initialSlide: 2,
        lazyLoad: true,
        autoplaySpeed: 2000,
        arrows: false,
    };
    return (
        <Container id='testimonials'>
            <Header>Testimonials</Header>
            <Slider {...settings}>
                {TestimonialContent.map((item, index) => (
                    <Main key={index}>
                        <MyIcon Img={item.img} />
                        <Right>
                            <Title>{item.title}</Title>
                            <Quote><BsQuote/></Quote>
                            <Content>{item.content}</Content>
                        </Right>
                    </Main>
                ))}
            </Slider>
            <Horizontal />
        </Container>
    );
}

export default Testimonials;