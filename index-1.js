

const adapter = new LocalStorage('db1')
const db = low(adapter)

db.defaults({ items: [] })
  .write()

function add() {
  db.get('items')
    .push({ time: Date.now() })
    .write()
}

function reset() {
  db.set('items', [])
    .write()
}

function render() {
  const state = db.getState()
  console.log(state.items)
  const str = JSON.stringify(state, null, 2)
  document.getElementById('state').innerHTML = str
  // console.log(str)
}

document.getElementById('reset').onclick = function() {
  reset()
  render()
}

document.getElementById('add').onclick = function() {
  add()
  render()
}

render()


