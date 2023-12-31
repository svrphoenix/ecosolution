import { scrollToElement } from '../../utils';
import { useRefsContext } from '../../hooks/refsContext';
import { sections, buttonCaptions } from '../../assets/content/main.json';
import { LearnMoreStyled, LearnMoreSvg, LinkIconContainer } from './LearnMoreLink.styled';

const LearnMoreLink = () => {
  const { cases: casesRef } = useRefsContext();

  const handleClick = evt => {
    evt.preventDefault();
    window.location.replace(`${window.location.pathname}#${sections.cases.id}`);
    const offset = parseInt(document.body.style.paddingTop);
    scrollToElement('ref', casesRef, offset);
  };

  return (
    <LearnMoreStyled
      handleClick={handleClick}
      caption={buttonCaptions.learnMore}
      href={`#${sections.cases.id}`}
      aria-label={`link to ${sections.cases.id}`}
      iconContainer={LinkIconContainer}
      iconSettings={{ name: 'arrow-right', svgStyled: LearnMoreSvg }}
    />
  );
};

export default LearnMoreLink;
