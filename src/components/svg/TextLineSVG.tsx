import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';

const TextLineSVGPropTypes = {
  x1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  strokeColor: PropTypes.string,
};
const TextLineSVGDefaultProps = {
  strokeColor: 'orange',
};

type TextLineSVGTypes = InferProps<typeof TextLineSVGPropTypes>;
const TextLineSVG: FC<TextLineSVGTypes> = ({ x1, x2, y1, y2, strokeColor }) => (
  <line
    style={{ strokeWidth: 5, stroke: `${strokeColor}` }}
    x1={`${x1}`}
    x2={`${x2}`}
    y1={`${y1}`}
    y2={`${y2}`}
  ></line>
);

TextLineSVG.propTypes = TextLineSVGPropTypes;
TextLineSVG.defaultProps = TextLineSVGDefaultProps;

export default TextLineSVG;
