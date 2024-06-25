function sum(num1, num2, num3, num4, num5) {
  console.log(num1, num2, num3, num4, num5);
  const total = num1 + num2 + num3 + num4 + num5;
  return total;
}

const result = sum(2, 3, 4, 5, 6);
console.log(result);

const result2 = sum(10, 20, 30, 10, 6);

console.log(result2);

// arrow function
const sub = (num1, num2) => {
  const result = num1 - num2;
  return result;
};

const sub1 = sub(20, 5);
console.log(sub1);
const sub2 = sub(100, 50);
console.log(sub2);
