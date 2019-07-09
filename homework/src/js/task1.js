const login = prompt(`Enter your email, please:`);
let a = 6;
let b = 20;

if(login === ' ' || login === null ){
 alert(`Canceled.`);
}
if(login.length<a){
    alert(`I don't know any users having name length less than 6 symbols.`);
}
if (login === 'user@gmail.com'){
 let pass = prompt(`Enter your password, please`);
 
if(pass === ' ' || pass === null){
    alert(`Canceled.`);
}
if(pass ==='UserPass'){
let currentHour1 = new Date().getHours();
if (currentHour1<b){
    alert(`Good day, dear User!`);
} else {
    alert(`Good evening, dear User!`);
}
} else {
  alert('Wrong password');
}
} 
if (login === 'admin@gmail.com'){
    let pass = prompt(`Enter your password, please`);    
   if(pass === ' ' || pass === null){
       alert(`Canceled.`);
   }
   if(pass ==='RootPass'){
   let currentHour2 = new Date().getHours();  
   if (currentHour2<b){
       alert(`Good day, dear Admin!`);
   } else {
       alert(`Good evening, dear Admin!`);
     }
   } else {
     alert('Wrong password');
    }   
   } else {
       alert(`I don't know you`);
}