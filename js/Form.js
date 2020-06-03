class Form{
    constructor(){
     this.input = createInput("Name");
     this.button = createButton("Play");
     this.greeting = createElement('h3');
    }
    hide(){
       // this.input.hide();
      //  this.button.hide();
       this.greeting.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("Car Raseing Realtime Game");
        title.position(150,0);

        
        this.input.position(200,200);

        
        this.button.position(200,275);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            var name = this.input.value();

            playercount += 1;
            player.update(name);
            player.updateCount(playercount);

       
            this.greeting.position(200,200);    
            this.greeting.html("Hello "+name);
            
        })
    }
}