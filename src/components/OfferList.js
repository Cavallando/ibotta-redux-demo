import React from 'react'
import PropTypes from 'prop-types'
import Offer from './Offer'
import { connect } from 'react-redux';
import ListHeader from './ListHeader';

const OfferList = ({  dispatch, offers  }) => (
  <div style={{ padding: 20 }}>
    <ListHeader text="Offers" />
    <ul className="offers">
      {offers.map(offer =>
        <Offer
          key={offer}
          onClick={() => {}}
          {...offer}
        />
      )}
    </ul>
  </div>
);

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

const mapStateToProps = state => ({
  offers: state.offers,
});

export default connect(mapStateToProps)(OfferList)
