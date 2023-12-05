type Social = {
  link?: string;
  image?: string;
};

export interface ITeamMember {
  id: string | number;
  name?: string;
  role?: string;
  description?: string;
  image?: string;
  socials?: Social[];
}

export class TeamMember implements ITeamMember {
  private _id: string | number
  private _name?: string
  private _role?: string
  private _image?: string
  private _socials?: Social[]

  constructor (data: ITeamMember) {
    this._id = data.id
    this._name = data.name
    this._role = data.role
    this._image = data.image
    this._socials = data.socials
  }

  get id () {
    return this._id
  }
}
