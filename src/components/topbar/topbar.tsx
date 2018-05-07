import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-topbar',
  styleUrl: 'topbar.css',
})
export class Topbar {
  render() {
    return (
      <div class="pr-topbar">
        <pr-logo />
        <p-avatar
          style={{ '--size': '60px' }}
          src="https://design.lassediercks.de/images/profile-square_500.png"
        />
      </div>
    );
  }
}
