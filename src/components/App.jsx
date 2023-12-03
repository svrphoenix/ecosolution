import { useRef, useState } from 'react';
import CasesSection from './CasesSection/CasesSection';
import ElectricitySection from './ElectricitySection/ElectricitySection';
import FaqSection from './FaqSection/FaqSection';
import Footer from './Footer/Footer';
import GlobalStyle from './GlobalStyle';
import Header from './Header/Header';
import MainSection from './MainSection/MainSection';
import ValuesSection from './ValuesSection/ValuesSection';
import ContactsSection from './ContacsSection/ContactsSection';
import Menu from './Menu/Menu';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contactUs = useRef(null);
  // const mainRef = useRef(null);

  const handleMenuToogle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header handleMenuOpen={handleMenuToogle} contactUs={contactUs} />
      <main>
        <MainSection />
        <ValuesSection />
        <ElectricitySection />
        <CasesSection />
        <FaqSection />
        <ContactsSection ref={contactUs} />
      </main>
      <Footer />
      {isMenuOpen && <Menu handleMenuClose={handleMenuToogle} />}
      <GlobalStyle />
    </>
  );
};

export default App;
