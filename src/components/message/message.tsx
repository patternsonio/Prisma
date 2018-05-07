import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-message',
  styleUrl: 'message.css',
})
export class Message {
  @Prop() warning: boolean = false;
  @Prop() success: boolean = false;
  hostData() {
    return {
      class: {
        'pr-message-warning': this.warning,
      },
    };
  }
  render() {
    return <slot />;
  }
}
