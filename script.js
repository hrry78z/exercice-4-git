function suprimmeDoublon(tableau) {
  let nouveauTableau = [];

  for (let i = 0; i < tableau.length; i++) {
    if (!nouveauTableau.includes(tableau[i])) {
      nouveauTableau.push(tableau[i]);
    }
  }

  return nouveauTableau;
}

let tableau = [1, 2, 3, 4, 5, 5];

console.log(suprimmeDoublon(tableau));
