// CONTOH KASUS TIMING EVENT PADA PEMBUATAN PROGRAM HITUNG MUNDUR.

// Idenya begini, kita akan melakukan hitung mundur terhadap sebuah waktu.
	// Sebenarnya sampai sini program kita sudah jadi. Tapi kan kita inginnya membuat detiknya berkurang tanpa harus dilakukan refresh terus menerus. Caranya : Kita gunakan setInterval() supaya program yg telah kita buat di atas dijalankan setiap 1 detik sekali. Yang mana ISI DARI SET INTERVAL nya adalah semua kode kita yg diatas.

	const hitungMundur = setInterval(function() {
		// Jadi, hal pertama yg kita lakukan adalah kita harus tau dulu kapan waktu tersebut. Baik WAKTU SAAT INI dan juga WAKTU TUJUANNYA.
		const tanggalTujuan = new Date('Mar 23, 2021 00:00:00').getTime(); 
		const sekarang = new Date().getTime();
		console.log(sekarang);
		console.log(tanggalTujuan);
		// Penjelasan kode di atas :
			// new Date() --> fungsi untuk mengetahui waktu saat ini dalam bentuk string jika tidak ditulis parameternya.
			// getTime() --> fungsi untuk mengubah waktu saat ini yg dalam bentuk string tadi ke dalam bentuk angka dengan satuan milisecond.
			// new Date('Jan 21, 2021 16:00:00') --> ini formatnya memang sudah ditentukan begitu 'bulanDisingkat tanggal, tahun jam:menit:detik'. Untuk menetapkan sebuah waktu tertentu.

		// Selanjutnya, kita CARI SELISIHNYA, supaya nanti kita tau berapa jam lagi atau berapa menit lagi sampai ke waktu tujuannya. INI ADALAH INTI dari cara menghitung mundur waktu.
		const selisih = tanggalTujuan - sekarang;
		console.log(selisih);

		// Selanjutnya, tinggal KITA UBAH MILISECOND ini menjadi format yg kita inginkan. MISALnya berapa hari lagi, berapa jam lagi, berapa menit lagi, dst.
		const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
		console.log(hari);

		const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
		console.log(jam);

		const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
		console.log(menit);

		const detik = Math.floor(selisih % (1000 * 60) / 1000);
		console.log(detik);
		// Penjelasan kode di atas :
			// Math.floor() --> fungsi untuk pembulatan ke bawah.

			// (1000 * 60 * 60 * 24) --> adalah faktor konversi dari milisecond menjadi hari. Rumus matematika aja, ga usah bingung.

			// % atau modulus --> adalah operator untuk mendapatkan sisa dari pembagian.

			// (1000 * 60 * 60) -> adalah faktor konversi dari milisecond menjadi jam.

			// (1000 * 60) -> adalah faktor konversi dari milisecond menjadi menit.

		// Selanjutnya, Kita ubah Tulisan Hello World yg di HTML menjadi kata-kata mengenai sisa waktunya menggunakan innerHTML.
		const teks = document.getElementById('teks');
		teks.innerHTML = 'Waktu anda tinggal : ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik lagi!';

		// Kode di atas kelihatannya sudah benar, tapi masih ada bug, karena waktunya akan terus berjalan meskipun waktunya udah lewat. Waktunya akan jadi MINUS. SOLUSINYA adalah kita buat kode untuk menghentikan waktunya ketika waktunya sudah habis. CARANYA : KITA KASIH PENGKONDISIAN sbb.
		if( selisih <= 0 ) {
			clearInterval(hitungMundur);
			teks.innerHTML = 'Waktu anda HABIS!'
		}


	}, 1000);




