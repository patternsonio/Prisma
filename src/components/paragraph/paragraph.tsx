import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-paragraph',
  styleUrl: 'paragraph.css',
})
export class Paragraph {
  @Prop() type: string;
  @Prop() hasMargin: boolean = true;

  hostData() {
    return {
      class: {
        'pr-paragraph-margin': this.hasMargin,
      },
    };
  }
  render() {
    return (
      <p class={'pr-paragraph-type-' + this.type}>
        <slot />
      </p>
    );
  }
}
