type TCoordenadas = [number, number];

function getArea([width, height]: TCoordenadas): number {
  return width * height;
}

function getAreaWithAlias(coordinates: TCoordenadas): number {
  return coordinates[0] * coordinates[1];
}

const coordinates: TCoordenadas = [10, 20];
