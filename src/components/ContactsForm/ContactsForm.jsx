import { Formik } from 'formik';
import toast from 'react-hot-toast';

import SendButton from '../SendButton/SendButton';
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
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { INITIAL_VALUES, LOCAL_STORAGE_KEY } from '../../constants/contacts';
import { Mapper } from '../../utils';
import { form } from '../../assets/content/main.json';

const ContactsForm = () => {
  const [initialValues, handleUpdateForm] = useLocalStorage({
    key: LOCAL_STORAGE_KEY,
    value: INITIAL_VALUES,
  });

  const valuesMap = Mapper(INITIAL_VALUES);

  const handleBlurCustom = (event, field, { handleBlur, values, errors, touched }) => {
    handleBlur(event);
    if (!errors[field] && touched[field]) {
      handleUpdateForm(values);
    }
  };

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
      {formik => (
        <StyledForm>
          <FieldWrapper>
            <Label htmlFor={valuesMap.userName}>{form.userName.label}</Label>
            <Input
              id={valuesMap.userName}
              name={valuesMap.userName}
              placeholder={form.userName.placeholder}
              required
              $validate={formik.errors.userName && formik.touched.userName}
              onBlur={event => handleBlurCustom(event, valuesMap.userName, formik)}
            />
            <Error name={valuesMap.userName} component="div" />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor={valuesMap.email}>{form.email.label}</Label>
            <Input
              id={valuesMap.email}
              name={valuesMap.email}
              placeholder={form.email.placeholder}
              type="email"
              required
              $validate={formik.errors.email && formik.touched.email}
              onBlur={event => handleBlurCustom(event, valuesMap.email, formik)}
            />
            <Error name={valuesMap.email} component="div" />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor={valuesMap.phone}>{form.phone.label}</Label>
            <Input
              id={valuesMap.phone}
              name={valuesMap.phone}
              placeholder={form.phone.placeholder}
              type="phone"
              required
              $validate={formik.errors.phone && formik.touched.phone}
              onBlur={event => handleBlurCustom(event, valuesMap.phone, formik)}
            />
            <Error name={valuesMap.phone} component="div" />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor={valuesMap.message}>{form.message.label}</Label>
            <Input
              component="textarea"
              style={{ resize: 'none' }}
              autoComplete="off"
              name={valuesMap.message}
              id={valuesMap.message}
              cols="30"
              rows="10"
              placeholder={form.message.placeholder}
              onBlur={event => handleBlurCustom(event, valuesMap.message, formik)}
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
