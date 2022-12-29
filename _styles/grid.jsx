import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 3rem;
  align-self: center;
  align-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: fit;
`;

export const Card = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

/* @include tabletSS {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
    padding-bottom: 0;
  }

  @include mobileSS {
    grid-template-columns: repeat(1, 1fr);
    padding: 2rem;
    padding-bottom: 0;
  } */
