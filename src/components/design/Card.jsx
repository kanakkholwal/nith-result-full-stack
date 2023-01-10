import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    background: var(--card-bg);
    box-shadow: var(--card-shadow);
    --border-radius: 0.5rem;
    border-radius: var(--border-radius,.5rem);
`;
export const CardBody = styled.div`
flex: 1 1 auto;
padding: 1.5rem;
`;
export const CardHeader = styled.div`
flex: 1 1 auto;
padding: 1.5rem;
`;


export default Card;