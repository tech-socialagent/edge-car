import React from 'react';
import styled from 'styled-components';
import { devices } from '../devices';

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 30px;
`;

const Heading = styled.h2`
  color: #ffffff;
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: medium;
  border-bottom: 2px solid red;
  width: max-content;
`;

const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  @media ${devices.mobileL}{
    display : flex !important;
    flex-direction: column;
    gap: 0px;
  }
`;

const MapContainer = styled.div`
  height: 350px;
  @media ${devices.mobileL}{
    height: 250px;
  }
`;

const InfoContainer = styled.div`
  margin-top: 50px;
  text-align: center;
  @media ${devices.mobileL}{
    margin-top: 0px;
  }
`;

const SubHeading = styled.h3`
  display: inline;
  text-align: center;
  margin-bottom: 10px;
  justify-content: center;
  border-bottom: 2px solid red;
`;

const Location = () => {
  return (
    <LocationContainer id="Location">
      <Heading>Location</Heading>
      <RowContainer>
        <MapContainer>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Edge%20Car%20Accessories,%2017th%20Main%20Rd,%20Sector%204,%20HSR%20Layout,%20Bengaluru,%20Karnataka%20560102"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.958951129679!2d77.6410293!3d12.9123815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149ad056c24f%3A0xe31f9334802dcd68!2sEdge%20Car%20Accessories!5e0!3m2!1sen!2sin!4v1623247031550!5m2!1sen!2sin"
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title='Map'
            ></iframe>
          </a>
        </MapContainer>
        <InfoContainer>
          <SubHeading>EDGE CAR ACCESSORIES</SubHeading>
          <p>
            17th Main Rd, near Cafe Coffee Day,
            <br />
            Sector 4, HSR Layout,
            <br />
            Bengaluru, Karnataka 560102
          </p>
        </InfoContainer>
      </RowContainer>
    </LocationContainer>
  );
};

export default Location;