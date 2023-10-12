import { ethers } from "ethers";

import { describe, it } from "mocha";

describe("Library", function () {
  let Library;
  let library;

  before(async function () {
    Library = await ethers.getDefaultProvider("Library");
    library = await Library.deploy();
    await library.deployed();
  });

  it("should add a book", async function () {
    // Implementasi pengujian penambahan buku
  });

  it("should update a book", async function () {
    // Implementasi pengujian pembaruan buku
  });

  it("should remove a book", async function () {
    // Implementasi pengujian penghapusan buku
  });

  it("should get book data by ISBN", async function () {
    // Implementasi pengujian mendapatkan data buku berdasarkan ISBN
  });
});
