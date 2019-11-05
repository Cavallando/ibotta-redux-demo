
const offers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_OFFER':
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ]
    default:
      return state
  }
}

export default offers
