export class Roles {
  constructor(public name: string) {}
}

export class User {
  constructor(
    public oid_user: string,
    public username: string,
    public email: string,
    public password: string,
    public token: string,
    public status: boolean,
    public roles: Roles[],
    public created_at: Date,
    public updated_at: Date
  ) {}
}
