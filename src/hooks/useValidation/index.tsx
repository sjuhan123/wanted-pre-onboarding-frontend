import { useState, useEffect } from 'react';

const useValidation = (email: string, password: string) => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    setIsEmailValid(email.includes('@'));
  }, [email]);

  useEffect(() => {
    setIsPasswordValid(password.length >= 8);
  }, [password]);

  const isValid = isEmailValid && isPasswordValid;

  return { isValid, isEmailValid, isPasswordValid };
};

export default useValidation;
