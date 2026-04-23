import DefaultTheme from 'vitepress/theme'
import './mermaid-zoom.css'

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof window !== 'undefined') {
      setupMermaidZoom()
    }
  },
}

function setupMermaidZoom() {
  // Create overlay element
  const overlay = document.createElement('div')
  overlay.className = 'mermaid-overlay'
  overlay.addEventListener('click', () => {
    overlay.classList.remove('active')
  })
  document.body.appendChild(overlay)

  // Listen for keydown to close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlay.classList.remove('active')
    }
  })

  // Use MutationObserver to catch dynamically rendered mermaid diagrams
  const observer = new MutationObserver(() => {
    document.querySelectorAll('.mermaid:not([data-zoom-ready])').forEach((wrapper) => {
      wrapper.setAttribute('data-zoom-ready', 'true')
      wrapper.style.cursor = 'zoom-in'
      wrapper.title = '点击放大'
      wrapper.addEventListener('click', () => {
        const svg = wrapper.querySelector('svg')
        if (!svg) return
        const clone = svg.cloneNode(true) as SVGElement
        clone.removeAttribute('width')
        clone.removeAttribute('height')
        clone.style.maxWidth = '95vw'
        clone.style.maxHeight = '90vh'
        clone.style.width = 'auto'
        clone.style.height = 'auto'
        overlay.innerHTML = ''
        overlay.appendChild(clone)
        overlay.classList.add('active')
      })
    })
  })

  observer.observe(document.body, { childList: true, subtree: true })
}
