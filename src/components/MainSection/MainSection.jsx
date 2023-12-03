import PropTypes from 'prop-types';
import { ADDRESS, EMAIL } from '../../constants/content';
import { colors } from '../../constants/theme';
import Button from '../common/Button/Button';
import { Address, Email } from '../common/Contacts/Contact.styled';
import Icon from '../common/Icon/Icon';
import { Text } from '../common/Text/Text.styled';
import { UnderLine } from '../common/Underline/Underline.styled';
import {
  AdditionWrapper,
  ContactsWrapper,
  CopyrightMain,
  EmailWrapper,
  Img,
  MainImgWrapper,
  MainSectionStyled,
  MainTitle,
  Wrapper,
} from './MainSection.styled';

const MainSection = ({ id }) => {
  return (
    <MainSectionStyled id={id}>
      <Wrapper>
        <MainTitle>RENEWABLE ENERGY For any task</MainTitle>
        <AdditionWrapper>
          <Text>
            Development and implementation of renewable non-polluting energy sources, generating
            power generation using energy wind, sun, water, biomass
          </Text>
          <Button
            caption="Learn more"
            icon={
              <Icon name={'arrow-right'} width={16} height={16} stroke={colors.accentBackground} />
            }
          />
        </AdditionWrapper>
      </Wrapper>
      <UnderLine />
      <ContactsWrapper>
        <Address>{ADDRESS}</Address>
        <EmailWrapper>
          <Email href={`mailto:${EMAIL}`}>{EMAIL}</Email>
          <CopyrightMain>ecosolution © 2023</CopyrightMain>
        </EmailWrapper>
      </ContactsWrapper>
      <MainImgWrapper>
        <picture>
          <source
            srcSet="./images/wind-turbine-desktop-1x.jpg 1x, ./images/wind-turbine-desktop-2x.jpg 2x"
            media="(min-width: 1280px)"
          />
          <source
            srcSet="./images/wind-turbine-tablet-1x.jpg 1x, ./images/wind-turbine-tablet-2x.jpg 2x"
            media="(min-width: 768px)"
          />
          <source
            srcSet="./images/wind-turbine-mobile-1x.jpg 1x, ./images/wind-turbine-mobile-2x.jpg 2x"
            media="(min-width: 360px)"
          />
          <Img
            src="./images/wind-turbine-mobile-1x.jpg"
            alt="Wind turbine picture"
            loading="lazy"
          />
        </picture>
      </MainImgWrapper>
    </MainSectionStyled>
  );
};

MainSection.propTypes = {
  id: PropTypes.string,
};

export default MainSection;
