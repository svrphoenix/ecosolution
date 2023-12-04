import PropTypes from 'prop-types';
import { MAIN_VALUES } from '../../constants/content';
import { colors } from '../../constants/theme';
import Icon from '../common/Icon/Icon';
import { Text } from '../common/Text/Text.styled';
import { UnderLine } from '../common/Underline/Underline.styled';
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

const ValuesSection = ({ id }) => {
  return (
    <ValuesSectionStyled id={id}>
      <Wrapper>
        <ValuesTitle>Main values of our company</ValuesTitle>
        <VerticalLine />
        <AdditionWrapper>
          <Text>
            EcoSolution envisions a world where sustainable energy solutions power a brighter and
            cleaner future for all. We aspire to be at the forefront of the global shift towards
            renewable energy, leading the way in innovative technologies that harness the power of
            nature to meet the world&apos;s energy needs.
          </Text>
        </AdditionWrapper>
      </Wrapper>
      <ValuesWrapper>
        <ValuesList>
          {MAIN_VALUES.map(item => (
            <ValueItem key={item.id}>
              <CaptionWrapper>
                <Icon
                  name={item.iconName}
                  stroke={colors.accentBackground}
                  width={16}
                  height={16}
                />
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
};

ValuesSection.propTypes = {
  id: PropTypes.string,
};

export default ValuesSection;
