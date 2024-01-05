import styled from 'styled-components';

import { SectionTitle } from '../../components/common/styled/SectionTitle.styled';
import { DefaultSvg } from '../../components/common/Icon/Icon.styled';
import { Wrapper } from '../../components/common/styled/Wrapper.styled';
import { colors, fonts } from '../../constants/theme';
import { device } from '../../constants/media';

export const ValuesHeaderWrapper = styled(Wrapper)`
  margin-bottom: 36px;

  @media ${device.tablet} {
    margin-bottom: 100px;
  }

  @media ${device.desktop} {
    margin-bottom: 122px;
  }
`;

export const ValuesTitle = styled(SectionTitle)`
  @media ${device.tablet} {
    width: 280px;
  }

  @media ${device.desktop} {
    width: 365px;
  }
`;

export const ValuesWrapper = styled.div`
  position: relative;
`;

export const ImgWrapper = styled.div`
  display: none;

  @media ${device.tablet} {
    position: absolute;
    display: flex;
    width: calc(50% - 12px);
    height: 198px;
  }
  @media ${device.desktop} {
    width: calc(50% - 22px);
    height: 340px;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  height: 100%;
`;

export const ValuesList = styled.ul`
  margin-top: 36px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @media ${device.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.desktop} {
    grid-gap: 44px;
  }
`;

export const ValueItem = styled.li`
  padding: 12px;

  background-color: #eaedf1;
  @media ${device.tablet} {
    height: 198px;
    &:nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    }
    &:nth-child(2) {
      grid-column: 2;
      grid-row: 1;
    }
    &:nth-child(3) {
      grid-column: 3;
      grid-row: 2;
    }
    &:nth-child(4) {
      grid-column: 4;
      grid-row: 2;
    }
  }

  @media ${device.desktop} {
    height: 340px;
    padding: 48px 24px;
  }
`;

export const CaptionWrapper = styled.div`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 33px;

  @media ${device.tablet} {
    gap: 51px;
  }

  @media ${device.desktop} {
    margin-bottom: 24px;
    gap: 94px;
  }

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${colors.accentColor};
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Caption = styled.h3`
  color: ${colors.mainColor};

  font-family: ${fonts.title};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;

  @media ${device.desktop} {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  color: ${colors.mainColor};

  text-align: justify;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.56px;

  @media ${device.desktop} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;

export const ValuesSvg = styled(DefaultSvg)`
  @media ${device.desktop} {
    height: 24px;
    width: 24px;
  }
`;
