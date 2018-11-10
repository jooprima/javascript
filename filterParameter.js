function panggilFilterParameter() {
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

  var benuaAsia = arr.filter(function(item) {
    return item.benua === 'asia';
  });
  console.log('benua eropa :');
  console.log(benuaEropa);
  console.log('benua asia :');
  console.log(benuaAsia);
}
panggilFilterParameter();
