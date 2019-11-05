let nextOfferId = 0;

export const addOffer = name => ({
  type: 'ADD_OFFER',
  id: nextOfferId++,
  name,
});

export const unlockOffer = (id, name) => ({
  type: 'UNLOCK_OFFER',
  id,
  name,
});
