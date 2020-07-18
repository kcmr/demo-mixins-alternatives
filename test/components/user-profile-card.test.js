import { assert, fixture, html } from '@open-wc/testing';
import '../../src/index.js';

suite('<user-profile-card>', () => {
  test('Clicking button changes the phone visibility', async () => {
    const el = await fixture(
      html`<user-profile-card phone="XXX"></user-profile-card>`,
    );

    const phone = el.shadowRoot.querySelector('#phone');
    const button = el.shadowRoot.querySelector('button');

    assert.isTrue(phone.hidden, 'phone is hidden by default');

    button.click();
    await el.updateComplete;

    assert.isFalse(phone.hidden, 'phone is visible after clicking button');

    button.click();
    await el.updateComplete;

    assert.isTrue(phone.hidden, 'phone is hidden after clicking button');
  });
});
