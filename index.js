// variable dasar

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Belajar Variabel dalam Javascript</title>
    <script>
        var name = "Bani Rachmandha Hidayat";
        var isActive = true;

        // menampilkan variabel ke jendela dialog (alert)
        alert("Selamat datang di " + name);
    
        // menampilkan variabel ke dalam HTML
        document.write("Nama Situs: " + name + "<br>");
        document.write("Status Aktif: " + isActive + "<br>");
    </script>
</head>
<body>
    

</body>
</html>

{/* konstanta dasar */}

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Belajar JavaScript</title>
  
<script>
   a = Number.MAX_VALUE;
   console.log(a);                // hasil: 1.7976931348623157e+308 
 
   b = Number.MIN_VALUE;
   console.log(b);                // hasil: 5e-324 
 
   c = Number.NaN;
   console.log(c);                // hasil: NaN 
 
   d = Number.POSITIVE_INFINITY;
   console.log(d);                // hasil: Infinity 
 
   e = Number.NEGATIVE_INFINITY;
   console.log(e);                // hasil: -Infinity  
   
f = 1/0;
console.log ( d == f );           // hasil: true
</script>
  
</head>
<body>
<h1>Belajar JavaScript</h1>
<p> Saya sedang belajar Konstanta Number JavaScript di duniailkom.com </p>
</div>
</body>
</html>


{/* Struktur Logika IF ELSE dalam JavaScript */}

<script>
//buat variabel Number angka dan isi dengan nilai 17
var angka=17;
 
// jika sisa hasil bagi (mod) variabel angka dengan 2 adalah 0, 
// maka jalankan perintah console.log()
if (angka%2==0)
   console.log("Angka adalah bilangan genap");
else
   console.log("Angka adalah bilangan ganjil");
</script>

{/* switch case */}
<!DOCTYPE html>
<html>
<head>
	<title>Belajar Javascript Part 10 : Switch Case Di Javascript</title>
</head>
<body>
	<h1>Switch Case Di Javascript</h1>
	<h2>www.malasngoding.com</h2>
 
	<!-- id hasil -->
	<div id="hasil"></div>
 
	<script>
	
		var warna = "merah";
 
		switch (warna){
			case "hitam":
				teks = "warna hitam";
				break;
			case "merah":
				teks = "Warna merah";
				break;
			case "hijau":
				teks = "Warna hijau";
				break;
			default:
			    teks = "Warna tidak terdeteksi";
		}		
		
		document.getElementById("hasil").innerHTML = teks;
	</script>
</body>
</html>