import faker from 'faker';

const result = `<div>You have ${faker.datatype.number(12)} items in your cart</div>`

document.querySelector('#dev-cart').innerHTML = result