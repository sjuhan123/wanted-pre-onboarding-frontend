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
    padding: 1rem;
    font-size: 60px;
    font-weight: bold;
  }

  main {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
