import { ScrollToMainBtn, ScrollUpSvg } from './ScrollToMainstyled';
import { scrollToElement } from '../../utils';
import { useRefsContext } from '../../hooks/refsContext';
import { sections } from '../../assets/content/main.json';

const ScrollToMain = () => {
  const { main: mainRef } = useRefsContext();

  const handleClick = evt => {
    evt.preventDefault();
    window.location.replace(`${window.location.pathname}#${sections.main.id}`);
    const offset = parseInt(document.body.style.paddingTop);
    scrollToElement('ref', mainRef, offset);
  };

  return (
    <ScrollToMainBtn
      handleClick={handleClick}
      href={`#${sections.main.id}`}
      aria-label={`link to ${sections.main.title}`}
      iconSettings={{ name: 'arrow-up', svgStyled: ScrollUpSvg }}
    />
  );
};

export default ScrollToMain;
