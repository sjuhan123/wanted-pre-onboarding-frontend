import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();

  return (
    <S.LayoutBox>
      <header onClick={() => navigate('/')}>TODO APP</header>
      <main>{children}</main>
    </S.LayoutBox>
  );
};

export default Layout;
