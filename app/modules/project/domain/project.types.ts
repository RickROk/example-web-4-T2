export interface IProject {
  id?: string | number;
}

export class Project implements IProject {
  private _id?: string | number;

  constructor(data: IProject) {
    this._id = data.id;
  }

  get id() {
    return this._id;
  }
}
