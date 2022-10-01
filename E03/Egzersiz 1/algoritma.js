var alininParasi = 0
var harclik = 150
var ruyaMi = false
var velininYasi = 3
var alininMirasYasi = 16
var mirasParası = 10000

alininParasi = alininParasi + harclik

alininParasi = alininParasi + 20

if (!ruyaMi){
    alininParasi = alininParasi + 200
}

alininParasi = alininParasi * 20

for (var yil = 0; yil < velininYasi; yil++) {
    alininParasi = alininParasi * 1.1
}

//
//var yil = 0
//while (yil < velininYasi) {
//    alininParasi = alininParasi * 1.1
//    yil++
//}

while (alininMirasYasi < 18) {
    mirasParası = mirasParası * 1.05
    alininMirasYasi++
}
alininParasi = alininParasi + mirasParası

if (alininParasi >= 20000){
    console.log ("Kredi başvurunuz onaylanmıştır")
} else{
    console.log ("Başka kapıya")
}