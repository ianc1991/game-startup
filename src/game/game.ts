import { Entity } from "../utils";
import { Settings } from "../settings";
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
      this.DirtyDraw()
    })
  }

  private DirtyDraw(): void {
    // Create and attach Canvas to DOM
    const canvas = document.createElement('canvas')
    const canvasSize = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * Settings.grid.dimension + Settings.grid.nodeOffset
    canvas.setAttribute('width', canvasSize.toString())
    canvas.setAttribute('height', canvasSize.toString())
    document.body.appendChild(canvas)

    const size = Settings.grid.nodeSize
    const offset = Settings.grid.nodeOffset
    for (let y = 0; y < Settings.grid.dimension; y++) {
      for (let x = 0; x < Settings.grid.dimension; x++) {
        const ctx = canvas.getContext('2d')!
        ctx.beginPath()
        ctx.fillStyle = Settings.grid.color
        ctx.rect((size + offset) * x, (size + offset) * y, size, size)
        ctx.fill()
      }
    }

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