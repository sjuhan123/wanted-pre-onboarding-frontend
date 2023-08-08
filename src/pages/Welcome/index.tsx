import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { URL } from '../../constants';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Layout header="TODO APP">
      <Button size="M" type="primary" onClick={() => navigate(URL.SIGN_UP)} buttonContent="회원가입" />
      <Button size="M" type="primary" onClick={() => navigate(URL.SIGN_IN)} buttonContent="로그인" />
    </Layout>
  );
};

export default Welcome;
