import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-box',
  styleUrl: 'box.css',
})
export class Box {
  render() {
    return <slot />;
  }
}
