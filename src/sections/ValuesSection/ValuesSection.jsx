import PropTypes from 'prop-types';
// import { colors } from '../../constants/theme';
// import Icon from '../../components/common/IconOld/IconOld';
import { UnderLine } from '../../components/common/Underline/Underline.styled';
import { Text } from '../../components/common/styled/Text.styled';
import {
  AdditionWrapper,
  Caption,
  CaptionWrapper,
  Description,
  Img,
  ImgWrapper,
  ValueItem,
  ValuesList,
  ValuesSectionStyled,
  ValuesTitle,
  ValuesWrapper,
  VerticalLine,
  Wrapper,
} from './ValuesSection.styled';
import { forwardRef } from 'react';
import { sections, values } from '../../assets/content/main.json';

const ValuesSection = forwardRef(function ValuesSection(props, ref) {
  return (
    <ValuesSectionStyled id={props.sectionId} ref={ref}>
      <Wrapper>
        <ValuesTitle>{sections.values.title}</ValuesTitle>
        <VerticalLine />
        <AdditionWrapper>
          <Text>{values.text}</Text>
        </AdditionWrapper>
      </Wrapper>
      <ValuesWrapper>
        <ValuesList>
          {values.items.map(item => (
            <ValueItem key={item.id}>
              <CaptionWrapper>
                {/* <Icon name={item.iconName} stroke={colors.mainColor} width={16} height={16} /> */}
                <Caption>{item.caption}</Caption>
              </CaptionWrapper>
              <UnderLine />
              <Description>{item.descrition}</Description>
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
    </ValuesSectionStyled>
  );
});

ValuesSection.propTypes = {
  sectionId: PropTypes.string,
};

export default ValuesSection;
