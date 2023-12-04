import PropTypes from 'prop-types';

import {
  Counter,
  CounterUnit,
  ElectricitySectionStyled,
  ElectricityTitle,
  VerticalLine,
} from './ElectricitySection.styled';
import { forwardRef, useEffect, useState } from 'react';

const ElectricitySection = forwardRef(function ElectricitySection(props, ref) {
  const [counter, setCounter] = useState(1134147.814);

  const numberWithCommas = number => {
    const numberParts = number.toFixed(3).split('.');
    numberParts[0] = numberParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return numberParts.join(',');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1.248);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ElectricitySectionStyled id={props.id} ref={ref}>
      <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
      <VerticalLine />
      <Counter>
        {numberWithCommas(counter)}
        <CounterUnit>kWh</CounterUnit>
      </Counter>
    </ElectricitySectionStyled>
  );
});

ElectricitySection.propTypes = {
  id: PropTypes.string,
};

export default ElectricitySection;
