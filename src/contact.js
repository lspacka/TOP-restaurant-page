const body = document.body
const content = document.getElementById('content')

export default function Contact() {
  const heading_inner = document.createElement('div')
  const heading_outer = document.createElement('div')
  const mama_inner = document.createElement('div')
  const mama_outer = document.createElement('div')
  const papa_inner = document.createElement('div')
  const papa_outer = document.createElement('div')
  const baby_inner = document.createElement('div')
  const baby_outer = document.createElement('div')

  heading_inner.innerHTML = '<h1>Contact Us</h1>'
  heading_outer.append(heading_inner)

  mama_inner.innerHTML = "<p>Mama Bear</p><p>Chef <br> 555-555-5554 <br> totallyRealEmail@notFake.com</p>"
  papa_inner.innerHTML = "<p>Papa Bear</p><p>Manager<br>555-555-5555<br>perfectlyRealEmail@notFake.com</p>"
  baby_inner.innerHTML = "<p>Baby Bear</p><p>Waiter<br>555-555-5556<br>totallyRealEmail@notFake.com</p>"

  mama_outer.append(mama_inner)
  papa_outer.append(papa_inner)
  baby_outer.append(baby_inner)

  content.append(heading_outer, mama_outer, papa_outer, baby_outer)
  body.appendChild(content)
}