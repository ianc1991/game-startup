import { IComponent } from '../../../utils'
import { Node } from '../../../node'
import { Settings } from '../../../settings'
import { CanvasLayer } from '../../../canvas-layer'


export class NodeDrawComponent implements IComponent {
  public Entity!: Node


  Update(deltaTime: number): void {
    this.Clear()
    this.Draw()
  }

  Awake(): void {
    this.Clear()
  }

  private Clear(): void {
    CanvasLayer.Background.ClearRect(this.Entity.Start, this.Entity.Size)
  }

  private Draw(): void {
    CanvasLayer.Background.FillRect(
      this.Entity.Start,
      this.Entity.Size,
      Settings.grid.color
    )
  }
}