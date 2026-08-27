

## Publicación en GitHub Pages

La interfaz estática se publica desde la rama `gh-pages` del repositorio `ElectronicaJV/blues-creative-agency-site`. El workflow compila Vite con la base `/blues-creative-agency-site/` y usa `VITE_API_URL` para conectar las funciones tRPC con el backend público de Manus. El backend limita CORS al origen `https://electronicajv.github.io`.
