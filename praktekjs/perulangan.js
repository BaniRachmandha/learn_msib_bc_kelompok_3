// Perulangan menggunakan for loop
for (let i = 0; i < 5; i++) {
    console.log("Iterasi ke-" + (i + 1));
  }
  
  // Perulangan menggunakan while loop
  let j = 0;
  while (j < 5) {
    console.log("Iterasi ke-" + (j + 1));
    j++;
  }
  
  // Perulangan menggunakan forEach (pada array)
  const fruits = ["Apel", "Pisang", "Jeruk", "Mangga"];
  fruits.forEach(function(fruit, index) {
    console.log("Buah ke-" + (index + 1) + ": " + fruit);
  });
  