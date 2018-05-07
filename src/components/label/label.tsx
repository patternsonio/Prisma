import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-label',
  styleUrl: 'label.css',
})
export class Label {
  @Prop() for: string;
  @Prop() hasMargin: boolean = true;
  hostData() {
    return {
      class: {
        'pr-label--margin': this.hasMargin,
      },
    };
  }
  render() {
    return (
      <label htmlFor={this.for}>
        <slot />
      </label>
    );
  }
}
