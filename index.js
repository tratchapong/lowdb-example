//
// Lowdb code example
// See https://github.com/typicode/lowdb
// 

// LocalStorage is a lowdb adapter for saving to localStorage

const adapter = new LocalStorage('db')

// Create database instance
const db = low(adapter)

// Set default state
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

//
// UI code using vanilla JavaScript
// You can use any other UI lib with lowdb
//

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


