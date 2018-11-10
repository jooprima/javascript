function panggilObject() {
  var mobil = {
    type : 'sedan',
    harga : 300000000,
    warna : 'hitam'
  }

  var motor = {
    type : "matic",
    harga : 10000009,
    warna : "putih"
  }

  console.log(mobil);
  console.log("tipe :",mobil.type);
  console.log("harga :",mobil.harga);
  console.log("warna :",mobil.warna);

  console.log(motor,mobil);
}

panggilObject();
