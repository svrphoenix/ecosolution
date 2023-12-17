import { useRef } from 'react';

import Header from './Header/Header';
import MainSection from '../sections/MainSection/MainSection';
import ValuesSection from '../sections/ValuesSection/ValuesSection';
import ElectricitySection from '../sections/ElectricitySection/ElectricitySection';
import CasesSection from '../sections/CasesSection/CasesSection';
import FaqSection from '../sections/FaqSection/FaqSection';
import ContactsSection from '../sections/ContacsSection/ContactsSection';
import Footer from './Footer/Footer';
import GlobalStyle from './GlobalStyle';

import { RefsContext } from '../hooks/refsContext';
import { sections } from '../assets/content/main.json';

const App = () => {
  const contacts = useRef(null);
  const main = useRef(null);
  const cases = useRef(null);
  const values = useRef(null);
  const electricity = useRef(null);
  const faq = useRef(null);
  const sectionRefs = { contacts, cases, main, values, electricity, faq };

  return (
    <RefsContext.Provider value={sectionRefs}>
      <Header refs={contacts} />
      <main>
        <MainSection sectionId={sections.main.id} ref={main} />
        <ValuesSection sectionId={sections.values.id} ref={values} />
        <ElectricitySection sectionId={sections.electricity.id} refs={electricity} />
        <CasesSection sectionId={sections.cases.id} ref={cases} />
        <FaqSection sectionId={sections.faq.id} ref={faq} />
        <ContactsSection sectionId={sections.contacts.id} ref={contacts} />
      </main>
      <Footer />
      <GlobalStyle />
    </RefsContext.Provider>
  );
};

export default App;
