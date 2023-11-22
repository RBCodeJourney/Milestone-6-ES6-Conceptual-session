const arr = [3, 4, 5, 6, 8, 9];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [a, b, c,...rest] = arr; // [3, 4, 5, 6, 8, 9]
console.log(a, b, c,rest);