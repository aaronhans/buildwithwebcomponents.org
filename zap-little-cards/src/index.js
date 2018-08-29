import './_index.scss';
import template from './index.html';

class ZapLittleCards extends HTMLElement {

  static get observedAttributes() {
    return ['datareceived'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.article) {
      this.innerHTML = template(this.article);
    }
    console.log(new Date().getTime())
  }
  
  connectedCallback() {
    // waiting to display until article data is received
  }
}
customElements.define('zap-little-cards', ZapLittleCards);
