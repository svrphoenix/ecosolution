import styled from 'styled-components';
import { colors } from '../../constants/theme';
import { UnderLine } from '../common/Underline/Underline.styled';
import { SectionTitle } from '../common/SectionTitle/SectionTitle.styled';
import { device } from '../../constants/media';

export const CasesSectionStyled = styled.section`
  padding-bottom: 36px;
`;

export const CasesTitle = styled(SectionTitle)`
  width: 264px;

  @media ${device.desktop} {
    width: 398px;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
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
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
`;

export const Slide = styled.li`
  display: ${props => (props.$active ? 'block' : 'none')};
  transition: opacity 0.5s ease;

  /* width: 100%;
  height: 180px; */
`;

export const Img = styled.img`
  /* width: 100%;
  height: 180px; */
  /* display: block;*/
  /* width: 100%; */
  /* height: 100%; */
  object-fit: cover;
`;

export const CaseWrapper = styled.div`
  padding: 12px;
  background-color: #eaedf1;
`;

export const Caption = styled.h3`
  color: ${colors.accentBackground};
  width: 175px;

  text-align: justify;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;
`;

export const GoToBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 20px;
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
