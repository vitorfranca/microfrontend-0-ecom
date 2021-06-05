import faker from 'faker';

const mount = (el) => {
  let products = '<ul>'

  for (let index = 0; index < 5; index++) {
    const name = faker.commerce.productName()
    products += `<li>${name}</li>`
  }

  products += `</ul>`

  el.innerHTML = products
  // ReactDOM.render(<App />, el)
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-products')
  if (el)
    mount(el)
}

export { mount }