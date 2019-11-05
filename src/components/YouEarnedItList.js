import React from 'react';
import { connect } from 'react-redux';
import ListHeader from './ListHeader';

const YouEarnedIt = ({ name }) => (
  <li className="list-item">
    You earned money for {name}!
  </li>
);

const YouEarnedItList = ({ purchases, offers  }) => (
  purchases ? (<div style={{ padding: 20 }}>
    <ListHeader text="Redeemed Offers" />
    <ul className="purchases">
      {Object.keys(purchases).map(offerId =>
        <YouEarnedIt
          key={offerId}
          {...offers[offerId]}
        />
      )}
    </ul>
  </div>) : null
);

const mapStateToProps = state => ({
  offers: state.offers,
  purchases: state.purchases,
});

export default connect(mapStateToProps)(YouEarnedItList);



