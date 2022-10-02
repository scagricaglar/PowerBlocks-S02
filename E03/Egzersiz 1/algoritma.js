///Deklerasyonlar///
//Normalde bu değişkenlere aşağıdaki şekilde değer vermek yerine bunları birer 'input' olarak almamız gerekirdi.
//Bu örnekte, basitlik adına, değerleri kod içinde veriyoruz. Bu değerler ne olduğu kodun ve çözümün kendisini etkilemeyecektir.
var alininParasi = 0
var harclik = 150  //Ali'nin babasından aldığı ilk harçlık
var ruyaMi = false //Booelan bir değişken
var velininYasi = 3 //Ali'nin parasını vadesi hesaptan çektiğinde Veli'nin yaşı
var alininMirasYasi = 16 //Ali'nin miras haberini aldığı yaş
var mirasParası = 10000 //Miras anaparası

//Ali'nin eline geçen ilk para
alininParasi = alininParasi + harclik

//Ali'nin sokakta bulduğu para
alininParasi = alininParasi + 20

//Eğer ak saçlı dedi gerçek 'rüya değildiyse' Ali'nin 200 TL'si daha olmalı
if (!ruyaMi){ //'!' işareti Boolean değerlerinin zıttını verir. Bu örnekte 'ruyaMi' yanlış olduğu için '!ruyaMi' doğru olacaktır.
    alininParasi = alininParasi + 200
}

//Ali'nin kripto vurgunu
alininParasi = alininParasi * 20

//Ali'nin parasının vadeli hesapta kaç yıl durduğunu bilmiyoruz. Böyle bir duruma yaklaşmanın en doğru yolu döngü kullanmak
for (var yil = 0; yil < velininYasi; yil++) { //'yil' 'velininYasi'ndan küçük olduğu sürece
    alininParasi = alininParasi * 1.1 //Para %10 büyüyor
}

//Yukarıdaki 'for' döngüsü ile aşağıdaki 'while' döngüsü tam olarak aynı şekilde çalışmaktadır. Tercih sizin.
//var yil = 0
//while (yil < velininYasi) {
//    alininParasi = alininParasi * 1.1
//    yil++ //'++' bazı dillerde '+1' demek. Bu satır aslında 'yil = yil + 1' in kısa hali
//}

//Ali'ye gelen miras parasının bankada ne kadar bekledğinin bulmak için 'while' döngüsü doğru bir yaklaşım olacaktır.
while (alininMirasYasi < 18) { //Ali'nin yaşı 18 olana kadar. Örneğin Ali'nin miras haberini aldığı yaş 18 sonrası ise bu döngü hiç kullanılmayacaktır.
    mirasParası = mirasParası * 1.05 //Miras anaparası yılda %5 değer kazanıyor
    alininMirasYasi++ //Ali'nin yaşı büyüyor
}
alininParasi = alininParasi + mirasParası //Miras parasının son halinin Ali'nin parasına eklememiz gerekiyor

//Bankanın kredi verme kriteri
if (alininParasi >= 20000){ //Ali'nin parası 20000 TL veya daha fazlaysa
    console.log ("Kredi başvurunuz onaylanmıştır")
} else{ //Geri kalan tüm durumlarda
    console.log ("Başka kapıya")
}