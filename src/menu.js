const body = document.body
const content = document.getElementById('content')

export default function Menu() {
  const menuHeading_inner = document.createElement('div')
  const menuHeading_outer = document.createElement('div')
  const bevHeading_inner = document.createElement('div')
  const bevHeading_outer = document.createElement('div')
  const sidesHeading_inner = document.createElement('div')
  const sidesHeading_outer = document.createElement('div')
  const mainHeading_inner = document.createElement('div')
  const mainHeading_outer = document. createElement('div')

  const beverage_inner1 = document.createElement('div')
  const beverage_outer1 = document.createElement('div')
  const beverage_inner2 = document.createElement('div')
  const beverage_outer2 = document.createElement('div')
  const side_inner1 = document.createElement('div')
  const side_outer1 = document.createElement('div')
  const side_inner2 = document.createElement('div')
  const side_outer2 = document.createElement('div')
  const mainDish_inner1 = document.createElement('div')
  const mainDish_outer1 = document.createElement('div')
  const mainDish_inner2 = document.createElement('div')
  const mainDish_outer2 = document.createElement('div')
  const mainDish_inner3 = document.createElement('div')
  const mainDish_outer3 = document.createElement('div')
  const mainDish_inner4 = document.createElement('div')
  const mainDish_outer4 = document.createElement('div')
  const mainDish_inner5 = document.createElement('div')
  const mainDish_outer5 = document.createElement('div')
  const mainDish_inner6 = document.createElement('div')
  const mainDish_outer6 = document.createElement('div')
  const mainDish_inner7 = document.createElement('div')
  const mainDish_outer7 = document.createElement('div')
  const mainDish_inner8 = document.createElement('div')
  const mainDish_outer8 = document.createElement('div')
  
  menuHeading_inner.innerHTML = "<h1>Menu</h1>"
  bevHeading_inner.innerHTML = "<h2>Beverages</h2>"
  sidesHeading_inner.innerHTML = "<h2>Sides</h2>"
  mainHeading_inner.innerHTML = "<h2>Main Dishes</h2>"

  menuHeading_outer.append(menuHeading_inner)
  bevHeading_outer.append(bevHeading_inner)
  sidesHeading_outer.append(sidesHeading_inner)
  mainHeading_outer.append(mainHeading_inner)

  beverage_inner1.innerHTML = "<p>Honey Tea</p><p>A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!</p><p>$2</p>"
  beverage_inner2.innerHTML = "<p>Beary Tea</p><p>A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.</p><p>$3</p>"
  
  beverage_outer1.append(beverage_inner1)
  beverage_outer2.append(beverage_inner2)

  side_inner1.innerHTML = "<p>Toast and Jam</p><p>A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.</p><p>$1</p>"
  side_inner2.innerHTML = "<p>Fresh Fruit</p><p>A small bowl of fresh fruit, whatever we find at the market for the day.</p><p>$3</p>"
  
  side_outer1.append(side_inner1)
  side_outer2.append(side_inner2)

  mainDish_inner1.innerHTML = "<p>Pancakes</p><p>A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.</p><p>$4</p>"
  mainDish_inner2.innerHTML = "<p>French Toast</p><p>Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.</p><p>$5</p>"
  mainDish_inner3.innerHTML = "<p>Beary Veggie Sandwich</p><p>Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.</p><p>$8</p>"
  mainDish_inner4.innerHTML = "<p>BLT</p><p>Interested in the Beary Veggie Sandwich but also love bacon? Say no more.</p><p>$6</p>"
  mainDish_inner5.innerHTML = "<p>Bagel and Lox</p><p>Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.</p><p>$8</p>"
  mainDish_inner6.innerHTML = "<p>Honeycomb</p><p>Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.</p><p>$6</p>"
  mainDish_inner7.innerHTML = "<p>Beary Bowl</p><p>Get a big ole bowl of our berries! Side of honey is $1 extra.</p><p>$7</p>"
  mainDish_inner8.innerHTML = "<p>The Beary Best Porridge</p><p>Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.</p><p>$5</p>"
  
  mainDish_outer1.append(mainDish_inner1)
  mainDish_outer2.append(mainDish_inner2)
  mainDish_outer3.append(mainDish_inner3)
  mainDish_outer4.append(mainDish_inner4)
  mainDish_outer5.append(mainDish_inner5)
  mainDish_outer6.append(mainDish_inner6)
  mainDish_outer7.append(mainDish_inner7)
  mainDish_outer8.append(mainDish_inner8)

  content.append(
    menuHeading_outer,
    bevHeading_outer,
    beverage_outer1,
    beverage_outer2,
    sidesHeading_outer,
    side_outer1,
    side_outer2,
    mainHeading_outer,
    mainDish_outer1,
    mainDish_outer2,
    mainDish_outer3,
    mainDish_outer4,
    mainDish_outer5,
    mainDish_outer6,
    mainDish_outer7,
    mainDish_outer8
  )
  body.appendChild(content)
}