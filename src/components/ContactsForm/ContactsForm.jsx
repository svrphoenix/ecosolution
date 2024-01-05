import { Formik } from 'formik';
import {
  ButtonWrapper,
  Error,
  FieldWrapper,
  Input,
  Label,
  StyledForm,
} from './ContactsForm.styled';
import { colors } from '../../constants/theme';
import { ContactSchema } from './validation';
import toast from 'react-hot-toast';
import SendButton from '../SendButton/SendButton';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { INITIAL_VALUES, LOCAL_STORAGE_KEY } from '../../constants/contacts';

const ContactsForm = () => {
  const [initialValues, handleUpdateForm] = useLocalStorage({
    key: LOCAL_STORAGE_KEY,
    value: INITIAL_VALUES,
  });

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        toast.success('Data sended successfully!', {
          style: {
            color: colors.mainColor,
            backgroundColor: colors.menuIconBackground,
          },
        });
        handleUpdateForm(INITIAL_VALUES);
        actions.resetForm();
      }}
    >
      {({ values, errors, touched }) => (
        <StyledForm>
          <FieldWrapper>
            <Label htmlFor="userName">* Full name:</Label>
            <Input
              id="userName"
              name="userName"
              placeholder="John Rosie"
              required
              $validate={errors.userName && touched.userName}
              onBlur={() => handleUpdateForm(values)}
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
              onBlur={() => handleUpdateForm(values)}
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
              onBlur={() => handleUpdateForm(values)}
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
              onBlur={() => handleUpdateForm(values)}
            />
          </FieldWrapper>
          <ButtonWrapper>
            <SendButton />
          </ButtonWrapper>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ContactsForm;
