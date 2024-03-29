import './style.css'

const body = document.body
const content = document.getElementById('content')

export default function Menu() {
  content.innerHTML = ''
  
  const menu_heading = document.createElement('h1')
  const bev_heading = document.createElement('h3')
  const sides_heading = document.createElement('h3')
  const mainDish_heading = document.createElement('h3')

  const beverage_1 = document.createElement('div')
  const beverage_2 = document.createElement('div')
  const side_1 = document.createElement('div')
  const side_2 = document.createElement('div')
  const main_1 = document.createElement('div')
  const main_2 = document.createElement('div')
  const main_3 = document.createElement('div')
  const main_4 = document.createElement('div')
  const main_5 = document.createElement('div')
  const main_6 = document.createElement('div')
  const main_7 = document.createElement('div')
  const main_8 = document.createElement('div')

  menu_heading.classList.add('heading')
  bev_heading.classList.add('menu-heading')
  sides_heading.classList.add('menu-heading')
  mainDish_heading.classList.add('menu-heading')
  
  menu_heading.textContent = "Menu"
  bev_heading.textContent = "Beverages"
  sides_heading.textContent = "Sides"
  mainDish_heading.textContent = "Main Dishes"

  beverage_1.innerHTML = "<p>Honey Tea</p><p>A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!</p>\
                          <p>$2</p>"
  beverage_2.innerHTML = "<p>Beary Tea</p><p>A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.</p>\
                          <p>$3</p>"

  side_1.innerHTML = "<p>Toast and Jam</p><p>A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.</p>\
                      <p>$1</p>"
  side_2.innerHTML = "<p>Fresh Fruit</p><p>A small bowl of fresh fruit, whatever we find at the market for the day.</p>\
                      <p>$3</p>"

  main_1.innerHTML = "<p>Pancakes</p><p>A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.</p>\
                      <p>$4</p>"
  main_2.innerHTML = "<p>French Toast</p><p>Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.</p>\
                      <p>$5</p>"
  main_3.innerHTML = "<p>Beary Veggie Sandwich</p><p>Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.</p>\
                      <p>$8</p>"
  main_4.innerHTML = "<p>BLT</p><p>Interested in the Beary Veggie Sandwich but also love bacon? Say no more.</p>\
                      <p>$6</p>"
  main_5.innerHTML = "<p>Bagel and Lox</p><p>Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.</p>\
                      <p>$8</p>"
  main_6.innerHTML = "<p>Honeycomb</p><p>Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.</p>\
                      <p>$6</p>"
  main_7.innerHTML = "<p>Beary Bowl</p><p>Get a big ole bowl of our berries! Side of honey is $1 extra.</p>\
                      <p>$7</p>"
  main_8.innerHTML = "<p>The Beary Best Porridge</p><p>Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.</p>\
                      <p>$5</p>"

  content.append(
    menu_heading,
    bev_heading,
    beverage_1,
    beverage_2,
    sides_heading,
    side_1,
    side_2,
    mainDish_heading,
    main_1,
    main_2,
    main_3,
    main_4,
    main_5,
    main_6,
    main_7,
    main_8
  )

  const info_boxes = document.querySelectorAll('div:not(#content)')
  info_boxes.forEach(box => {
    box.classList.add('menu-info')
  })

  body.appendChild(content)
}