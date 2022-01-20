import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';

const TextSquarePropTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};
const TextSquareDefaultsProps = {
  backgroundColor: '#151517',
};

type TextSquareTypes = InferProps<typeof TextSquarePropTypes>;
const TextSquareSVG: FC<TextSquareTypes> = ({
  width,
  height,
  backgroundColor,
  children,
}) => (
  <svg width={width} height={height}>
    <rect width={width} height={height} fill={`${backgroundColor}`}></rect>
    {children}
  </svg>
);

TextSquareSVG.propTypes = TextSquarePropTypes;
TextSquareSVG.defaultProps = TextSquareDefaultsProps;

export default TextSquareSVG;
