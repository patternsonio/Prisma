import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-setting-value',
  styleUrl: 'setting-value.css',
})
export class SettingsValue {
  @Prop() label: string;
  render() {
    return (
      <div class="pr-setting-value">
        <div>
          <pr-label>{this.label}</pr-label>
          <span class="pr-setting-value-content">
            <slot />
          </span>
        </div>
        <pr-button nomargin ghost>
          Change {this.label}
        </pr-button>
      </div>
    );
  }
}
