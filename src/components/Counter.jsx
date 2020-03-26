import PropTypes from 'prop-types';
import React from 'react';

const Counter = ({ count }) => <span className="counter">{count}</span>;

Counter.propTypes = {
    count: PropTypes.number.isRequired,
};

export default Counter;
