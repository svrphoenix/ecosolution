import * as Yup from 'yup';

const numberPattern =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const ContactSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Wrong Fullname (too short)')
    .max(50, 'Wrong Fullname (too long)!')
    .required('Required field'),
  email: Yup.string().email('Wrong email').required('Required field'),
  phone: Yup.string().matches(numberPattern, 'Wrong Phone').required('Required field'),
  message: Yup.string(),
});
