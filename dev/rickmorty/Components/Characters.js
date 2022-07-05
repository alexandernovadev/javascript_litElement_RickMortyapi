import {LitElement, html, css} from 'lit';
import {getCharacters} from '../helpers/getCharacter';
import './Character';
import { Loading } from './Loading';

export class Characters extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      section {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 16px;
      }
    `,
  ];

  static get properties() {
    return {
      loading: {type: Boolean},
      characters: {type: Array},
    };
  }

  constructor() {
    super();
    this.loading = false;
    this.characters = [];

    this.getData();
  }

  async getData() {
    this.loading = true;
    const characters = await getCharacters();
    this.characters = characters;
    this.loading = false;
  }

  render() {
    return html`
      ${this.loading
        ? html`<loading-api></loading-api>`
        : html`
            <section>
              ${this.characters.map(
                (characterval) => html`
                  <character-rick .character=${characterval}></character-rick>
                `
              )}
            </section>
          `}
    `;
  }
}
customElements.define('characters-rick', Characters);
