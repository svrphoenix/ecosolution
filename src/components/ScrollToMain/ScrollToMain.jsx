// import { useEffect, useState } from 'react';
import { ScrollToTopBtn } from './ScrollToMainstyled';
import { colors } from '../../constants/theme';
import Icon from '../common/Icon/Icon';
import { scrollToElement } from '../../utils';
import { useRefsContext } from '../../hooks/refsContext';
import { sections } from '../../assets/content/main.json';

const ScrollToTop = () => {
  // const [showTopBtn, setShowTopBtn] = useState(false);
  const { main } = useRefsContext();
  const offset = parseInt(document.body.style.paddingTop);

  const handleClick = evt => {
    evt.preventDefault();
    scrollToElement('ref', main, offset);
  };

  // useEffect(() => {
  //   const handleWindowScroll = () => {
  //     if (window.scrollY > 100) {
  //       setShowTopBtn(true);
  //     } else {
  //       setShowTopBtn(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleWindowScroll);
  //   return () => window.removeEventListener('scroll', handleWindowScroll);
  // }, []);

  // const goToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    // <>
    //   {showTopBtn && (
    <ScrollToTopBtn href={`#${sections.main.id}`} onClick={handleClick}>
      <Icon name={'arrow-up'} width={16} height={16} stroke={colors.mainColor} />
    </ScrollToTopBtn>
    //   )}
    // </>
  );
};

export default ScrollToTop;
