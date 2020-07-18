import { LitElement, html } from 'lit-element';
import { getStyles } from '../utils.js';
import styles from './user-profile-card.scss';

export class UserProfileCard extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      email: { type: String },
      phone: { type: String },
      visible: { type: Boolean },
    };
  }

  toggle() {
    this.visible = !this.visible;
  }

  static get styles() {
    return getStyles(styles);
  }

  render() {
    return html`
      <p>${this.name} – ${this.email}</p>

      <button @click=${this.toggle}>
        ${this.visible ? 'Hide phone' : 'Show phone'}
      </button>

      <p ?hidden=${!this.visible}>${this.phone}</p>
    `;
  }
}
