const sizes = {
  small: '24px',
  medium: '48px',
  large: '96px'
}
const fontSizes = {
  small: '.6rem',
  medium: '.8rem',
  large: '1rem'
}
class UIAvatar extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    const size = this.getAttribute('size') || 'medium'
    const social = this.getAttribute('social') || ''
    const username = this.getAttribute('username') || 'username'
    const paths =  [social, username].filter(Boolean).join('/')
    const hideName = this.getAttribute('hideName')
    console.log(hideName, typeof hideName)
    this.shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        img {
          width: ${sizes[size]};
          border-radius: 50%
        }
        h3 {
          font-size: ${fontSizes[size]};
          ${hideName && 'display: none;' }
        }
      </style>
      <img src="https://unavatar.io/${paths}" alt="name"/>
      <h3>${username}</h3>
    `
  }
}

window.customElements.define('ui-avatar', UIAvatar)