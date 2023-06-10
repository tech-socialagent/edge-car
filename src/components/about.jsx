import React from 'react';
import styled from 'styled-components';
import carBackground from '../assests/car-background.png';
import { devices } from '../devices';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${carBackground});
  background-size: cover;
  margin-top:0px;
  padding: 30px;
  @media ${devices.tablet}{
    margin: 0rem 1rem;
}
`;

const ContentContainer = styled.div`
  margin: 0;
  margin-left:30px;
  margin-right:20px;
`;

const Heading = styled.h1`
  color: #ffffff;
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: medium;
  border-bottom: 2px solid red;
  width: max-content;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  gap: 80px;
  @media ${devices.tablet}{
    flex-direction : column;
    gap: 5px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const SectionHeading = styled.h3`
  color: #ffffff;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const SectionParagraph = styled.p`
  color: #ffffff;
  max-width: 800px;
  margin-top: 10px;
`;

const BulletList = styled.ul`
  list-style-type: disc;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 0px;
  flex-wrap: wrap;
`;

const BulletPoint = styled.li`
  margin-bottom: 10px;
  margin-left: 40px;
  width: 32%;
`;

const AboutUs = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Heading>About Us</Heading>
        <SectionContainer>
          <Section>
            <SectionHeading>Who we are</SectionHeading>
            <SectionParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat exercitation ullamco laboris nis.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat exercitation ullamco laboris
              nis.
            </SectionParagraph>
          </Section>
          <Section>
            <SectionHeading>Who we are</SectionHeading>
            <SectionParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat exercitation ullamco laboris nis.
            </SectionParagraph>
          </Section>
        </SectionContainer>
        <Section>
          <SectionHeading>Brands we deal in:</SectionHeading>
          <SectionContainer>
            <Section>
              <SectionHeading>Audio System</SectionHeading>
              <SectionParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat exercitation ullamco laboris nis.
              </SectionParagraph>
            </Section>
            <Section>
              <SectionHeading>Seat Covers</SectionHeading>
              <SectionParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat exercitation ullamco laboris nis.
              </SectionParagraph>
            </Section>
          </SectionContainer>
          <SectionContainer>
            <Section>
              <SectionHeading>Sun Film</SectionHeading>
              <SectionParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat exercitation ullamco laboris nis.
              </SectionParagraph>
            </Section>
            <Section>
              <SectionHeading>Add-Ons</SectionHeading>
              <SectionParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat exercitation ullamco laboris nis.
              </SectionParagraph>
            </Section>
          </SectionContainer>
        </Section>
        <Section>
          <SectionHeading>Why Us</SectionHeading>
          <SectionParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat exercitation ullamco laboris nis.Lorem ipsum dolor sit amet.
          </SectionParagraph>
          <BulletList>
            <BulletPoint>Wide range of products available</BulletPoint>
            <BulletPoint>Wide range of products available</BulletPoint>
            <BulletPoint>Wide range of products available</BulletPoint>
            <BulletPoint>Wide range of products available</BulletPoint>
            <BulletPoint>Wide range of products available</BulletPoint>
            <BulletPoint>Wide range of products available</BulletPoint>
            <BulletPoint>Wide range of products available</BulletPoint>
            <BulletPoint>Wide range of products available</BulletPoint>
          </BulletList>
        </Section>
      </ContentContainer>
    </PageContainer>
  );
};

export default AboutUs;