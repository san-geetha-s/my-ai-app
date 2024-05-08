// components/Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-background-image bg-cover bg-center min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
