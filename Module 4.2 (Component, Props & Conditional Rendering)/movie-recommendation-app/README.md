## Dokumentasi Aplikasi Rekomendasi Film

Aplikasi Rekomendasi Film adalah sebuah aplikasi sederhana yang menampilkan daftar film dengan beberapa informasi seperti judul, deskripsi, tahun rilis, dan genre. Pengguna dapat menggunakan fitur "genre filter" untuk memilih genre film yang mereka minati dan hanya film dengan genre tersebut yang akan ditampilkan.

### Struktur Direktori

```
movie-recommendation-app/
  ├── src/
  │   ├── components/
  │   │   ├── App.js
  │   │   ├── MovieCard.js
  │   │   ├── App.css
  │   │   └── MovieCard.css
  │   ├── index.js
  │   └── index.css
  ├── data.js
  ├── package.json
  └── public/
       └── index.html
```

### Komponen

#### 1. App.js

Komponen utama `App` adalah komponen yang bertanggung jawab untuk menampilkan daftar film dan menyediakan fitur "genre filter". Komponen ini menggunakan state `selectedGenre` untuk menyimpan genre yang sedang dipilih oleh pengguna. Komponen ini juga mengimpor data film dari file `data.js` dan menggunakan fungsi `filter()` dan `map()` untuk menampilkan film sesuai dengan genre yang dipilih.

#### 2. MovieCard.js

Komponen `MovieCard` digunakan untuk menampilkan informasi tentang satu film. Komponen ini menerima prop `movie` yang berisi data film, dan kemudian menampilkan judul, deskripsi, tahun rilis, dan genre film tersebut.

### Data Film

Data film disimpan dalam bentuk array of objects di dalam file `data.js`. Setiap objek dalam array ini berisi informasi tentang satu film, seperti judul, deskripsi, tahun rilis, dan genre. Berikut adalah contoh struktur data film:

```javascript
const movies = [
  {
    id: 1,
    title: "Judul Film Pertama",
    description: "Deskripsi film pertama.",
    year: 2021,
    genre: "Horror",
  },
  {
    id: 2,
    title: "Judul Film Kedua",
    description: "Deskripsi film kedua.",
    year: 2019,
    genre: "Comedy",
  },
  // Tambahkan objek film lain dengan genre yang berbeda.
];

export default movies;
```

### Penggunaan Props

Komponen `App` mengimpor data film dari file `data.js` dan meneruskannya sebagai prop `movie` ke dalam komponen `MovieCard`. Penggunaan props ini memungkinkan komponen `MovieCard` untuk menampilkan informasi tentang setiap film yang diterimanya.

### Export dan Import Komponen

Komponen `App` dan `MovieCard` diekspor menggunakan default export, sehingga kita dapat mengimpor komponen-komponen ini di file lain dengan sintaks:

```javascript
import App from "./components/App";
import MovieCard from "./components/MovieCard";
```

### Conditional Rendering

Pada fitur "genre filter", kita menggunakan kondisi untuk memfilter daftar film berdasarkan genre yang dipilih oleh pengguna. Kita menggunakan fungsi `filter()` untuk mendapatkan daftar film dengan genre yang sesuai, dan kemudian menggunakan fungsi `map()` untuk menampilkan film-film tersebut dalam bentuk komponen `MovieCard`.

### Penggunaan Aplikasi

1. Buka halaman aplikasi dengan membuka file `public/index.html` di browser.

2. Anda akan melihat judul "Rekomendasi Film" di bagian atas halaman, serta beberapa tombol genre di bawahnya.

3. Klik salah satu tombol genre (misalnya "Horror") untuk memfilter film berdasarkan genre tersebut. Hanya film dengan genre yang sesuai akan ditampilkan.

4. Klik tombol "Semua" untuk menampilkan semua film tanpa memfilter berdasarkan genre.

### Kesimpulan

Aplikasi Rekomendasi Film adalah contoh sederhana tentang penggunaan React dengan fitur "genre filter" untuk menampilkan daftar film yang sesuai dengan preferensi genre yang dipilih oleh pengguna. Dengan menggunakan props, export dan import komponen, serta conditional rendering, kita dapat membuat aplikasi yang interaktif dan responsif. Semoga dokumentasi ini membantu Anda memahami bagaimana cara kerja aplikasi ini dan memberi Anda gambaran tentang penggunaan konsep-konsep React yang telah dipelajari.