function panggilPerintahMap() {
  var dataKota = ['jakarta','depok','bogor'];
  dataKota.map(function(item, index, array){
    console.log(item);
    console.log(index);
    console.log(array);
  });

}

panggilPerintahMap();
