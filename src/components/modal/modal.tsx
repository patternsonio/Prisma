import { Component } from '@stencil/core';

@Component({
  tag: 'pr-modal',
  styleUrl: 'modal.css',
})
export class Modal {
  render() {
    let classes;
    return (
      <div class="pr-modal-content">
        <slot />
      </div>
    );
  }
}
