import React from 'react';
import { styled } from 'styled-components';
import { BsQuote } from 'react-icons/bs'
import Slider from 'react-slick';
import { TestimonialContent } from '../data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const Main = styled.div`
  display: flex !important;
  flex-direction: row;
  gap: 4rem;
`

const MyIcon = styled.img.attrs(props => ({
    src: props.Img,
}))`
  width: 450px;
  height: 300px;
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
`
const Quote = styled.h1`
  font-size: 60px;
  color: #FFFFFF40;
  margin-bottom: 0px;
  margin-top: 0px;
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