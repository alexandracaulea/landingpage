// Counter cart functionality

// get the number of items from localStoare or default the number to 0
const getCarNumber = () => {
  return +localStorage.getItem('numCartItems') || 0;
};

// update the DOM and the localStorage with the number of items
const setCartNumber = (cartItem, numItems) => {
  cartItem.textContent = numItems;
  localStorage.setItem('numCartItems', numItems);
}

export default function countCartItems({cartItem, buyButtons}) {
  let numItems = getCarNumber();
  setCartNumber(cartItem, numItems);

  buyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      numItems += 1;
      setCartNumber(cartItem, numItems); 
    });
  });
}