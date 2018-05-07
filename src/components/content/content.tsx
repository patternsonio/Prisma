import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-content',
  styleUrl: 'content.css',
})
export class Content {
  render() {
    return <slot />;
  }
}
