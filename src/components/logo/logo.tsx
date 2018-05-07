import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-logo',
  styleUrl: 'logo.css',
})
export class Logo {
  @Prop() inverted: boolean;
  @Prop() href: string;

  render() {
    return (
      <a href={this.href} class="pr-logo">
        <pr-pixel inverted={this.inverted} class="pixel" />
        <span class="name">Patternson</span>
      </a>
    );
  }
}
