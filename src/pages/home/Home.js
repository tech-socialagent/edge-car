import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import Header from '../../components/header';
import Edge from '../../components/edge';
import Showroom from '../../components/showroom';
import Testimonials from '../../components/testimonials';
import Quote from '../../components/quote';
import AboutUs from '../../components/about';
import Footer from '../../components/footer';
import Location from '../../components/location'
import "@fontsource/cabin"; 
import { useLocation } from 'react-router';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family:"Cabin";
`;

function Home() {
    
    const ScrollToTop = () => {
        const { pathname } = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);
      
        return null;
      };

    return ( 
        <Container>
            <Header/>
            <Edge/>
            <Showroom/>
            <AboutUs/>
            <Testimonials/>
            <Quote/>
            <Location/>
            <Footer/>
            <ScrollToTop/>
        </Container>
     );
}

export default Home;