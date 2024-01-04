import styled from 'styled-components';

import LinkButton from '../../components/common/LinkButton/LinkButton';
import { Wrapper } from '../../components/common/styled/Wrapper.styled';
import { SectionTitle } from '../../components/common/styled/SectionTitle.styled';
import { DefaultSvg } from '../../components/common/Icon/Icon.styled';
import { colors } from '../../constants/theme';
import { device } from '../../constants/media';

export const CasesWrapper = styled(Wrapper)`
  margin-bottom: 20px;

  @media ${device.tablet} {
    margin-bottom: 32px;
  }

  @media ${device.desktop} {
    margin-bottom: 120px;
  }
`;

export const CasesTitle = styled(SectionTitle)`
  width: 264px;

  @media ${device.desktop} {
    width: 398px;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Pagination = styled.p`
  cursor: default;
  color: ${colors.paginationColor};
  font-size: 28px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;
`;

export const ActiveSlide = styled.span`
  color: ${colors.mainColor};
`;

export const ArrowsWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  gap: 12px;
`;

export const ArrowBtn = styled(LinkButton)`
  width: 66px;
  height: 66px;
  border-color: ${colors.mainColor};
  border-radius: 50%;

  &:hover,
  &:focus {
    border-color: ${colors.accentColor};
    color: ${colors.accentColor};
    background-color: transparent;
  }
`;
export const PaginationSvg = styled(DefaultSvg)`
  width: 36px;
  height: 36px;
`;

export const SlideList = styled.ul`
  overflow: hidden;
  display: flex;

  @media ${device.tablet} {
    gap: 24px;
  }

  @media ${device.desktop} {
    gap: 48px;
  }
`;

export const Slide = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;

  animation-name: fade;
  animation-duration: 1.7s;

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  @media ${device.tablet} {
    width: 50%;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 168px;

  @media ${device.mobile} {
    height: 210px;
  }

  @media ${device.desktop} {
    height: 296px;
  }
`;

export const Img = styled.img`
  object-fit: contain;
`;

export const CaseWrapper = styled.div`
  width: 100%;
  height: 150px;
  overflow: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.slideBackground};

  @media ${device.tablet} {
    height: 154px;
  }

  @media ${device.desktop} {
    height: 210px;
    padding: 36px 48px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CaptionWrapper = styled(TextWrapper)`
  margin-bottom: 24px;
  height: 100%;
  gap: 56px;
  align-items: center;

  @media ${device.desktop} {
    margin-bottom: 24px;
    gap: 84px;
  }
`;

export const Caption = styled.h3`
  color: ${colors.mainColor};

  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${device.tablet} {
    font-size: 20px;
    letter-spacing: -0.8px;
  }

  @media ${device.desktop} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const GoToBtn = styled(LinkButton)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: ${colors.mainColor};
  background-color: ${colors.accentColor};

  &:hover,
  &:focus {
    background-color: ${colors.accentColor};
    background-color: ${colors.mainColor};
  }
`;

export const GoToSvg = styled(DefaultSvg)`
  width: 28px;
  height: 28px;
`;

export const DescriptionWrapper = styled.div`
  &::before {
    content: '';
    margin-bottom: 12px;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${colors.accentColor};

    @media ${device.desktop} {
      margin-bottom: 24px;
    }
  }
`;

export const Description = styled.p`
  color: ${colors.mainColor};

  text-align: justify;
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: justify;

  @media ${device.tablet} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${device.desktop} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
