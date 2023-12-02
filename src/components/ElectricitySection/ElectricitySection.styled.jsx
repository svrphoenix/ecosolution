import styled from 'styled-components';
import { SectionTitle } from '../common/SectionTitle/SectionTitle.styled';
import { colors } from '../../constants/theme';

export const ElectricitySectionStyled = styled.section`
  padding-bottom: 36px;
`;

export const ElectricityTitle = styled(SectionTitle)`
  text-align: center;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 48px;
  margin: 0 auto;
  background-color: ${colors.accentColor};
  margin-bottom: 24px;
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Counter = styled.p`
  color: ${colors.accentColor};

  text-align: center;
  font-family: Oswald;
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const CounterUnit = styled.span`
  display: inline-block;
  margin-left: 8px;
  color: ${colors.accentBackground};

  text-align: center;
  vertical-align: middle;
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  text-transform: initial;
`;
