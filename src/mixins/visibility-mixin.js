import { dedupeMixin } from '@open-wc/dedupe-mixin';

export const visibilityMixin = dedupeMixin(
  (superClass) =>
    class VisibilityMixin extends superClass {
      static get properties() {
        return {
          visible: { type: Boolean },
        };
      }

      toggle() {
        this.visible = !this.visible;
      }
    },
);
