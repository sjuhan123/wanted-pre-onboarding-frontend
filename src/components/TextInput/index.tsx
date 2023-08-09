import { ChangeEvent, useState } from 'react';
import * as S from './style';

interface TextInputProps extends S.InputProps {
  name?: string;
  dataTestId?: string;
  placeholder?: string;
  onChange: ({ name, value }: { name: string; value: string }) => void;
  value?: string;
  $isValid?: boolean;
  helperText?: string;
}

const TextInput = ({
  name,
  dataTestId,
  placeholder,
  onChange,
  value = '',
  $isValid = true,
  helperText,
}: TextInputProps) => {
  const [text, setText] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setText(value);
    onChange({ name, value });
  };

  return (
    <>
      <S.Input
        type="text"
        value={text}
        name={name}
        data-testid={dataTestId}
        placeholder={placeholder}
        onChange={handleChange}
        $isValid={!$isValid}
      />
      <S.HelperText>{$isValid && helperText}</S.HelperText>
    </>
  );
};

export default TextInput;
