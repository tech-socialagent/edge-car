import React, { useState } from 'react';
import { styled } from 'styled-components';
import { QuoteImages } from '../data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { devices } from '../devices';
import emailjs from "emailjs-com";

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 3rem;
  margin-bottom: 2rem;
  @media ${devices.tablet} {
    margin: 0rem 1rem;
  }
`;

const Header = styled.h1`
  font-size: 40px;
  font-weight: medium;
  border-bottom: 2px solid red;
  width: max-content;
`;

const Main = styled.div`
  display: grid !important;
  grid-template-columns: 300px auto;
  gap: 5rem !important;
  margin: 0 3rem !important;
  @media ${devices.laptop} {
    grid-template-columns: 250px auto;
  }
  @media (max-width: 850px) {
    display: flex !important;
    flex-direction: column;
    margin: 0 1rem !important;
    gap: 2rem !important;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
`;

const MyIcon = styled.img.attrs(props => ({
  src: props.Img,
}))`
  height: 350px;
  width: 300px;
  border-radius: 15px;
  margin: 0 auto; 
  
  @media ${devices.laptop} {
    height: 250px;
    width: 250px;
  }
  @media ${devices.tablet} {
    height: 250px;
    width: 350px;
  }
  @media ${devices.mobileL} {
    height: 300px;
    width: 300px;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
`;

const Menus = styled.div`
  display: flex;
  gap: 2%;
  @media (max-width: 430px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const MenyuItem = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  gap : 10px;
  color-scheme: dark;
`;

const Input = styled.input`
  height: 30px;
  background-color: transparent;
  outline: none;
  border: 1px solid #ffffff4e;
  border-radius: 10px;
  padding: 5px 10px;
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: lighter;
`;



const Button = styled.button`
  width: 250px;
  height: 30px;
  outline: none;
  border: 1px #ffffff solid;
  background-color: transparent;
  color: #ffffff;
  padding: 5px 0px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  @media ${devices.laptop} {
    width: 200px;
  }
  @media ${devices.tablet} {
    width: 150px;
  }
`;

const Horizontal = styled.hr`
  width: 100%;
  color: #ffffff;
  margin-top: 4rem;
`;

function Quote() {
  const settings = {
    fade: true,
    speed: 500,
    autoplay: true,
    initialSlide: 2,
    lazyLoad: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    p_require: '',
    number: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.send("service_364xzd8", "template_n2v1ixd",formData,"VwBZmlFFiOgq5YPW6")
      .then(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          p_require: '',
          number: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <QuoteContainer id="quote">
      <Header>Get Quote</Header>
      <Main>
        <SliderContainer>
          <Slider {...settings}>
            {QuoteImages.map((item, index) => (
              <div key={index}>
                <MyIcon Img={item.img} />
              </div>
            ))}
          </Slider>
        </SliderContainer>
        <Form onSubmit={handleSubmit}>
          <Menus>
            <MenyuItem>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="Full name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </MenyuItem>
            <MenyuItem>
              <Label>Phone</Label>
              <Input
                type="tel"
                placeholder="9876543210"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </MenyuItem>
          </Menus>
          <Menus>
            <MenyuItem>
              <Label>Date</Label>
              <Input
                type="text"
                placeholder="Date"
                onFocus={(e) => (e.target.type = 'date')}
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </MenyuItem>
            <MenyuItem>
              <Label>Email id</Label>
              <Input
                type="email"
                placeholder="Type Email id"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </MenyuItem>
          </Menus>
          <Menus>
            <MenyuItem>
              <Label>Product Requirement</Label>
              <Input
                type="text"
                placeholder="Product Requirement"
                name="p_require"
                value={formData.p_require}
                onChange={handleInputChange}
                required
              />
            </MenyuItem>
            <MenyuItem>
              <Label>No. Of Products Required</Label>
              <Input
                type="tel"
                placeholder="Total No. Of Products "
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                required
              />
            </MenyuItem>
          </Menus>
          <MenyuItem>
            <Label>Message</Label>
            <Input
              type="text"
              placeholder="Include a message..."
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              style={{height: '50px'}}
            />
          </MenyuItem>
          <Button type='submit'>Quote</Button>
        </Form>
      </Main>
      <Horizontal />
    </QuoteContainer>
  );
}

export default Quote;
