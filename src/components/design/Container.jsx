import styled from 'styled-components';
import { breakpoints } from "../variables"


const { sm, lg, xl, xxl } = breakpoints;


const Container = styled.div`
padding-inline: 16px;

@media (min-width:${sm}) {
    width: 100%;
    margin-inline: auto;
}

@media (min-width:${lg}) {
    max-width: 960px;
}

@media (min-width:${xl}) {
        max-width: 1140px;
}

@media (min-width:${xxl}) {
        max-width: 1320px;

}
`;

export default Container;