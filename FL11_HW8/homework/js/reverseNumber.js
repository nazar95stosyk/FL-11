function reverseNumber(n){
	n = n + "";
	return parseInt(n.split("").reverse().join("")) * Math.sign(n);
}
reverseNumber(-456);
reverseNumber(100000);
reverseNumber(123);