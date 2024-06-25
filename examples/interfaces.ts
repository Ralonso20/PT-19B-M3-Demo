enum Roles {
  oneProperty = 'ONE',
  secondProperty = 'SECOND',
}

interface IUser {
  id: number;
  name: string;
  age: number;
  property: Roles;
}
