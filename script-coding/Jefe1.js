//Dibuja el arma que utiliza el enemigo 'Thief' en este caso un cuchillo(knife)
function drawKnife(knife) {
  forEach(knife, (k) => {
    fill("green");
    triangle(
      k.x * lado + 10,
      k.y * lado,
      k.x * lado,
      k.y * lado + 10,
      k.x * lado + 10,
      k.y * lado + 20
    );
  });
}

//Funcion para dibujar a uno de los enemigos, en este caso 'el Thief'
function drawThief(Thief) {
  fill("blue");
  rect(Thief.x * lado, Thief.y * lado, lado, lado);
}

/*TODO Funcion del movimiento del Thief*/
function ThiefMove(Thief) {
  // Esto se ejecuta en cada tic del reloj. Con esto se pueden hacer animaciones
  //
  if (
    (Thief.dirx == true && Thief.y != 24 && Thief.diry == true) ||
    (Thief.x == 26 && Thief.diry == false)
  ) {
    return { x: Thief.x, y: Thief.y + 1, dirx: true, diry: true };
  }
  if (Thief.y == 24) {
    return { x: Thief.x, y: Thief.y - 1, dirx: false, diry: true };
  }
  if (Thief.dirx == false && Thief.y != 6) {
    return { x: Thief.x, y: Thief.y - 1, dirx: false, diry: true };
  }
  if (Thief.y == 6 && Thief.dirx == false && Thief.x != 1 && Thief.diry == true) {
    return { x: Thief.x - 1, y: 6, dirx: false, diry: true };
  }
  if (Thief.x == 1) {
    return { x: Thief.x + 1, y: 6, dir: true, diry: false };
  }
  if (Thief.diry == false && Thief.x != 1) {
    return { x: Thief.x + 1, y: 6, dir: true, diry: false };
  }
}

//TODO Funcion que se encarga del movimiento de el cuchillo
function moveKnife(knife,) {
  //return { x: knife.x - 1, y: knife.y };
  const head = first(knife);
  if (isEmpty(rest(knife))) {
    return [{ x: head.x - 1, y: head.y }];
  } else {
    return cons({ x: head.x - 1, y: head.y }, moveKnife(rest(knife)));
  }
}

function duplicarKnife(knife, Thief) {
  return cons({ x: Thief.x, y: Thief.y }, knife);
}
