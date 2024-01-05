import { ScrollToMainBtn, ScrollUpSvg } from './ScrollToMainstyled';
import { scrollToElement } from '../../utils';
import { useRefsContext } from '../../hooks/refsContext';
import { sections } from '../../assets/content/main.json';

const ScrollToMain = () => {
  const { header, main: mainRef } = useRefsContext();
  const offset = header.current ? parseFloat(header.current.getBoundingClientRect().height) : 0;

  const handleClick = evt => {
    evt.preventDefault();
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
