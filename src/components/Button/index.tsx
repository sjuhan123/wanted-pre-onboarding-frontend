import { FormEvent } from 'react';
import * as S from './style';

interface ButtonProps extends S.ButtonStyleProps {
  dataTestId?: string;
  onClick?: (e: FormEvent) => void;
  buttonContent: string | JSX.Element;
  disabled?: boolean;
}

const Button = ({ size, type, dataTestId, onClick, disabled, buttonContent }: ButtonProps) => {
  return (
    <S.Button size={size} type={type} data-testid={dataTestId} onClick={onClick} disabled={disabled}>
      {buttonContent}
    </S.Button>
  );
};

export default Button;
