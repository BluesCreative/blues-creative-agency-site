# Despliegue de Blue's Creative Agency en Netlify

## Enlace público

La producción está publicada en:

https://bluescreative-agency.netlify.app

El proyecto de administración está disponible en:

https://app.netlify.com/projects/bluescreative-agency

## Publicación

El sitio se creó en la cuenta de Netlify conectada como `cute-dango-40fcae`. El despliegue de producción más reciente terminó en estado `ready` con el identificador `6a7d4fa032f6e31c10a73474`. El contenido publicado corresponde a `dist/public`, que contiene el bundle generado por Vite.

## Compatibilidad

El logotipo y las cinco portadas del portafolio se gestionan mediante almacenamiento persistente de WebDev, fuera del repositorio y del bundle de Netlify. El frontend usa URLs absolutas de `https://bluescreat-z5qxfsrw.manus.space/manus-storage/...`, por lo que las imágenes cargan también desde el dominio externo de Netlify sin superar el límite de archivos grandes del checkpoint. Se incluyó una regla `client/public/_redirects` para enviar `/api/trpc/*` al backend público de Manus en `https://bluescreat-z5qxfsrw.manus.space/api/trpc/:splat`. Esta arquitectura conserva el chat, la creación de sesiones y el procesamiento del formulario sin convertir el servidor Express en una función de Netlify.

## Verificaciones

El build pasó correctamente con TypeScript, Vitest y Vite: 23 pruebas unitarias pasaron. La URL pública cargó el hero, navegación, servicios, portafolio, contacto y footer. El logo y las cinco portadas principales se verificaron con respuesta HTTP 200 desde el almacenamiento persistente. El proxy tRPC respondió correctamente a `chat.createSession` y a una mutación real de `chat.sendMessage`. En el navegador público se comprobó la expansión del proceso de Branding con cinco pasos y la apertura del modal de GasBone Mango Energy. El endpoint público de contacto respondió correctamente con HTTP 400 ante un correo inválido, confirmando la validación sin crear un registro de prueba.

## Nota operativa

El despliegue usa Netlify para los archivos estáticos y Manus para los procedimientos tRPC, la base de datos, las notificaciones, el servicio de IA y los assets persistentes. Si el backend de Manus cambia de dominio, será necesario actualizar las URLs absolutas de assets, la regla de proxy y volver a desplegar.
