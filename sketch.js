var position;
var ball;
var database;
function setup(){
    createCanvas(500,500);
    database = firebase.database()
    var loc =database.ref("ball/Position")
    loc.on("value",reader,err)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(position!==undefined){

    
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}
function writePosition(x,y){
  
    database.ref("ball/Position").set({
    x:ball.x +x,
    y:ball.y + y
   

    })



    
}

function reader(data){
   position = data.val()
   ball.x = position.x;
   ball.y = position.y;
}

function err(){
  console.log("error,very bad") 
 
}


