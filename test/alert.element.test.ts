import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { AlertElement } from '../src/alert/alert.element.js';
import '../src/alert/register.js';

describe('AlertElement', () => {
  it('should show close button if closable', async () => {
    const el = await fixture<AlertElement>(html`<ui-alert></ui-alert>`);
  
    expect(!!el.shadowRoot?.querySelector('button')).to.be.false;
    el.closable = true;
    await el.updateComplete;
    expect(!!el.shadowRoot?.querySelector('button')).to.be.true;
  });

  it('triggers custom event closeChange when close button is clicked', async () => {
    const el = await fixture<AlertElement>(html`<ui-alert closable></ui-alert>`);
    const closeChange = new Promise<CustomEvent>(r => el.addEventListener('closeChange', (e:any) => r(e)));

    el.shadowRoot!.querySelector('button')!.click();
    expect((await closeChange)?.detail).to.equal(true);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<AlertElement>(html`<ui-alert></ui-alert>`);
    await expect(el).shadowDom.to.be.accessible();
  });
});
