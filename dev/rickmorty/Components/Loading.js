import {LitElement, html, css} from 'lit';

export class Loading extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    `,
  ];

  render() {
    return html`
      <section>
        <img
          src="https://media4.giphy.com/media/Temfv2HyFgM47QmiOm/giphy.gif"
        />
        <h2>Loading ...</h2>
      </section>
    `;
  }
}
customElements.define('loading-api', Loading);
