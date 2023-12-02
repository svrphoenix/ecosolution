/* eslint-disable react/no-unescaped-entities */
import { Text } from '../common/Text/Text.styled';
import { ValuesSectionStyled, ValuesTitle } from './ValuesSection.styled';

const ValuesSection = () => {
  return (
    <ValuesSectionStyled>
      <ValuesTitle>Main values of our company</ValuesTitle>
      <Text>
        EcoSolution envisions a world where sustainable energy solutions power a brighter and
        cleaner future for all. We aspire to be at the forefront of the global shift towards
        renewable energy, leading the way in innovative technologies that harness the power of
        nature to meet the world's energy needs.
      </Text>
    </ValuesSectionStyled>
  );
};

export default ValuesSection;
