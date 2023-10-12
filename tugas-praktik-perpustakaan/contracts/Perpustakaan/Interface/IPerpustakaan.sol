// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

interface IPerpustakaan {
    function bukuCount() external view returns (uint256);

    function isAdmin(address _address) external view returns (bool);

    function tambahBuku(
        string calldata _ISBN,
        string calldata _judul,
        uint256 _tahunDibuat,
        string calldata _penulis
    ) external;

    function updateBuku(
        string calldata _ISBN,
        string calldata _judul,
        uint256 _tahunDibuat,
        string calldata _penulis
    ) external;

    function hapusBuku(string calldata _ISBN) external;

    function getDataBuku(string calldata _ISBN)
        external
        view
        returns (
            string memory,
            string memory,
            uint256,
            string memory
        );
}
