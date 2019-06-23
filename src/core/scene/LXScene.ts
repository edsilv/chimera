import { World } from "ecsy";
import { LXEntity } from "../LXEntity";
import { bind } from "../../utils/bind";

export class LXScene extends LXEntity {
  private _world: World;
  private _prevTime: number;

  constructor(self) {
    self = super(self);
    self._world = new World();
    self._prevTime = performance.now();
    self.update = bind(self.update, self);
    requestAnimationFrame(self.update);
    console.log("LXScene constructed");
    return self;
  }

  connectedCallback() {
    console.log("LXScene connected");
  }

  update(time: number) {
    const dt: number = time - this._prevTime;
    this._world.execute(dt, time);
    requestAnimationFrame(this.update);
  }
}

window.customElements.define("lx-scene", LXScene);
