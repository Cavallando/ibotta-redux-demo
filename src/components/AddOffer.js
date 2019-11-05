import React from 'react'
import { connect } from 'react-redux'
import { addOffer } from '../actions'

const AddOffer = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        dispatch(addOffer(input.value));
        input.value = '';
      }}>
        <div className="add-offer">
          <input ref={ref => input = ref} placeholder="Type stuff..." />
          <button type="submit">+</button>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddOffer)
