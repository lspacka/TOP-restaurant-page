const body = document.body
const content = document.getElementById('content')

export default function Home() {
  const name = document.createElement('h1')
  const honeycomb = document.createElement('img')
  const review_inner = document.createElement('div')
  const review_outer = document.createElement('div')
  const hours_inner = document.createElement('div')
  const hours_outer = document.createElement('div')
  const loc_inner = document.createElement('div')
  const loc_outer = document.createElement('div')
  const heart = document.createElement('img')

  review_inner.innerHTML = "<p>Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.<p>Goldilocks</p></p>"
  hours_inner.innerHTML = "<h3>Hours</h3><p>Sunday: 8am - 8pm Monday: 6am - 6pm Tuesday: 6am - 6pm Wednesday: 6am - 6pm Thursday: 6am - 10pm Friday: 6am - 10pm Saturday: 8am - 10pm</p>"
  loc_inner.innerHTML = "<h3>Location</h3><p>123 Forest Drive, Forestville, Maine</p>"
  
  review_outer.appendChild(review_inner)
  hours_outer.appendChild(hours_inner)
  loc_outer.appendChild(loc_inner)
  
  honeycomb.src = '/images/honeycomb.svg'
  honeycomb.width = 50
  honeycomb.height = 50

  name.classList.add('restaurant-name')
  name.textContent = "Beary's Breakfast Bar"
  content.append(name, honeycomb, review_outer, hours_outer, loc_outer)

  const info_boxes = document.querySelectorAll('div:not(content)')
  info_boxes.forEach(box => {
    box.classList.add('home-info')
  })

  body.appendChild(content)
}