const body = document.body
const content = document.getElementById('content')

export default function Menu() {
  const heading_inner = document.createElement('h1')
  const heading_outer = document.createElement('div')

  heading_inner.textContent = 'Menu'
  heading_outer.append(heading_inner)

  content.append(heading_outer)
  body.appendChild(content)
}