import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { Spinner } from '../../components/Spinner';
import TextInput from '../../components/TextInput';
import { DATA_TEST_ID, URL } from '../../constants';
import { END_POINT } from '../../constants/endpoint';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import useValidation from '../../hooks/useValidation';

const SignUp = () => {
  const navigate = useNavigate();
  const { status, fetchData } = useFetch();

  const { values, handleChange, handleSubmit } = useForm({
    initialValues: { email: '', password: '' },
    onSubmit: values => {
      fetchData({
        url: END_POINT.SIGN_UP,
        method: 'POST',
        isGetData: false,
        body: JSON.stringify(values),
        contentsType: { 'Content-Type': 'application/json' },
      });
    },
  });

  const { isValid, isEmailValid, isPasswordValid } = useValidation(values.email, values.password);

  useEffect(() => {
    if (status === 'success') {
      navigate(URL.SIGN_IN);
    }
  }, [status]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate(URL.TODO);
    }
  }, []);

  return (
    <Layout header="SIGN UP">
      <TextInput
        name="email"
        dataTestId={DATA_TEST_ID.INPUT.EMAIL}
        placeholder="이메일을 입력해주세요."
        onChange={handleChange}
        $isValid={!isEmailValid && values.email.length > 0}
        helperText={'이메일은 "@"이 포함되어야 합니다.'}
      />
      <TextInput
        name="password"
        dataTestId={DATA_TEST_ID.INPUT.PASSWORD}
        placeholder="비밀번호를 입력해주세요."
        onChange={handleChange}
        $isValid={!isPasswordValid && values.password.length > 0}
        helperText={'비밀번호는 8자 이상이어야 합니다.'}
      />
      <Button
        size="M"
        type="secondary"
        dataTestId={DATA_TEST_ID.BUTTON.SIGN_UP}
        buttonContent={status === 'loading' ? <Spinner /> : '회원가입'}
        disabled={!isValid}
        onClick={handleSubmit}
      />
    </Layout>
  );
};

export default SignUp;
