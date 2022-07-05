import {LitElement, html, css} from 'lit';
import './Components/Characters';
import './Components/Title';

export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        max-width: 1024px;
        margin: 0 auto;
      }
    `;
  }

  constructor() {
    super();
    document.title ="Rick and Morty API"
  }

  render() {
    return html`
      <title-rick></title-rick>
      <characters-rick></characters-rick>
    `;
  }
}

window.customElements.define('my-app', MyElement);
