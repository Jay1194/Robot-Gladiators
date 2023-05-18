// Player robot stats
var playerName = window.prompt("What is your robots name?");
var playerMoney = 10;
var playerHealth = 12;
var playerAttack = 10;


// Enemy robot statsfight
var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// Game States 


// "WIN" - Player robot has defeated all enemy-robots

//  * Fight all enemy-robots

//  * Defeat each enemy-robot 

// "LOSE" - Player robot's health is zero or less





var fight = function(enemyName) {

  // repeat and execute as long as the enmy-robot is alive
  while (playerHealth > 0 && enemyHealth > 0){

  // Fight or Skip 
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  console.log(promptFight);



    // if player choses to skip
    if (promptFight === 'skip' || promptFight == "SKIP") {

    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");


    // if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerName + " has chosen to skip the fight!");   

    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
    break;
  }
}


   // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use the result to update the value in the 'enemyHealth' variable.
   enemyHealth = enemyHealth - playerAttack;
   console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");



   // check enemy's health
   if (enemyHealth <= 0) {
   window.alert(enemyName + " has died!");
   
   // award player money for winning
   playerMoney = playerMoney + 20;
   // leave while() loop since enemy is dead
   break;
 
} else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
 }



// remove players's health by subtracting the amount set in the enemyAttack variable
 playerHealth = playerHealth - enemyAttack;

 // Log a resulting message to the console so we know that it work 
 console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");



 // check player's health
 if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
  break;
}

else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
} 
}
};



for (var i = 0; i < enemyNames.length; i++) {

  if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
}
// when player robot defeated
   else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
 // pick new enemy to fight based on the index of the enemyNames array
  var pickedEnemyName = enemyNames[i];

   // reset enemyHealth before starting new fight
  enemyHealth = 50;

   // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

     // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
  fight(pickedEnemyName);
  

}
   
  





