import { Entity, IComponent } from '../../../utils';
import { Node } from '../../../node'


export class NodeDrawComponent implements IComponent {
  public Entity!: Node

  Update(deltaTime: number): void {
    throw new Error("Method not implemented.")
  }

  Awake(): void {
    throw new Error("Method not implemented.")
  }
}