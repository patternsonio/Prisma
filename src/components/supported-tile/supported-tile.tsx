import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-supported-tile',
  styleUrl: 'supported-tile.css',
})
export class SupportedTile {
  @Prop() src: string;
  @Prop() name: string;
  @Prop() imageOnly: boolean;
  @Prop() supported: boolean = true;

  hostData() {
    return {
      class: {
        'not-supported': !this.supported,
      },
    };
  }

  render() {
    const content = (
      <figure>
        <img class="image" src={this.src} alt="" />
        {!this.imageOnly && <figcaptaion>{this.name}</figcaptaion>}
      </figure>
    );

    if (!this.supported) {
      return (
        <a
          href={`https://github.com/patternsonio/feedback/issues/new?title=I would love to use a Patternson ${
            this.name
          } integration&body=For my project: (put url here) `}
        >
          {content}
        </a>
      );
    } else {
      return <div>{content}</div>;
    }
  }
}
