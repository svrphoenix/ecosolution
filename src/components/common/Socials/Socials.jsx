import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import { SocialsLink, SocialsList, StyledSvg } from './Socials.styled';
import { socials } from '../../../assets/content/main.json';

const Socials = ({ gap, mainColor, hoverColor }) => {
  return (
    <SocialsList $gap={gap}>
      {socials.map(({ id, tag, link, iconName }) => (
        <li key={id}>
          <SocialsLink
            href={link}
            target="blank"
            rel="noopener noreferrer nofollow"
            aria-label={tag}
            $mainColor={mainColor}
            $hoverColor={hoverColor}
          >
            <Icon svgStyled={StyledSvg} name={iconName} aria-hidden="true" />
          </SocialsLink>
        </li>
      ))}
    </SocialsList>
  );
};

Socials.propTypes = {
  gap: PropTypes.string,
  mainColor: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default Socials;
