function panggilBilanganKelipatan() {
  var bilanganKelipatan5 = [];

  for (var i = 1; i < 50; i++) {
    if (i%5 === 0) {
      bilanganKelipatan5.push(i);
    }
  }
  return bilanganKelipatan5;
}

console.log(panggilBilanganKelipatan());
