import faker from 'faker';

const mount = (el) => {
  const result = `<div>You have ${faker.datatype.number(12)} items in your cart</div>`

  el.innerHTML = result
  // ReactDOM.render(<App />, el)
}

if (process.env.NODE_ENV === 'development') {
const el = document.querySelector('#dev-cart')
  if (el)
    mount(el)
}

export { mount }