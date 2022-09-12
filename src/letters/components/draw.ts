import { Entity, IComponent } from "../../utils"

export class DrawLetterComponent implements IComponent {
  Entity!: Entity

  Update(deltaTime: number): void {
    throw new Error("Method not implemented.")
  }

  Awake(): void {
    throw new Error("Method not implemented.")
  }
}