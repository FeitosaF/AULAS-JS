let umaString = "Um \"texto\"";
console.log(umaString);

let umaString1 = "Um \\texto"
console.log(umaString1);

//As strings são indexadas(texto iterável) Ex: cada caractere tem um indice 
let umaString2 = "Um texto"//indece: 01234567
console.log(umaString2[4]);

let umaString3 = "Um texto";
console.log(umaString3.charAt(0));

let umaString4 = "Um texto";
console.log(umaString.concat('em um lindo dia'));
console.log(umaString + 'em um lindo dia');
console.log(`${umaString} em um lindo dia`)

let umaString5 = "Um texto";
console.log(umaString5.indexOf('texto'));

let umaString6 = "Um texto";
console.log(umaString5.indexOf('o', 3));

let umaString7 = "Um texto";
console.log(umaString5.lastIndexOf('m', 3));

let umaString8 = "Um texto";
console.log(umaString8.replace('Um', 'Outra'));

let umaString9 = "O rato roeu a roupa do rei de roma."
console.log(umaString9.replace(/r/g, '#'));

let umaString10 = "O rato roeu a roupa do rei de roma."
console.log(umaString10.length)

let umaString11 = "O rato roeu a roupa do rei de roma."
console.log(umaString11.slice(2, 6));

let umaString12 = "O rato roeu a roupa do rei de roma."
console.log(umaString12.slice(-5));

let umaString13 = "O rato roeu a roupa do rei de roma."
console.log(umaString13.slice(-5, -1));

let umaString14 = "O rato roeu a roupa do rei de roma."
console.log(umaString14.split('r'))

let umaString15 = "O rato roeu a roupa do rei de roma."
console.log(umaString15.split(' ', 3))

let umaString16 = "O rato roeu a roupa do rei de roma."
console.log(umaString16.toUpperCase());
console.log(umaString16.toLowerCase());