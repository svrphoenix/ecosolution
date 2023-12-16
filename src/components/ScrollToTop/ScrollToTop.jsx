import { useEffect, useState } from 'react';
import { ScrollToTopBtn } from './ScrollToTop.styled';
import { colors } from '../../constants/theme';
import Icon from '../common/Icon/Icon';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showTopBtn && (
        <ScrollToTopBtn onClick={goToTop}>
          <Icon name={'arrow-up'} width={16} height={16} stroke={colors.mainColor} />
        </ScrollToTopBtn>
      )}
    </>
  );
};

export default ScrollToTop;
