const xA = +prompt('Enter x for point A','');
const yA = +prompt('Enter y for point A','');
const xB = +prompt('Enter x for point B','');
const yB = +prompt('Enter y for point B','');
const xC = +prompt('Enter x for point C','');
const yC = +prompt('Enter y for point C','');

const isMiddlePoint = (xA, yA, xB, yB, xC, yC) => {
    return (+xA + +xB) / 2 === +xC && (+yA + +yB) / 2 === +yC;
  }

  alert('Middlepoint results: ' + isMiddlePoint(xA, yA, xB, yB, xC, yC));