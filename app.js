//let son = +prompt("son kiriting");
//if (son % 2 == 1) {
//console.log("juft son");
//} else {
// console.log("toq son");
//}
//01. Mahsulotning umumiy narxi
//Do‘konda bitta daftar narxi 5000 so‘m, ruchka narxi 3000 so‘m. Xaridor 4 ta daftar va 2 ta ruchka oladi.
//Vazifa: har bir mahsulotning umumiy narxini va xaridor to‘lashi kerak bo‘lgan jami summani hisoblang.
let daftar = 5000;
let ruchka = 3000;
let m = daftar * 4 + ruchka * 2;
console.log(m);
//=================================================
//02. Yoshni tekshirish
//Foydalanuvchining yoshi 17 ga teng. Agar yoshi 18 yoki undan katta bo‘lsa, “Kirish mumkin”, aks holda
//“Kirish mumkin emas” deb chiqaring.
let yosh = +prompt("yoshingizni kiriting");
if (17 <= 12) {
  console.log("Kirish mumkin");
} else {
  console.log("Kirish mumkin emas");
}
//=======================================================
//03. Boolean() natijasini aniqlash
//Quyidagi qiymatlarni Boolean() orqali tekshirib, natijalarini konsolga chiqaring:
//0
//""
//"JavaScript"
//25
//null
//undefined
console.log(Boolean(""));
//========================----------------------------------------------
//Imtihondan o‘tish
//O‘quvchining bali 76, davomat ko‘rsatkichi esa 85 foiz. Imtihondan o‘tish uchun ball kamida 60 va
//davomat kamida 80 foiz bo‘lishi kerak.
//Agar ikkala shart ham bajarilsa, “Imtihondan o‘tdi”, aks holda “Imtihondan o‘tmadi” deb chiqaring.

if (ball >= 60 && davomat >= 80) {
  console.log("Imtihondan o‘tdi");
} else {
  ("Imtihondan o`tmadi");
}
if (davomat <= 80) {
  console.log("Imtihondan o‘tdi");
} else {
  ("Imtihondan o`tmadi");
}
let oquvchiBali = 76;
let oquvchiDavomati = 85;
