let a = prompt('Enter value of A');
let b = prompt('Enter value of B');
let c = prompt('Enter value of C');

if (c < a + b & b < c + a & a < c + b ) {
  if (a === b & a === c & b === c) {
    alert('Equivalent triangle');
  } else if (a === b || a === c || b === c) {
    alert('Isosceles triangle');
     } else {
    alert('Normal triangle');
    }
} else {
  alert('Triangle doesn’t exist');
}
