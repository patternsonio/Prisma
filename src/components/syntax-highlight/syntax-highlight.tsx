import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-syntax-highlight',
  styleUrl: 'syntax-highlight.css',
})
export class SyntaxHighlight {
  @Prop() type: string;
  @Prop() code: string;
  render() {
    return (
      <pre>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.11.0/prism.js" />
        <code class={'pr-syntax-highlight-code language-' + this.type}>
          {this.code}
        </code>
      </pre>
    );
  }
}
