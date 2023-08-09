import styled from 'styled-components';

export const LayoutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 30vh;
  width: 100vw;

  header {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    font-size: 60px;
    font-weight: bold;
    cursor: pointer;
  }

  main {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;
