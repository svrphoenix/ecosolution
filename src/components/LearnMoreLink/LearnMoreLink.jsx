import { scrollToElement } from '../../utils';
import { useRefsContext } from '../../hooks/refsContext';
import { sections, buttonCaptions } from '../../assets/content/main.json';
import { LearnMoreStyled, LearnMoreSvg, LinkIconContainer } from './LearnMoreLink.styled';

const LearnMoreLink = () => {
  const { header, cases: casesRef } = useRefsContext();
  const offset = header.current ? parseFloat(header.current.getBoundingClientRect().height) : 0;

  const handleClick = evt => {
    evt.preventDefault();
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
