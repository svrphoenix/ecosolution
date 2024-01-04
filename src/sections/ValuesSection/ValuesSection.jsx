import { Text } from '../../components/common/styled/Text.styled';
import {
  // AdditionWrapper,
  Caption,
  CaptionWrapper,
  Description,
  Img,
  ImgWrapper,
  InnerWrapper,
  ValueItem,
  ValuesHeaderWrapper,
  ValuesList,
  ValuesSvg,
  ValuesTitle,
  ValuesWrapper,
} from './ValuesSection.styled';
import { forwardRef } from 'react';
import { sections, values } from '../../assets/content/main.json';
import { SectionStyled } from '../../components/common/styled/Section.styled';
import Icon from '../../components/common/Icon/Icon';
import { AdditionWrapper } from '../../components/common/styled/AdditionWrapper.styled';

const ValuesSection = forwardRef(function ValuesSection(_, ref) {
  return (
    <SectionStyled id={sections.values.id} ref={ref}>
      <ValuesHeaderWrapper>
        <AdditionWrapper>
          <ValuesTitle>{sections.values.title}</ValuesTitle>
        </AdditionWrapper>
        <AdditionWrapper>
          <Text>{values.text}</Text>
        </AdditionWrapper>
      </ValuesHeaderWrapper>
      <ValuesWrapper>
        <ValuesList>
          {values.items.map(({ id, iconName, caption, descrition }) => (
            <ValueItem key={id}>
              <CaptionWrapper>
                <InnerWrapper>
                  <Icon name={iconName} svgStyled={ValuesSvg} />
                  <Caption>{caption}</Caption>
                </InnerWrapper>
              </CaptionWrapper>
              <Description>{descrition}</Description>
            </ValueItem>
          ))}
        </ValuesList>
        <ImgWrapper style={{ right: 0, top: 0 }}>
          <picture>
            <source
              srcSet="./images/man-worker-desktop-1x.jpg 1x, ./images/man-worker-desktop-2x.jpg 2x"
              media="(min-width: 1280px)"
            />
            <source
              srcSet="./images/man-worker-tablet-1x.jpg 1x, ./images/man-worker-tablet-2x.jpg 2x"
              media="(min-width: 768px)"
            />
            <Img
              src="./images/man-worker-tablet-1x.jpg"
              alt="Man worker and solar"
              loading="lazy"
            />
          </picture>
        </ImgWrapper>
        <ImgWrapper style={{ left: 0, bottom: 0 }}>
          <picture>
            <source
              srcSet="./images/wind-farms-desktop-1x.jpg 1x, ./images/wind-farms-desktop-2x.jpg 2x"
              media="(min-width: 1280px)"
            />
            <source
              srcSet="./images/wind-farms-tablet-1x.jpg 1x, ./images/wind-farms-tablet-2x.jpg 2x"
              media="(min-width: 768px)"
            />
            <Img
              src="./images/wind-farms-tablet-1x.jpg"
              alt="Workers and wind farms"
              loading="lazy"
            />
          </picture>
        </ImgWrapper>
      </ValuesWrapper>
    </SectionStyled>
  );
});

export default ValuesSection;
