import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-header',
  styleUrl: 'header.css',
  shadow: true,
})
export class Header {
  @Prop() headline: string;
  @Prop() subline: string;
  @Prop() buttonText: string;
  @Prop() href: string;
  @Prop() additionalText: string;
  render() {
    return (
      <header class="header">
        <pr-logo class="logo" href="https://patternson.io" />
        <pr-headline hasMargin={false} class="headline">
          {this.headline}
        </pr-headline>
        <h2 class="subline">{this.subline}</h2>
        {this.buttonText && (
          <pr-button baem href={this.href} nomargin={true} class="button">
            <span class="pr-button-text">{this.buttonText}</span>
          </pr-button>
        )}
        <span class="text">{this.additionalText}</span>
        <slot />
      </header>
    );
  }
}
