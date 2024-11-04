# 📝 Práctica de Manipulación del DOM en JavaScript

Este proyecto es una práctica sencilla para aprender y practicar los métodos básicos de manipulación del DOM en JavaScript. Nos enfocaremos en cómo seleccionar, agregar, modificar y eliminar elementos en el DOM utilizando distintos métodos nativos de JavaScript. Además, el proyecto está maquetado con **Bootstrap** para facilitar el diseño.

## Contenidos

En este proyecto aprenderás a usar los siguientes métodos y conceptos clave:

- 🔍 **Seleccionar elementos** en el DOM con:
  - `getElementById`
  - `getElementsByClassName`
  - `getElementsByTagName`
  - `querySelector`
  - `querySelectorAll`
- 🛠️ **Manipulación del DOM**:
  - Agregar nuevos elementos al DOM
  - Modificar el contenido y los atributos de los elementos existentes
  - Eliminar elementos del DOM

## Estructura del Proyecto

El proyecto consta de los siguientes archivos:

- `index.html`: Contiene la estructura HTML base para probar los métodos de manipulación del DOM, con un diseño simple usando **Bootstrap**.
- `styles.css`: Contiene algunos estilos personalizados.
- `app.js`: Archivo JavaScript donde se implementan los métodos para manipular el DOM.

## 🚀 Instrucciones

1. **Clonar el repositorio** o descarga los archivos en tu computadora.
2. Abre `index.html` en tu navegador para ver la estructura de la página inicial.
3. Explora `app.js` para ver el código de manipulación del DOM.
4. Experimenta modificando el código de `app.js` para ver cómo cambian los elementos en la página.

## 📋 Ejemplos de Código

Aquí tienes algunos ejemplos de las operaciones de manipulación del DOM que se realizan en el proyecto:

```javascript
// Seleccionar un elemento por su ID
const element = document.getElementById('miElemento');

// Seleccionar múltiples elementos por su clase
const elements = document.getElementsByClassName('miClase');

// Agregar un nuevo elemento al DOM
const newElement = document.createElement('p');
newElement.textContent = 'Este es un nuevo párrafo';
document.body.appendChild(newElement);

// Modificar el contenido de un elemento
element.textContent = 'Contenido actualizado';

// Eliminar un elemento del DOM
element.remove();
```

## ✅ Requisitos Previos
Para realizar esta práctica, necesitas conocimientos básicos de:
 - HTML y CSS
 - JavaScript (variables, funciones y manejo básico de eventos)

## 👩‍💻 Autor

- [Emilse Andrea Arias](https://github.com/emiarias)

## 📚 Recursos Adicionales
Para profundizar en la manipulación del DOM, consulta los siguientes recursos:

- [Manipulación del DOM en JavaScript](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)