import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';
import { SocialsLink, SocialsList } from './Socials.styled';
import { SOCIALS } from '../../../constants/content';

const Socials = ({ gap, mainColor, hoverColor }) => {
  return (
    <SocialsList $gap={gap}>
      {SOCIALS.map(item => (
        <li key={item.id}>
          <SocialsLink $mainColor={mainColor} $hoverColor={hoverColor}>
            <Icon name={item.iconName} width={24} height={24} />
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
