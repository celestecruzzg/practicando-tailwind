/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',          // Verifica que el archivo HTML esté aquí
    './src/css/*.{html,css,js}',  // Asegúrate de incluir todos los archivos HTML y JS en src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
