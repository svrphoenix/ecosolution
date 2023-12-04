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
import { MENU_ITEMS } from '../constants/content';

const App = () => {
  const contactUs = useRef(null);
  const cases = useRef(null);

  return (
    <>
      <Header refs={contactUs} />
      <main>
        <MainSection id={MENU_ITEMS[0].anchor} refs={cases} />
        <ValuesSection id={MENU_ITEMS[1].anchor} />
        <ElectricitySection id={MENU_ITEMS[2].anchor} />
        <CasesSection id={MENU_ITEMS[3].anchor} ref={cases} />
        <FaqSection id={MENU_ITEMS[4].anchor} refs={contactUs} />
        <ContactsSection id={MENU_ITEMS[6].anchor} ref={contactUs} />
      </main>
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;
