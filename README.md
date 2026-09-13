# ecommerceTh
 entregaCoder

Este es un proyecto de e-commerce desarrollado en React, que simula una tienda online. Los usuarios pueden navegar por productos, agregar artículos al carrito, y realizar compras. Además, el estado del carrito se maneja con **Context API** y se almacena en el **localStorage** para persistir los datos entre sesiones.

## Tecnologías utilizadas

- **React**: Biblioteca principal para la construcción de la UI.
- **React Router**: Para la navegación entre las distintas vistas de la aplicación (productos, carrito, etc.).
- **Context API**: Para manejar el estado global de la aplicación, como el carrito de compras.
- (**Firebase (Firestore)**: Base de datos en la nube para almacenar los productos y los registros de las compras.) // en proceso!!!
- **CSS**: Para el estilado de los componentes.
- **React Icons**: Para los íconos de la interfaz de usuario, como el carrito de compras.

## Características

1. **Listado y detalle de productos**:
   - Los productos se cargan dinámicamente desde Firebase Firestore.
   - Cada producto tiene su propia página de detalles con la opción de agregar al carrito.

2. **Carrito de compras**:
   - Los usuarios pueden agregar productos al carrito con un componente `ItemCount` que maneja la cantidad seleccionada.
   - El carrito muestra los productos agregados, sus cantidades, subtotales y el precio total.
   - Los usuarios pueden eliminar productos del carrito o vaciarlo completamente.

3. **Persistencia en el localStorage**:
   - El carrito de compras se guarda en el `localStorage`, lo que permite mantener el estado entre sesiones.

4. **Navegación con React Router**:
   - Se utiliza React Router para permitir la navegación entre la lista de productos, el detalle de los productos, y el carrito de compras sin recargar la página.

5. **Experiencia de usuario**:
   - Se implementan validaciones en la cantidad de productos para agregar al carrito, como el límite de stock disponible.
   - Se muestran mensajes como "Carrito vacío" cuando no hay productos en el carrito.
   - Se utiliza un ícono del carrito que muestra el número total de productos agregados.


