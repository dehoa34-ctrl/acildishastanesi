# SEO & Yerel SEO Yayın Kontrol Listesi

Bu doküman, site yayına alındıktan sonra Google Search Console, Google Business Profile
ve ölçüm kurulumu için yapılması gereken adımları özetler.

## 1. Google Search Console (GSC)

1. [search.google.com/search-console](https://search.google.com/search-console) adresine giriş yapın.
2. **"Alan adı" (Domain) sahipliğini** doğrulayın: `acildishastanesi.org`
   - DNS kaydı Vercel'e yönlendirildikten sonra GSC size DNS TXT kaydı verir.
   - Kaydı DNS sağlayıcınıza ekleyin ve doğrulayın.
3. Sitemap'i ekleyin: `https://acildishastanesi.org/sitemap.xml`
4. Birkaç gün içinde **İndeksleme > Sayfalar** bölümünden tüm sayfaların durumunu takip edin.

## 2. Google Business Profile (GBP) — yerel SEO'nun kalbi

1. [business.google.com](https://business.google.com) adresinden kliniğinizi kaydedin.
2. **NAP tutarlılığını** sağlayın (isim/adres/telefon — siteyle birebir aynı olmalı):
   - İsim: **Acil Diş Hastanesi**
   - Telefon: **0533 582 82 79**
   - Şehir: **İstanbul**
   - Çalışma saatleri: **Haftanın 7 günü, 24 saat**
3. Kategoriler: **Diş Hekimi**, **Acil Sağlık Hizmetleri**
4. **Hizmet alanını** "İstanbul" olarak genişletin (semt sayfalarımız bunu destekler).
5. **Fotoğraflar**: kliniğin dış cephesi, muayene odası, ekip ve en az 3 hasta öncesi/sonrası görseli.
6. **İncelemeler**: memnun hastalardan Google yorumu isteyin (SEO ve dönüşümü doğrudan etkiler).
7. **Randevu butonu**: telefon 0533 582 82 79 olarak bağlayın.

## 3. Ölçüm (Analytics)

- **GA4:** Bir GA4 property'si oluşturun, ölçüm kimliğini (G-XXXXXXX) alın.
- Bu kimliği projede etkinleştirmek için Vercel panelinde şu ortam değişkenini ekleyin:
  - `NEXT_PUBLIC_GA_ID = G-XXXXXXX`
  - Sonra `git push` yapın — Vercel otomatik yeniden deploy eder ve kod otomatik olarak GA4'ü yükler.
- **Vercel Analytics:** Panel > Project > Analytics bölümünden bir tıkla açılır, ek kod gerekmez.

## 4. Domain'i Vercel'e bağlama (SEO için en kritik adım)

Şu an site `acildis.vercel.app` üzerinde. Google'ın mevcut otoritesini taşımak için:

1. Vercel Panel > Project > **Settings > Domains**
2. `acildishastanesi.org` ve `www.acildishastanesi.org` ekleyin.
3. DNS sağlayıcınızda Vercel'in verdiği `A` kaydını (ve/veya CNAME) ekleyin.
4. SSL otomatik kurulur (Let's Encrypt).
5. Eski WordPress hostunun DNS'ini Vercel'e çevirdiğinizde eski sitedeki URL'lerle
   **birebir aynı** olduğumuz için 301 yönlendirmesine gerek kalmadan otorite taşınır.

## 5. Backlink / Dizin kayıtları

- Sağlık ve diş hekimliği dizinleri (örn. yerel işletme dizinleri) için tutarlı NAP ile kayıt.
- Google Business Profile'daki web sitesi linki (en değerli geri bağlantı).

## 6. Aylık bakım

- GSC'den zayıf sayfaları izleyin (tıklama/gösterim).
- Blog'a aylık 1-2 yeni yazı ekleyin (bilgi kelimeleri).
- Semt sayfalarındaki hasta yorumları ve güncel bilgileri tazeleyin.
