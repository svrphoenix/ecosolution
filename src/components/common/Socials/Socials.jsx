import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';
import { SocialsLink, SocialsList } from './Socials.styled';
import { SOCIALS } from '../../../constants/content';
import { colors } from '../../../constants/theme';

const Socials = ({ gap }) => {
  return (
    <SocialsList $gap={gap}>
      {SOCIALS.map(item => (
        <li key={item.id}>
          <SocialsLink $mainColor={colors.whiteColor} $hoverColor={colors.accentColor}>
            <Icon name={item.iconName} width={24} height={24} />
          </SocialsLink>
        </li>
      ))}
    </SocialsList>
  );
};

Socials.propTypes = {
  gap: PropTypes.string,
};

export default Socials;
