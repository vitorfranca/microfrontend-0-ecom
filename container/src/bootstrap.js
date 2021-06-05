import { mount as renderProducts } from 'products/ProductsIndex';
import { mount as renderCard } from 'cart/CartIndex';

renderCard(document.getElementById('cart-container'))
renderProducts(document.getElementById('products-container'))