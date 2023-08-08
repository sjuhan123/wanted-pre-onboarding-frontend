import styled from 'styled-components';

export const LayoutBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

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
    gap: 0.5rem;
  }
`;
