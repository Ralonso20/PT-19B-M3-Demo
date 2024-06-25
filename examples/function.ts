function fullName(firstName: string, lastName: string): string | number {
  if (firstName != null) {
    return lastName;
  } else {
    return 10;
  }
}

function multiples(a: number, b: number): boolean {
  return a % b === 0;
}

function noReturn(): void {
  console.log('I do not return anything');
}

fullName('John', 'Doe');
console.log(multiples(10, 5));
noReturn();
