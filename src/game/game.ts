import { Entity } from "../utils";

export class Game extends Entity {
  constructor() {
    super();
    // start game loop
    this.Update()
  }

  private _lastTimestamp = 0

  public Update(): void {
    const deltaTime = (Date.now() - this._lastTimestamp) / 1000
    // update all game components
    super.Update(deltaTime)
    this._lastTimestamp = Date.now()

    // game loop
    window.requestAnimationFrame(() => this.Update())
  }
}