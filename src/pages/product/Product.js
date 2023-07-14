import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import Navbar from '../../components/Navbar';
import Brands from '../../components/brands';
import Footer from '../../components/footer';
import { useLocation } from 'react-router';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

function Product() {

    const ScrollToTop = () => {
        const { pathname } = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);
      
        return null;
      };

    return ( 
        <Container>
            <Navbar page="product"/>
            <Brands/>
            <Footer/>
            <ScrollToTop/>
        </Container>
     );
}

export default Product;