import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-card',
  styleUrl: 'card.css',
})
export class Card {
  render() {
    return <slot />;
  }
}
