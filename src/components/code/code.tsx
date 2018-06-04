import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-code',
  styleUrl: 'code.css',
})
export class Code {
  /** language of the code */
  @Prop() type: string;
  /** the source-code to be displayed */
  @Prop() code: string;

  selector;

  constructor() {
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  copyToClipboard(s) {
    let copyText = this.selector as HTMLInputElement;
    copyText.select();
    document.execCommand('copy');
  }

  render() {
    return (
      <div>
        <div class="pr-code-head">
          <div class="type">{this.type}</div>
          <pr-button nomargin ghost onClick={this.copyToClipboard}>
            Copy
          </pr-button>
        </div>
        <div class="pr-code-content">
          <pr-syntax-highlight type={this.type} code={this.code} />
        </div>

        <textarea
          ref={(node) => {
            this.selector = node;
          }}
          tabindex="-1"
          aria-hidden
          class="code-to-copy"
        >
          {this.code}
        </textarea>
      </div>
    );
  }
}
