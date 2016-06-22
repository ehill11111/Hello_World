var slaying= true;
var youHit=  Math.floor(Math.random() * 2);
var damageThisRound= Math.floor(Math.random() * 5 + 1);
var totalDamage= 0;
prompt("are you ready to play?")
while(slaying){
    if(youHit){
        console.log("Congrats on messing that dragon up!");
        totalDamage += damageThisRound;
        if(totalDamage>= 4){
            console.log("Life's goals have been reached; you slew Alisha's dragon");
            slaying= false;
        } else{
            youHit = Math.floor(Math.random()*2);
        }
    } else{
        console.log("The dragon and life has defeated you.");
        slaying = false;
    }
	
	
	
}