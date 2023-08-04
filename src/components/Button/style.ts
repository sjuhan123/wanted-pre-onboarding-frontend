import styled, { css } from 'styled-components';

export interface ButtonStyleProps {
  size: 'S' | 'M';
  type: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonStyleProps>`
  border: none;
  border-radius: 8px;
  height: 3vh;
  padding: 8px 16px;
  width: ${({ size }) => (size === 'S' ? 'fit-content' : '20vw')};
  color: #fff;
  background-color: ${({ theme, type }) => (type === 'primary' ? theme.COLORS.TURQUISE : theme.COLORS.ROYAL_BULE)};
  cursor: pointer;
`;
