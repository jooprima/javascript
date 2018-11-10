function panggilUnshift() {
  var data = ['jakarta','bandung','bogor','bekasi'];
  console.log(data);
  console.log('==============================');

  data.unshift('jogja','surabaya');
  return data;
}

console.log(panggilUnshift());
