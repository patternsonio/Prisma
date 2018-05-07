import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-library',
  styleUrl: 'library.css',
})
export class Library {
  @Prop() headline: string;
  @Prop() subline: string;
  @Prop() buttonText: string;
  render() {
    return (
      <div>
        <pr-header
          headline={this.headline}
          buttonText={this.buttonText}
          subline={this.subline}
        />
        <pr-content>
          <slot />
        </pr-content>
        <pr-library-footer />
      </div>
    );
  }
}
