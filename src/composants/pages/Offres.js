import React from 'react'
import Styled from 'styled-components'
import {Card,Button} from 'react-bootstrap';

const Frag = Styled.div`
display: block;
 margin-left: auto;
 margin-right: auto;

`;
const PDiv = Styled.div`
    width:38%;
    margin:0 auto;
    text-align: center;
    margin-top:2em;
    font-weight: 400;
    line-height: 1.5;
    font-family: sans-serif;

 `;
 const Flex = Styled.div`

        margin:0 auto;
        width: 80%;
        display: flex;
        flex-wrap: wrap; 
 `;

 const Cardd = Styled.h3`
    font-size:30px;
    text-align:center;

 `;
const Offres = () =>(
<Frag>
    <PDiv>
        <h1>Nos Offres</h1>
        <p>Quickly build an effective pricing table for your potential customers with this Bootsrap example . it's built with default Bootstrap components and utilities with little  customization</p>
    </PDiv>
    <Flex>
        <Card className="divw">
            <Card.Header>Etudiants</Card.Header>
                <Card.Body>
                <Card.Title><Cardd>GRATUIT</Cardd></Card.Title>
                <Card.Text>
                    <p>Lorem Ipsum is simply dummy</p>
                    <p>Lorem Ipsum is simply dummy</p>
                    <p>Lorem Ipsum is simply dummy</p>
                </Card.Text>
                <Button  className="btn  btn-sm btn-block" variant="outline-primary">Demander un compte</Button>
            </Card.Body>
        </Card>
        <Card className="divw">
            <Card.Header>Pro</Card.Header>
                <Card.Body>
                <Card.Title><Cardd>150 DH/mois</Cardd></Card.Title>
                <Card.Text>
                    <p>Lorem Ipsum is simply dummy</p>
                    <p>Lorem Ipsum is simply dummy</p>
                    <p>Lorem Ipsum is simply dummy</p>
                </Card.Text>
                <Button className="btn  btn-sm btn-block"  variant="primary">Acheter</Button>
            </Card.Body>
        </Card>
        <Card className="divw">
            <Card.Header>Entreprise</Card.Header>
                <Card.Body>
                <Card.Title><Cardd>290 DH/mois</Cardd></Card.Title>
                <Card.Text>
                    <p>Lorem Ipsum is simply dummy</p>
                    <p>Lorem Ipsum is simply dummy</p>
                    <p>Lorem Ipsum is simply dummy</p>
                </Card.Text>
                <Button  className="btn  btn-sm btn-block" variant="primary">Acheter</Button>
            </Card.Body>
        </Card>
    </Flex>
    
</Frag>)
export default Offres;