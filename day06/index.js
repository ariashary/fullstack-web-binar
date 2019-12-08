// FUNCTION
// Example 1 / Declaration
// function pembagian(num1, num2) {
//     console.log(num1 / num2);
// }
// pembagian(15, 5);

// Example 2 / Expression
// let pengurangan = function(num1, num2) {
//     console.log(num1 - num2);
// }
// pengurangan(20, 13);

//Example 3 / Arrow Function
// let perkalian = (num1, num2) => {
//     console.log(num1 * num2);
// }
// perkalian(3, 5);


// LOOPING
// For ... Loop
// for (let i = 0; i < 5; i++) {
//     console.log(`Nilainya adalah ${i}`);
// }

// For ... In
// let names = ['Andi', 'Tono', 'Tini', 'Budi'];
// for (x in names) {
//     if (names[x] == 'Tono') {
//         console.log(`index: ${x}, nama: ${(names)[x]}`);   
//     }
// }

// For ... Of
// let fruits = ['Banana', 'Manggo', 'Apple', 'Orange'];
// for (i of fruits) {
//     console.log(`My name is ${i}`)
// }

// While
// let num = 1;
// while (num < 10) {
//     console.log('Hello World');
//     num++;
// }

// .forEach
// let ages = [11, 23, 45, 12, 34, 32]
// ages.forEach(function(item, index, array) {
//     console.log(`item: ${item}, index: ${index}, array: ${array}`);
// });

// .map
// let numbers = [1, 2, 3, 1, 2, 3, 5, 7]
// let newNumber = numbers.map((num) => {
//     return num * 3
// });
// console.log(newNumber);

// function myProfile(nama, umur, hobi) {
//     if (umur <= 56 ) {

//     }
// }

// function calculator(namaOperasi, angka1, angka2) {
//     let result = '';
//     if (namaOperasi === "pertambahan") {
//         result = angka1 + angka2;
//     } else if (namaOperasi === "pengurangan") {
//         result = angka1 - angka2;
//     } else if (namaOperasi === "eksponensial") {
//         result = angka1 ** angka2;
//     } else if (namaOperasi === "perkalian") {
//         result = angka1 * angka2;
//     } else {
//         return 'Nama operasi tidak tersedia!';
//     }
//     return `Hasil ${namaOperasi} ${angka1} dan ${angka2} adalah ${result}`;
// }

let switchCalculator = (namaOperasi, angka1, angka2) => {
    switch (namaOperasi) {
        case "(+)":
            text = `Hasil ${namaOperasi} ${angka1} dan ${angka2} adalah ${angka1 + angka2}`;
            break;
        case "(-)":
            text = `Hasil ${namaOperasi} ${angka1} dan ${angka2} adalah ${angka1 - angka2}`;
            break;
        case "(^)":
            text = `Hasil ${namaOperasi} ${angka1} dan ${angka2} adalah ${angka1 ** angka2}`;
            break;
        case "(*)":
            text = `Hasil ${namaOperasi} ${angka1} dan ${angka2} adalah ${angka1 * angka2}`;
            break;
        default:
            text = "Jenis operasi tidak tersedia";
    }
    return text;
}


// Hasil dari hitungan kalkulator
console.log(switchCalculator("(-)", 7, 2));