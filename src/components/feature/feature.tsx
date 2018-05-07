import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-feature',
  styleUrl: 'feature.css',
})
export class Feature {
  @Prop() headline: string;
  render() {
    let classes;
    return (
      <div>
        <h3 class="pr-feature-headline">{this.headline}</h3>
        <pr-paragraph>
          <slot />
        </pr-paragraph>
      </div>
    );
  }
}
