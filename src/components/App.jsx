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
import { MENU_ITEMS } from '../constants/content';

const App = () => {
  const [isMenuOpen, onMenuToogle] = useMenuToggle();
  const contactUs = useRef(null);
  // const mainRef = useRef(null);

  return (
    <>
      <Header handleMenuOpen={onMenuToogle} contactUs={contactUs} />
      <main>
        <MainSection id={MENU_ITEMS[0].anchor} />
        <ValuesSection id={MENU_ITEMS[1].anchor} />
        <ElectricitySection id={MENU_ITEMS[2].anchor} />
        <CasesSection id={MENU_ITEMS[3].anchor} />
        <FaqSection id={MENU_ITEMS[4].anchor} />
        <ContactsSection id={MENU_ITEMS[6].anchor} ref={contactUs} />
      </main>
      <Footer />
      {isMenuOpen && <Menu handleMenuClose={onMenuToogle} />}
      <GlobalStyle />
    </>
  );
};

export default App;
