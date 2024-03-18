import Home from './home'
import Menu from './menu'
import Contact from './contact'

const home_btn = document.getElementById('home-btn')
const menu_btn = document.getElementById('menu-btn')
const contact_btn = document.getElementById('contact-btn')
let clicked = false

if (!clicked) Home()

home_btn.addEventListener('click', () => {
  Home()
  clicked = true
})

menu_btn.addEventListener('click', () => {
  Menu()
  clicked = true
})

contact_btn.addEventListener('click', () => {
  Contact()
  clicked = true
})
