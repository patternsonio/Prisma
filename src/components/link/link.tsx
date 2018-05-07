import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-link',
  styleUrl: 'link.css',
})
export class Link {
  @Prop() href: string;
  render() {
    return (
      <a class="pr-link" href={this.href}>
        <slot />
      </a>
    );
  }
}
