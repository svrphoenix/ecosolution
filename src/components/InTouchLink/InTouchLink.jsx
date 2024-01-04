import PropTypes from 'prop-types';

import { scrollToElement } from '../../utils';
import { useRefsContext } from '../../hooks/refsContext';
import { sections } from '../../assets/content/main.json';
import { InTouchStyled, InTouchSvg } from './InTouchLink.styled';

const InTouchLink = ({ caption, mobileVisible }) => {
  const { contacts: contactsRef, header } = useRefsContext();
  const offset = header.current ? parseFloat(header.current.getBoundingClientRect().height) : 0;

  const handleClick = evt => {
    evt.preventDefault();
    // window.location.replace(`${window.location.pathname}#${sections.contacts.id}`);
    // const offset = parseFloat(document.body.style.paddingTop);
    scrollToElement('ref', contactsRef, offset);
  };

  return (
    <InTouchStyled
      handleClick={handleClick}
      caption={caption}
      href={`#${sections.contacts.id}`}
      aria-label={`link to ${sections.contacts.id}`}
      iconSettings={{ name: 'arrow-down', svgStyled: InTouchSvg }}
      $mobileVisible={mobileVisible}
    />
  );
};

InTouchLink.propTypes = {
  caption: PropTypes.string.isRequired,
  mobileVisible: PropTypes.bool.isRequired,
};

export default InTouchLink;
