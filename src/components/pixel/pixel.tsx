import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-pixel',
  styleUrl: 'pixel.css',
})
export class Pixel {
  @Prop() spinning: boolean;
  @Prop() upload: boolean;
  @Prop() inverted: boolean;

  hostData() {
    return {
      class: {
        'pr-pixel--spinning': this.spinning,
        'pr-pixel--upload': this.upload,
        'pr-pixel--inverted': this.inverted,
      },
    };
  }
  render() {
    return (
      <div class="pr-pixel">
        <div class="pr-pixel__pane green" />
        <div class="pr-pixel__pane red" />
        <div class="pr-pixel__pane blue" />
      </div>
    );
  }
}
