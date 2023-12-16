import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Socials from '../../components/common/Socials/Socials';
import ContactsForm from '../../components/ContactsForm/ContactsForm';
import Svg from '../../components/common/Svg.jsx/Svg';
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

const ContactsSection = forwardRef(function ContactsSection(props, ref) {
  return (
    <ContactsSectionStyled id={props.sectionId} ref={ref}>
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
                      <Svg aria-hidden="true" icon={StyledSvg} name={'phone'} />
                      {item}
                    </Contact>
                  </li>
                ))}
              </PhoneWrapper>
            </li>
            <li>
              <ContactTitle>{`${contacts.email.title}:`}</ContactTitle>
              <Contact href={`mailto:${contacts.email.value}`}>
                <Svg aria-hidden="true" icon={StyledSvg} name={'mail'} />
                {contacts.email.value}
              </Contact>
            </li>
            <li>
              <ContactTitle>{`${contacts.address.title}:`}</ContactTitle>
              <Contact href={contacts.address.url} target="_blank" rel="noopener noreferrer">
                <Svg aria-hidden="true" icon={StyledSvg} name={'map'} />
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

ContactsSection.propTypes = {
  sectionId: PropTypes.string,
};

export default ContactsSection;
