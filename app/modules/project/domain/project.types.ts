export interface IProjectData {
  id?: string | number;
  description?: string;
  userId?: string;
}

export interface IProject extends IProjectData {
  getInfo(): void;
}

export class Project implements IProject {
  private _id?: string | number;
  private _description?: string;
  private _userId?: string;

  constructor(data: IProjectData) {
    this._id = data.id;
    this._description = data.description;
    this._userId = data.userId;
  }

  get id() {
    return this._id;
  }

  get description() {
    return this._description;
  }

  get userId() {
    return this._userId;
  }

  getInfo(): void {
    throw new Error("Method not implemented.");
  }
}
