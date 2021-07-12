import toggleNavigation from './toggle-navigation.js';
import countCartItems from './counter-cart.js';

toggleNavigation({
  menuButton: document.querySelector('.navbar-toggler'),
  menuList: document.querySelector('.navbar-nav'),
  innerList: document.querySelectorAll('.dropdown-toggler')
});

countCartItems({
  cartItem: document.querySelector('.cart-counter'),
  buyButtons: document.querySelectorAll('.cta-buy-now')
});