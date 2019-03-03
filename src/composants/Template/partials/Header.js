import React  from 'react';
import Styled from 'styled-components'
 const Header = Styled.div`
 `;
 export default (props) =>(
     <Header>
         {props.children}
     </Header>
 )