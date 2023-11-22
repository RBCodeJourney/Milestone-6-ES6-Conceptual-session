// forEach, map, find, filter, Reduce

// const arr = [1, 2, 3];

// for (let item of arr) {
//     console.log('first loop',item)
// }
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


//****** forEach()******

/* 

const arr = [1, 2, 3];
const a = (x) => console.log(x)
arr.forEach(a) 

*/
// arr.forEach((x) => console.log(x))

/*
const fruits = ['mango', 'bango', 'chingo'];
fruits.forEach(itme => { console.log(itme) })
 
*/

/*
 const arr = [1, 2, 3];
let sum = 0;
arr.forEach(item => { sum += item; }); // sum = sum + item
console.log(sum);
 
*/
//****** map()******
// const arr = [1,2, 3];

// arr.map((item) => console.log(item))

// forEach function does not return anything
// map function returns an array
/* 
const result = arr.forEach((item) => item)
console.log(result)
const result1 = arr.map((item) => item)
console.log(result1)
console.log('main',arr)
  */

// const fruits = ['Mango', 'chingo', 'bango', 'tango'];
// // array.forEach((element, index, mainArray) => {})
// fruits.forEach((item, index, arr) => console.log(item,index,arr))

//******find()******

/* 
const fruits = ['Mango', 'Chingo', 'Bango', 'Tango'];

const find = (fruits) => {
    for (let item of fruits) {
        if (item === 'Bango') {
            return item
        }
    }
    return null;
}
const x = find(fruits)
console.log(x)


const y = fruits.find((item) => item === 'Bango')
console.log(y)
  */

//******filter()******

/* 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const filter = numbers => {
    const result = [];
    for(let item of numbers){
        if(item % 2===0){
            result.push(item)
        }
    }
    return result;
}

const x = filter(numbers)
console.log(x);

const y = numbers.filter((item) => item%2 ===0)
console.log(y)
  */


// এখানে একটা বিষয় মনে রাখতে হবে সেটা হল যদি find() method কোন কিছু খুঁজে না পায় তাহলে undefined returnd করবে কিন্তু যদি খুঁজে পায় তাহলে এর সাম্নের দিকে আগবেনা ।

//  কিন্তু filter() যদি কোন কিছু খুঁজে না পায় তাহলে সে একটি ফাঁকা Array return করবে ।



//******reduce()******

// const arr = [1, 2, 3, 4, 5];

// previous + current = result

/* 
0 + 1  = 1
1 + 2  = 3
3 + 3  = 6
6 + 4  = 10
10 + 5 = 15

*/


// const sum = arr.reduce((previous, current) => previous + current,0)
// console.log(sum)

// const arr = [1, 2, 3, 4, 5];
// previous * current = result

/* 
1    * 1 = 1
1    * 2 = 2
2    * 3 = 6
6    * 4 = 24
24   * 5 = 120

*/

// const multi = arr.reduce((previous, current) => previous * current)
// console.log(multi);


const arr = [1, 2, 3, 4, 5];
const initial = 50;
const multi = arr.reduce((previous, current) => previous + current,initial)
console.log(multi)


// ******start from 1.40 minute******