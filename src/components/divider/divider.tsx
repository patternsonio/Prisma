import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-divider',
  styleUrl: 'divider.css',
})
export class Divider {
  render() {
    return <hr />;
  }
}
