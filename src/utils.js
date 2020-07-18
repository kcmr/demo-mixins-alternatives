import { css, unsafeCSS } from 'lit-element';

export function defineCustomElement(tagName, klass) {
  if (!window.customElements.get(tagName)) {
    window.customElements.define(tagName, klass);
  }
}

export function getStyles(styles) {
  return css`
    ${unsafeCSS(styles)}
  `;
}
