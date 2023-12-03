import { useRef } from 'react';
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
import useMenuToggle from '../hooks/useMenuToggle';

const App = () => {
  const [isMenuOpen, onMenuToogle] = useMenuToggle();
  const contactUs = useRef(null);
  // const mainRef = useRef(null);

  return (
    <>
      <Header handleMenuOpen={onMenuToogle} contactUs={contactUs} />
      <main>
        <MainSection />
        <ValuesSection />
        <ElectricitySection />
        <CasesSection />
        <FaqSection />
        <ContactsSection ref={contactUs} />
      </main>
      <Footer />
      {isMenuOpen && <Menu handleMenuClose={onMenuToogle} />}
      <GlobalStyle />
    </>
  );
};

export default App;
