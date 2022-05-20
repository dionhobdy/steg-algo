let randomInt = (max) => {
    return Math.floor(Math.random() * max);
} // random number generator

let arr = [];
let arr0 = [];
for (i = 0; i < 8; i ++) {
    arr.push(randomInt(10));
    arr0.push(randomInt(10));
}

const half = arr.length / 2;

let arr1 = arr.splice(0, half);
let arr2 = arr0.splice(0, half);

let arr3 = arr2.concat(arr1);

class hideIn {
    constructor(hide, hideHalf, obj, objHalf, steg) {
        this.hide = hide;
        this.hideHalf = hideHalf;
        this.obj = obj;
        this.objHalf = objHalf;
        this.steg = steg;
    }
} // create a new class that would host the hide/obj ints

const hideInObj = new hideIn(arr, arr1,  arr0, arr2, arr3);
console.log(hideInObj); 