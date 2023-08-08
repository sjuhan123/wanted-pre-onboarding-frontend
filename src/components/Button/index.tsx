import { FormEvent } from 'react';
import * as S from './style';

interface ButtonProps extends S.ButtonStyleProps {
  dataTestId?: string;
  onClick?: (e: FormEvent) => void;
  buttonText: string;
  disabled?: boolean;
}

const Button = ({ size, type, dataTestId, onClick, buttonText, disabled }: ButtonProps) => {
  return (
    <S.Button size={size} type={type} data-testid={dataTestId} onClick={onClick} disabled={disabled}>
      {buttonText}
    </S.Button>
  );
};

export default Button;
