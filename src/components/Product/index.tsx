import React from 'react';
import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';
import {Container, Row, Column, Gallery, Panel, Section, Description} from './styles';

const Product: React.FC = () => {
  return(
    <Container>
    <Row>
      <a href="#" >Compratilhar</a>
      <a href="#" >Vender um igual</a>
    </Row>

    <Panel>
      <Column>
      <Gallery>
        <img alt="T-Shirt" src={tshirtImage}/>
      </Gallery>
      <Info/>
      </Column>


      <Column>
         <ProductAction/>
         <SellerInfo/> 
        <WarrantySection/>
        <WarrantySection/>
        <WarrantySection/>
      </Column>
    </Panel>
    </Container>
  )
}
const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title" >Comprar garantia com o Lorem ipsum</p>
        <p className="description">Receba o produto que você está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title" >Garantia do Vendedor</p>
        <p className="description">Sem garantia</p>

      </span>
    </div>
    <a href="#" >Saiba mais sobre garantia</a>
  </Section>
)
const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, magni sunt totam porro saepe itaque ea tenetur corrupti! Voluptates omnis in nisi vero adipisci eum expedita, corrupti fugiat dolor non.
    <br/>
    <br/>
    Intens inclusos: <br/>
    -1x LED <br/>
    -1x LED <br/>
    -1x LED <br/>
    -1x LED <br/>
    -1x LED <br/>
    -1x LED <br/>
    <br/>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur eos dolore quibusdam sapiente mollitia fugit minima dolorem! Temporibus consequatur, error maiores inventore accusantium asperiores delectus eius architecto, eaque fugit quam!</p>
  </Description>
)

export default Product;