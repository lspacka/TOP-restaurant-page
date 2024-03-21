import './style.css'

const body = document.body
const content = document.getElementById('content')

export default function Menu() {
  content.innerHTML = ''
  
  const menuHeading_inner = document.createElement('h1')
  const bevHeading_inner = document.createElement('h3')
  const sidesHeading_inner = document.createElement('h3')
  const mainHeading_inner = document.createElement('h3')

  const beverage_inner1 = document.createElement('div')
  const beverage_inner2 = document.createElement('div')
  const side_inner1 = document.createElement('div')
  const side_inner2 = document.createElement('div')
  const mainDish_inner1 = document.createElement('div')
  const mainDish_inner2 = document.createElement('div')
  const mainDish_inner3 = document.createElement('div')
  const mainDish_inner4 = document.createElement('div')
  const mainDish_inner5 = document.createElement('div')
  const mainDish_inner6 = document.createElement('div')
  const mainDish_inner7 = document.createElement('div')
  const mainDish_inner8 = document.createElement('div')

  menuHeading_inner.classList.add('heading')
  bevHeading_inner.classList.add('menu-heading')
  sidesHeading_inner.classList.add('menu-heading')
  mainHeading_inner.classList.add('menu-heading')
  
  menuHeading_inner.textContent = "Menu"
  bevHeading_inner.textContent = "Beverages"
  sidesHeading_inner.textContent = "Sides"
  mainHeading_inner.textContent = "Main Dishes"

  beverage_inner1.innerHTML = "<p>Honey Tea</p><p>A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!</p><p>$2</p>"
  beverage_inner2.innerHTML = "<p>Beary Tea</p><p>A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.</p><p>$3</p>"
  
  side_inner1.innerHTML = "<p>Toast and Jam</p><p>A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.</p><p>$1</p>"
  side_inner2.innerHTML = "<p>Fresh Fruit</p><p>A small bowl of fresh fruit, whatever we find at the market for the day.</p><p>$3</p>"

  mainDish_inner1.innerHTML = "<p>Pancakes</p><p>A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.</p><p>$4</p>"
  mainDish_inner2.innerHTML = "<p>French Toast</p><p>Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.</p><p>$5</p>"
  mainDish_inner3.innerHTML = "<p>Beary Veggie Sandwich</p><p>Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.</p><p>$8</p>"
  mainDish_inner4.innerHTML = "<p>BLT</p><p>Interested in the Beary Veggie Sandwich but also love bacon? Say no more.</p><p>$6</p>"
  mainDish_inner5.innerHTML = "<p>Bagel and Lox</p><p>Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.</p><p>$8</p>"
  mainDish_inner6.innerHTML = "<p>Honeycomb</p><p>Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.</p><p>$6</p>"
  mainDish_inner7.innerHTML = "<p>Beary Bowl</p><p>Get a big ole bowl of our berries! Side of honey is $1 extra.</p><p>$7</p>"
  mainDish_inner8.innerHTML = "<p>The Beary Best Porridge</p><p>Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.</p><p>$5</p>"

  content.append(
    menuHeading_inner,
    bevHeading_inner,
    beverage_inner1,
    beverage_inner2,
    sidesHeading_inner,
    side_inner1,
    side_inner2,
    mainHeading_inner,
    mainDish_inner1,
    mainDish_inner2,
    mainDish_inner3,
    mainDish_inner4,
    mainDish_inner5,
    mainDish_inner6,
    mainDish_inner7,
    mainDish_inner8
  )

  const info_boxes = document.querySelectorAll('div:not(#content)')
  info_boxes.forEach(box => {
    box.classList.add('menu-info')
  })

  body.appendChild(content)
}