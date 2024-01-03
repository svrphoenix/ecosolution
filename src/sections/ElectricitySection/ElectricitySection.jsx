import {
  Counter,
  CounterUnit,
  ElectricitySectionStyled,
  ElectricityTitle,
  Wrapper,
} from './ElectricitySection.styled';
import { forwardRef, useEffect, useState } from 'react';
import { sections, electricity } from '../../assets/content/main.json';
import { numberWithCommas } from '../../utils';

const ElectricitySection = forwardRef(function ElectricitySection(_, ref) {
  const [counter, setCounter] = useState(1134147.814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1.248);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ElectricitySectionStyled id={sections.electricity.id} ref={ref}>
      <Wrapper>
        <ElectricityTitle>{sections.electricity.title}</ElectricityTitle>
      </Wrapper>
      <Counter>
        {numberWithCommas(counter)}
        <CounterUnit>{electricity.unit}</CounterUnit>
      </Counter>
    </ElectricitySectionStyled>
  );
});

export default ElectricitySection;
