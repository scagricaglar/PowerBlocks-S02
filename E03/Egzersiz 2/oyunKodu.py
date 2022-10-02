def sayiKirici (sayi):
    sonuc = int(sayi/2)
    return sonuc

def cevap (bolum, deger):
    print (f"Bolum {bolum}: a = {deger}")
    bolum = bolum + 1
    return bolum


bolum = 1

#bolum 1
a = 1
bolum = cevap(bolum, a)

#bolum 2
a = a+1
bolum = cevap(bolum, a)

#bolum 3
if a>1:
    a = a+1
bolum = cevap(bolum, a)

#bolum 4
if a>3:
    a = a+1
bolum = cevap(bolum, a)

#bolum 5
while a<8:
    a = a+1
bolum = cevap(bolum, a)

#bolum 6
while a<12:
    a = a+12
bolum = cevap(bolum, a)

#bolum 7
if a == 12:
    a = 25
else:
    a = 30
bolum = cevap(bolum, a)

#bolum 8
while a<50:
    a = a+1
    if a == 33:
        break
bolum = cevap(bolum, a)

#bolum 9
liste = ["bir", "iki", "uc"]

for kelime in liste:
    kelimeUzunluk = len(kelime)
    a = a + kelimeUzunluk
bolum = cevap(bolum, a)

#bolum 10
a = a + len(liste)
bolum = cevap(bolum, a)

#bolum 11
a = sayiKirici(a)
bolum = cevap(bolum, a)

#bolum 12
a = a + len(liste[2])
bolum = cevap(bolum, a)

#bolum 13
for i in range(2):
    a = a+i
bolum = cevap(bolum, a)

#bolum 14
for i in range(4):
    if a==26:
        a = 1
    else:
        a = a+i
bolum = cevap(bolum, a)

#bolum 15
if a==4 and False:
    a = 6
bolum = cevap(bolum, a)

#bolum 16
if a==6 or True:
    a = 20
bolum = cevap(bolum, a)    

#bolum 17
obje = {
    "oge1": [1,2,3],
    "oge2": [4,5,6]
    }
for oge in obje:
    a = a+obje[oge][1]
bolum = cevap(bolum, a)  

#bolum 18
for oge in obje:
    for eleman in obje[oge]:
        if eleman == 2:
            a = a+eleman
bolum = cevap(bolum, a)  

#bolum 19
butunListe = []

for oge in obje:
    butunListe.extend(obje[oge])

for i in range(1,7):
    a = a-butunListe.index(i)

bolum = cevap(bolum, a)  
#bolum 20
for i in range(3):
    for j in range(len(obje)):
        for k in range(len(obje['oge1'])):
            if k < 1:
                l = 0
                while a<20 and l<1:
                    a = a+i+j 
                    l = l+1

bolum = cevap(bolum, a)