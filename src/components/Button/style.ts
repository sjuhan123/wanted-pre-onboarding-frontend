import styled from 'styled-components';

export interface ButtonStyleProps {
  size: 'S' | 'M';
  type: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  height: 3vh;
  width: ${({ size }) => (size === 'S' ? 'fit-content' : '100%')};
  color: #fff;
  background-color: ${({ theme, type }) => (type === 'primary' ? theme.COLORS.TURQUISE : theme.COLORS.ROYAL_BULE)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;
