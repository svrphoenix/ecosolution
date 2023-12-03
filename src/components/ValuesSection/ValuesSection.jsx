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
  ValueItem,
  ValuesList,
  ValuesSectionStyled,
  ValuesTitle,
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
      <ValuesList>
        {MAIN_VALUES.map(item => (
          <ValueItem key={item.id}>
            <CaptionWrapper>
              <Icon name={item.iconName} stroke={colors.accentBackground} width={16} height={16} />
              <Caption>{item.caption}</Caption>
            </CaptionWrapper>
            <UnderLine />
            <Description>{item.descrition}</Description>
          </ValueItem>
        ))}
      </ValuesList>
    </ValuesSectionStyled>
  );
};

ValuesSection.propTypes = {
  id: PropTypes.string,
};

export default ValuesSection;
