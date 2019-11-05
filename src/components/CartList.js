import React from 'react'
import PropTypes from 'prop-types'
import Offer from './Offer'
import { connect } from 'react-redux';
import ListHeader from './ListHeader';

const CartList = ({  dispatch, offers, cart  }) => (
  <div style={{ padding: 20 }}>
    <ListHeader text="Cart" />
    <ul className="cart">
      {cart.map(offer =>
        <Offer
          key={offer.id}
          onClick={() => dispatch({ type: 'MAKE_PURCHASE', id: offer.id })}
          {...offer}
        />
      )}
    </ul>
  </div>
);

CartList.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

const mapStateToProps = state => ({
  cart: state.cart,
  offers: state.offers,
})

export default connect(mapStateToProps)(CartList)
