import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

const LoaderPropTypes = {
  text: PropTypes.string,
};
const LoaderDefaultProps = {
  text: 'Loading...',
};

type LoaderTypes = InferProps<typeof LoaderPropTypes>;
const Loader: React.FC<LoaderTypes> = (props: LoaderTypes) => {
  return (
    <>
      <span className="spinner-border" role="status"></span>
      {props.text}
    </>
  );
};

Loader.propTypes = LoaderPropTypes;
Loader.defaultProps = LoaderDefaultProps;

export default Loader;
