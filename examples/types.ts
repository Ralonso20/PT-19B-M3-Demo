enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

type TUsuario = {
  name: string;
  role: Roles;
};

const tuser: TUsuario = {
  name: 'John Doe',
  role: Roles.ADMIN,
};

type shirtSize = 'S' | 'M' | 'L';

function checkSize(size: shirtSize): string {
  return size === 'M' ? 'Out of stock' : 'In stock';
}

console.log(checkSize('S'));
console.log(checkSize('M'));
