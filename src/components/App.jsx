import Footer from './Footer/Footer';
import GlobalStyle from './GlobalStyle';
import Header from './Header/Header';
import MainSection from './MainSection/MainSection';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <MainSection />
      </main>
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;
