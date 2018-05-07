import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-avatar',
  styleUrl: 'avatar.css',
})
export class Avatar {
  @Prop() src: string;
  render() {
    const imgurl = {
      'background-image': `url('${this.src}')`,
    };
    return <div style={imgurl} class="pr-avatar" />;
  }
}
