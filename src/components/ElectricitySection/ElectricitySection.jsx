import {
  Counter,
  CounterUnit,
  ElectricitySectionStyled,
  ElectricityTitle,
  VerticalLine,
} from './ElectricitySection.styled';

const ElectricitySection = () => {
  return (
    <ElectricitySectionStyled>
      <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
      <VerticalLine />
      <Counter>
        1.134.147.814<CounterUnit>kWh</CounterUnit>
      </Counter>
    </ElectricitySectionStyled>
  );
};

export default ElectricitySection;
