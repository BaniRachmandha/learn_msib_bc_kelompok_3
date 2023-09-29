var buah = ["Apel", "Pisang", "Jeruk", "Mangga"];
console.log(buah[0]); 
console.log(buah[1]); 
buah[2] = "Anggur"; 
console.log(buah); 
buah.push("Pepaya"); 
console.log(buah);
var length = buah.length;
console.log(length);
for (var i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}
buah.forEach(function(fruit) {
  console.log(fruit);
});
