import React from 'react';
import { styled } from '../styles/styled';

interface TimerProps {
  value: number;
}

const size = 55;

const Root = styled.div`
  display: flex;
  height: ${size}px;
  width: ${size}px;
  position: relative;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.12);
  align-items: center;
  justify-content: center;
`;

const radius = size / 2 - 4;
const circumference = radius * 2 * Math.PI;

const Ring = styled.svg`
  width: ${size}px;
  height: ${size}px;
  position: absolute;
  top: -4px;
  left: -4px;
`;

const Circle = styled.circle<{ value: number }>`
  stroke: ${props =>
    props.value > 50 ? props.theme.failure : props.theme.success};
  stroke-width: 5px;
  fill: transparent;
  transition: 0.35s stroke-dashoffset;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-dasharray: ${circumference}, ${circumference};
  stroke-dashoffset: ${props =>
    circumference - (props.value / 100) * circumference};
`;

export const Timer: React.SFC<TimerProps> = ({ value }) => {
  const percent = (10 - value) * 10;
  return (
    <Root>
      {value}
      <Ring className="progress-ring">
        <Circle
          value={percent}
          className="progress-ring__circle"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </Ring>
    </Root>
  );
};
