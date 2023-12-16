import PropTypes from 'prop-types';

import {
  Counter,
  CounterUnit,
  ElectricitySectionStyled,
  ElectricityTitle,
  VerticalLine,
} from './ElectricitySection.styled';
import { forwardRef, useEffect, useState } from 'react';
import { sections, electricity } from '../../assets/content/main.json';
import { numberWithCommas } from '../../utils';

const ElectricitySection = forwardRef(function ElectricitySection(props, ref) {
  const [counter, setCounter] = useState(1134147.814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1.248);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ElectricitySectionStyled id={props.id} ref={ref}>
      <ElectricityTitle>{sections.electricity.title}</ElectricityTitle>
      <VerticalLine />
      <Counter>
        {numberWithCommas(counter)}
        <CounterUnit>{electricity.unit}</CounterUnit>
      </Counter>
    </ElectricitySectionStyled>
  );
});

ElectricitySection.propTypes = {
  id: PropTypes.string,
};

export default ElectricitySection;
