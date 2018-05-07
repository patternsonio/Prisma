import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-cta',
  styleUrl: 'cta.css',
})
export class Cta {
  @Prop() ctaTitle: string;
  @Prop() linkhref: string;
  @Prop() linktext: string;
  render() {
    return (
      <div>
        <h4 class="pr-cta-headline">{this.ctaTitle}</h4>
        <pr-paragraph class="pr-cta-paragraph" type="big">
          <slot />
        </pr-paragraph>
        <pr-link class="p-cta-link" href={this.linkhref}>
          {this.linktext}
        </pr-link>
      </div>
    );
  }
}
