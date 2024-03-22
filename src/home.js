import './style.css'

const body = document.body
const content = document.getElementById('content')

export default function Home() {
  content.innerHTML = ''
  
  const name = document.createElement('h1')
  const review = document.createElement('div')
  const hours = document.createElement('div')
  const location = document.createElement('div')

  name.classList.add('heading')
  review.setAttribute('id', 'review')
  hours.setAttribute('id', 'hours')
  location.setAttribute('id', 'location')

  review.innerHTML = "<p>Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p><p>Goldilocks</p>"
  hours.innerHTML = "<h3>Hours</h3><p>Sunday: 8am - 8pm <br>Monday: 6am - 6pm <br>Tuesday: 6am - 6pm <br>Wednesday: 6am - 6pm<br> Thursday: 6am - 10pm<br> Friday: 6am - 10pm <br>Saturday: 8am - 10pm</p>"
  location.innerHTML = "<h3>Location</h3><p>123 Forest Drive, Forestville, Maine</p>"

  name.textContent = "Beary's Breakfast Bar"
  content.append(name, review, hours, location)

  const info_boxes = document.querySelectorAll('div:not(#content)')
  info_boxes.forEach(box => {
    box.classList.add('home-info')
  })

  body.appendChild(content)
}