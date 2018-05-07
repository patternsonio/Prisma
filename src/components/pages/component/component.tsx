import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-component',
  styleUrl: 'component.css',
})
export class PrComponent {
  @Prop() headline: string;
  @Prop() code: string;
  render() {
    return (
      <div>
        <pr-content>
          <a class="pr-component-backlink" href="../">
            <pr-chevron class="checkvron" /> Back
          </a>
          <pr-headline>{this.headline}</pr-headline>
          <pr-syntax-highlight type="html" code={this.code} />
          <div class="pr-component__content">
            <slot />
          </div>
          <div class="pr-component__props">
            <slot name="props" />
          </div>
        </pr-content>
        <pr-library-footer />
      </div>
    );
  }
}
