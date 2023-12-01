import { styled } from 'styled-components';
import { colors } from '../../constants/theme';

export const StyledFooter = styled.footer`
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  /* margin: 0 auto;  */
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.accentColor};
`;

const textStyles = `
  color: ${colors.accentBackground};
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const Address = styled.address`
  ${textStyles}
`;

export const Email = styled.a`
  ${textStyles}
`;

export const Copyright = styled.p`
  ${textStyles}
`;
