import React from 'react';
import { styled } from 'styled-components';
import Navbar from '../../components/Navbar';
import Brands from '../../components/brands';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

function Product() {
    return ( 
        <Container>
            <Navbar page="product"/>
            <Brands/>
        </Container>
     );
}

export default Product;