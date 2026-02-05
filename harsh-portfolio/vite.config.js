import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

<<<<<<< HEAD
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
=======
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
>>>>>>> 51d2da78f3d77e58a0540d2b3476bb8966fea6d9
})
