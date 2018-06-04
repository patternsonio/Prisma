import { Element, Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-button',
  styleUrl: 'button.css',
})
export class Button {
  /** optional link target for the button */
  @Prop() href: string;
  /** maximise width of button */
  @Prop() fullwidth: boolean = false;
  @Prop() nomargin: boolean = false;
  @Prop() yellow: boolean = false;
  @Prop() red: boolean = false;
  @Prop() ghost: boolean = false;
  @Prop() baem: boolean = false;

  render() {
    const Element = this.href ? 'a' : 'button';
    return (
      <Element
        href={this.href}
        class={{
          'pr-button': true,
          'pr-button-fullwidth': this.fullwidth,
          'pr-button-nomargin': this.nomargin,
          'pr-button-yellow': this.yellow,
          'pr-button-baem': this.baem,
          'pr-button-red': this.red,
          'pr-button-ghost': this.ghost,
        }}
      >
        <span class="pr-button-text">
          <slot />
        </span>
      </Element>
    );
  }
}
