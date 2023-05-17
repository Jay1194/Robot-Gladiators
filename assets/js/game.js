// Player robot stats
var playerName = window.prompt("What is your robots name?");
var playerMoney = 10;
var playerHealth = 100;
var playerAttack = 10;


// Enemy robot stats
var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



// Game States 


// "WIN" - Player robot has defeated all enemy-robots

//  * Fight all enemy-robots

//  * Defeat each enemy-robot 

// "LOSE" - Player robot's health is zero or less



window.alert("Welcome to Robot Gladiators");


var fight = function(enemyName) {

  // repeat and execute as long as the enmy-robot is alive
  while(enemyHealth > 0){

// Fight or Skip 
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
console.log(promptFight);

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {


// Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use the result to update the value in the 'enemyHealth' variable.
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know it worked.
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

// check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
}

else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}



// Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it work 
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
}

else {
  window.alert(playerName + " still has " + playerHealth + " health left.")
}



// if player choses to skip
} else if (promptFight === 'skip' || promptFight == "SKIP") {

  //confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has chosen to skip the fight!");

    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
    console.log(playerMoney);
  }

  // if no (false), ask question again by running fight() again
  else {
    fight();
  }
  
} else {
  window.alert("You need to choose a valid option. Try again!");
}
}
};

for (var i = 0; i < enemyNames.length; i++) {

  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}





