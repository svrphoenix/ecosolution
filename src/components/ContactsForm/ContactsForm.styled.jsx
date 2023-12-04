import { styled } from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { colors } from '../../constants/theme';
import { device } from '../../constants/media';

export const StyledForm = styled(Form)`
  width: auto;
  padding: 36px 12px;
  display: flex;
  flex-direction: column;
  background-color: #eaedf1;
  gap: 28px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  position: relative;
`;

export const Label = styled.label`
  color: ${colors.accentBackground};
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;

  &:focus {
    color: ${colors.accentColor};
  }
`;

export const Input = styled(Field)`
  color: ${colors.accentBackground};

  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;
  background-color: transparent;
  border-color: transparent;
  border-bottom-color: ${({ $validate }) => ($validate ? '#d28b8b' : colors.accentColor)};

  &:focus {
    outline: none;
    color: ${colors.accentColor};
  }

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const Error = styled(ErrorMessage)`
  color: #d28b8b;
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.48px;

  position: absolute;
  right: 0;
`;

export const ButtonWrapper = styled.div`
  margin: 0 auto;
  @media ${device.tablet} {
    margin-left: auto;
    margin-right: 0;
  }
`;
