const CART_STORAGE_KEY = "cart";

export const getCart = () => {
  return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
};

export const addItemToCart = (addedItem, addedQuantity = 1) => {
  let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];

  if (doesItemExistInCart(addedItem.id, cart)) {
    cart.forEach((cartItem) => {
      if (cartItem.id == addedItem.id) {
        cartItem.quantity += addedQuantity;
      }
    });
  } else {
    cart.push({ ...addedItem, quantity: addedQuantity });
  }

  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

export const removeItemFromCart = (removedItemId) => {
  let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];

  if (!doesItemExistInCart(removedItemId, cart)) {
    return;
  }

  cart = cart.filter((item) => item.id != removedItemId);
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

export const getCartTotalCount = () => {
  const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  const cartTotal = cart.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  );
  return cartTotal;
};

export const getCartTotalPrice = () => {
  const cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  const cartTotal = cart.reduce(
    (accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity,
    0
  );
  return Math.round((cartTotal + Number.EPSILON) * 100) / 100;
};

const doesItemExistInCart = (itemId, cart) => {
  return !!cart.find((cartItem) => itemId == cartItem.id);
};
