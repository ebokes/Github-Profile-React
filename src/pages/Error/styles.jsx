import styled from "styled-components";

export const Error = styled.section`
  height: 100vh;
  /* margin-top: 30rem; */

  h2 {
    color: #000;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  }
`;
export const ErrorBoundarySection = styled.section`
  /* margin: auto; */
  height: 100vh;
  /* width: 100vw; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
`;

export const ErrorTestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40rem;
  gap: 3rem;
  font-family: "Exo", sans-serif;

  h1 {
    font-size: 5rem;
  }

  button {
    /* width: 5rem; */
    padding: 1rem 4rem;
    background-color: ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.white};
    font-size: 2rem;
    border-radius: 1rem;
    /* border: 1px solid ${({ theme }) => theme.color.white}; */
  }
`;