import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'pr-headline',
  styleUrl: 'headline.css',
})
export class Headline {
  @Element() host: HTMLElement;
  @Prop() level: number = 1;
  @Prop() hasMargin: boolean = true;
  hostData() {
    return {
      class: {
        'pr-headline--margin': this.hasMargin,
      },
    };
  }
  render() {
    const Element = `h${this.level}`;

    return (
      <Element class="pr-headline">
        <slot />
      </Element>
    );
  }
}
