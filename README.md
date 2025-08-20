# Todo App

Kişisel görev ve aktivite takibi için modern bir React uygulaması.

## Özellikler

- **Görev Ekleme:** Yeni görevler ekleyebilir, kategori, tarih ve saat belirleyebilirsin.
- **Ana Sayfa:** Günlük görevlerini ve yarının önizlemesini görebilirsin.
- **Raporlar:** Tamamlanan, eksik kalan ve zamanında yapılan aktiviteleri grafiklerle takip edebilirsin.
- **Zamanlayıcı:** Görevler için zamanlayıcı başlatabilirsin.
- **Hesap:** Kullanıcı hesabı sayfası.
- **Animasyonlu Sayfa Geçişleri:** View Transitions API ile yumuşak geçişler.
- **Mobil Dostu:** Responsive ve mobil uyumlu arayüz.
- **Bottom Navigation:** Kolay erişim için sabit alt menü.

## Kullanılan Teknolojiler

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/) & [react-chartjs-2](https://react-chartjs-2.js.org/)
- [Lucide Icons](https://lucide.dev/)
- [React Router](https://reactrouter.com/)

## Kurulum

```sh
git clone https://github.com/busramestan/todo-app.git
cd todo-app
npm install
npm run dev
```

## Proje Yapısı

```
src/
  components/
    addTodo/      # Görev ekleme bileşenleri
    home/         # Ana sayfa bileşenleri
    reports/      # Rapor ve grafik bileşenleri
    common/       # Ortak bileşenler (BottomNavigation vs.)
  pages/          # Sayfa bileşenleri (home, addTodo, reports, account, timer)
  assets/         # Görseller
  main.tsx        # Uygulama giriş noktası
```

## Ekran Görüntüleri

Ana sayfa, görev ekleme ve raporlar bölümü modern ve sade bir arayüze sahiptir.
![alt text](assets/image1.png)
![alt text](assets/image2.png)
![alt text](assets/image3.png)
