import { getMahasiswa, getMahasiswaId, addMahasiswa } from './fetchapi.js';

const btn_mhs = document.querySelector('.btn_mhs');
const search_container = document.querySelector('.second_container')
const text_content = document.querySelector('.text_mahasiswa')
const bottom_container = document.querySelector('.bottom_container')
const form = document.getElementById('tambah_mahasiswa_form');
const tambah_container = document.querySelector('.tambah_mahasiswa_container')
console.log(btn_mhs, search_container, bottom_container, tambah_container, text_content);

// Tambahkan event listener
btn_mhs.addEventListener('click', () => {
    btn_mhs.style.display = 'none';
    search_container.style.display = 'none'
    bottom_container.style.display = 'none'
    text_content.textContent = "Tambah Mahasiswa"
    tambah_container.style.display = 'flex'
    console.log("button di click");
});

//contoh ambil data listMahasiswa
async function fetchMahasiswa() {
    const listMahasiswa = await getMahasiswa()
    listMahasiswa.forEach(element => {
        const tableBody = document.querySelector("#dataTable tbody");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
        <td>${element.id_mahasiswa}</td>
        <td>${element.nama}</td>
        <td>${element.nim}</td>
        <td>${element.fakultas}</td>
        <td>${element.jurusan}</td>
        <td>${element.ipk}</td>
        <td>${element.status_ekonomi}</td>
        <td>${element.alamat_email}</td>
        <td>${element.alamat}</td>
        <td>${element.status_mahasiswa}</td>
    `
        tableBody.appendChild(newRow);
    });
}

//contoh ambil data 1 mahsiswa
async function fetchMahasiswaId(id = 'MHS-20231101') {
    const mahasiswa = await getMahasiswaId(id)
    console.log(mahasiswa)
}

form.addEventListener('submit', async function (event) {
    event.preventDefault();
    tambah_container.style.display = 'none'
    btn_mhs.style.display = 'flex';
    search_container.style.display = 'flex'
    bottom_container.style.display = 'flex'
    text_content.textContent = "Daftar Mahasiswa"

    const mahasiswa = {
        nama: document.getElementById("nama_mahasiswa").value,
        nim: document.getElementById("nim").value,
        fakultas: document.getElementById("fakultas").value,
        jurusan: document.getElementById("jurusan").value,
        ipk: parseFloat(document.getElementById("ipk").value),
        status_ekonomi: document.getElementById("status_ekonomi").value,
        email: document.getElementById("email").value,
        alamat: document.getElementById("alamat").value,
        status: document.getElementById("status_mahasiswa").value,
    };

    console.log("Data Mahasiswa:", mahasiswa);

    try {
        const result = await addMahasiswa(mahasiswa);
        if (!result) {
            alert("Gagal menambahkan data.");
            return;
        }
    
        const mahasiswa_baru = await getMahasiswa();
        if (!mahasiswa_baru || mahasiswa_baru.length === 0) {
            alert("Tidak ada data mahasiswa yang ditemukan.");
            return;
        }
    
        const tableBody = document.querySelector("#dataTable tbody");
        if (!tableBody) {
            console.error("Tabel tidak ditemukan di DOM.");
            return;
        }
    
        const newRow = document.createElement("tr");
        const lastMahasiswa = mahasiswa_baru[mahasiswa_baru.length - 1];
        newRow.innerHTML = `
            <td>${lastMahasiswa.id_mahasiswa}</td>
            <td>${lastMahasiswa.nama}</td>
            <td>${lastMahasiswa.nim}</td>
            <td>${lastMahasiswa.fakultas}</td>
            <td>${lastMahasiswa.jurusan}</td>
            <td>${lastMahasiswa.ipk}</td>
            <td>${lastMahasiswa.status_ekonomi}</td>
            <td>${lastMahasiswa.alamat_email}</td>
            <td>${lastMahasiswa.alamat}</td>
            <td>${lastMahasiswa.status_mahasiswa}</td>
        `;
        tableBody.appendChild(newRow);
        alert("Data berhasil ditambahkan!");
    } catch (error) {
        console.error("Error saat menambahkan data:", error);
        alert("Terjadi kesalahan saat menambahkan data.");
    }
})

window.onload = fetchMahasiswa;
console.log("index.js is connected and running!");
