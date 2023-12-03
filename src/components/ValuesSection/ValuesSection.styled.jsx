import styled from 'styled-components';
import { colors } from '../../constants/theme';
import { device } from '../../constants/media';
import { SectionTitle } from '../common/SectionTitle/SectionTitle.styled';

export const ValuesSectionStyled = styled.section`
  /* display: flex;
  flex-direction: column; */
  /* gap: 24px; */
`;

//******* GRIDS!!!!*/

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

export const ValuesList = styled.ul`
  padding: 36px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const ValueItem = styled.li`
  padding: 12px;
  width: 148px;
  background-color: #eaedf1;
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
  line-height: calc(24 / 16);
  text-transform: uppercase;
`;

export const Description = styled.p`
  margin-top: 12px; //або марджин топ на лінію
  color: ${colors.accentBackground};

  text-align: justify;
  /* font-family: Fira Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400; */
  line-height: normal;
  letter-spacing: -0.56px;
`;
