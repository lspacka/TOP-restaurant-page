import './style.css'

const body = document.body
const content = document.getElementById('content')

export default function Contact() {
  content.innerHTML = ''
  
  const contact_heading = document.createElement('h1')
  const mama = document.createElement('div')
  const papa = document.createElement('div')
  const baby = document.createElement('div')

  contact_heading.classList.add('heading')
  contact_heading.textContent = 'Contact Us'

  mama.innerHTML = "<p>Mama Bear</p><p>Chef <br> 555-555-5554 <br> totallyRealEmail@notFake.com</p>"
  papa.innerHTML = "<p>Papa Bear</p><p>Manager <br> 555-555-5555 <br> reallyLegitEmail@notFake.com</p>"
  baby.innerHTML = "<p>Baby Bear</p><p>Waiter <br> 555-555-5556 <br> totallyRealEmail@notFake.com</p>"


  content.append(contact_heading, mama, papa, baby)

  const info_boxes = document.querySelectorAll('div:not(#content)')
  info_boxes.forEach(box => {
    box.classList.add('contact-info')
  })

  body.appendChild(content)
}