import React from 'react'
import PropTypes from 'prop-types'

const Offer = ({ onClick, name }) => (
  <li
    onClick={onClick}
    className="list-item"
  >
    {name}
  </li>
)

Offer.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Offer;

