import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-input',
  styleUrl: 'input.css',
})
export class Input {
  @Prop() label: string;
  @Prop() name: string;
  @Prop() inputId: string;
  @Prop() placeholder: string;
  @Prop() value: string;
  @Prop() type: string = 'text';

  render() {
    var selector = 'input-' + this.label.toLowerCase().replace(/\s/g, '-');
    return (
      <div>
        <pr-label
          class="p-input-label"
          for={this.inputId ? this.inputId : selector}
        >
          {this.label}
        </pr-label>
        <input
          placeholder={this.placeholder}
          name={this.name}
          value={this.value}
          id={this.inputId ? this.inputId : selector}
          type={this.type}
        />
      </div>
    );
  }
}
