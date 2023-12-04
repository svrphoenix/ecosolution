import styled from 'styled-components';
import { colors } from '../../constants/theme';
import { UnderLine } from '../common/Underline/Underline.styled';
import { SectionTitle } from '../common/SectionTitle/SectionTitle.styled';
import { device } from '../../constants/media';

export const CasesSectionStyled = styled.section`
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

export const CasesTitle = styled(SectionTitle)`
  width: 264px;

  @media ${device.tablet} {
    margin-bottom: 0;
  }

  @media ${device.desktop} {
    width: 398px;
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

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media ${device.tablet} {
    padding-left: 10px;
    align-items: flex-end;
    width: 50%;
  }

  @media ${device.desktop} {
    width: 40%;
  }
`;

export const Pagination = styled.p`
  color: rgba(23, 61, 51, 0.25);
  font-size: 28px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;
`;

export const ActiveSlide = styled.span`
  color: ${colors.accentBackground};
`;

export const ArrowsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const ArrowBtn = styled.button`
  padding: 15px;
  border: 1px solid ${colors.accentBackground};
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: #97d28b;
  }

  &:hover > svg {
    stroke: #97d28b;
  }
`;

export const SlideList = styled.ul`
  margin-top: 20px;
  display: flex;

  @media ${device.tablet} {
    margin-top: 38px;
    gap: 24px;
  }

  @media ${device.desktop} {
    margin-top: 120px;
    margin-bottom: 120px;
    gap: 48px;
  }
`;

export const Slide = styled.li`
  display: ${props => (props.$active ? 'block' : 'none')};
  width: 100%;
  height: 318px;
  transition: opacity 1s ease;

  @media ${device.tablet} {
    display: ${props => (props.$next ? 'block' : 'none')};
  }
`;

export const Img = styled.img`
  object-fit: cover;
`;

export const CaseWrapper = styled.div`
  width: 100%;
  height: 144px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  background-color: #eaedf1;
`;

export const Caption = styled.h3`
  color: ${colors.accentBackground};

  text-align: justify;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;
`;

export const GoToBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  padding: 16px;
  border-radius: 50%;
  background-color: ${colors.accentColor};

  &:hover {
    background-color: ${colors.accentBackground};
  }

  &:hover > svg {
    stroke: ${colors.accentColor};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CaptionWrapper = styled(TextWrapper)`
  display: flex;
  justify-content: space-between;
  gap: 60px;
`;

export const CasesUnderline = styled(UnderLine)`
  margin-bottom: 12px;
`;

export const Description = styled.p`
  color: ${colors.accentBackground};

  text-align: justify;
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: justify;
`;
