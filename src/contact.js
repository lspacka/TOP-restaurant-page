import './style.css'

const body = document.body
const content = document.getElementById('content')

export default function Contact() {
  content.innerHTML = ''
  
  const contact_heading = document.createElement('h1')
  const mama_inner = document.createElement('div')
  const papa_inner = document.createElement('div')
  const baby_inner = document.createElement('div')

  contact_heading.classList.add('heading')
  contact_heading.textContent = 'Contact Us'

  mama_inner.innerHTML = "<p>Mama Bear</p><p>Chef <br> 555-555-5554 <br> totallyRealEmail@notFake.com</p>"
  papa_inner.innerHTML = "<p>Papa Bear</p><p>Manager <br> 555-555-5555 <br> reallyLegitEmail@notFake.com</p>"
  baby_inner.innerHTML = "<p>Baby Bear</p><p>Waiter <br> 555-555-5556 <br> totallyRealEmail@notFake.com</p>"


  content.append(contact_heading, mama_inner, papa_inner, baby_inner)

  const info_boxes = document.querySelectorAll('div:not(#content)')
  info_boxes.forEach(box => {
    box.classList.add('contact-info')
  })

  body.appendChild(content)
}