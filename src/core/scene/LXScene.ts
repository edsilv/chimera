import { Clock } from "three/build/three.module";
import { LXEntity } from "../LXEntity";

export class LXScene extends LXEntity {
  constructor(self) {
    self = super(self);
    self.clock = new Clock();
    console.log("LXScene constructed");
    return self;
  }

  connectedCallback() {
    console.log("LXScene connected");
  }
}

window.customElements.define("lx-scene", LXScene);
