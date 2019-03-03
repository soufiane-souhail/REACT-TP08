import React from 'react'
import Styled from 'styled-components'
import {Button} from 'react-bootstrap';

const Frag = Styled.div`
 margin-left: 10%;
 margin-right: 10%;

`;
const PDiv = Styled.div`
    margin-top:2em;
    font-weight: 400;
    line-height: 1.5;
    font-family: sans-serif;

 `;
const Home = () =>(
<Frag>
    <PDiv>
        <h1>Chers Lecteurs, Bonjour!</h1>
        <p>This is a template for a simple marketing or infomational website . it includes a large callout called a jumbotron and three supporting pieces of content . Use it as a starting point to create something more unique .   </p>
        <Button href={'/nos-offres'} variant="primary">Nos offres</Button>
    </PDiv>
    
    
</Frag>)
export default Home;