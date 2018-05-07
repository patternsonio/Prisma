import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-frame',
  styleUrl: 'frame.css',
})
export class Frame {
  render() {
    return <slot />;
  }
}
