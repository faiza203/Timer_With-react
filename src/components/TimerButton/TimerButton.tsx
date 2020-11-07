import React from 'react';
import PropTypes from 'prop-types';
import './TimerButton.css';

const TimerButton = (props : any) => (
  <div className="button-container">
    <p className="button-value">{props.buttonValue}</p>
  </div>
);

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;