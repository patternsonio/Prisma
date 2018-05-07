import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-component-demo',
  styleUrl: 'component-demo.css',
})
export class ComponentDemo {
  @Prop() demoTitle: string;
  @Prop() code: string;
  @Prop() inverted: boolean;
  hostData() {
    return {
      class: {
        'pr-component-demo--inverted': this.inverted,
      },
    };
  }

  render() {
    return (
      <div>
        <h4 class="pr-component-headline">{this.demoTitle}</h4>
        <div class="pr-component-demo__content">
          <slot />
        </div>
        <pr-syntax-highlight
          class="pr-component-code"
          type="Html"
          code={this.code}
        />
      </div>
    );
  }
}
