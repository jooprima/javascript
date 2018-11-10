function panggilShift() {
  kota = ["jakarta","bandung","bogor","bekasi","tangerang"];
  console.log(kota);
  console.log("========================");
  // kota = kota.shift();

  var kota2 = kota.shift();
  console.log(kota2);

  return kota;
}

console.log(panggilShift());
// panggilShift();
