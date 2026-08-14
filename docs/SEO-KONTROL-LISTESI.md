# SEO & Yerel SEO Yayın Kontrol Listesi

Bu doküman; site yayına alındıktan sonra Google Search Console, Google Business Profile,
arama motoru ping'leri ve backlink/dizin kayıtları için yapılması gereken adımları özetler.

> **Güncel marka:** İstanbul Ağız ve Diş Sağlığı Merkezi
> **Hedef domain:** oraldent.com (şu an `acildishastanesi.org` üzerinde, Vercel `acildis.vercel.app`)

---

## 1. Google Search Console (GSC)

1. [search.google.com/search-console](https://search.google.com/search-console) adresine giriş yapın.
2. **"Alan adı" (Domain) sahipliğini** doğrulayın: `acildishastanesi.org` (ve ileride `oraldent.com`)
   - DNS kaydı Vercel'e yönlendirildikten sonra GSC size DNS TXT kaydı verir.
   - Kaydı DNS sağlayıcınıza ekleyin ve doğrulayın.
3. Sitemap'i ekleyin: `https://acildishastanesi.org/sitemap.xml`
4. **İndeksleme > Sayfalar** bölümünden tüm sayfaların durumunu takip edin.

## 2. Bing Webmaster Tools

1. [bing.com/webmasters](https://www.bing.com/webmasters) adresine giriş yapın.
2. Siteyi ekleyin ve doğrulayın (Google hesabıyla içe aktarılabilir).
3. Sitemap: `https://acildishastanesi.org/sitemap.xml`
4. **IndexNow** doğrulaması zaten yapıldı — anahtar dosyası:
   `https://acildishastanesi.org/8f2a1c3d9e4b5a6c7d8e9f0a1b2c3d4e.txt`

## 3. Yandex Webmaster

1. [webmaster.yandex.com](https://webmaster.yandex.com) adresine giriş yapın.
2. Sitemap'i ekleyin ve doğrulayın.

## 4. Google Business Profile (GBP) — yerel SEO'nun kalbi

1. [business.google.com](https://business.google.com) adresinden kliniğinizi kaydedin.
2. **NAP tutarlılığı** (isim/adres/telefon — siteyle birebir aynı):
   - İsim: **İstanbul Ağız ve Diş Sağlığı Merkezi**
   - Telefon: **0533 582 82 79**
   - Şehir: **İstanbul**
   - Çalışma saatleri: **Haftanın 7 günü, 24 saat**
3. Kategoriler: **Diş Hekimi**, **Acil Sağlık Hizmetleri**
4. **Hizmet alanını** "İstanbul" olarak genişletin.
5. **Fotoğraflar**: dış cephe, muayene odası, ekip + en az 3 hasta görseli.
6. **İncelemeler**: memnun hastalardan Google yorumu isteyin.
7. **Randevu butonu**: 0533 582 82 79.

## 5. Ölçüm (Analytics)

- **GA4:** property oluşturup ölçüm kimliğini (G-XXXXXXX) Vercel'e `NEXT_PUBLIC_GA_ID` olarak ekleyin.
- **Vercel Analytics:** Panel > Project > Analytics (tek tıkla açılır).

## 6. Domain'i Vercel'e bağlama

1. Vercel Panel > Project > **Settings > Domains** → `acildishastanesi.org` ve `www` ekleyin.
2. DNS sağlayıcınıza Vercel'in verdiği `A` kaydını ekleyin.
3. SSL otomatik kurulur. URL'ler birebir aynı olduğu için 301 gerekmeden otorite taşınır.
4. **oraldent.com** bağlanacağında aynı adımları uygulayın ve eski alan adından 301 yönlendirin.

## 7. Sitemap Ping / IndexNow

Site içeriği değiştiğinde arama motorlarını hızlıca bilgilendirin:

```bash
# Sitemap ping (Yandex)
https://webmaster.yandex.com/ping?sitemap=https://acildishastanesi.org/sitemap.xml

# IndexNow (Bing, Yandex, Seznam) — anahtar dosyası projede mevcut
```

IndexNow anahtar dosyası: `public/8f2a1c3d9e4b5a6c7d8e9f0a1b2c3d4e.txt`
→ Yeni içerik yayınlandığında `https://api.indexnow.org/indexnow` adresine
`{"host":"acildishastanesi.org","key":"8f2a1c3d9e4b5a6c7d8e9f0a1b2c3d4e","urlList":["https://acildishastanesi.org/..."]}`
POST edilir.

## 8. Backlink / Dizin kayıtları

Aşağıdaki dizinlere **tutarlı NAP** (İstanbul Ağız ve Diş Sağlığı Merkezi / 0533 582 82 79 / İstanbul) ile kayıt olun:

### Yerel & sağlık dizinleri
- Google Business Profile (en değerli)
- Yandex Business / Yandex Maps
- Apple Business Connect
- Bing Places
- Facebook Business (işletme sayfası)
- Sağlık/diş hekimliği dizinleri (Türkiye yerel dizinleri, hastane/kliniğe özel listeler)

### Sosyal profiller (siteye backlink)
- Facebook, Instagram, X (Twitter), YouTube, LinkedIn, TikTok
- Her profilin web sitesi alanına `https://acildishastanesi.org` (ileride oraldent.com) yazın.

### İçerik/PR backlink'leri
- Blog yazılarını sektör forumları ve topluluklarda paylaşın.
- Yerel haber sitelerine klinik açılış/etkinlik duyurusu gönderin.
- Sağlık bloglarında misafir yazı yayınlayın.

## 9. Teknik SEO (projede uygulandı)

- ✅ Organization + WebSite + SearchAction (sitelinks search box) schema
- ✅ Dentist / LocalBusiness schema (ana sayfa) — geo + çalışma saatleri
- ✅ Semt sayfalarında Dentist + FAQPage schema
- ✅ Hizmet sayfalarında MedicalProcedure + BreadcrumbList + FAQPage
- ✅ Blog'da Article + BreadcrumbList + FAQPage
- ✅ Sitemap.xml (138 URL + görsel etiketleri)
- ✅ robots.txt (bot kuralları + host + sitemap)
- ✅ og:image + Twitter Card tüm sayfalarda
- ✅ Canonical tüm sayfalarda
- ✅ WebP görseller, statik HTML (çok hızlı)

## 10. Aylık bakım

- GSC'den zayıf sayfaları izleyin (tıklama/gösterim).
- Blog'a aylık 1-2 yeni yazı ekleyin.
- Semt sayfalarındaki hasta yorumları ve güncel bilgileri tazeleyin.
- IndexNow ile yeni içerikleri arama motorlarına bildirin.
