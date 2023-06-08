import React from 'react';
import { styled } from 'styled-components';
import { QuoteImages } from '../data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const QuoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0rem 3rem;
    margin-bottom:2rem;
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
    gap:5rem !important;
    margin: 0 3rem !important;`

const MyIcon = styled.img.attrs(props => ({
    src: props.Img,
}))`
      width: 300px;
      height: 350px;
      border-radius: 15px;
      `;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap:1rem;`

const Menus = styled.div`
    display: flex;
    gap:3rem;
`
const MenyuItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    color-scheme: dark;
    `
const Input = styled.input`
    width: 300px;
    height: 30px;
    outline: none;
    border: 1px #FFFFFF solid;
    background-color:transparent;
    padding: 5px 10px;
    border-radius: 5px;
    color: #3D3C3C;

`
const Label = styled.span`
    font-size: 14px;
    font-weight: lighter;
`
const Message = styled.input`
    width: 670px;
    height: 80px;
    outline: none;
    border: 1px #FFFFFF solid;
    background-color:transparent;
    padding: 0px 10px;
    border-radius: 5px;
    color: #3D3C3C;`

const Button = styled.button`
    width: 250px;
    height: 30px;
    outline: none;
    outline: none;
    border: 1px #FFFFFF solid;
    background-color:transparent;
    color: #FFFFFF;
    padding: 5px 0px;
    margin-top: 10px;`

const Horizontal = styled.hr`
  width: 100%;
  color: #FFFFFF;
  margin-top: 4rem;`


function Quote() {
    const settings = {
        fade: true,
        speed: 500, // ms
        autoplay: true,
        initialSlide: 2,
        lazyLoad: true,
        autoplaySpeed: 1500,
        arrows: false,
    };
    return (
        <QuoteContainer id="quote">
            <Header>Get Quote</Header>
            <Main>
                <div style={{width: "30%"}}>
                    <Slider {...settings}>
                        {QuoteImages.map((item, index) => (
                            <div>
                                <MyIcon Img={item.img} />
                            </div>
                        ))}
                    </Slider></div>
                <Form>
                    <Menus>
                        <MenyuItem>
                            <Label>Name</Label>
                            <Input type="text" placeholder="Full name" />
                        </MenyuItem>
                        <MenyuItem>
                            <Label>Phone</Label>
                            <Input type="tel" placeholder="9876543210" />
                        </MenyuItem>
                    </Menus>
                    <Menus>
                        <MenyuItem>
                            <Label>Date</Label>
                            <Input type="date" />
                        </MenyuItem>
                        <MenyuItem>
                            <Label>Email id</Label>
                            <Input type="email" placeholder="Type Email id" />
                        </MenyuItem>
                    </Menus>
                    <Menus>
                        <MenyuItem>
                            <Label>Product Requirement</Label>
                            <Input type="text" placeholder="Product Requirement" />
                        </MenyuItem>
                        <MenyuItem>
                            <Label>Total No. Of Products Required</Label>
                            <Input type="tel" placeholder="Total No. Of Products " />
                        </MenyuItem>
                    </Menus>
                    <MenyuItem>
                        <Label>Message</Label>
                        <Message type="text" placeholder="Product Requirement" />
                    </MenyuItem>
                    <Button>Quote</Button>
                </Form>
            </Main>
            <Horizontal />
        </QuoteContainer>
    );
}

export default Quote;