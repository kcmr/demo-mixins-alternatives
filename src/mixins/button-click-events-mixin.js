import { dedupeMixin } from '@open-wc/dedupe-mixin';

function emitButtonClickEvent(event) {
  const [deepestNode] = event.path;
  const isButton = deepestNode.localName === 'button';

  if (isButton) {
    this.dispatchEvent(
      new CustomEvent('button-click', {
        composed: true,
        detail: deepestNode,
      }),
    );
  }
}

export const emitButtonClickEventsMixin = dedupeMixin(
  (superClass) =>
    class ButtonClickLoggerMixin extends superClass {
      constructor() {
        super();
        this.addEventListener('click', emitButtonClickEvent);
      }
    },
);
