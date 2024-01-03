import styled from 'styled-components';
import { SectionTitle } from '../../components/common/styled/SectionTitle.styled';
import { colors, fonts } from '../../constants/theme';
import { device } from '../../constants/media';
import { SectionStyled } from '../../components/common/styled/Section.styled';

export const ElectricitySectionStyled = styled(SectionStyled)`
  padding-bottom: 16px;
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 24px;

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 48px;
    margin: 0 auto;
    background-color: ${colors.accentColor};

    @media ${device.tablet} {
      height: 87px;
    }
  }
`;

export const ElectricityTitle = styled(SectionTitle)`
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  margin-bottom: 16px;

  @media ${device.tablet} {
    width: 368px;
  }

  @media ${device.desktop} {
    width: 490px;
  }
`;

export const Counter = styled.p`
  color: ${colors.accentColor};

  text-align: center;
  font-family: ${fonts.title};
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
  color: ${colors.mainColor};

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
