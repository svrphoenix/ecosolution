import styled from 'styled-components';
import { colors } from '../../constants/theme';
import { device } from '../../constants/media';
import { SectionTitle } from '../common/SectionTitle/SectionTitle.styled';

export const ValuesSectionStyled = styled.section`
  padding-top: 110px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    position: relative;
  }
`;

export const AdditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media ${device.tablet} {
    padding-left: 10px;
    align-items: flex-start;
    width: 50%;
    justify-content: space-between;
  }

  @media ${device.desktop} {
    width: 40%;
  }
`;

export const ValuesTitle = styled(SectionTitle)`
  @media ${device.tablet} {
    width: 280px;
  }

  @media ${device.tablet} {
    margin-bottom: 0;
  }

  @media ${device.desktop} {
    width: 365px;
  }
`;

export const VerticalLine = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    width: 1px;
    height: 100%;
    left: 50%;
    background-color: ${colors.accentColor};
    position: absolute;
  }
`;
export const ValuesWrapper = styled.div`
  position: relative;
`;

export const ImgWrapper = styled.div`
  display: none;
  position: absolute;
  width: calc(50% - 12px);

  @media ${device.tablet} {
    display: flex;
    height: 198px;
  }
  @media ${device.desktop} {
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
  }
`;

export const CaptionWrapper = styled.div`
  margin-bottom: 33px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Caption = styled.h3`
  color: ${colors.accentBackground};

  font-family: Oswald;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;
`;

export const Description = styled.p`
  margin-top: 12px;
  color: ${colors.accentBackground};

  text-align: justify;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.56px;
`;
