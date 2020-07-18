export const visibilityProps = {
  visible: { type: Boolean },
};

export function toggleVisibility() {
  this.visible = !this.visible;
}
