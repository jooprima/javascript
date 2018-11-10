function balikKata(kata) {
  var balik = '';
  for (var i = kata.length-1; i >= 0; i--) {
    balik=balik+kata[i];
  }
  return balik;
}
console.log(balikKata('Niomic!'));
console.log(balikKata('yohanes'));
console.log(balikKata('yohanes prima'));
