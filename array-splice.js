function panggilSplice() {
  var kota = ["jakrta","bandung","bogor","bekasi","tangerang"];
  console.log(kota);
  console.log('----------------------');

  kota.splice(3,0,'palembang');
  kota.splice(5,1,'jogja');
  kota.splice(1,0,'depok');
  
  return kota;
}

console.log(panggilSplice());
