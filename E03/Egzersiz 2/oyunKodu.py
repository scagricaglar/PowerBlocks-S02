def sayiKirici (sayi):
    sonuc = int(sayi/2)
    return sonuc

def cevap (bolum, deger):
    print (f"Bolum {bolum}: a = {deger}")
    bolum = bolum + 1
    return bolum


bolum = 1

a = 1
bolum = cevap(bolum, a)

a = a+1
bolum = cevap(bolum, a)

if a>1:
    a = a+1
bolum = cevap(bolum, a)

if a>3:
    a = a+1
bolum = cevap(bolum, a)

while a<8:
    a = a+1
bolum = cevap(bolum, a)

while a<12:
    a = a+12
bolum = cevap(bolum, a)

if a == 12:
    a = 25
else:
    a = 30
bolum = cevap(bolum, a)

while a<50:
    a = a+1
    if a == 33:
        break
bolum = cevap(bolum, a)

liste = ["bir", "iki", "uc"]

for kelime in liste:
    kelimeUzunluk = len(kelime)
    a = a + kelimeUzunluk
bolum = cevap(bolum, a)

a = a + len(liste)
bolum = cevap(bolum, a)

a = sayiKirici(a)
bolum = cevap(bolum, a)

a = a + len(liste[2])
bolum = cevap(bolum, a)

for i in range(2):
    a = a+i
bolum = cevap(bolum, a)

for i in range(3):
    if a==27:
        a = 1
bolum = cevap(bolum, a)


print(a)