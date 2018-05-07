import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-library-footer',
  styleUrl: 'library-footer.css',
})
export class Footer {
  render() {
    return (
      <footer>
        <span class="pr-library-footer-text">Created With</span>
        <pr-logo href="https://patternson.io" />
      </footer>
    );
  }
}
