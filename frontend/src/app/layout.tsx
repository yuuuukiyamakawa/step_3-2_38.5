import "./globals.css";
import React from 'react';

type NoHeaderLayoutProps = {
  children: React.ReactNode;
};

const NoHeaderLayout: React.FC<NoHeaderLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default NoHeaderLayout;