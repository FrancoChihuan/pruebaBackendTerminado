# Prueba Backend — Guía de instalación y ejecución

## Requisitos
- Node.js 20 o superior (`node -v`)
- npm 10 o superior (`npm -v`)
- Git

Opcional (recomendado): usar `nvm` para instalar/seleccionar la versión de Node.

## Clonar el repositorio
- `git clone <URL_DEL_REPO>`
- `cd <carpeta-del-repo>/prueba-backend`

## Instalación de dependencias
- Preferible: `npm ci` (instalación limpia usando `package-lock.json`)
- Alternativa: `npm install`

## Configuración (opcional)
Este proyecto funciona sin variables de entorno, pero puedes personalizar:
- `PORT`: puerto del servidor (por defecto `3000`)
- `DB_PATH`: ruta del archivo SQLite (por defecto `database.sqlite`)

Ejemplo de `.env` (opcional):
```
PORT=3000
DB_PATH=database.sqlite
```

## Ejecutar el servidor
- Desarrollo: `npm run start:dev`
- Producción: `npm run build` y luego `npm run start:prod`

Aplicación disponible en `http://localhost:3000` (o el puerto configurado).

## Base de datos
- Usa SQLite automáticamente en el archivo `database.sqlite` en la raíz de `prueba-backend`.
- Si quieres empezar desde cero, borra `database.sqlite` y vuelve a levantar el servidor.

## Endpoints disponibles
- `POST /courses`: crear un curso.
- `GET /courses`: listar cursos.
- `GET /courses/:id`: obtener un curso por ID.
- `PUT /courses/:id`: actualizar un curso por ID.
- `DELETE /courses/:id`: eliminar un curso por ID.

Ejemplo de cuerpo para `POST /courses`:
```
{
  "name": "Geometría 1",
  "description": "Curso introductorio de geometría plana",
  "level": "beginner",
  "duration": 40
}
```

## Scripts útiles
- `npm run lint`: ejecuta ESLint.
- `npm test`: corre pruebas unitarias.

## Problemas comunes
- Puerto en uso: define `PORT` en `.env` con otro valor.
- Error con SQLite: verifica permisos de escritura o elimina `database.sqlite` y arranca de nuevo.