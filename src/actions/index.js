let nextOfferId = 0;

export const addOffer = name => ({
  type: 'ADD_OFFER',
  id: nextOfferId++,
  name,
});
