import React, { PropsWithChildren } from 'react';
import Footer from '../components/Footer';

interface GlobalLayoutProps extends PropsWithChildren<{}> {}

function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <div>
     <div className='min-h-[81vh] gradient-background '>
     {children}
     </div>
      <Footer />
    </div>
  );
}

export default GlobalLayout;
