import { useEffect, useState } from 'react';
import { Icon } from '../common/Icon/Icon';
import { ScrollToTopBtn } from './ScrollToTop.styled';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 400) {
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
          <Icon name={'arrow-up'} width={16} height={16} stroke={'#173D33'} />
        </ScrollToTopBtn>
      )}
    </>
  );
};

export default ScrollToTop;
