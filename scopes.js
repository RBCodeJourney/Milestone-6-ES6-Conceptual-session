// const x = 5;

// if (true){
//     console.log(x)
// }

// var , let , const

// let & const have block scoped
// var is functional scoped


// block scope

/*

{
    let x = 5;
    x++;
    console.log('inside block: ', x)
}

console.log('inside block: ', x)

*/

/* 
{
    var x = 5;
    x++;
    console.log('inside block: ', x)
}
console.log('inside block: ', x)
  */

// ভার শুধুমাত্র function এ আটকায় উদাহরণ নিচে


/* 
function show() {
    var x = 5;
    y = 10;
}
show();
// console.log(x)
console.log(y)
  */

const x = 5;

{
    const x = 10;
    console.log('inside block: ', x)
}