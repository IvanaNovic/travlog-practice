import { FC, ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

type LayoutProps = {
    children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="mx-auto w-full max-w-[1200px] flex-1 px-4">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;
