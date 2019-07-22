function Fighter({nick, damag, hp, skill}){
    this.win=0;
    this.loss=0;
    this.damag = damag;
    this.nick = nick;
    this.skill = skill;
    this.hp = hp;    
    this.getnick = function() {
      return nick;
    }
    this.getdamag = function() {
      return damag;
    };
    this.gethp = function() {
      return hp;
    };
    this.getskill = function() {
      return skill;
    };
    this.plusWin= function (){
       this.win++;
    }
    this.plusLosing= function (){
       this.loss++;
    }
   }
  const Hero1 = new Fighter({nick: 'John', damag: 20, hp: 150, skill: 25}); 
  const Hero2 = new Fighter({nick: 'Jim', damag: 10, hp: 120, skill: 40}); 
  function attack(attack, protector){
    const a=100;
     if (Math.floor(Math.random()*a)<=attack.skill) {
       
       dealdamag(attack, protector);
       
       console.log(attack.nick + ' make ' + attack.damag + ' to ' + protector.nick);
      
     } else {
  console.log(attack.nick + ' attack missed');
       }
   }
  
  function dealdamag(attack, protector) {
    protector.hp=protector.hp-attack.damag;
    return protector.hp;
  }
  function FightingLog(attack){
    console.log('nick: ' + attack.nick + ' Wins: ' + attack.win + ' Losses: ' + attack.loss);
  }
  
  function fight(attack, protector) {
    
   
    if (attack.hp===0) {
   console.log(attack.nick + ' is dead and can`t fight');
  }
    if (protector.hp===0) {
   console.log(protector.nick + ' is dead and can`t fight');
  }
    let i=0;
    while (attack.hp>0 && protector.hp>0) {
      const b=2;
      if (i % b === 0) {
   attack=Hero2;
        protector=Hero1;
    } else {
      attack=Hero1;
      protector=Hero2;
    }
    attack(attack, protector);
    if (protector.hp <= 0) {
   attack.plusWin(); protector.plusLosing(); 
  }
    heal(attack);
    i++
  }
  
  if (attack.hp===0) {
  console.log(attack.nick + ' lost, ' + protector.nick + ' win' ); 
  } else {
   console.log(protector.nick + ' lost, ' + attack.nick + ' win');
  } 
  
  }
  
  fight(Hero1, Hero2);
  
  FightingLog(Hero1);
  FightingLog(Hero2);
  
  console.log(Hero1.gethp());
  console.log(Hero2.gethp());
  function heal(attack) {
    let b=2;
    let hpAmount=attack.damag/b;
    if (hpAmount<attack.hp) {
    attack.hp=attack.hp + hpAmount;
      console.log(attack.nick + ' was healed by ' + hpAmount)
    } else {
      let maxhp=attack.hp;
   attack.hp=maxhp;
    console.log(attack.nick + ' was healed to max hp ' + hpAmount); 
  }
  }
  