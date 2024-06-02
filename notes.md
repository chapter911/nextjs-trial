# Create Next.js App
- jalankan npx create-next-app@latest nextjs-trial --use-npm

# jalankan ini unutk mengaktifkan session
- npm install react-secure-storage

# menjalankan aplikasi
- npm run dev (gunakan ini, ini untuk development)
- npm run start (ini untuk production)

# untuk mengubah route aplikasi
- rename folder app menjadi _app atau dihapus saja
- tambahkan di folder pages file _app.js

# Step-by-step
- buat file pages/index.js
  - ini untuk halaman welcome
- buat file config/index.js
  - ini untuk konfigurasi route api
- buat file styles/global.css
  - ini untuk styling keseluruhan
- buat file styles/Header.module.css
  - ini untuk styling header
- buat file components/Layout.js
  - ini untuk layout
- buat file components/Header.js
  - ini untuk header
- buat file components/Footer.js
  - ini untuk footer
- buat file components/UserItems.js
  - ini untuk list user
- buat file components/UserItem.js
  - ini untuk item user
- buat file pages/user/[id].js
  - untuk menampilkan data salah satu user

buat file pages/index.js buat file config/index.js buat file components/Layout.js buat file components/Header.js buat file components/Footer.js buat file components/UserItems.js //all user buat file components/UserItem.js //only one user buat file pages/user/[id].js //only one user buat file pages/user/profile.js //only one user delete folder app //disini rename saja buat file pages/index.js buat file context/AuthContext.js