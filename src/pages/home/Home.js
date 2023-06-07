import React from 'react';
import { styled } from 'styled-components';
import Header from '../../components/header';
import Edge from '../../components/edge';
import Showroom from '../../components/showroom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

function Home() {
    return ( 
        <Container>
            <Header/>
            <Edge/>
            <Showroom/>
        </Container>
     );
}

export default Home;