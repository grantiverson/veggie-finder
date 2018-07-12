import React from 'react';
import PropTypes from 'prop-types';

const ToggleButton = (props) => {
  return (
    <button id="locations-list-button" onClick={(e) => props.toggleShowList()}
      aria-label={(props.showList ? "Hide" : "Show") + "list of locations"}
    ></button>
  )
}

export default ToggleButton;

ToggleButton.propTypes = {
  showList:  PropTypes.bool.isRequired,
  toggleShowList: PropTypes.func.isRequired,
}