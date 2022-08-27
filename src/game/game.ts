import { Entity } from "../utils";
import { Grid } from "../grid";

export class Game extends Entity {
  private _entities: Entity[] = []
  private _lastTimestamp = 0

  public get Entities(): Entity[] {
    return this._entities
  }

  public Awake(): void {
    super.Awake()

    this._entities.push(new Grid())

    // awake children
    for (const entity of this.Entities) {
      entity.Awake()
    }

    window.requestAnimationFrame(() => {
      this._lastTimestamp = Date.now()
      // begin loop
      this.Update()
    })
  }

  public Update(): void {
    const deltaTime = (Date.now() - this._lastTimestamp) / 1000

    // update all game components
    super.Update(deltaTime)

    // update children
    for (const entity of this.Entities) {
      entity.Update(deltaTime)
    }

    this._lastTimestamp = Date.now()

    // game loop
    window.requestAnimationFrame(() => this.Update())
  }
}