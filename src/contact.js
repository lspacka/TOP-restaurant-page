const body = document.body
const content = document.getElementById('content')

export default function Contact() {
  const heading_inner = document.createElement('div')
  const heading_outer = document.createElement('div')

  heading_inner.innerHTML = '<h1>Contact Us</h1>'
  heading_outer.append(heading_inner)

  content.append(heading_outer)
  body.appendChild(content)
}