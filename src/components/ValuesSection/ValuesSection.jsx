import { MAIN_VALUES } from '../../constants/content';
import { colors } from '../../constants/theme';
import Icon from '../common/Icon/Icon';
import { SectionTitle } from '../common/SectionTitle/SectionTitle.styled';
import { Text } from '../common/Text/Text.styled';
import { UnderLine } from '../common/Underline/Underline.styled';
import {
  Caption,
  CaptionWrapper,
  Description,
  ValueItem,
  ValuesList,
  ValuesSectionStyled,
} from './ValuesSection.styled';

const ValuesSection = () => {
  return (
    <ValuesSectionStyled>
      <SectionTitle>Main values of our company</SectionTitle>
      <Text>
        EcoSolution envisions a world where sustainable energy solutions power a brighter and
        cleaner future for all. We aspire to be at the forefront of the global shift towards
        renewable energy, leading the way in innovative technologies that harness the power of
        nature to meet the world&apos;s energy needs.
      </Text>
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

export default ValuesSection;
