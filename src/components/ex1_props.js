import React from 'react'
import PropTypes from 'prop-types';
export default function ex1_props(props) {
  return (
    <div>
        {props.showLabel && <h1>CountLabel: </h1>}
        <h1 style={{color: props.color}}>{props.count}</h1>
    </div>
  )
}

ex1_props.propTypes = {
    count: PropTypes.number,
    showLabel : PropTypes.bool
};


ex1_props.defaultProps = {
    showLabel : false
};
