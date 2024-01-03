import { useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import Header from './Header/Header';
import Main from './Main/Main';
import MainSection from '../sections/MainSection/MainSection';
import ValuesSection from '../sections/ValuesSection/ValuesSection';
import ElectricitySection from '../sections/ElectricitySection/ElectricitySection';
import CasesSection from '../sections/CasesSection/CasesSection';
import FaqSection from '../sections/FaqSection/FaqSection';
import ContactsSection from '../sections/ContacsSection/ContactsSection';
import Footer from './Footer/Footer';
import GlobalStyle from './GlobalStyle';
import { RefsContext } from '../hooks/refsContext';

const App = () => {
  const header = useRef(null);
  const contacts = useRef(null);
  const main = useRef(null);
  const cases = useRef(null);
  const values = useRef(null);
  const electricity = useRef(null);
  const faq = useRef(null);
  const sectionRefs = { header, contacts, cases, main, values, electricity, faq };
  const [offset, setOffset] = useState(0);

  const changeHeaderHeight = () => {
    setOffset(parseFloat(header.current.getBoundingClientRect().height));
  };

  return (
    <RefsContext.Provider value={sectionRefs}>
      <Header ref={header} action={changeHeaderHeight} />
      <Main offset={offset}>
        <MainSection ref={main} />
        <ValuesSection ref={values} />
        <ElectricitySection refs={electricity} />
        <CasesSection ref={cases} />
        <FaqSection ref={faq} />
        <ContactsSection ref={contacts} />
      </Main>
      <Footer />
      <Toaster />
      <GlobalStyle />
    </RefsContext.Provider>
  );
};

export default App;
