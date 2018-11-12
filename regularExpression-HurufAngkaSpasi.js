function panggilRegexp(value) {
  // mengambil semua karakter huruf dan angka
  var ambilData = value.match(/\w/g)

  //mengambil karakter angka saja
  var ambilAngka = value.match(/\d/g)

  //mengambil karakter spasi saja
  var ambilSpasi = value.match(/\s/g)


  //mengambil karakter KECUALI huruf dan angka
  var ambilXdata = value.match(/\W/g)

  //mengambil semua karakter KEUALI angka
  var ambilXangka = value.match(/\D/g)

  //mengambil semua karakter KECUALI spasi
  var ambilXspasi = value.match(/\S/g)

  console.log(ambilData);
  console.log(ambilAngka);
  console.log(ambilSpasi);
  console.log('jumlah spasi : ',ambilSpasi.length);
  console.log('');
  console.log(ambilXdata);
  console.log(ambilXangka);
  console.log(ambilXspasi);
}
panggilRegexp('Bulan ke 1 sd ke 4');
