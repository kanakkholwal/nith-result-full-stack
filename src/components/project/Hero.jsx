import styled from "styled-components";
import Container from "../design/Container";


const Hero = styled.div`
padding-block:calc(var(--section-padding) + 50px) calc(var(--section-padding));
background: var(--dense-bg);
&>${Container} {
text-align:center;
h1{
    margin-bottom:1.25rem;
}
}
`;


export default Hero;