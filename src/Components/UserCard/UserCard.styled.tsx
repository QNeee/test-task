import styled from 'styled-components'
export const Container = styled.div`
margin-top:168px;
display: flex;
justify-content: center;
align-items: center;
`;
export const UserCardContainer = styled.div`
width: 380px;
height: 460px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;

`;
export const LogoImg = styled.img`
display: flex;
justify-content: start;
padding-left:20px;
padding-top:20px;
border-radius: 85.9232px;
`;
export const ImageContainer = styled.div`
margin-top: -20px;
display: flex;
justify-content: center;
align-items: center;
`;
export const BoyImg = styled.img`
position: relative;
left:150px;
z-index: 1;
`;
export const LineImg = styled.img`
margin-left: -90px;
`

export const P = styled.p`
margin-left: auto;
margin-right:auto;
min-width: 132px;
height: 24px;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;

color: #EBD8FF;
`;
export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Button = styled.button<{ primary: boolean }>`
width: 196px;
height: 50px;
background: ${props => props.primary ? '#EBD8FF' : '#5CD3A8'};
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
text-transform: uppercase;
cursor: pointer;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
`;
export const MainContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
width: 1200px;
margin-left:auto;
margin-right: auto;
`;