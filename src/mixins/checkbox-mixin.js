import { dedupeMixin } from '@open-wc/dedupe-mixin';

export const checkboxMixin = dedupeMixin(
  (superClass) =>
    class CheckboxMixin extends superClass {
      static get properties() {
        return {
          checked: { type: Boolean },
        };
      }

      toggle() {
        this.checked = !this.checked;
      }
    },
);
