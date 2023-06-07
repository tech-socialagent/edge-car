import React from 'react';
import { styled } from 'styled-components';

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
const Content = styled.p`
  width: 72%;
`
const Text = styled.p`
`

function Showroom() {
    return ( 
        <Container>
            <Header>Showroom</Header>
            <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Content>
        </Container>
     );
}

export default Showroom;