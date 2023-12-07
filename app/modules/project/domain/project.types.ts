export interface IProjectData {
  id?: string | number;
  img?: string;
  direction?: string;
  name?: string;
  description?: string;
  link?: string;
}

export interface IProject extends IProjectData {
  getInfo(): void;
}

export class Project implements IProject {
  private _id?: string | number
  public img?: string
  public direction?: string
  public name?: string
  private _description?: string
  public link?: string

  constructor (data: IProjectData) {
    this._id = data.id
    this._description = data.description
    this.img = data.img
    this.direction = data.direction
    this.name = data.name
    this.link = data.link
  }

  get id () {
    return this._id
  }

  get description () {
    return this._description
  }

  getInfo (): void {
    throw new Error('Method not implemented.')
  }
}
