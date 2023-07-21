# Simple Playlist Spotify Server Documentation

Continuing previous session homework with this additional rule:
1. `Make playlist as a model`
2. `Track song play count in the playlist`
3. `Add feature to Get list of songs to be sorted by most played`

## `playlistController.js`

### Deskripsi
File ini berisi fungsi-fungsi pengontrol untuk menghandle operasi terkait playlist.

### Fungsi-fungsi

1. `getSongsInPlaylist(req, res)`
   - Deskripsi: Mengambil lagu-lagu dalam playlist berdasarkan `playlistId` yang diberikan.
   - Metode: `GET`
   - Rute: `/playlists/:playlistId/songs`
   - Parameter:
     - `playlistId` (string): ID playlist yang diminta.
   - Respons:
     - Sukses: Mengembalikan array dari lagu-lagu dalam playlist.
     - Error (404): Mengembalikan pesan error jika playlist tidak ditemukan.
     - Error (500): Mengembalikan pesan error untuk masalah server internal.

2. `getAllPlaylists(req, res)`
   - Deskripsi: Mengambil semua playlist.
   - Metode: `GET`
   - Rute: `/playlists`
   - Respons:
     - Sukses: Mengembalikan array dari semua playlist.
     - Error (500): Mengembalikan pesan error untuk masalah server internal.

3. `addSongToPlaylist(req, res)`
   - Deskripsi: Menambahkan lagu ke dalam playlist.
   - Metode: `POST`
   - Rute: `/playlists/:playlistId/songs/:songId`
   - Parameter:
     - `playlistId` (string): ID dari playlist.
     - `songId` (string): ID dari lagu yang akan ditambahkan.
   - Respons:
     - Sukses: Mengembalikan pesan sukses setelah menambahkan lagu ke dalam playlist.
     - Error (400): Mengembalikan pesan error jika salah satu dari playlistId atau songId tidak ada.
     - Error (404): Mengembalikan pesan error jika playlist atau lagu tidak ditemukan.
     - Error (409): Mengembalikan pesan error jika lagu sudah ada dalam playlist.
     - Error (500): Mengembalikan pesan error untuk masalah server internal.

4. `playSong(req, res)`
   - Deskripsi: Menandai sebuah lagu sebagai sedang diputar dalam playlist.
   - Metode: `POST`
   - Rute: `/playlists/:playlistId/songs/:songId/play`
   - Parameter:
     - `playlistId` (string): ID dari playlist.
     - `songId` (string): ID dari lagu yang akan ditandai sebagai sedang diputar.
   - Respons:
     - Sukses: Mengembalikan pesan sukses dan objek lagu setelah menandai lagu sebagai sedang diputar.
     - Error (400): Mengembalikan pesan error jika salah satu dari playlistId atau songId tidak ada.
     - Error (404): Mengembalikan pesan error jika playlist atau lagu tidak ditemukan.
     - Error (500): Mengembalikan pesan error untuk masalah server internal.

5. `getMostPlayedSongs(req, res)`
   - Deskripsi: Mengambil lagu-lagu dalam playlist, diurutkan berdasarkan jumlah pemutaran (terbanyak pertama).
   - Metode: `GET`
   - Rute: `/playlists/:playlistId/most-played`
   - Parameter:
     - `playlistId` (string): ID dari playlist.
   - Respons:
     - Sukses: Mengembalikan array dari lagu-lagu diurutkan berdasarkan jumlah pemutaran secara menurun.
     - Error (404): Mengembalikan pesan error jika playlist tidak ditemukan.
     - Error (500): Mengembalikan pesan error untuk masalah server internal.

## `songController.js`

### Deskripsi
File ini berisi fungsi-fungsi pengontrol untuk menghandle operasi terkait lagu.

### Fungsi-fungsi

1. `getAllSongs(req, res)`
   - Deskripsi: Mengambil semua lagu.
   - Metode: `GET`
   - Rute: `/songs`
   - Respons:
     - Sukses: Mengembalikan array dari semua lagu.
     - Error (500): Mengembalikan pesan error untuk masalah server internal.

2. `getSongById(req, res)`
   - Deskripsi: Mengambil lagu berdasarkan ID nya.
   - Metode: `GET`
   - Rute: `/songs/:id`
   - Parameter:
     - `id` (string): ID dari lagu yang akan diambil.
   - Respons:
     - Sukses: Mengembalikan objek lagu dengan ID yang diminta.
     - Error (404): Mengembalikan pesan error jika lagu tidak ditemukan.
     - Error (500): Mengembalikan pesan error untuk masalah server internal.

3. `addNewSong(req, res)`
   - Deskripsi: Menambahkan lagu baru ke dalam daftar lagu.
   - Metode: `POST`
   - Rute: `/songs`
   - Body Permintaan:
     - `id` (string): ID dari lagu baru.
     - `title` (string): Judul dari lagu baru.
     - `artists` (array): Array dari artis yang terkait dengan lagu baru.
     - `url` (string): URL dari lagu baru.
   - Respons:
     - Sukses: Mengembalikan pesan sukses dan objek lagu baru.
     - Error (400): Mengembalikan pesan error jika salah satu data yang diperlukan (id, title, artists, url) tidak ada.
     - Error (409): Mengembalikan pesan error jika lagu dengan ID yang sama sudah ada.
     - Error (500): Mengembalikan pesan error untuk masalah server internal.

## `data/data.json`

### Deskripsi
File ini berisi data dalam format JSON yang mewakili playlist dan lagu dalam aplikasi.

### Struktur Data
- `playlists` (array): Array dari objek playlist, masing-masing berisi `playlistId` dan array dari `songs` (ID lagu).
- `songs` (array): Array dari objek lagu, masing-masing berisi `id`, `title`, `artists`, `url`, `currentlyPlaying`, dan `playCount`.
- `currentlyPlaying` dan `playCount` akan bertambah secara otomatis
- `currentlyPlaying` akan berisi nilai default : 0 jika lagu sedang tidak diputar
- `playCount` akan berisi 0 ketika awal lagu dibuat yang nantinya akan bertambah ketika lagu diputar menggunakan POST `/playlists/:playlistId/songs/:songId/play`
  
## `model/playlistModel.js`

### Kelas: `Playlist` (lanjutan)

#### Method (lanjutan)
2. `updatePlayCount(songId, playCount)`: Mengupdate jumlah pemutaran sebuah lagu dalam playlist.
3. `getMostPlayedSongs()`: Mengambil array dari lagu-lagu dalam playlist, diurutkan berdasarkan jumlah pemutaran (terbanyak pertama).

## `repository/playlistRepository.js`

### Deskripsi
File ini berisi fungsi-fungsi untuk berinteraksi dengan data playlist dalam `data/data.json`.

### Fungsi-fungsi

1. `updateRootSongs(updatedRootSongs)`: Mengupdate array lagu utama dengan `updatedRootSongs` yang diberikan.
2. `getPlaylistById(playlistId)`: Mengambil objek playlist berdasarkan ID nya.
3. `getAllPlaylists()`: Mengambil array dari semua objek playlist.
4. `getSongById(songId)`: Mengambil objek lagu berdasarkan ID nya.
5. `addSongToPlaylist(playlistId, songId)`: Menambahkan lagu ke dalam sebuah playlist dan mengupdate data di `data/data.json`.
6. `updatePlaylist(playlistData)`: Mengupdate objek playlist beserta data terkaitnya di `data/data.json`.

## `repository/songRepository.js`

### Deskripsi
File ini berisi fungsi-fungsi untuk berinteraksi dengan data lagu dalam `data/data.json`.

### Fungsi-fungsi

1. `getAllSongs()`: Mengambil array dari semua objek lagu.
2. `getSongById(songId)`: Mengambil objek lagu berdasarkan ID nya.
3. `addNewSong(songData)`: Menambahkan lagu baru ke dalam array lagu dan mengupdate data di `data/data.json`.

## `app.js`

### Deskripsi
File ini merupakan file utama dari aplikasi. Berisi konfigurasi dan pengaturan server, serta pemetaan rute ke fungsi-fungsi pengontrol terkait.

### Rute Utama

1. `GET /playlists/:playlistId/songs`: Menjalankan fungsi `getSongsInPlaylist` dari `playlistController.js`.
2. `GET /playlists`: Menjalankan fungsi `getAllPlaylists` dari `playlistController.js`.
3. `POST /playlists/:playlistId/songs/:songId`: Menjalankan fungsi `addSongToPlaylist` dari `playlistController.js`.
4. `POST /playlists/:playlistId/songs/:songId/play`: Menjalankan fungsi `playSong` dari `playlistController.js`.
5. `GET /playlists/:playlistId/most-played`: Menjalankan fungsi `getMostPlayedSongs` dari `playlistController.js`.
6. `GET /songs`: Menjalankan fungsi `getAllSongs` dari `songController.js`.
7. `GET /songs/:id`: Menjalankan fungsi `getSongById` dari `songController.js`.
8. `POST /songs`: Menjalankan fungsi `addNewSong` dari `songController.js`.



## Contoh Permintaan POST untuk Menambahkan Lagu Baru

### Deskripsi
Permintaan POST digunakan untuk menambahkan lagu baru ke dalam aplikasi Spotify Server. Permintaan ini akan membuat entri lagu baru dalam data lagu yang ada di `data/data.json`.

### Rute
```
POST /songs
```

### Body Permintaan (Request Body)
Permintaan POST membutuhkan body yang berisi data lagu baru yang ingin ditambahkan. Body permintaan harus berupa objek JSON dengan properti berikut:

1. `id` (string, wajib): ID unik untuk lagu baru.
2. `title` (string, wajib): Judul lagu.
3. `artists` (array of strings, wajib): Array yang berisi nama-nama artis yang terlibat dalam lagu.
4. `url` (string, wajib): URL yang menunjukkan lokasi lagu yang dapat diakses.

Contoh Body Permintaan:
```json
{
  "id": "5",
  "title": "Judul Lagu Baru",
  "artists": ["Artis 1", "Artis 2"],
  "url": "https://example.com/lagu_baru_url"
}
```

### Respon Sukses (Response Success)
Jika permintaan berhasil, server akan memberikan respon dengan status kode 201 (Created). Respon akan berisi pesan konfirmasi bahwa lagu berhasil ditambahkan beserta detail lagu yang baru ditambahkan.

Contoh Respon Sukses:
```json
{
  "message": "Berhasil menambahkan lagu",
  "song": {
    "id": "5",
    "title": "Judul Lagu Baru",
    "artists": ["Artis 1", "Artis 2"],
    "url": "https://example.com/lagu_baru_url",
    "currentlyPlaying": 0,
    "playCount": 0
  }
}
```

### Respon Gagal (Response Error)
Jika permintaan gagal karena salah satu atau lebih properti yang wajib tidak ada dalam body permintaan, server akan memberikan respon dengan status kode 400 (Bad Request). Respon akan berisi pesan kesalahan yang mengindikasikan properti yang kurang atau tidak valid.

Contoh Respon Gagal:
```json
{
  "message": "Wajib mengisi data: id, title, artists, dan url"
}
```

Jika terjadi kesalahan server saat mencoba menambahkan lagu, server akan memberikan respon dengan status kode 500 (Internal Server Error). Respon akan berisi pesan kesalahan umum.

Contoh Respon Gagal (Server Error):
```json
{
  "message": "Internal server error"
}
```

**Catatan:** Pastikan bahwa data yang Anda berikan dalam body permintaan sesuai dengan contoh di atas dan bahwa properti yang wajib diisi tidak terlewatkan.