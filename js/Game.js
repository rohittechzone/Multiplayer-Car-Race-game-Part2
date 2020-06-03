class Game{
    constructor(){

    }
    getstate(){
     var gamestateref = database.ref("GameState");
     gamestateref.on("value",function(data){
         gamestate = data.val();
     });

    }

    update(state){
      database.ref("/").update({
          GameState : state
      });

    }

    start(){
      if(gamestate === 0){
        player = new Player();
        player.getcount();
        form = new Form();
        form.display();
      }
    }

    play(){
      form.hide();
      text("Game Started",120,100);
      player.getplayerinfo();
      if(allplayer != undefined){
        var display_position = 130;
      for(var plr in allplayers){
        if(plr === "player"+player.index)
          fill("red");
      
        else
        fill("Black");
      

      display_position +=20;
      textSize(15);
      text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position);
    }}
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance += 50;
      player.update();
    }
    }
}