import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-toggle',
  styleUrl: 'toggle.css',
})
export class Toggle {
  @Prop() label: string;
  @Prop() inputId: string;
  @Prop() hasMargin: boolean = true;
  hostData() {
    return {
      class: {
        'pr-toggle--margin': this.hasMargin,
      },
    };
  }
  render() {
    return (
      <div class="pr-toggle">
        <input class="pr-toggle__input" type="checkbox" id={this.inputId} />
        <label class="pr-toggle__label" htmlFor={this.inputId}>
          <div class="pr-toggle__knob" />
          <span
            data-checked="Off"
            data-unchecked="On"
            class="pr-toggle__option pr-toggle__off"
          >
            Off
          </span>
          <span
            class="pr-toggle__option pr-toggle__on"
            data-checked="On"
            data-unchecked="Off"
          >
            On
          </span>
        </label>
      </div>
    );
  }
}
