const price: number = 12.5;
const discount: number = 3;

const finalPrice: number = price - (price * discount) / 100;
console.log('Final price: ', finalPrice);

if (finalPrice < price) {
  console.log('The final price is less than the original price');
}
