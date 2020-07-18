import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import sideEffects from '../../src/addons/side-effects.js';
import '../../src/index.js';

suite('<user-profile-card>', () => {
  test('Clicking toggle phone button changes the phone visibility', async () => {
    const el = await fixture(
      html`<user-profile-card phone="XXX"></user-profile-card>`,
    );

    const phone = el.shadowRoot.querySelector('#phone');
    const button = el.shadowRoot.querySelector('#buttonToggle');

    assert.isTrue(phone.hidden, 'phone is hidden by default');

    button.click();
    await el.updateComplete;

    assert.isFalse(phone.hidden, 'phone is visible after clicking button');

    button.click();
    await el.updateComplete;

    assert.isTrue(phone.hidden, 'phone is hidden after clicking button');
  });

  test('Clicking destroy the planet button calls "destroyThePlanet()"', async () => {
    const el = await fixture(html`<user-profile-card></user-profile-card>`);
    const button = el.shadowRoot.querySelector('#buttonDestroy');
    const destroyThePlanetStub = sinon.stub(sideEffects, 'destroyThePlanet');

    el.requestUpdate();
    await el.updateComplete;

    button.click();

    assert.isTrue(destroyThePlanetStub.called);
  });
});
