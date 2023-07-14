import React, { useRef } from 'react';
import styled from 'styled-components';
import logo from '../assests/logo.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import phoneIcon from '../assests/phone.png';
import clockIcon from '../assests/timing.png';
import { devices, devicesMin } from '../devices';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #f2f2f2;
  font-family: Cabin, sans-serif;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  @media ${devices.tablet}{
    align-items:center;
}
`;

const FirstFooterRow = styled(FooterRow)`
  margin-right: 30px;
`

const FooterSecondRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  `

const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImage = styled.img`
  width: 150px;
  height: 50px;
  margin-left: 80px;

  @media ${devices.tablet} {
    margin-left: 0;
    align-self: center;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #555;
  margin-left: 70px;
  max-width: 350px;
  margin-top: 2px;

  @media ${devices.tablet} {
    margin-left: 0;
    text-align: center;
    margin-top: 10px;
  }
`;

const FollowUsText = styled.h4`
  font-size: 16px;
  margin-right: 180px;
  margin-top: 3px;
  color: #000;

  @media ${devices.tablet} {
    margin-right: 0;
    align-self: center;
    margin-top: 10px;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left:70px;

  @media ${devices.tablet} {
    display: none;
  }
`;


const SocialIcons = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  margin-right: 100px;
  margin-top: 0px;
  padding: 0;

  @media ${devices.tablet} {
    margin-right: 0;
    justify-content: center;
  }
`;

const SocialIconItem = styled.li`
  margin-right: 40px;
`;

const SocialLink = styled.a`
  color: #000;
  font-size: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

const FooterSocialTablet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  @media ${devicesMin.tablet} {
    display: none;
  }
`;

const FooterHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #000;

  @media ${devices.tablet} {
    font-size: 16px;
  }
  @media ${devices.laptop} {
    font-size: 14px;
  }
`;

const FooterParagraph = styled.p`
  font-size: 14px;
  color: #555;
  cursor: pointer;
  text-align: ${(props) => (props.alignRight ? 'right' : 'left')};
  &:hover{
    color: red;
  }
`;

const FooterContact = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const FooterContactText = styled.p`
  font-size: 14px;
  margin-left: 20px;
  color: #000;
`;

const FooterTiming = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const FooterTimingText = styled.p`
  font-size: 14px;
  margin-left: 20px;
  color: #000;
`;

const FooterSecondaryContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  font-family: Cabin, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const CopyRightContainer = styled.div`
  display: flex;
  margin-left: 70px;
  margin-right: 190px;

  @media ${devices.tablet} {
    margin: 0;
    margin-bottom: 10px;
  }
`;

const CopyRightText = styled.p`
  font-size: 14px;
  color: #000;
  margin-right: 40px;
  @media ${devices.tablet}{
    margin:0px 5px;
  }
`;

const RightAlignedCopyRightText = styled.p`
  font-size: 14px;
  color: #000;
  text-align: right;
  margin-right: 30px;
`;

const Footer = () => {

  const handleClick = (e, id) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      const offset = element.offsetTop - 70;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <FooterContainer>
        <Container>
          <FirstFooterRow>
            <FooterLogo>
              <LogoImage src={logo} alt="Logo" />
              <FooterText>
                At Edge Car Care Accessories, we are dedicated to providing you with the best car accessories to enhance your driving experience.
                Contact our friendly support team for any inquiries or assistance. We value your privacy and have implemented secure shopping and data protection measures. Stay connected with us on social media for the latest updates and promotions.              </FooterText>
            </FooterLogo>
            <FooterSocial>
              <FollowUsText>Follow Us on</FollowUsText>
              <SocialIcons>
                <SocialIconItem>
                  <SocialLink href="#">
                    <FaFacebook />
                  </SocialLink>
                </SocialIconItem>
                <SocialIconItem>
                  <SocialLink href="#">
                    <FaTwitter />
                  </SocialLink>
                </SocialIconItem>
                <SocialIconItem>
                  <SocialLink href="#">
                    <FaInstagram />
                  </SocialLink>
                </SocialIconItem>
              </SocialIcons>
            </FooterSocial>
          </FirstFooterRow>
          <FooterSecondRow>
            <FooterRow>
              <div>
                <FooterHeading>QUICK LINK</FooterHeading>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <FooterParagraph>Home</FooterParagraph>
                </Link>
                <Link to="/products" style={{ textDecoration: 'none' }}>
                  <FooterParagraph>Products</FooterParagraph>
                </Link>
                <FooterParagraph onClick={(e) => handleClick(e, "testimonials")}>Testimonials</FooterParagraph>
                <FooterParagraph onClick={(e) => handleClick(e, "quote")}>Get Quote</FooterParagraph>
                <FooterParagraph onClick={(e) => handleClick(e, "Location")}>Location</FooterParagraph>
              </div>
            </FooterRow>
            <FooterRow>
              <div>
                <FooterHeading>CONTACT & INFORMATION</FooterHeading>
                <FooterContact>
                  <img src={phoneIcon} alt="Phone Icon" style={{ width: '50px', height: '50px' }} />
                  <a href="tel:9008536537" style={{ textDecoration: 'none' }}>
                    <div style={{ cursor: 'pointer' }}>
                      <FooterContactText>Phone Number:</FooterContactText>
                      <FooterContactText style={{ fontWeight: 600 }}>9008536537</FooterContactText>
                    </div>
                  </a>
                </FooterContact>
                <FooterTiming>
                  <img src={clockIcon} alt="Clock Icon" style={{ width: '50px', height: '50px' }} />
                  <div>
                    <FooterTimingText>Opening Hours:</FooterTimingText>
                    <FooterTimingText style={{ fontWeight: 600 }}>09:00 AM - 10:00 PM</FooterTimingText>
                  </div>
                </FooterTiming>
              </div>
            </FooterRow>
          </FooterSecondRow>
        </Container>
      </FooterContainer>
      <FooterSocialTablet>
        <FollowUsText>Follow Us on</FollowUsText>
        <SocialIcons style={{ marginLeft: '40px' }}>
          <SocialIconItem>
            <SocialLink href="#">
              <FaFacebook />
            </SocialLink>
          </SocialIconItem>
          <SocialIconItem>
            <SocialLink href="#">
              <FaTwitter />
            </SocialLink>
          </SocialIconItem>
          <SocialIconItem>
            <SocialLink href="#">
              <FaInstagram />
            </SocialLink>
          </SocialIconItem>
        </SocialIcons>
      </FooterSocialTablet>
      <FooterSecondaryContainer>
        <CopyRightContainer>
          <CopyRightText>© EdgeCarCareAccessories</CopyRightText>
          <CopyRightText>All Right Reserved</CopyRightText>
        </CopyRightContainer>
        <Link to="/terms&Condition" style={{ textDecoration: 'none' }}>
          <CopyRightContainer>
            <RightAlignedCopyRightText>Terms of Use  &  Privacy Policy</RightAlignedCopyRightText>
          </CopyRightContainer>
        </Link>
      </FooterSecondaryContainer>
    </>
  );
};

export default Footer;
