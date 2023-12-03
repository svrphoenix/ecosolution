import { Formik } from 'formik';
import {
  ButtonWrapper,
  Error,
  FieldWrapper,
  Input,
  Label,
  StyledForm,
} from './ContactsForm.styled';
import Button from '../common/Button/Button';
import Icon from '../common/Icon/Icon';
import { colors } from '../../constants/theme';
import { ContactSchema } from './validation';

const ContactsForm = () => {
  return (
    <Formik
      initialValues={{
        userName: '',
        email: '',
        phone: '',
        message: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        window.alert('Data sended!');
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <FieldWrapper>
            <Label htmlFor="userName">* Full name:</Label>
            <Input
              id="userName"
              name="userName"
              placeholder="John Rosie"
              required
              $validate={errors.userName && touched.userName}
            />
            <Error name="userName" component="div" />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="email">* E-mail:</Label>
            <Input
              id="email"
              name="email"
              placeholder="johnrosie@gmail.com"
              type="email"
              required
              $validate={errors.email && touched.email}
            />
            <Error name="email" component="div" />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="phone">* Phone:</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="380961234567"
              type="phone"
              required
              $validate={errors.phone && touched.phone}
            />
            <Error name="phone" component="div" />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="message">Message:</Label>
            <Input
              component="textarea"
              style={{ resize: 'none' }}
              autoComplete="off"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your message"
            />
          </FieldWrapper>
          <ButtonWrapper>
            <Button
              type="submit"
              caption="Send"
              icon={
                <Icon
                  name={'arrow-right'}
                  width={16}
                  height={16}
                  stroke={colors.accentBackground}
                />
              }
            />
          </ButtonWrapper>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ContactsForm;
