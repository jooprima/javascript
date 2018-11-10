function deretAngka(n) {
  var hasilDeretAngka = '';
  for (var i = 1; i <= n; i++) {
    if (i % 15 === 0 ) {
      hasilDeretAngka += 'yohanes ';
    }else if (i % 3 === 0) {
      hasilDeretAngka += 'joo ';
    }else if (i % 5 === 0) {
      hasilDeretAngka += 'prima ' ;
    }else {
      hasilDeretAngka += i+' ';
    }
  }
  return hasilDeretAngka;
}
console.log(deretAngka(10));
console.log(deretAngka(20));
console.log(deretAngka(30));
