class Player{
    constructor(){
     this.index = null;
     this.name = null;
     this.distance = 0; 
    }
    getcount(){
        var playercountref = database.ref("PlayerCount");
        playercountref.on("value",function(data){
            playercount = data.val();
        });
    }
    updateCount(count){
        database.ref("/").update({
            PlayerCount : count
        });
    }
    update(){
        var playerindex = "Players/player"+this.index;
        database.ref(playerindex).set({
            name : this.name,
            distance : this.distance

        });
    }
    static getplayerinfo(){
        var playerinforef = database.ref("players");
        playerinforef.on("value", (data)=>{
            allPlayers = data.val();
        });
    }
}