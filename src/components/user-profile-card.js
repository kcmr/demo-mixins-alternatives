import { LitElement, html } from 'lit-element';
import { getStyles } from '../utils.js';
import { visibilityProps, toggleVisibility } from '../addons/visibility.js';
import { destroyThePlanet } from '../addons/side-effects.js';
import styles from './user-profile-card.scss';

export class UserProfileCard extends LitElement {
  static get properties() {
    return {
      ...visibilityProps,
      name: { type: String },
      email: { type: String },
      phone: { type: String },
    };
  }

  static get styles() {
    return getStyles(styles);
  }

  render() {
    return html`
      <p>${this.name} – ${this.email}</p>

      <button id="buttonToggle" @click=${toggleVisibility}>
        ${this.visible ? 'Hide phone' : 'Show phone'}
      </button>

      <button id="buttonDestroy" @click=${destroyThePlanet}>
        Destroy the planet
      </button>

      <p id="phone" ?hidden=${!this.visible}>${this.phone}</p>
    `;
  }
}
