import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { ADDRESS, EMAIL } from '../../constants/content';
import { colors } from '../../constants/theme';
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
import { scrollToElement } from '../../utils';
import { useRefsContext } from '../../hooks/refsContext';

import { sections, main } from '../../assets/content/main.json';
import Button from '../../components/common/Button/Button';
import { Address, Email } from '../../components/common/Contacts/Contact.styled';
import Icon from '../../components/common/Icon/Icon';
import { UnderLine } from '../../components/common/Underline/Underline.styled';
import { Text } from '../../components/common/Text/Text.styled';

const MainSection = forwardRef(function MainSection(props, ref) {
  const { cases } = useRefsContext();
  return (
    <MainSectionStyled id={props.sectionId} ref={ref}>
      <Wrapper>
        <MainTitle>{sections.main.title}</MainTitle>
        <AdditionWrapper>
          <Text>{main.text}</Text>
          <Button
            handleClick={() => scrollToElement('ref', cases)}
            caption="Learn more"
            icon={<Icon name={'arrow-right'} width={16} height={16} stroke={colors.mainColor} />}
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
});

MainSection.propTypes = {
  sectionId: PropTypes.string,
};

export default MainSection;
