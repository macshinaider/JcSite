import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px; /* Defina o tamanho desejado para o avatar */
    height: 100px;
    border-radius: 50%; /* Aplica uma forma circular */
    object-fit: cover;
  }
`;
