import { Entity } from '../utils'

export class LetterBag extends Entity {
  protected _letters!: string[]

  public Awake(): void {
    this.InitLetterBag()
  }

  public get DrawALetter(): string {
    this.InitLetterBag()
    const random = Math.floor(Math.random() * this._letters.length)
    const letterToReturn = this._letters.splice(random, 1)[0]
    return letterToReturn
  }

  private InitLetterBag() {
    if (this._letters.length !== 0) return
    this._letters = [
      'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
      'B', 'B',
      'C', 'C',
      'D', 'D', 'D', 'D',
      'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
      'F', 'F',
      'G', 'G', 'G',
      'H', 'H',
      'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
      'J',
      'K',
      'L', 'L', 'L', 'L',
      'M', 'M',
      'N', 'N', 'N', 'N', 'N', 'N',
      'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
      'P', 'P',
      'Q',
      'R', 'R', 'R', 'R', 'R', 'R',
      'S', 'S', 'S', 'S',
      'T', 'T', 'T', 'T', 'T', 'T',
      'U', 'U', 'U', 'U',
      'V', 'V',
      'W', 'W',
      'X',
      'Y', 'Y',
      'Z'
    ]
  }
}