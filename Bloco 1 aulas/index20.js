let num1 = 1;
let num2 = 2.5;
console.log(num1.toString() + num2);
console.log(typeof num1); 

let num3 = 1500;
let num4 = 2.5;
num4 = num4.toString();
console.log(typeof num4);
console.log(num3.toString(2));

let num5 = 10.5789551255547;
let num6 = 20;
console.log(num5.toFixed(2));
console.log(Number.isInteger(num6));

let temp = num6 * 'Olá';
console.log(temp);
console.log(Number.isNaN(NaN));

let num7 = 0.7;
let num8 = 0.1;
num7 += num8; //0.8
num7 += num8; //0.9
num7 += num8; //1.0
num7 += num8; //1.1
num7 += num8; //1.2
num7 += num8; //1.3
num7 += num8; //1.4 
num7 += num8; //1.5
num7 += num8; //1.6
num7 += num8; //1.7
num7 += num8; //1.8
num7 += num8; //1.9
num7 = Number(num7.toFixed(2));
console.log(num7);
console.log(Number.isInteger(num7));

let num9 = 0.8;
let num10 = 0.1;
num9 = ((num9 * 100) + (num10 * 100)) / 100; //0.9
num9 = ((num9 * 100) + (num10 * 100)) / 100; //1.0
console.log(num9);
console.log(Number.isInteger(num9));