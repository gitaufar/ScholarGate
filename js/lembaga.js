import { getLembaga } from './fetchapi.js';

const btn_mhs = document.querySelector('.btn_mhs');
const search_container = document.querySelector('.second_container')
const text_content = document.querySelector('.text_mahasiswa')
const bottom_container = document.querySelector('.bottom_container')
const form = document.getElementById('tambah_mahasiswa_form');
const tambah_container = document.querySelector('.tambah_mahasiswa_container')
const delete_row = document.querySelector('.delete_row')
console.log(btn_mhs, search_container, bottom_container, tambah_container, text_content);

// Tambahkan event listener
btn_mhs.addEventListener('click', () => {
    btn_mhs.style.display = 'none';
    search_container.style.display = 'none'
    bottom_container.style.display = 'none'
    text_content.textContent = "Tambah Lembaga"
    tambah_container.style.display = 'flex'
    console.log("button di click");
});

//contoh ambil data listMahasiswa
async function fetchLembaga() {
    const listLembaga = await getLembaga()
    listLembaga.forEach(element => {
        const tableBody = document.querySelector("#dataTable tbody");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
        <td class="id_lembaga">${element.id_lembaga}</td>
        <td>${element.id_beasiswa}</td>
        <td>${element.nama_lembaga}</td>
        <td>${element.tipe_lembaga}</td>
        <td>${element.kontak}</td>
        <td>${element.alamat}</td>
        <td>${element.website}</td>
        <td><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M0 10.352V13H2.64802L10.4579 5.19011L7.80989 2.5421L0 10.352ZM13 2.64802L10.352 0L8.56545 1.79359L11.2135 4.44161L13 2.64802Z" fill="#193A6F"/>
</svg></td>
        <td><svg class="delete_row" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <path d="M5.95833 3.33333H8.875C8.875 2.94656 8.72135 2.57563 8.44786 2.30214C8.17437 2.02865 7.80344 1.875 7.41667 1.875C7.02989 1.875 6.65896 2.02865 6.38547 2.30214C6.11198 2.57563 5.95833 2.94656 5.95833 3.33333ZM5.08333 3.33333C5.08333 2.71449 5.32917 2.121 5.76675 1.68342C6.20434 1.24583 6.79783 1 7.41667 1C8.03551 1 8.629 1.24583 9.06658 1.68342C9.50417 2.121 9.75 2.71449 9.75 3.33333H13.3958C13.5119 3.33333 13.6231 3.37943 13.7052 3.46147C13.7872 3.54352 13.8333 3.6548 13.8333 3.77083C13.8333 3.88687 13.7872 3.99815 13.7052 4.08019C13.6231 4.16224 13.5119 4.20833 13.3958 4.20833H12.6317L11.9218 12.7268C11.8701 13.3464 11.5875 13.9241 11.1299 14.3452C10.6723 14.7662 10.0732 15 9.45133 15H5.382C4.76016 15 4.16105 14.7662 3.70346 14.3452C3.24587 13.9241 2.96323 13.3464 2.91158 12.7268L2.20167 4.20833H1.4375C1.32147 4.20833 1.21019 4.16224 1.12814 4.08019C1.04609 3.99815 1 3.88687 1 3.77083C1 3.6548 1.04609 3.54352 1.12814 3.46147C1.21019 3.37943 1.32147 3.33333 1.4375 3.33333H5.08333ZM6.54167 6.6875C6.54167 6.57147 6.49557 6.46019 6.41353 6.37814C6.33148 6.29609 6.2202 6.25 6.10417 6.25C5.98813 6.25 5.87685 6.29609 5.79481 6.37814C5.71276 6.46019 5.66667 6.57147 5.66667 6.6875V11.6458C5.66667 11.7619 5.71276 11.8731 5.79481 11.9552C5.87685 12.0372 5.98813 12.0833 6.10417 12.0833C6.2202 12.0833 6.33148 12.0372 6.41353 11.9552C6.49557 11.8731 6.54167 11.7619 6.54167 11.6458V6.6875ZM8.72917 6.25C8.61313 6.25 8.50185 6.29609 8.41981 6.37814C8.33776 6.46019 8.29167 6.57147 8.29167 6.6875V11.6458C8.29167 11.7619 8.33776 11.8731 8.41981 11.9552C8.50185 12.0372 8.61313 12.0833 8.72917 12.0833C8.8452 12.0833 8.95648 12.0372 9.03853 11.9552C9.12057 11.8731 9.16667 11.7619 9.16667 11.6458V6.6875C9.16667 6.57147 9.12057 6.46019 9.03853 6.37814C8.95648 6.29609 8.8452 6.25 8.72917 6.25Z" fill="#193A6F"/>
</svg></td>
        <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_34_81)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2.53043 6 3.03914 6.21071 3.41421 6.58579C3.78929 6.96086 4 7.46957 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10C1.46957 10 0.960859 9.78929 0.585786 9.41421C0.210714 9.03914 0 8.53043 0 8C0 7.46957 0.210714 6.96086 0.585786 6.58579C0.960859 6.21071 1.46957 6 2 6ZM14 6C14.5304 6 15.0391 6.21071 15.4142 6.58579C15.7893 6.96086 16 7.46957 16 8C16 8.53043 15.7893 9.03914 15.4142 9.41421C15.0391 9.78929 14.5304 10 14 10C13.4696 10 12.9609 9.78929 12.5858 9.41421C12.2107 9.03914 12 8.53043 12 8C12 7.46957 12.2107 6.96086 12.5858 6.58579C12.9609 6.21071 13.4696 6 14 6ZM8.1808 6C8.71123 6 9.21994 6.21071 9.59501 6.58579C9.97009 6.96086 10.1808 7.46957 10.1808 8C10.1808 8.53043 9.97009 9.03914 9.59501 9.41421C9.21994 9.78929 8.71123 10 8.1808 10C7.65037 10 7.14166 9.78929 6.76659 9.41421C6.39151 9.03914 6.1808 8.53043 6.1808 8C6.1808 7.46957 6.39151 6.96086 6.76659 6.58579C7.14166 6.21071 7.65037 6 8.1808 6Z" fill="#193A6F"/>
  </g>
  <defs>
    <clipPath id="clip0_34_81">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg></td>
    ` 
        tableBody.appendChild(newRow);
        tableBody.addEventListener("click", async function (event) {
            if (event.target.closest(".delete_row")) {
                const row = event.target.closest("tr");
                const mahasiswaId = row.querySelector(".id_mahasiswa").textContent;
          
                // Menghapus data dari server
                const result = await deleteMahasiswa(mahasiswaId);
          
                if (result) {
                  row.remove(); // Menghapus baris dari tampilan setelah data berhasil dihapus
                }
              }
        });
    });
}

//contoh ambil data 1 mahsiswa
// async function fetchMahasiswaId(id = 'MHS-20231101') {
//     const mahasiswa = await getMahasiswaId(id)
//     console.log(mahasiswa)
// }

// form.addEventListener('submit', async function (event) {
//     event.preventDefault();
//     tambah_container.style.display = 'none'
//     btn_mhs.style.display = 'flex';
//     search_container.style.display = 'flex'
//     bottom_container.style.display = 'flex'
//     text_content.textContent = "Daftar Mahasiswa"

//     const mahasiswa = {
//         nama: document.getElementById("nama_mahasiswa").value,
//         nim: document.getElementById("nim").value,
//         fakultas: document.getElementById("fakultas").value,
//         jurusan: document.getElementById("jurusan").value,
//         ipk: parseFloat(document.getElementById("ipk").value),
//         status_ekonomi: document.getElementById("status_ekonomi").value,
//         email: document.getElementById("email").value,
//         alamat: document.getElementById("alamat").value,
//         status: document.getElementById("status_mahasiswa").value,
//     };

//     console.log("Data Mahasiswa:", mahasiswa);

//     try {
//         const result = await addMahasiswa(mahasiswa);
//         if (!result) {
//             alert("Gagal menambahkan data.");
//             return;
//         }
    
//         const mahasiswa_baru = await getMahasiswa();
//         if (!mahasiswa_baru || mahasiswa_baru.length === 0) {
//             alert("Tidak ada data mahasiswa yang ditemukan.");
//             return;
//         }
    
//         const tableBody = document.querySelector("#dataTable tbody");
//         if (!tableBody) {
//             console.error("Tabel tidak ditemukan di DOM.");
//             return;
//         }
    
//         const newRow = document.createElement("tr");
//         const lastMahasiswa = mahasiswa_baru[mahasiswa_baru.length - 1];
//         newRow.innerHTML = `
//             <td class="id_mahasiswa">${lastMahasiswa.id_mahasiswa}</td>
//             <td>${lastMahasiswa.nama}</td>
//             <td>${lastMahasiswa.nim}</td>
//             <td>${lastMahasiswa.fakultas}</td>
//             <td>${lastMahasiswa.jurusan}</td>
//             <td>${lastMahasiswa.ipk}</td>
//             <td>${lastMahasiswa.status_ekonomi}</td>
//             <td>${lastMahasiswa.alamat_email}</td>
//             <td>${lastMahasiswa.alamat}</td>
//             <td>${lastMahasiswa.status_mahasiswa}</td>
//             <td><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
//   <path d="M0 10.352V13H2.64802L10.4579 5.19011L7.80989 2.5421L0 10.352ZM13 2.64802L10.352 0L8.56545 1.79359L11.2135 4.44161L13 2.64802Z" fill="#193A6F"/>
// </svg></td>
//         <td><svg class="delete_row" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
//   <path d="M5.95833 3.33333H8.875C8.875 2.94656 8.72135 2.57563 8.44786 2.30214C8.17437 2.02865 7.80344 1.875 7.41667 1.875C7.02989 1.875 6.65896 2.02865 6.38547 2.30214C6.11198 2.57563 5.95833 2.94656 5.95833 3.33333ZM5.08333 3.33333C5.08333 2.71449 5.32917 2.121 5.76675 1.68342C6.20434 1.24583 6.79783 1 7.41667 1C8.03551 1 8.629 1.24583 9.06658 1.68342C9.50417 2.121 9.75 2.71449 9.75 3.33333H13.3958C13.5119 3.33333 13.6231 3.37943 13.7052 3.46147C13.7872 3.54352 13.8333 3.6548 13.8333 3.77083C13.8333 3.88687 13.7872 3.99815 13.7052 4.08019C13.6231 4.16224 13.5119 4.20833 13.3958 4.20833H12.6317L11.9218 12.7268C11.8701 13.3464 11.5875 13.9241 11.1299 14.3452C10.6723 14.7662 10.0732 15 9.45133 15H5.382C4.76016 15 4.16105 14.7662 3.70346 14.3452C3.24587 13.9241 2.96323 13.3464 2.91158 12.7268L2.20167 4.20833H1.4375C1.32147 4.20833 1.21019 4.16224 1.12814 4.08019C1.04609 3.99815 1 3.88687 1 3.77083C1 3.6548 1.04609 3.54352 1.12814 3.46147C1.21019 3.37943 1.32147 3.33333 1.4375 3.33333H5.08333ZM6.54167 6.6875C6.54167 6.57147 6.49557 6.46019 6.41353 6.37814C6.33148 6.29609 6.2202 6.25 6.10417 6.25C5.98813 6.25 5.87685 6.29609 5.79481 6.37814C5.71276 6.46019 5.66667 6.57147 5.66667 6.6875V11.6458C5.66667 11.7619 5.71276 11.8731 5.79481 11.9552C5.87685 12.0372 5.98813 12.0833 6.10417 12.0833C6.2202 12.0833 6.33148 12.0372 6.41353 11.9552C6.49557 11.8731 6.54167 11.7619 6.54167 11.6458V6.6875ZM8.72917 6.25C8.61313 6.25 8.50185 6.29609 8.41981 6.37814C8.33776 6.46019 8.29167 6.57147 8.29167 6.6875V11.6458C8.29167 11.7619 8.33776 11.8731 8.41981 11.9552C8.50185 12.0372 8.61313 12.0833 8.72917 12.0833C8.8452 12.0833 8.95648 12.0372 9.03853 11.9552C9.12057 11.8731 9.16667 11.7619 9.16667 11.6458V6.6875C9.16667 6.57147 9.12057 6.46019 9.03853 6.37814C8.95648 6.29609 8.8452 6.25 8.72917 6.25Z" fill="#193A6F"/>
// </svg></td>
//         <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//   <g clip-path="url(#clip0_34_81)">
//     <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2.53043 6 3.03914 6.21071 3.41421 6.58579C3.78929 6.96086 4 7.46957 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10C1.46957 10 0.960859 9.78929 0.585786 9.41421C0.210714 9.03914 0 8.53043 0 8C0 7.46957 0.210714 6.96086 0.585786 6.58579C0.960859 6.21071 1.46957 6 2 6ZM14 6C14.5304 6 15.0391 6.21071 15.4142 6.58579C15.7893 6.96086 16 7.46957 16 8C16 8.53043 15.7893 9.03914 15.4142 9.41421C15.0391 9.78929 14.5304 10 14 10C13.4696 10 12.9609 9.78929 12.5858 9.41421C12.2107 9.03914 12 8.53043 12 8C12 7.46957 12.2107 6.96086 12.5858 6.58579C12.9609 6.21071 13.4696 6 14 6ZM8.1808 6C8.71123 6 9.21994 6.21071 9.59501 6.58579C9.97009 6.96086 10.1808 7.46957 10.1808 8C10.1808 8.53043 9.97009 9.03914 9.59501 9.41421C9.21994 9.78929 8.71123 10 8.1808 10C7.65037 10 7.14166 9.78929 6.76659 9.41421C6.39151 9.03914 6.1808 8.53043 6.1808 8C6.1808 7.46957 6.39151 6.96086 6.76659 6.58579C7.14166 6.21071 7.65037 6 8.1808 6Z" fill="#193A6F"/>
//   </g>
//   <defs>
//     <clipPath id="clip0_34_81">
//       <rect width="16" height="16" fill="white"/>
//     </clipPath>
//   </defs>
// </svg></td>
//         `;
//         tableBody.appendChild(newRow);
//         tableBody.addEventListener("click", async function (event) {
//             if (event.target.closest(".delete_row")) {
//                 const row = event.target.closest("tr");
//                 const mahasiswaId = row.querySelector(".id_mahasiswa").textContent;
          
//                 // Menghapus data dari server
//                 const result = await deleteMahasiswa(mahasiswaId);
          
//                 if (result) {
//                   row.remove(); // Menghapus baris dari tampilan setelah data berhasil dihapus
//                 }
//               }
//         });
//         alert("Data berhasil ditambahkan!");
//     } catch (error) {
//         console.error("Error saat menambahkan data:", error);
//         alert("Terjadi kesalahan saat menambahkan data.");
//     }
// })

window.onload = fetchLembaga;
console.log("index.js is connected and running!");
