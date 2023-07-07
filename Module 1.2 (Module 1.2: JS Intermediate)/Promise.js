function getTrack() {
    return new Promise((resolve, reject) => {
      const track = {
        title: "judul lagu",
        artists: [{ name: "nama artis 1" }],
        duration: 200
      };
  
      // operasi asynchronous
      setTimeout(() => {
        const random = Math.random();
        if (random <= 0.2) {
          // Menolak promise jika gagal
          reject(new Error("Gagal mendapatkan data lagu."));
        } else {
          // Memenuhi promise dengan data lagu jika berhasil
          resolve(track);
        }
      }, 2000);
    });
  } 
  
  // Penggunaan
  getTrack()
    .then(track => {
      console.log("Lagu:", track);
    })
    .catch(error => {
      console.error("Error:", error.message);
    });
  