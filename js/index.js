var fetchapi = require('./fetchapi')

//contoh ambil data listMahasiswa
async function fetchMahasiswa() {
    const listMahasiswa = await fetchapi.getMahasiswa()
    return listMahasiswa
}

//contoh ambil data 1 mahsiswa
async function fetchMahasiswaId(id = 'MHS-20231101') {
    const mahasiswa = await fetchapi.getMahasiswaId(id)
    console.log(mahasiswa)
}

fetchMahasiswa()
fetchMahasiswaId()
