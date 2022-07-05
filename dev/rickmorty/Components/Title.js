import { LitElement, html, css } from 'lit';

export class Title extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      div{
       display:flex;
       flex-direction:column;
       justify-content:center; 
       align-items:center;
       margin-bottom:24px;
       text-align:center;
      }
      h1{
        font-size:4rem;
      }
      h1 span , a{
        color:#24aa91;
      }
      @media (max-width: 600px) {
        h1{
          font-size:3rem;
        }
      }
    `
  ];

  render() {
    return html`
    <div>
      <h1>The <span>Rick and Morty</span> API </h1>
      <a>LitElement</a>
    </div>
    `;
  }
}
customElements.define('title-rick', Title);
