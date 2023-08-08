import styled from 'styled-components';

export interface InputProps {
  $isValid?: boolean;
}

export const Input = styled.input<InputProps>`
  border: 1px solid ${({ theme, $isValid }) => ($isValid ? theme.COLORS.ROYAL_BULE : theme.COLORS.RED)};
  border-radius: 8px;
  height: 3vh;
  width: 100%;
  cursor: pointer;
  text-align: center;
`;

export const HelperText = styled.p`
  color: ${({ theme }) => theme.COLORS.RED};
  font-size: 0.8rem;
  margin: 0;
`;
