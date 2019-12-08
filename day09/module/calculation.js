let pertambahan = (num1, num2) => {
    return `Hasil pertambahan  ${num1 + num2}`;
}

let pengurangan = (num1, num2) => {
    return `Hasil pertambahan  ${num1 - num2}`;
}

let perkalian = (num1, num2) => {
    return `Hasil pertambahan  ${num1 * num2}`;
}

let pembagian = (num1, num2) => {
    return `Hasil pertambahan  ${num1 / num2}`;
}

module.exports = {
    tambah: pertambahan,
    kurang: pengurangan,
    kali: perkalian,
    bagi: pembagian
}