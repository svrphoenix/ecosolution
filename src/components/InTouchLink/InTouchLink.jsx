import PropTypes from 'prop-types';

import { scrollToElement } from '../../utils';
import { useRefsContext } from '../../hooks/refsContext';
import { sections } from '../../assets/content/main.json';
import { InTouchStyled, InTouchSvg } from './InTouchLink.styled';

const InTouchLink = ({ caption }) => {
  const { contacts: contactsRef } = useRefsContext();

  const handleClick = evt => {
    evt.preventDefault();
    window.location.replace(`${window.location.pathname}#${sections.contacts.id}`);
    const offset = parseInt(document.body.style.paddingTop);
    scrollToElement('ref', contactsRef, offset);
  };

  return (
    <InTouchStyled
      handleClick={handleClick}
      caption={caption}
      href={`#${sections.contacts.id}`}
      aria-label={`link to ${sections.contacts.id}`}
      iconSettings={{ name: 'arrow-down', svgStyled: InTouchSvg }}
    />
  );
};

InTouchLink.propTypes = {
  caption: PropTypes.string.isRequired,
};

export default InTouchLink;
