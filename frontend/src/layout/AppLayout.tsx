import { Header } from '../shared/header';
import { Footer } from '../shared/footer';
import { Outlet } from 'react-router-dom';
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