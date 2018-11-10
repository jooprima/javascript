function panggilPop() {
  var kota = ["jakarta","bogor","bandung","bekasi","tangerang"]
  console.log(kota);
  console.log("----------------------------------");
  // kota.pop();

  var kota2 = kota.pop();
  console.log(kota2);
  return kota;

}

console.log(panggilPop());
