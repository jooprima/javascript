function panggilRegexp(value) {
  // mengambil sebuah kata
  var ambilData = value.match(/bulan/g)

  //mengambil semua karakter pada sebuah string
  var ambilKarakter = value.match(/[keab]/g)

  // mengambil karakter KECUALI karakter tertentu
  var ambilXkarakter = value.match(/[^keab]/g)

  // mengambil karakter ANTARA karakter tertentu
  var ambilAntaraKarakter = value.match(/[a-e]/g)

  console.log(ambilData);
  console.log(ambilKarakter);
  console.log(ambilXkarakter);
  console.log(ambilAntaraKarakter);
}
panggilRegexp('bulan ke 1 sd bulan ke 4');
