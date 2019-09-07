import styled from 'styled-components';


export const Card = styled.div`
  
  div{
    background: url('${props => props.bgImg}');
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: 140%;
    background-position: center;
    transition: 0.3s;
    height: ${props => props.hCard};
  }

`;

export const LinkCard = styled.div`
  a{

  }
`;

export default Card;
