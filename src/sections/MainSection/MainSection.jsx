import { forwardRef } from 'react';

import LearnMoreLink from '../../components/LearnMoreLink/LearnMoreLink';
import { sections, contacts, copyright, main } from '../../assets/content/main.json';
import { Address, Email } from '../../components/common/styled/Contact.styled';
import { Text } from '../../components/common/styled/Text.styled';
import {
  AdditionWrapper,
  ContactsWrapper,
  CopyrightMain,
  EmailWrapper,
  Img,
  InnerWrapper,
  MainImgWrapper,
  MainSectionStyled,
  MainTitle,
  Wrapper,
} from './MainSection.styled';

const MainSection = forwardRef(function MainSection(_, ref) {
  return (
    <MainSectionStyled id={sections.main.id} ref={ref}>
      <Wrapper>
        <MainTitle>{sections.main.title}</MainTitle>
        <AdditionWrapper>
          <Text>{main.text}</Text>
          <LearnMoreLink />
        </AdditionWrapper>
      </Wrapper>
      <ContactsWrapper>
        <InnerWrapper>
          <Address>{contacts.address.value}</Address>
          <EmailWrapper>
            <Email href={`mailto:${contacts.email.value}`}>{contacts.email.value}</Email>
            <CopyrightMain>{copyright}</CopyrightMain>
          </EmailWrapper>
        </InnerWrapper>
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

export default MainSection;
