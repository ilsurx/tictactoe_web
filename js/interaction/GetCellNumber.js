
export function Get2(i, j) {
  return 3 * (++i - 1) + ++j;
}

export function GetCellNumber (x, y) {
  const size = 83.33;
  const margin = 25;
  let cellNumber;
  if (x > margin && y > margin && x < margin + 3 * size && x < margin + 3 * size && y < margin * size) {
    let i = Math.ceil((x - margin) / size);
    let j = Math.ceil((y - margin) / size);
    cellNumber = 3 * (j - 1) + i;
    if (cellNumber < 1 || cellNumber > 9)
      cellNumber = 0;
  } else
    cellNumber = 0;
  return cellNumber;
}
