import {LitElement, html, css} from 'lit';

export class Character extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      .card {
        width: 200px;
        height: 260px;
        background: #fff;
        border: solid 1px #f4f4f4;
        border-radius: 4px;
        cursor: pointer;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
      }
      .card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      .card h1 {
        text-align: center;
        font-size:1rem;
      }
      .card p {
        padding: 0 8px;
        text-align:center;
      }
      .card p u{
        color:#24aa91;
        font-weight:700;
      }
      .card img {
        width: 100%;
        height: 60%;
      }
    `,
  ];

  static get properties() {
    return {
      character: {type: Object},
    };
  }
  render() {
    return html`
      <div class="card">
        <h1>${this.character.name}</h1>
        <img src="${this.character.image}" alt="${this.character.name}" />

        <p><u>${this.character.status}</u> - ${this.character.species}</p>
      </div>
    `;
  }
}
customElements.define('character-rick', Character);
