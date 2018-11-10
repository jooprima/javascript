function panggilPush() {
  var data = [1,2,3,4,5,6,5,4,3]

  console.log(data);
  console.log("---------------");
  data.push(9);
  data.push("jakarta");
  data.push("bandung");

  return data;
}
console.log(panggilPush());
