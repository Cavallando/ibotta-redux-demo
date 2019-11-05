import React from 'react';
import AddOffer from './AddOffer';
import OfferList from './OfferList';
import CartList from './CartList';
import '../assets/main.css';
import YouEarnedItList from './YouEarnedItList';

const App = () => (
  <div className="container">
    <div>
      <AddOffer />
    </div>
    <div className="list-container">
      <OfferList />
      <br />
      <CartList />
    </div>
    <div>
      <YouEarnedItList />
    </div>
  </div>
)

export default App
