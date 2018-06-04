import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-avatar',
  styleUrl: 'avatar.css',
})
export class Avatar {
  /** source url of the avatar image */
  @Prop() src: string;
  render() {
    const imgurl = {
      'background-image': `url('${this.src}')`,
    };
    return <div style={imgurl} class="pr-avatar" />;
  }
}
