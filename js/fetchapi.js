const baseUrl = "http://192.168.202.127:8090/api";

async function getMahasiswa() {
  try {
    const response = await fetch(baseUrl + "/mahasiswa");
    console.log(baseUrl + "/mahasiswa");
    console.log("Response Status:", response.status);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch error: ", error);
    return null;
  }
}

async function getBeasiswa() {
  try {
    const response = await fetch(baseUrl + "/beasiswa");
    console.log("Response Status:", response.status);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch error: ", error);
    return null;
  }
}

async function getLembaga() {
  try {
    const response = await fetch(baseUrl + "/lembaga");
    console.log("Response Status:", response.status);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch error: ", error);
    return null;
  }
}

async function getMahasiswaId(id) {
  try {
    const response = await fetch(baseUrl + "/mahasiswa/" + id);
    console.log("Response Status:", response.status);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch error: ", error);
    return null;
  }
}

async function addMahasiswa(mahasiswa) {
  try {
    const response = await fetch(baseUrl + "/mahasiswa", {
      method: "POST", // Metode HTTP POST
      headers: {
        "Content-Type": "application/json", // Header untuk menentukan tipe data JSON
      },
      body: JSON.stringify(mahasiswa), // Konversi objek mahasiswa ke format JSON
    });

    console.log("Response Status:", response.status);
    console.log(mahasiswa)

    if (!response.ok) {
      // Jika response tidak OK, lempar error
      throw new Error("Failed to add mahasiswa");
    }

    const data = await response.json(); // Parsing response JSON
    return data; // Mengembalikan data dari response
  } catch (error) {
    console.log("Fetch error:", error); // Log error jika terjadi
    return null;
  }
}

async function deleteMahasiswa(id) {
  try {
    const response = await fetch(baseUrl + `/mahasiswa/${id}`, {
      method: "DELETE", // Metode HTTP POST
      headers: {
        "Content-Type": "application/json", // Header untuk menentukan tipe data JSON
      }
    });

    console.log("Response Status:", response.status);

    if (!response.ok) {
      // Jika response tidak OK, lempar error
      throw new Error("Failed to delete mahasiswa");
    }

    const data = await response.json(); // Parsing response JSON
    return data; // Mengembalikan data dari response
  } catch (error) {
    console.log("Fetch error:", error); // Log error jika terjadi
    return null;
  }
}

async function addBeasiswa(beasiswa) {
  try {
    const response = await fetch(baseUrl + "/beasiswa", {
      method: "POST", // Metode HTTP POST
      headers: {
        "Content-Type": "application/json", // Header untuk menentukan tipe data JSON
      },
      body: JSON.stringify(beasiswa), // Konversi objek mahasiswa ke format JSON
    });

    console.log("Response Status:", response.status);
    console.log(beasiswa)

    if (!response.ok) {
      // Jika response tidak OK, lempar error
      throw new Error("Failed to add beasiswa");
    }

    const data = await response.json(); // Parsing response JSON
    return data; // Mengembalikan data dari response
  } catch (error) {
    console.log("Fetch error:", error); // Log error jika terjadi
    return null;
  }
}

async function deleteBeasiswa(id) {
  try {
    const response = await fetch(baseUrl + `/beasiswa/${id}`, {
      method: "DELETE", // Metode HTTP POST
      headers: {
        "Content-Type": "application/json", // Header untuk menentukan tipe data JSON
      }
    });

    console.log("Response Status:", response.status);

    if (!response.ok) {
      // Jika response tidak OK, lempar error
      throw new Error("Failed to delete mahasiswa");
    }

    const data = await response.json(); // Parsing response JSON
    return data; // Mengembalikan data dari response
  } catch (error) {
    console.log("Fetch error:", error); // Log error jika terjadi
    return null;
  }
}

export { getMahasiswa, getBeasiswa, getLembaga, getMahasiswaId, addMahasiswa, deleteMahasiswa, addBeasiswa, deleteBeasiswa };
