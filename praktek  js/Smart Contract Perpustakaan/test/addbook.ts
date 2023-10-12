// Impor library ethers
import { ethers } from "ethers";



// Inisialisasi penyedia Ethereum
export const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545"); // Sesuaikan dengan URL node Ethereum lokal Anda

// Impor ABI dan alamat kontrak Library
import { libraryContract } from "../hardhat.config";
export const libraryAddress = "d8e441a98429283874def1b928f1527d"; // Gantilah dengan alamat kontrak Library yang sudah dideploy

// Data buku yang akan dimasukkan
const isbn = 1234567890; // ISBN buku
const title = "Malin Kundang"; // Judul buku
const author = "Penulis Buku"; // Nama pengarang

// Panggil fungsi addBook
async function addBook() {
  try {
    // Peroleh akun yang akan melakukan transaksi
    const accounts = await provider.listAccounts();
    const signer = provider.getSigner(accounts[0]);

    // Panggil fungsi addBook pada kontrak
    const tx = await libraryContract.addBook(isbn, title, author);

    // Tunggu konfirmasi transaksi
    await tx.wait();

    console.log("Buku berhasil ditambahkan ke dalam kontrak Library.");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

// Panggil fungsi untuk menambahkan buku
addBook();
