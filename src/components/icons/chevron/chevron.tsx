import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pr-chevron',
})
export class Chevron {
  render() {
    return (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 30 30"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Prisma"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Artboard"
            transform="translate(-378.000000, -110.000000)"
            fill="currentcolor"
          >
            <g id="Group" transform="translate(378.000000, 100.000000)">
              <path
                d="M2.78029405,20.3527799 L22.4220941,10.5318799 C24.9056238,9.29011507 27.9255717,10.2967644 29.1673365,12.7802941 C29.5163918,13.4784046 29.6981151,14.2481969 29.6981151,15.0287082 L29.6981151,34.6705082 C29.6981151,37.4471788 27.4471788,39.6981151 24.6705082,39.6981151 C23.8899969,39.6981151 23.1202046,39.5163918 22.4220941,39.1673365 L2.78029405,29.3464365 C0.296764368,28.1046717 -0.709884933,25.0847238 0.53187991,22.6011941 C1.01836976,21.6282144 1.80731436,20.8392698 2.78029405,20.3527799 Z"
                id="Triangle"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
