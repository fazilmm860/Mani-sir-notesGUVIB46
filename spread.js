// let arr = [1,2,3,4];

let sum = function(a,b,c,d) {
    return a + b + c + d;
}

// console.log(sum(arr[0], arr[1], arr[2], arr[3]));


let arr1 = [1,2,3];
let arr2 = [4,5];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log(sum(...arr3));

