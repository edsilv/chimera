import { LXNode } from "./LXNode";

export class LXEntity extends LXNode {
  constructor(self) {
    self = super(self);
    console.log("LXEntity constructed");
  }

  connectedCallback() {
    console.log("LXEntity connected");
  }
}

window.customElements.define("lx-entity", LXEntity);
