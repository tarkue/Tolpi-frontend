import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { pie as d3Pie } from 'd3-shape';
import { ArcTypes } from '../';

import ArcWrapper from './ArcWrappper';


const Pie = ({ size, color, cornerRadius, data, opacity }) => {
  const [id, setId] = useState(null)
  useEffect(() => {
    setId(Math.random())
  }, [])
  const pie = d3Pie()
    .value(d => d.value)
    .sort(() => 0);
  return (
    <g transform={`translate(${size / 2}, ${size / 2})`}>
      {pie(data).map((arc, i) =>
        <ArcWrapper
          id={id*i}
          size={size}
          cornerRadius={cornerRadius}
          startAngle={arc.startAngle}
          endAngle={arc.endAngle}
          fill={color}
          fillOpacity={arc.data.type === ArcTypes.FILLED ? opacity : 0}
          key={i}
        />
      )}
    </g>
  );
};

Pie.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  cornerRadius: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['filled', 'blank']),
    value: PropTypes.number
  })).isRequired,
  opacity: PropTypes.number.isRequired
};

export default Pie;