// var arr = [1,2,3,4,5,6,7];
// var arrGanjil = arr.filter(function (el) {
//   return el % 2 !== 0;
// })
//
// console.log(arrGanjil);

function panggilFilter() {
  var arr = [
    {negara : 'indonesia', benua : 'asia'},
    {negara : 'italia', benua : 'eropa'},
    {negara : 'jerman', benua : 'eropa'},
    {negara : 'jepang', benua : 'asia'},
    {negara : 'meksiko', benua : 'amerika'},
    {negara : 'spanyol', benua : 'eropa'},
    {negara : 'amerika serikat', benua : 'amerika'},
  ];

  var benuaEropa = arr.filter(function(item) {
    return item.benua === 'eropa';
  });

  return benuaEropa;
}

console.log(panggilFilter());
