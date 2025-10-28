# Instrucciones

## Clonar el repositorio
git clone https://github.com/<tu-usuario>/<nombre-del-repo>.git
cd <nombre-del-repo>

## Instalar dependencias
npm install

## Ejecutar el servidor
npm run start:dev
# El servidor estará disponible en http://localhost:3000

## Endpoints disponibles
- `POST /courses`: Crear un nuevo curso.
- `GET /courses`: Obtener todos los cursos.
- `GET /courses/:id`: Obtener un curso por su ID.
- `PUT /courses/:id`: Actualizar un curso por su ID.
- `DELETE /courses/:id`: Eliminar un curso por su ID.

## Ejemplo en Postman:

- POST
{
  "name": "Geometría 1",
  "description": "Curso introductorio de geometría plana",
  "level": "beginner",
  "duration": 40
}


