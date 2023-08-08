import { ReactNode } from 'react';
import * as S from './style';

interface LayoutProps {
  header: string;
  children: ReactNode;
}

const Layout = ({ header, children }: LayoutProps) => {
  return (
    <S.LayoutBox>
      <header>{header}</header>
      <main>{children}</main>
    </S.LayoutBox>
  );
};

export default Layout;
