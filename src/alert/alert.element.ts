import { html, LitElement } from 'lit';
import { property } from 'lit/decorators/property.js';
import { styles } from './alert.element.styles.js';

export class AlertElement extends LitElement {
  @property({ type: String }) status: 'info' | 'success' | 'danger' = 'info';

  @property({ type: Boolean }) closable = false;
  
  static styles = styles;

  render() {
    return html`
      <slot></slot>
      ${this.closable ? html`<button @click=${() => this.close()} aria-label="close">&times;</button>` : ''}
    `;
  }

  private close() {
    this.dispatchEvent(new CustomEvent('closeChange', { detail: true }));
  }
}
