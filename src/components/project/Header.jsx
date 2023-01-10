import styled, { keyframes } from 'styled-components';
import Container from '../design/Container';
import { breakpoints } from "../variables"


const { lg } = breakpoints;
const slideOpen = keyframes`
0% {
    transform: translateY(-100%);
}

100% {
    transform: translateY(0);
}`
export const Logo = styled.div`
margin-right: auto;
font-weight: bolder;
font-size:1.75rem;
letter-spacing: 1px;
&:has(>img){
    display:flex;
    column-gap:0.5rem;
    align-items:center;
}
&>img{
    height:100%;
    width:auto;
}
`
const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--white);
    width: 100%;
    padding-block: 20px;
    box-shadow: var(--shadow-1);
    z-index: 4;

    @media (min-width: ${lg}){
        top: 45px;
        max-width: 960px;
        left: 50%;
        transform: translateX(-50%);
        padding-inline: 16px;
        border-radius: 50px;
    }

&>${Container}{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
&.isActive{
position: fixed;
animation: ${slideOpen} .5s ease forwards;
}

`;

export default Header;