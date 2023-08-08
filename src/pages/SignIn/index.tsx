import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { Spinner } from '../../components/Spinner/style';
import TextInput from '../../components/TextInput';
import { DATA_TEST_ID, URL } from '../../constants';
import { END_POINT } from '../../constants/endpoint';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import useValidation from '../../hooks/useValidation';

type AccessToken = {
  access_token: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const { data, status, fetchData } = useFetch<AccessToken>();

  const { values, handleChange, handleSubmit } = useForm({
    initialValues: { email: '', password: '' },
    onSubmit: values => {
      fetchData({
        url: END_POINT.SIGN_IN,
        method: 'POST',
        isGetData: true,
        body: JSON.stringify(values),
        contentsType: { 'Content-Type': 'application/json' },
      });
    },
  });

  const { isValid, isEmailValid, isPasswordValid } = useValidation(values.email, values.password);

  useEffect(() => {
    if (data && status === 'success') {
      localStorage.setItem('token', data.access_token);
      navigate(URL.TODO);
    }
  }, [status, data]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate(URL.TODO);
    }
  }, []);

  return (
    <Layout header="SIGN IN">
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
        dataTestId={DATA_TEST_ID.BUTTON.SIGN_IN}
        buttonContent={status === 'loading' ? <Spinner /> : '로그인'}
        disabled={!isValid}
        onClick={handleSubmit}
      />
    </Layout>
  );
};

export default SignIn;
