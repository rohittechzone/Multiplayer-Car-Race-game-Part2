var playercount,form;
var gamestate = 0;
var database,player;
var game;
var allPlayers;

function setup(){
    createCanvas(400,400)
    
    database = firebase.database();

    game = new Game();
    game.getstate();
    game.start();

}

function draw(){
    background("white");
    if(playercount === 4){
      game.update(1);
      
    }
    if(gamestate === 1){
      //clear();  
      game.play();
    }
}