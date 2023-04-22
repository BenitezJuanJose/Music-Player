export class music_card extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const img = this.getAttribute("card-img");
    const tittle = this.getAttribute("card-tittle");
    const name = this.getAttribute("artist-name");
    this.innerHTML = `
        <div class="music_card">
            <div class="music_card__close"></div>
            <img src="${img}" alt="">
            <div class="music_card__text">
                <h3>${tittle}</h3>
                <p>Artista: ${name}</p>
                <div class="music_card__text--buttons">
                  <button></button>
                  <button class="play"></button>
                  <button></button>
                </div>
            </div>
        </div>
        
        `;
  }
}
window.customElements.define("music-card", music_card);
