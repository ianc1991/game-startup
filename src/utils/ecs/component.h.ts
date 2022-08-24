import { Entity } from "./entity"
import { IAwake, IUpdate } from "../../utils"

export interface IComponent extends IUpdate, IAwake {
  Entity: Entity | null
}