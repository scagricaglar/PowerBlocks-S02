def sayiBukucu (sayi):
    sonuc = sayi/2
    sonuc = int(sonuc)
    return sonuc

a = 1

a = a+1

if a>1:
    a = a+1

if a>3:
    a = a+1

while a<8:
    a = a+1

while a<12:
    a = a+12

if a == 12:
    a = 25
else:
    a = 30

while a<50:
    a = a+1
    if a == 33:
        break

liste = ["bir", "iki", "uc"]

for kelime in liste:
    kelimeUzunluk = len(kelime)
    a = a + kelimeUzunluk

a = a + len(liste)

a = sayiBukucu(a)

print(a)