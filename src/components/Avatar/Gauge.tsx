import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

interface GaugeProps {
  baseColor?: string;
  children?: React.ReactNode;
  className?: string;
  iconColor?: string;
  increase?: boolean;
  percent?: number;
  percentColor?: string;
  size?: number;
  startAnimation?: boolean;
  thickness?: number;
}

const StyledGauge = styled.div`
  position: relative;
  transition: all 300ms ease-in-out;

  .gauge-icon {
    align-items: center;
    border-radius: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;

    img {
      display: block;
      max-height: 75%;
      max-width: 75%;
    }
  }

  .gauge-circle {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;

    .base-circle,
    .percent-circle,
    .separator-circle {
      fill: transparent;
      transition: all 300ms ease-in-out;
    }
  }
`;

const buildTransform = classNames;

export default function Gauge({
  children,
  className,
  percent = 1,
  baseColor = 'transparent',
  percentColor = '#08d7ec',
  iconColor = '#414e53',
  size = 58,
  thickness = 3,
  increase = false,
  startAnimation = false,
}: GaugeProps) {
  const [percentState, setPercentState] = useState(startAnimation ? 0 : percent);
  const radius = size / 2;
  const innerRadius = radius - thickness / 2;
  const circumference = innerRadius * 2 * Math.PI;
  const arc = circumference * percentState;

  useEffect(() => {
    setPercentState(percent);
  }, [percent]);

  return (
    <StyledGauge className={className} style={{ height: `${size}px`, width: `${size}px` }}>
      <div className="gauge-icon" style={{ padding: `${thickness * 3}px` }}>
        {children}
      </div>
      <svg
        className="gauge-circle"
        style={{ transform: buildTransform('rotate(-90deg)', { 'scaleY(-1)': !increase }) }}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          className="base-circle"
          cx={radius}
          cy={radius}
          r={innerRadius}
          style={{ stroke: baseColor, strokeWidth: `${thickness}px` }}
        />
        <circle
          className="percent-circle"
          cx={radius}
          cy={radius}
          r={innerRadius}
          style={{
            stroke: percentColor,
            strokeDasharray: `${arc} ${circumference}`,
            strokeWidth: `${thickness}px`,
          }}
        />
        <circle
          className="separator-circle"
          cx={radius}
          cy={radius}
          r={radius - thickness * 2}
          style={{ stroke: iconColor, strokeWidth: `${thickness / 2}px` }}
        />
      </svg>
    </StyledGauge>
  );
}
