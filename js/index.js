var fetchapi = require('./fetchapi')

async function fetchMahasiswa() {
    const mahasiswa = await fetchapi.getMahasiswa()
    console.log(mahasiswa)
}

async function fetchMahasiswaId(id = 'MHS-20231101') {
    const mahasiswa = await fetchapi.getMahasiswaId(id)
    console.log(mahasiswa)
}

fetchMahasiswaId()
