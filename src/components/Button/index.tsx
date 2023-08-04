import * as S from './style';

interface ButtonProps extends S.ButtonStyleProps {
  dataTestId?: string;
  onClick?: () => void;
  buttonText: string;
}

const Button = ({ size, type, dataTestId, onClick, buttonText }: ButtonProps) => {
  return (
    <S.Button size={size} type={type} data-testid={dataTestId} onClick={onClick}>
      {buttonText}
    </S.Button>
  );
};

export default Button;
