import PropTypes from 'prop-types';
import React from 'react';

type TimeProps = {
  time: Date;
}

const componentName = ({ time }: TimeProps) => {
  return time.toDateString()
}

componentName.propTypes = {};

export default componentName;
