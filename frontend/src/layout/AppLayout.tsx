import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import './appLayout.css';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};