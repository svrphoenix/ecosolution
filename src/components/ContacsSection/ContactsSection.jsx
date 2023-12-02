import { forwardRef } from 'react';
import { ContactsSectionStyled } from './ContactsSection.styled';

const ContactsSection = forwardRef(function ContactsSection(props, ref) {
  return <ContactsSectionStyled ref={ref}>CONTACT US</ContactsSectionStyled>;
});

export default ContactsSection;
