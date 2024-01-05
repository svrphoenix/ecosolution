import { forwardRef } from 'react';

import LearnMoreLink from '../../components/LearnMoreLink/LearnMoreLink';
import { Address, Email } from '../../components/common/styled/Contact.styled';
import {
  AdditionWrapper,
  BtnWrapper,
  ContactsWrapper,
  CopyrightMain,
  EmailWrapper,
  Img,
  InnerWrapper,
  MainImgWrapper,
  MainSectionStyled,
  MainText,
  MainTitle,
  Wrapper,
} from './MainSection.styled';
import { sections, contacts, copyright, main } from '../../assets/content/main.json';

const MainSection = forwardRef(function MainSection(_, ref) {
  return (
    <MainSectionStyled id={sections.main.id} ref={ref}>
      <Wrapper>
        <AdditionWrapper>
          <MainTitle>{sections.main.title}</MainTitle>
        </AdditionWrapper>
        <AdditionWrapper>
          <MainText>{main.text}</MainText>
          <BtnWrapper>
            <LearnMoreLink />
          </BtnWrapper>
        </AdditionWrapper>
      </Wrapper>
      <ContactsWrapper>
        <InnerWrapper>
          <AdditionWrapper>
            <Address>{contacts.address.value}</Address>
          </AdditionWrapper>
          <AdditionWrapper>
            <EmailWrapper>
              <Email href={`mailto:${contacts.email.value}`}>{contacts.email.value}</Email>
              <CopyrightMain>{copyright}</CopyrightMain>
            </EmailWrapper>
          </AdditionWrapper>
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
