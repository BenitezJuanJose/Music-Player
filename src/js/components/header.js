export class header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <header class="header">
            <h2 class="header__tittle">Discover</h2>
            <nav class="header__nav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Music</a></li>
                    <li><a href="">Contact </a></li>
                </ul>
            </nav>
        </header>
        
        `;
  }
}
window.customElements.define("app-header", header);
