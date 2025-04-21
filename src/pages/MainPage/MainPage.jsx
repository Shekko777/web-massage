import React from 'react';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import Header from '../../components/Header/Header';
import Services from './components/Services/Services.jsx';
import Decor from './components/Decor/Decor.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Footer from '../../components/Footer/Footer';

import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <Header />
      <main className="main">
        <ScrollToTopButton />
        <Services />
        <Decor />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
