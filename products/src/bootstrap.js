import faker from 'faker';

let products = '<ul>'

for (let index = 0; index < 5; index++) {
  const name = faker.commerce.productName()
  products += `<li>${name}</li>`
}

products += `</ul>`

document.querySelector('#dev-products').innerHTML = products