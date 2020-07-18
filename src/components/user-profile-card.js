import { LitElement, html } from 'lit-element';
import { getStyles } from '../utils.js';
import visibility from '../addons/visibility.js';
import sideEffects from '../addons/side-effects.js';
import { emitButtonClickEventsMixin } from '../mixins/button-click-events-mixin.js';
import styles from './user-profile-card.scss';

export class UserProfileCard extends emitButtonClickEventsMixin(LitElement) {
  constructor() {
    super();
    this.togglePhone = visibility.toggle.bind(this);
  }

  static get properties() {
    return {
      ...visibility.properties,
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

      <button id="buttonToggle" @click=${visibility.toggle}>
        ${this.visible ? 'Hide phone' : 'Show phone'}
      </button>

      <button id="buttonDestroy" @click=${sideEffects.destroyThePlanet}>
        Destroy the planet
      </button>

      <p id="phone" ?hidden=${!this.visible}>${this.phone}</p>
    `;
  }
}
