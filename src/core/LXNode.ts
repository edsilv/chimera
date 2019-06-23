export class LXNode extends HTMLElement {
  constructor(self) {
    self = super();
    console.log("LXNode constructed");
    return self;
  }

  connectedCallback() {
    console.log("LXNode connected");
  }
}

window.customElements.define("lx-node", LXNode);
