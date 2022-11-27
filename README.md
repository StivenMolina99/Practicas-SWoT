<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Practicas-SWoT

 Edwin Stiven Molina Arias

 Asignatura: Web Semantica de Internet de las cosas

## Secciones

  - [Practica 2](#practica-2)

---
  
## Practica 2
Fecha de realización: 27 de noviembre de 2022

1. Se importan la anotaciones "@Post, @Put(), @Delete(), @Patch()" como se muestra en la siguiente figura.

![Importar_Anotaciones](Image/1.png)

2. Se escoje un tema para modelar como base de datos, el tema escogido es "productos", y se crea como se miestrae en la siguiente figura.
   
![Crear_Producto](Image/2.png)

3. Se agrega un producto como se muestra en la siguiente figura.
   
![Agregar_Producto](/Image/3.png)

4. Se crea la anotacion @Get, la cual se usa para retornar la información de los productos que hay en la base de datos, como se muestra en la siguiente figura.
   
![Retornar_productos](Image/4.png)

5. Se crea la anotacion @Post, la cual se usa para crear un Producto, el cual se guarda la información en "datos" que luego se envia a productos para que se guarde en la base de datos, y finalmente se retorna la información se ingresó sobre el nuevo producto, como se muestra en la siguiente figura.
   
![Crear_Producto](Image/5.png)

6. Se crea la anotacion @Put, la cual se usa para Actualizar un Producto, el cual se guarda la información en "datos" e ingresando la posición donde se encuentra el producoto que se quiere actualizar y se guarda en "id", que luego se actualiza en productos , y finalmente se retorna la información se ingresó para actaulizar el producto, y en caso tal de que se produzca un error se retorna un mensaje de que no se pudo hacer la modificación, como se muestra en la siguiente figura.
   
![Actualizar_Producto](Image/6.png)

7. Se crea la anotacion @Delet, la cual se usa para Eliminar un Producto, el cual se guarda en "id" la posición del producto que se quiere eliminar, y finalmente se retorna "true" si se eliminó correctamente, y en caso tal de que no se haya eliminado se retorna "false", como se muestra en la siguiente figura.
   
![Eliminar_Producto](Image/7.png)

8. Se crea la anotacion @Patch, la cual se usa para Actualizar la duracion del producto, el cual se guarda la información en "duracion_dias" e ingresando la posición donde se encuentra el producoto que se quiere actualizar y se guarda en "id", que luego se actualiza en productos , y finalmente se retorna la información del producto que se actaulizó, y en caso tal de que se produzca un error se retorna un mensaje de que no se pudo hacer la modificación, como se muestra en la siguiente figura.
   
![Cambiar_Duración](Image/8.png)

## License

Nest is [MIT licensed](LICENSE).
