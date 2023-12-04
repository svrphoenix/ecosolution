import styled from 'styled-components';
import { SectionTitle } from '../common/SectionTitle/SectionTitle.styled';
import { colors } from '../../constants/theme';
import { device } from '../../constants/media';

export const ElectricitySectionStyled = styled.section`
  padding-top: 110px;
  /* padding-bottom: 36px;

  @media ${device.tablet} {
    padding-bottom: 100px;
  }

  @media ${device.desktop} {
    padding-bottom: 120px;
  } */
`;

export const ElectricityTitle = styled(SectionTitle)`
  margin-right: auto;
  margin-left: auto;
  text-align: center;

  @media ${device.tablet} {
    width: 368px;
  }

  @media ${device.desktop} {
    width: 490px;
  }
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 48px;
  margin: 0 auto;
  background-color: ${colors.accentColor};
  margin-bottom: 24px;

  @media ${device.tablet} {
    height: 87px;
  }
`;

export const Counter = styled.p`
  color: ${colors.accentColor};

  text-align: center;
  font-family: Oswald;
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 100px;
  }

  @media ${device.desktop} {
    font-size: 164px;
  }
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

  @media ${device.tablet} {
    margin-left: 24px;
    font-size: 28px;
  }

  @media ${device.desktop} {
    font-size: 48px;
  }
`;
