import Home from './home'
import Menu from './menu'
import Contact from './contact'

const body = document.body
const footer = document.createElement('footer')
footer.innerHTML = `<p>Made with <img src="/images/heart.png" width="30"> by @lspacka</p>`

Menu()

body.append(footer)