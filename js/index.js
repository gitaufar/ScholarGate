import { getMahasiswa, getMahasiswaId } from './fetchapi.js';

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

window.onload = fetchMahasiswa;
console.log("index.js is connected and running!");
