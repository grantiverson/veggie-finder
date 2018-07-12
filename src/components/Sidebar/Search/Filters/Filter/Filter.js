import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
  let options = props.optionsArray.map(option => {
    return <option value={Object.values(option)[0]} key={Object.keys(option)[0]}>{Object.keys(option)[0]}</option>
  })

  return(
    <select id={props.id} aria-label={props.ariaLabel} onChange={(e) => props.handleChange(e)}>
      {options}
    </select>
  )
}

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
}
