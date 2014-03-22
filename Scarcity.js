//Scarcity.js by MrMiner7592
//This code is copyrighted so do not claim as your own or you will be infracted for copyright
//ENJOY!!!

function newLevel() {
        print("Created by MrMiner7592");
        print("If you enjoy go +1 the mod topic");
        clientMessage("Welcome to Scarcity");
        clientMessage("[MOD] Enjoy!");
}

ModPE.setFoodItem(505,"rotten_flesh",0,6,"Rotten Flesh");
ModPE.setItem(507,"blaze_rod",0,"Invinsibility Stick");


function useItem(x, y, z, itemId, blockId, side) {
        if(itemId==507)
        {
               Player.setHealth(9000);
               clientMessage("You are now invinsible!");
        }
}

function entityRemovedHook() {
        if(Entity.getEnitityId()==)
}
