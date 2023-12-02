import Footer from './Footer/Footer';
import GlobalStyle from './GlobalStyle';
import Header from './Header/Header';
import MainSection from './MainSection/MainSection';
import ValuesSection from './ValuesSection/ValuesSection';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <ValuesSection />
      </main>
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;
