let a=5;
let b=-1;
function isBigger(a,b){
    return a>b;
}
function isSmaller(a,b){
    return isBigger(b,a);
}
isSmaller(a,b);
