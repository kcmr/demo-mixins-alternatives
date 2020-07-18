export default {
  properties: {
    visible: { type: Boolean },
  },

  toggle() {
    this.visible = !this.visible;
  },
};
