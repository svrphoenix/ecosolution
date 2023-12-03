import {
  Counter,
  CounterUnit,
  ElectricitySectionStyled,
  ElectricityTitle,
  VerticalLine,
} from './ElectricitySection.styled';

const ElectricitySection = ({ id }) => {
  return (
    <ElectricitySectionStyled id={id}>
      <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
      <VerticalLine />
      <Counter>
        1.134.147.814<CounterUnit>kWh</CounterUnit>
      </Counter>
    </ElectricitySectionStyled>
  );
};

export default ElectricitySection;
