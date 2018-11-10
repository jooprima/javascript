function panggilObjectArray() {
  var mobil = {
    type : 'sedan',
    harga : 300000000,
    warna : 'hitam',
    tahun : [2001,2002,2003,2004]
  }

  var motor = {
    type : "matic",
    harga : 10000009,
    warna : "putih",
    tahun : [2011,2012,2013,2014]
  }

  console.log(mobil);
  console.log(mobil.tahun[1]);

  console.log(motor,mobil);
  console.log(mobil.tahun[3],motor.tahun[3]);

}

panggilObjectArray();
