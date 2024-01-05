import { forwardRef } from 'react';

import Socials from '../../components/common/Socials/Socials';
import ContactsForm from '../../components/ContactsForm/ContactsForm';
import Svg from '../../components/common/Icon/Icon';
import {
  Address,
  AddressList,
  Contact,
  ContactTitle,
  ContactsSectionStyled,
  ContactsTitle,
  PhoneWrapper,
  StyledSvg,
  Wrapper,
} from './ContactsSection.styled';
import { colors } from '../../constants/theme';
import { sections, contacts } from '../../assets/content/main.json';
import { phoneNormalize } from '../../utils';

const ContactsSection = forwardRef(function ContactsSection(_, ref) {
  return (
    <ContactsSectionStyled id={sections.contacts.id} ref={ref}>
      <ContactsTitle>{sections.contacts.title}</ContactsTitle>
      <Wrapper>
        <Address>
          <AddressList>
            <li>
              <ContactTitle>{`${contacts.phone.title}:`}</ContactTitle>
              <PhoneWrapper>
                {contacts.phone.values.map((item, idx) => (
                  <li key={idx}>
                    <Contact href={`tel:+${phoneNormalize(item)}`}>
                      <Svg aria-hidden="true" svgStyled={StyledSvg} name="phone" />
                      {item}
                    </Contact>
                  </li>
                ))}
              </PhoneWrapper>
            </li>
            <li>
              <ContactTitle>{`${contacts.email.title}:`}</ContactTitle>
              <Contact href={`mailto:${contacts.email.value}`}>
                <Svg aria-hidden="true" svgStyled={StyledSvg} name="mail" />
                {contacts.email.value}
              </Contact>
            </li>
            <li>
              <ContactTitle>{`${contacts.address.title}:`}</ContactTitle>
              <Contact href={contacts.address.url} target="_blank" rel="noopener noreferrer">
                <Svg aria-hidden="true" svgStyled={StyledSvg} name="map" />
                {contacts.address.value}
              </Contact>
            </li>
            <div>
              <ContactTitle>{`${contacts.socials.title}:`}</ContactTitle>
              <Socials gap="32px" mainColor={colors.mainColor} hoverColor={colors.accentColor} />
            </div>
          </AddressList>
        </Address>
        <ContactsForm />
      </Wrapper>
    </ContactsSectionStyled>
  );
});

export default ContactsSection;
