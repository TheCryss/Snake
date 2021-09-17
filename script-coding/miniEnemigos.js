//OBTENER UN RANDOM
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//CLASE ENEMIGO
/* ENEMIGO */
const enemigo = function (x, y) {
  this.x = x;
  this.y = y;
  this.contador = 0;
  // UN NUMERO ALEATORIO ENTRE 0,3
  this.direccion = getRandom(0, 4);

  this.retraso = 5;
  this.fotograma = 0;

  this.dibujaMalo = function () {
    fill('blue');
    rect(this.x * dx, this.y * dy, dx, dy);
  };

  this.compruebaColision = function (x, y) {
    colisiona = false;
    if (Mundo.escenario[y][x] == 2) {
      colisiona = true;
    }
    return colisiona;
  };
};
//----------------------------------------------
//ACTUALIZAR LISTA
function actualizaLista(lista, enemigo) {
  return append(lista, enemigo);
}
//----------------------------------------------
//DIBUJAR AL ENEMICO
function dibujaEnemigo(lista) {
  forEach(lista, (element) => {
    fill('blue');
    rect(element.x * lado, element.y * lado, lado, lado);
  });
}
//----------------------------------------------
//MOVER CADA ELEMENTO DE LA LISTA
function mueveEnemigo(lista) {
  forEach(lista, (element) => {
    x = lookupx(Mundo.listaEnemigos, element);
    if (Mundo.listaEnemigos[x].contador < Mundo.listaEnemigos[x].retraso) {
      update(
        Mundo,
        (listaEnemigos[x].contador = listaEnemigos[x].contador + 1)
      );
    } else {
      update(Mundo, (listaEnemigos[x].contador = 0));
      //ARRIBA
      if (Mundo.listaEnemigos[x].direccion == 0) {
        if (
          Mundo.listaEnemigos[x].compruebaColision(
            Mundo.listaEnemigos[x].x,
            Mundo.listaEnemigos[x].y - 1
          ) == false
        ) {
          update(Mundo, (listaEnemigos[x].y = listaEnemigos[x].y - 1));
          update(Mundo, (listaEnemigos[x].direccion = getRandom(0, 4)));
        } else {
          Mundo.listaEnemigos[x].direccion = getRandom(0, 4);
        }
      }

      //ABAJO
      if (Mundo.listaEnemigos[x].direccion == 1) {
        if (
          Mundo.listaEnemigos[x].compruebaColision(
            Mundo.listaEnemigos[x].x,
            Mundo.listaEnemigos[x].y + 1
          ) == false
        ) {
          update(Mundo, (listaEnemigos[x].y = listaEnemigos[x].y + 1));
          update(Mundo, (listaEnemigos[x].direccion = getRandom(0, 4)));
        } else {
          Mundo.listaEnemigos[x].direccion = getRandom(0, 4);
        }
      }

      //IZQUIERDA
      if (Mundo.listaEnemigos[x].direccion == 2) {
        if (
          Mundo.listaEnemigos[x].compruebaColision(
            Mundo.listaEnemigos[x].x - 1,
            Mundo.listaEnemigos[x].y
          ) == false
        ) {
          update(Mundo, (listaEnemigos[x].x = listaEnemigos[x].x - 1));
          update(Mundo, (listaEnemigos[x].direccion = getRandom(0, 4)));
        } else {
          Mundo.listaEnemigos[x].direccion = getRandom(0, 4);
        }
      }

      //IZQUIERDA
      if (Mundo.listaEnemigos[x].direccion == 3) {
        if (
          Mundo.listaEnemigos[x].compruebaColision(
            Mundo.listaEnemigos[x].x + 1,
            Mundo.listaEnemigos[x].y
          ) == false
        ) {
          update(Mundo, (listaEnemigos[x].x = listaEnemigos[x].x + 1));
          update(Mundo, (listaEnemigos[x].direccion = getRandom(0, 4)));
        } else {
          Mundo.listaEnemigos[x].direccion = getRandom(0, 4);
        }
      }
    }
  });
}