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
import { RefsContext } from '../hooks/refsContext';

const App = () => {
  const contactUs = useRef(null);
  const main = useRef(null);
  const cases = useRef(null);
  const values = useRef(null);
  const electricity = useRef(null);
  const faq = useRef(null);
  const sectionRefs = { contactUs, cases, main, values, electricity, faq };
  console.log(cases.current);

  return (
    <RefsContext.Provider value={sectionRefs}>
      <Header refs={contactUs} />
      <main>
        <MainSection id={MENU_ITEMS[0].anchor} ref={main} />
        <ValuesSection id={MENU_ITEMS[1].anchor} ref={values} />
        <ElectricitySection id={MENU_ITEMS[2].anchor} refs={electricity} />
        <CasesSection id={MENU_ITEMS[3].anchor} ref={cases} />
        <FaqSection id={MENU_ITEMS[4].anchor} ref={faq} />
        <ContactsSection id={MENU_ITEMS[6].anchor} ref={contactUs} />
      </main>
      <Footer />
      <GlobalStyle />
    </RefsContext.Provider>
  );
};

export default App;
