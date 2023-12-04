export interface IProjectData {
  id?: string | number;
}

export interface IProject extends IProjectData {
  getInfo(): void;
}

export class Project implements IProject {
  private _id?: string | number;

  constructor(data: IProject) {
    this._id = data.id;
  }

  get id() {
    return this._id;
  }

  getInfo(): void {
    throw new Error("Method not implemented.");
  }
}
