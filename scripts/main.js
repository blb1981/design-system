// Initialize elements
const navMenuButton = document.getElementById('navMenuButton')
const navbar = document.getElementById('navbar')
const responsiveMenu = document.getElementById('responsiveMenu')
const rootEl = this

// Values
const maxMenuSize = 768 // Max size in px for responsive nav menu

// Functions
const closeNavMenu = () => {
  navMenuButton.innerText = 'menu'
  navbar.classList.remove('open')
  responsiveMenu.classList.remove('open')
}

const openNavMenu = () => {
  navMenuButton.innerText = 'close'
  navbar.classList.add('open')
  responsiveMenu.classList.add('open')
}

// Event listeners
navMenuButton.addEventListener('click', () => {
  if (navMenuButton.innerText === 'menu') {
    openNavMenu()
  } else {
    closeNavMenu()
  }
})

rootEl.addEventListener('resize', () => {
  if (rootEl.visualViewport.width + 15 > maxMenuSize) {
    closeNavMenu()
  }
})

rootEl.addEventListener('orientationchange', () => {
  if (rootEl.visualViewport.width + 15 > maxMenuSize) {
    closeNavMenu()
  }
})
