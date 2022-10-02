Bu örnekte bir kod okuma egzersizi yapacağız. Egzersiz bölümlerden oluşacak, bölümler giderek zorlaşacak ve her bir bölüm bir öncekinin cevabı ile başlayacak.

Cevap her bölüm için aynı: O bölümdeki kod bloğu sonlandığında 'a' nın güncel değeri. 'a' nın başlangıç değeri ise bir öncek bölümden geliyor.

Tavsiyem oturup elinize bir kağıt kalem alıp her bir bölüm için cevaplarınızı yaza yaza ilerlemenizdir. Cevaplara ise ancak bir noktada gerçekten tıkanmadığınız ya da tüm bölümleri bitirmediğiniz sürece bakmananızı rica edeceğim.

Son bölümler aramızdaki en tecrübeliler için dahi zorlayıcı olabilir. Amaç ne kadar ilerleyebildiğiniz görmeniz.

Ve eğer son bölüme kadar tamamen kendiniz ulaşabildiyseniz, ve de ilk defa böyle bir egzersiz yapıyorsanız, canı gönülden tebrikler; bence burada bırakmayın, çok iyi yazılımcı olur sizden.

[Cevaplar](./cevaplar.txt) burada. Eğer cevapları oluşturan kodu görmek isterseniz, o da [burada](./oyunKodu.py).

1. Bölüm:  
   ```
   a = 1
   ```
2. Bölüm:
   ```
   a = a+1
   ```
3. Bölüm:
   ```
   if a>1:
    a = a+1
   ```
4. Bölüm:
   ```
   if a>3:
    a = a+1
   ```
5. Bölüm:
   ```
   while a<8:
    a = a+1
   ```
6. Bölüm:
   ```
   while a<12:
    a = a+12
   ```
7. Bölüm:
   ```
   if a == 12:
    a = 25
   else:
    a = 30
   ```
8. Bölüm:
   ```
   while a<50:
    a = a+1
    if a == 33:
        break
   ```
9. Bölüm: 
   ```
   liste = ["bir", "iki", "uc"]

   for kelime in liste:
    kelimeUzunluk = len(kelime)
    a = a + kelimeUzunluk
   ```
10. Bölüm:
    ```
    a = a + len(liste)
    ```
11. Bölüm:
    ```
    def sayiKirici (sayi):
        sonuc = sayi/2
        return sonuc
    
    a = sayiKirici(a)
    ```
12. Bölüm: 
    ```
    a = a + len(liste[2])
    ```
13. Bölüm:
    ```
    for i in range(2):
        a = a+i
    ```
14. Bölüm:
    ```
    for i in range(4):
    if a==26:
        a = 1
    else:
        a = a+i
    ```
15. Bölüm:
    ```
    if a==4 and False:
        a = 6
    ```
16. Bölüm:
    ```
    if a==6 or True:
        a = 20
    ```
17. Bölüm:
    ```
    obje = {
        "oge1": [1,2,3],
        "oge2": [2,3,4]
    }
    for oge in obje:
        a = a+obje[oge][1]
    ```
18. Bölüm:
    ```
    for oge in obje:
    for eleman in obje[oge]:
        if eleman == 2:
            a = a+eleman
    ```
19. Bölüm:
    ```
    butunListe = []

    for oge in obje:
        butunListe.extend(obje[oge])

    for i in range(1,7):
        a = a-butunListe.index(i)

    ```
20. Bölüm:
    ```
    for i in range(3):
        for j in range(len(obje)):
            for k in range(len(obje['oge1'])):
                if k < 1:
                    l = 0
                    while a<20 and l<1:
                        a = a+i+j 
                        l = l+1
    ```