const baseUrl = 'http://localhost:8090/api'

async function getMahasiswa() {
    try {
      const response = await fetch(baseUrl + '/mahasiswa');
      console.log(baseUrl + '/mahasiswa')
      console.log('Response Status:', response.status);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Fetch error: ', error);
      return null;
    }
  }

  async function getBeasiswa() {
    try {
      const response = await fetch(baseUrl + '/beasiswa');
      console.log('Response Status:', response.status);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Fetch error: ', error);
      return null;
    }
  }

  async function getMahasiswaId(id) {
    try {
      const response = await fetch(baseUrl + '/mahasiswa/' + id);
      console.log('Response Status:', response.status);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Fetch error: ', error);
      return null;
    }
  }

module.exports = {
    getMahasiswa,
    getBeasiswa,
    getMahasiswaId
}