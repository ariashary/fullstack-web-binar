# Expalanation

## Variable
Variable adalah sebuah nama yang digunakan untuk menyimpan data (nilai atau ekspresi). Dalam javascript, nilai (value) dapat diubah sewaktu-waktu.<br>
Contoh Variable: var, let, const.<br>
Contoh, membuat variable namaLengkap dan mengisinya dengan value "Ali Ahmad Kids Zaman Now":<br>
let namaLengkap = "Ali Ahmad Kids Zaman Now";


```Deklarasi Variabel
Var nama_variabel = nilai
Atau
Nama_variabel = nilai

var siteName = "Petani Kode";
var url = "https://www.petanikode.com";
var visitorCount = 5921; 
```

## Statement if
* Statement if
  if akan mengeksekusi suatu kode jika kondisi dimasukkan ke dalamnya true. Berikut contohnya:

  ```var angka = 7;

  if (angka > 5) {
    alert("angka ini lebih besar dari 5");
  }
  ```
  Statement if juga dapat dibuat bersarang (if di dalam if). Berikut contohnya:
  
  ```var angka = 7;

  if (angka > 5) {
    alert("angka ini lebih besar dari 5");
    if (angka <= 10) {
      alert("angka ini lebih besar atau sama dengan 10");
    }
  }
  ```
  
* Statement if .. else
    Jika kita ingin mengeksekusi suatu kode bila secara default bila tidak ada kondisi yang sesuai dengan statement if sebelumnya, maka kita dapat menggunakan statement if else. Berikut contohnya:

    ```var angka = 4;

    if (angka > 5) {
      alert("angka ini lebih besar dari 5");
    } else {
      alert("angka ini lebih kecil atau sama dengan 5");
    }```

    * Statement if .. else if .. else
    Kita bisa membuat program yang dapat mengevaluasi beberapa kondisi, untuk hal tersebut kita dapat memakai if .. else if .. else. Berikut contohnya:
    
    ```var bulan = 4;

    if (bulan === 0) {
      alert("Ini bulan Januari");
    } else if (bulan === 1) {
      alert("Ini bulan Februari");
    } else if (bulan === 2) {
      alert("Ini bulan Maret");
    } else if (bulan === 3) {
      alert("Ini bulan April");
    } else {
      alert("Bulan belum diketahui sistem");
    }
    ```
  
* Statement switch
  Mirip dengan statement if .. else if .. else, statement switch juga berguna untuk mengevaluasi beberapa kondisi. Berikut contohnya:
 
  ```
  switch (expr) {
    case "Jeruk":
      console.log("Jeruk Rp10.000 per kg.");
      break;
    case "Apel":
      console.log("Apel Rp15.000 per kg.");
      break;
    case "Pisang":
      console.log("Pisang Rp8.000 per kg.");
      break;
    case "Mangga":
    case "Pepaya":
      console.log("Mangga dan pepaya Rp20.000 per kg.");
      break;
    default:
      console.log("Maaf, kami kehabisan " + expr + ".");
  }
  ```
  
## Operator
Operator adalah simbol yang digunakan untuk melakukan operasi pada suatu nilai dan variabel.
Operator dalam pemrograman terbagi dalam 6 jenis:
* Operator aritmatika;
* Operator Penugasan (Assignment);
* Opeartor relasi atau perbandingan;
*	Operator Logika;
*	Operator Bitwise;
*	Operator Ternary;

Contoh:

```var a = 5;
var b = 3;

// menggunakan operator penjumlahan
var c = a + b;
console.log(c);

// ini akan bernilai true
var a = "4" == 4; //-> true

// sedangkan ini akan bernilai false
var b = "4" === 4; //-> false
```

## Tipe Data
Tipe data adalah jenis-jenis data yang bisa kita simpan di dalam variabel.<br>
Ada beberapa tipe data dalam pemrograman Javascript:<br>
*	String (teks)
*	Integer atau Number (bilangan bulat)
*	Float (bilangan Pecahan)
*	Boolean
*	Object

Javascript adalah bahasa yang bersifat dynamic typing, artinya kita tidak harus menuliskan tipe data pada saat pembuatan variabel seperti pada bahasa C, C++, Java, dsb. yang bersifat static typing.

Contoh:

```var name = "Dian";
var age = 22;
var single = true;
```

Javascript akan otomatis mengenali tipe data yang kita berikan pada variabel.<br>
Pada contoh di atas variabel:
*	name bertipe data String;
*	age bertipe data integer;
*	dan single bertipe data boolean.

Hal ini bisa juga kita cek dengan kata kunci typeof.

Contoh:

```typeof name;
typeof age;
typeof single;
```

#### Source
[Tugas Pertemuan-5](https://github.com/Rubitojogja/Tugas-binar/edit/master/Pertemuan-5/Tugas-Pert-5.md)
