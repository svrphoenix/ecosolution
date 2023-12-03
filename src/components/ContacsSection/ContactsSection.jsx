import { forwardRef } from 'react';
import {
  AddressWrapper,
  Contact,
  ContactTitle,
  ContactsSectionStyled,
  ContactsTitle,
  PhoneWrapper,
} from './ContactsSection.styled';
import { colors } from '../../constants/theme';
import Icon from '../common/Icon/Icon';
import { ADDRESS, EMAIL, PHONES } from '../../constants/content';
import Socials from '../common/Socials/Socials';
import ContactsForm from '../ContactsForm/ContactsForm';

const ContactsSection = forwardRef(function ContactsSection(props, ref) {
  return (
    <ContactsSectionStyled ref={ref}>
      <ContactsTitle>Contact us</ContactsTitle>
      <AddressWrapper>
        <div>
          <ContactTitle>Phone:</ContactTitle>
          <PhoneWrapper>
            {PHONES.map((item, idx) => (
              <li key={idx}>
                <Contact
                  href={`tel:+${item
                    .split('')
                    .filter(item => item.trim().length)
                    .join('')}`}
                >
                  <Icon name={'phone'} width={24} height={24} stroke={colors.accentBackground} />
                  {item}
                </Contact>
              </li>
            ))}
          </PhoneWrapper>
        </div>
        <div>
          <ContactTitle>E-mail:</ContactTitle>
          <Contact href={`mailto:${EMAIL}`}>
            <Icon name={'mail'} width={24} height={24} stroke={colors.accentBackground} />
            {EMAIL}
          </Contact>
        </div>
        <div>
          <ContactTitle>Address:</ContactTitle>
          <Contact
            href="https://www.google.com.ua/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323843,17z/data=!3m1!4b1?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              name={'map'}
              width={24}
              height={24}
              stroke={colors.accentBackground}
              fill="transparent"
            />
            {ADDRESS}
          </Contact>
        </div>
        <div>
          <ContactTitle>Social Networks:</ContactTitle>
          <Socials gap="32px" mainColor={colors.accentBackground} />
        </div>
        <ContactsForm />
      </AddressWrapper>
    </ContactsSectionStyled>
  );
});

export default ContactsSection;
