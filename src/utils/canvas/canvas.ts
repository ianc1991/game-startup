import { Vector2D, IAwake, Color } from '../../utils'

export class Canvas implements IAwake {
  constructor(public readonly Size: Vector2D) { }

  private _elm!: HTMLCanvasElement
  private _ctx!: CanvasRenderingContext2D

  public get Element(): HTMLCanvasElement {
    return this._elm
  }

  public get Context(): CanvasRenderingContext2D {
    return this._ctx
  }

  public Awake(): void {
    const canvas = document.createElement('canvas')
    canvas.setAttribute('width', `${this.Size.x}px`)
    canvas.setAttribute('height', `${this.Size.y}px`)

    document.body.appendChild(canvas)
    this._elm = canvas

    const ctx = this._elm.getContext('2d')
    if (!ctx) {
      throw new Error('Context identifier is not supported')
    }

    this._ctx = ctx
  }

  public FillRect(start: Vector2D, size: Vector2D, color: Color): void {
    this._ctx.beginPath()
    this._ctx.fillStyle = color.AsString()
    this._ctx.rect(start.x, start.y, size.x, size.y)
    this._ctx.fill()
  }

  public ClearRect(start: Vector2D, size: Vector2D): void {
    this._ctx.clearRect(start.x, start.y, size.x, size.y)
  }

  public FillCircle(center: Vector2D, radius: number, color: Color): void {
    this._ctx.beginPath()
    this._ctx.arc(center.x, center.y, radius, 0, Math.PI * 2)
    this._ctx.fillStyle = color.AsString()
    this._ctx.fill()
  }

  public FillText(start: Vector2D, letter: string) {
    //this._ctx.beginPath()
    this._ctx.fillText(letter, start.x, start.y)
  }

  public SetStyle(style: Partial<CSSStyleDeclaration>): void {
    for (const key in style) {
      if (!Object.hasOwnProperty.call(style, key)) continue
      if (!style[key]) continue

      this._elm.style[key] = style[key] as string
    }
  }
}