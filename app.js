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
//=========--------==--=---========-----------==--=-==-=--
let buyurtmaSummasi = 120000;
let premiumObuna = false;

if (buyurtmaSummasi >= 100000 || premiumObuna) {
  console.log("Bepul yetkazib berish");
} else {
  console.log("Yetkazib berish pullik");
}
//==============----====---=--=--=====----=--====--=--==-==-=--=-
let mahsulotNarxi = 200000;
let chegirmaKuponi = true;
let yakuniySumma;

if (chegirmaKuponi) {
  yakuniySumma = mahsulotNarxi - mahsulotNarxi * 0.15;
  console.log("Yakuniy summa (chegirma bilan): " + yakuniySumma + " so‘m");
} else {
  yakuniySumma = mahsulotNarxi;
  console.log("Yakuniy summa (chegirmasiz): " + yakuniySumma + " so‘m");
}
//-----======----==========-----========--======---==--=======---========---=--=-==-
let username = "";
let age = 20;

if (username === "") {
  console.log("Ismingizni kiriting");
} else {
  console.log("Xush kelibsiz");
}
console.log(Boolean(age));
//========------====-------------------==-------=--=-=--=--------=========----
let number = 14;

// 2 ga bo'lgandagi qoldiq 0 ga teng bo'lsa - juft son
if (number % 2 === 0) {
  console.log("Juft son");
} else {
  console.log("Toq son");
}
//==========------====--==----==========--==--=-==-=====---
let yoshi = 16;
let otaAnasiningRuxsati = false;
let chiptaBorligi = true;

if ((yoshi >= 18 || otaAnasiningRuxsati) && chiptaBorligi) {
  console.log("Kino zaliga kirish mumkin");
} else {
  console.log("Kirish mumkin emas");
}
