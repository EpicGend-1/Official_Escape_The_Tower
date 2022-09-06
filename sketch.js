//variables
//character
var ninja,ninjaAnime,ninjaImg,runAnime
var monster, deadmonster, monsterAnime, monsterdyingAnime,deadmonsterImg
//doors
//floor1
var normaldoor1,normaldoor1Img,claweddoor1,claweddoor1Img,monsterbehinddoor1,monsterbehinddoor1Img
//floor2
var olddoor2,olddoor2Img,cleandoor2,cleandoor2Img,bloodunderdoor2,bloodunderdoor2Img
//floor3
var bonedoor3,bonedoor3Img,dinodoor3,dinodoor3Img,sadfacedoor3,sadfacedoor3Img
//floor4
var aciddoor4,aciddoor4Img,crocodiledoor4,ladder,ladderImg,crocodiledoor4Img,electricdoor4,electricdoorground,electricdoor4Img,brokenwire4Img,wire4,wire4Img,pliers4,pliers4Img,nonelectricdoor4,nonelectricdoor4Img
//floor5
var godoor5,goldenkeyImg,goldenkey,godoor5Img,fan,ropecutter,ropecutterImg,fanImg,prisondooropened5,prisondoorclosed5,prisondoorclosed5Img,prisondooropened5Img,werewolfdoor5,werewolfdoor5Img,window5,window5Img,axe5,axe5Img,rope2,rope,ropeImg 
//gameInfoText
var gameInfoText,gameInfoTextImg
//background and hand use and playbutton background
var backgroundfordoors,backgroundfordoorsImg
var playbutton,playbuttonImg
var retrybutton,retrybuttonImg
var hand, handImg
var blackbackgroundwithplaybutton,blackbackgroundwithplaybuttonImg
var background
var nextbutton,nextbuttonImg
var jumpscareGif,jumpscareGifImg
var standHorizontal1,standVertical1,standHorizontal2
var ground
var tower,towerImg

//gamestate
var gamestate = 0
//borders
var Rborder, Lborder


//function preload
function preload() {
  //animations
  ninjaAnime = loadAnimation("Nwalk1.png","Nwalk2.png","Nwalk3.png","Nwalk2.png")
  ninjaImg = loadAnimation("Nwalk2.png","Nwalk2.png","Nwalk2.png")
  runAnime = loadAnimation("run1.png","run2.png","run3.png","run1.png")
  deadmonsterImg = loadImage("monstercondead5.png")
  monsterAnime = loadAnimation("monsterwalk1.png","monsterwalk2.png","monsterwalk3.png","monsterwalk4.png","monsterwalk1.png")
  monsterdyingAnime = loadAnimation("monsterdead1.png","monsterdead2.png","monsterdead3.png")
  towerImg = loadImage("tower.png")
  //sounds
  screamfnaf = loadSound("five-nights-at-freddys-full-scream-sound_2.mp3")
  bgtune = loadSound("Come-Play-with-Me.mp3")

  //image
  //doors
  //floor1 
  normaldoor1Img = loadImage("normal door1.png")
  claweddoor1Img = loadImage("clawed_door1.png")
  monsterbehinddoor1Img = loadImage("monster_behind_door1.png")
  //floor2
  olddoor2Img = loadImage("old_door2.png")
  cleandoor2Img = loadImage("clean_door2.png")
  bloodunderdoor2Img = loadImage("blood_under_door2.png")
  //floor3
  bonedoor3Img = loadImage("bonedoor3.png")
  dinodoor3Img = loadImage("dinodoor3.png")
  sadfacedoor3Img = loadImage("sadfacedoor3.png")
  //floor4
  aciddoor4Img = loadImage("aciddoor4.png")
  crocodiledoor4Img = loadImage("crocodiledoor4.png")
  electricdoor4Img = loadImage("electricdoor4.png")
  nonelectricdoor4Img = loadImage("nonelectricdoor4.png")
  wire4Img = loadImage("wire4.png")
  brokenwire4Img = loadImage("brokenwire4.png")
  pliers4Img = loadImage("pliers4.png")
  ladderImg = loadImage("ladder.png")
  //floor5
  prisondoorclosed5Img = loadImage("prisondoorclosed5.png")
  prisondooropened5Img = loadImage("prisondooropened5.png")
  werewolfdoor5Img = loadImage("werewolfdoor5.png")
  godoor5Img = loadImage("godoor5.png")
  axe5Img = loadImage("axe.png")
  window5Img = loadImage("window5.png")
  ropeImg = loadImage("rope.png")
  fanImg = loadImage("fan.png")
  ropecutterImg = loadImage("ropecutter.png")
  goldenkeyImg = loadImage("goldenkey.png")
  //gameInfoTexta
  gameInfoTextImg = loadImage("gameinfotext.png")
  //background and hand use and playbutton background
  backgroundfordoorsImg = loadImage("background.png")
  handImg = loadImage("hand.png")
  blackbackgroundwithplaybuttonImg = loadImage("blackbackgroundwithplaybutton.png")
  playbuttonImg = loadImage("playbutton.png")
  nextbuttonImg = loadImage("nextbutton.png")
  jumpscareGifImg = loadImage("jumpscare.gif")
  retrybuttonImg = loadImage("retrybutton.png")
}










function setup() {
  createCanvas(windowWidth,windowHeight);  
  
  background = createSprite(900,500)
  //background.addImage(jumpscareGif)
  background.addImage(gameInfoTextImg)
  background.addImage(backgroundfordoorsImg)
  background.addImage(blackbackgroundwithplaybuttonImg)
  background.scale = 2.1

  ground = createSprite(900,830,windowWidth,20)
  ground.visible = false;

  jumpscareGif = createSprite(800,400)
  jumpscareGif.addImage(jumpscareGifImg)
  jumpscareGif.scale = 1.6 
  jumpscareGif.visible = false;
 
  retrybutton = createSprite(5000,650)
  retrybutton.addImage(retrybuttonImg)
  retrybutton.scale = 1.5

  nextbutton = createSprite(100000,650)
      nextbutton.addImage(nextbuttonImg)
      nextbutton.scale = 1.5 
  ///image
  //doors485
  //floor1
  normaldoor1 = createSprite(500,10000)
  normaldoor1.addImage(normaldoor1Img)
  normaldoor1.scale = 1

  claweddoor1 = createSprite(965,10000)
  claweddoor1.addImage(claweddoor1Img)
  claweddoor1.scale = 1

  monsterbehinddoor1 = createSprite(1430,10000)
  monsterbehinddoor1.addImage(monsterbehinddoor1Img)
  monsterbehinddoor1.scale = 1

  //floor2
  
  cleandoor2 = createSprite(965,10000)
  cleandoor2.addImage(cleandoor2Img)
  cleandoor2.scale = 1

  olddoor2 = createSprite(500,10000)
  olddoor2.addImage(olddoor2Img)
  olddoor2.scale = 1

  bloodunderdoor2 = createSprite(1430,10000)
  bloodunderdoor2.addImage(bloodunderdoor2Img)
  bloodunderdoor2.scale = 1

  //floor3
  
  sadfacedoor3 = createSprite(1430,10000)
  sadfacedoor3.addImage(sadfacedoor3Img)
  sadfacedoor3.scale = 1

  dinodoor3 = createSprite(720,10000)
  dinodoor3.addImage(dinodoor3Img)
  dinodoor3.scale = 1

  bonedoor3 = createSprite(100,10000)
  bonedoor3.addImage(bonedoor3Img)
  bonedoor3.scale = 1

  //floor4
  
  crocodiledoor4 = createSprite(1430,10000)
  crocodiledoor4.addImage(crocodiledoor4Img)
  crocodiledoor4.scale = 1

  aciddoor4 = createSprite(150,10000)
  aciddoor4.addImage(aciddoor4Img)
  aciddoor4.scale = 1

  electricdoor4 = createSprite(965,10000)
  electricdoor4.addImage(electricdoor4Img)
  electricdoor4.scale = 1

  nonelectricdoor4 = createSprite(965,10000)
  nonelectricdoor4.addImage(nonelectricdoor4Img)
  nonelectricdoor4.scale = 1

  electricdoorground = createSprite(965,100000,400,20)

  wire4 = createSprite(200,2000)
  wire4.addImage(wire4Img)
  wire4.scale = 1.6

  ladder = createSprite(720,2000)
  ladder.addImage(ladderImg)
  ladder.scale = 1.6

  pliers4 = createSprite(1430,2000)
  pliers4.addImage(pliers4Img)
  pliers4.scale = 1
   
  
  //floor5
  
  prisondoorclosed5 = createSprite(965,10000)
  prisondoorclosed5.addImage(prisondoorclosed5Img)
  prisondoorclosed5.scale = 1

  prisondooropened5 = createSprite(965,10000)
  prisondooropened5.addImage(prisondooropened5Img)
  prisondooropened5.scale = 1

  werewolfdoor5 = createSprite(1430,10000)
  werewolfdoor5.addImage(werewolfdoor5Img)
  werewolfdoor5.scale = 1

  godoor5 = createSprite(500,10000)
  godoor5.addImage(godoor5Img)
  godoor5.scale = 1
 
  rope = createSprite(50,100000)
  rope.addImage(ropeImg)
  rope.scale = 1

  rope2 = createSprite(750,100000)
  rope2.addImage(ropeImg)
  rope2.scale = 1

  standHorizontal1 = createSprite(150,10000,200,30)
  standHorizontal1.scale = 1

  standHorizontal2 = createSprite(450,10000,700,20)
  standHorizontal2.scale = 1

  standVertical1 = createSprite(10000,210,20,195)
  standVertical1.scale = 1

  fan = createSprite(45.6767643456,2000)
  fan.addImage(fanImg)
  fan.scale = 1

  ropecutter = createSprite(1200,10000)
  ropecutter.addImage(ropecutterImg)
  ropecutter.scale = 0.8

  goldenkey = createSprite(150,50)
  goldenkey.addImage(goldenkeyImg)
  goldenkey.scale = 0.2
  goldenkey.visible = false;
 // goldenkey.velocityY = 2

  window5 = createSprite(1430,10000)
  window5.addImage(window5Img)
  window5.scale = 2
  
  axe5 = createSprite(1430,10000)
  axe5.addImage(axe5Img)
  axe5.scale = 1

  monster = createSprite(1650,560)
  monster.addAnimation("monsterAnime", monsterAnime)
  monster.addAnimation("dying", monsterdyingAnime)
  monster.scale = 7

  deadmonster = createSprite(1430,10000)
  deadmonster.addImage(deadmonsterImg)
  deadmonster.scale = 7
  deadmonster.visible = true;

  
  hand = createSprite(10000,250)
  hand.addImage(handImg)
  hand.scale = 0.7

  tower = createSprite(850,100000)
  tower.addImage(towerImg)
  tower.scale = 7.8


//animations
  ninja = createSprite(600 ,600,200,200)
  ninja.addAnimation("ninjaImg",ninjaImg)
  ninja.addAnimation("anime",ninjaAnime)
  ninja.addAnimation("run", runAnime)
  ninja.scale = 3
  ninja.visible = false;  

  Lborder = createSprite(-1,500,5,1000)
  Lborder.visible = false;
  

  Rborder = createSprite(1600,500,5,1000)
  Rborder.visible = false;
  
  


  if(gamestate === 0){
    background.addImage(blackbackgroundwithplaybuttonImg)
  
    playbutton = createSprite(800,400,30,50)
    playbutton.addImage(playbuttonImg)
    playbutton.scale = 2    
  }

  claweddoor1.setCollider("rectangle",0,0,claweddoor1.width-150,claweddoor1.height);
  monsterbehinddoor1.setCollider("rectangle",0,0,monsterbehinddoor1.width-150,monsterbehinddoor1.height);
  normaldoor1.setCollider("rectangle",0,0,normaldoor1.width-150,normaldoor1.height);
  bloodunderdoor2.setCollider("rectangle",0,0,claweddoor1.width-150,claweddoor1.height);
  olddoor2.setCollider("rectangle",0,0,monsterbehinddoor1.width-150,monsterbehinddoor1.height);
  cleandoor2.setCollider("rectangle",0,0,normaldoor1.width-150,normaldoor1.height);
  dinodoor3.setCollider("rectangle",0,0,claweddoor1.width-150,claweddoor1.height);
  sadfacedoor3.setCollider("rectangle",0,0,monsterbehinddoor1.width-150,monsterbehinddoor1.height);
  bonedoor3.setCollider("rectangle",0,0,normaldoor1.width-150,normaldoor1.height);
  crocodiledoor4.setCollider("rectangle",0,0,claweddoor1.width-150,claweddoor1.height);
  electricdoor4.setCollider("rectangle",0,0,monsterbehinddoor1.width-150,monsterbehinddoor1.height);
  aciddoor4.setCollider("rectangle",0,0,normaldoor1.width-150,normaldoor1.height);
  prisondooropened5.setCollider("rectangle",0,0,claweddoor1.width-150,claweddoor1.height);
  prisondoorclosed5.setCollider("rectangle",0,0,claweddoor1.width-150,claweddoor1.height);
  werewolfdoor5.setCollider("rectangle",0,0,monsterbehinddoor1.width-150,monsterbehinddoor1.height - 200);
  godoor5.setCollider("rectangle",0,0,normaldoor1.width-150,normaldoor1.height);
  ninja.setCollider("rectangle",0,0,ninja.width -35,ninja.height);
  wire4.setCollider("rectangle",0,0,wire4.width-30,wire4.height- 40);
  pliers4.setCollider("rectangle",0,0,pliers4.width - 50,pliers4.height- 65);
  nonelectricdoor4.setCollider("rectangle",0,0,monsterbehinddoor1.width-150,monsterbehinddoor1.height);
  rope.setCollider("rectangle",0,0,monsterbehinddoor1.width-430  ,monsterbehinddoor1.height-525);
  rope2.setCollider("rectangle",0,0,monsterbehinddoor1.width-430  ,monsterbehinddoor1.height-525);
  fan.setCollider("rectangle",0,0,monsterbehinddoor1.width+800  ,monsterbehinddoor1.height-525);
  ropecutter.setCollider("rectangle",0,0,monsterbehinddoor1.width- 180  ,monsterbehinddoor1.height-300);
  monster.setCollider("rectangle",0,0,monster.width-10,monster.height- 100);


 ninja.depth = goldenkey.depth
 goldenkey.depth +=10
 monster.depth = axe5.depth
 axe5.depth +=1
 ninja.depth = tower.depth
ninja.depth +=1
werewolfdoor5.debug = true;

}










function draw() {  
//Gamestates

  if(gamestate !== 7){
    Rborder.y = 1000  
  }else{
    Rborder.y = 10000
  }

  if(mouseWentDown("leftButton") && mousePressedOver(playbutton)){
    playbutton.scale = 0
    gamestate=1
    }
    if(gamestate!== "end"){
      jumpscareGif.visible = false; 
      retrybutton.x = 10000
    }

    if (!bgtune.isPlaying() && gamestate !== "end"){
      bgtune.play()
      bgtune.setVolume(1)
      }

      if (!screamfnaf.isPlaying() && gamestate === "end"){
        screamfnaf.play()
        screamfnaf.setVolume(3)
        }
    
    if(gamestate === 1){
      background.addImage(gameInfoTextImg)
      background.scale = 2  
      nextbutton.x = 1200
      nextbutton.scale = 1.5
    }
    if (gamestate === 2){
      nextbutton.scale = 0
      background.addImage(backgroundfordoorsImg)
      background.y = 310
      background.scale = 2
      ninja.visible = true;
      
      normaldoor1.y = windowHeight - 320
      claweddoor1.y = windowHeight - 320
      monsterbehinddoor1.y = windowHeight - 320
    }

    if(mouseWentDown("leftButton") && mousePressedOver(nextbutton)){
      gamestate = 2
        
    }    
      
    if(ninja.isTouching(normaldoor1) || ninja.isTouching(claweddoor1) || ninja.isTouching(monsterbehinddoor1)){
      hand.x = 1450
    } 
    else if( ninja.isTouching(cleandoor2) || ninja.isTouching(olddoor2) || ninja.isTouching(bloodunderdoor2)){
      hand.x = 1450
    }
    else if( ninja.isTouching(sadfacedoor3) || ninja.isTouching(bonedoor3) || ninja.isTouching(dinodoor3)){
      hand.x = 1450
    }
    else if( ninja.isTouching(electricdoor4) || ninja.isTouching(crocodiledoor4) || ninja.isTouching(aciddoor4) || ninja.isTouching(nonelectricdoor4)){
      hand.x = 1450
    }
    else if( ninja.isTouching(prisondoorclosed5) || ninja.isTouching(prisondooropened5) || ninja.isTouching(godoor5) || ninja.isTouching(werewolfdoor5)){
      hand.x = 1450
    }else{
      hand.x = 10000
    }


    if(gamestate === "end"){
      jumpscareGif.visible =  true;
      retrybutton.x = 300
      deadmonster.visible = false;
      
      if(mouseWentDown("leftButton") && mousePressedOver(retrybutton)){
        gamestate = 1
        background.y = 500
      }

      //doors
      normaldoor1.y = 2000
      monsterbehinddoor1.y = 2000
      claweddoor1.y = 2000
      bloodunderdoor2.y = 2000
      cleandoor2.y = 2000
      olddoor2.y = 2000
      dinodoor3.y = 2000
      bonedoor3.y = 2000
      sadfacedoor3.y = 2000
      electricdoor4.y = 2000
      aciddoor4.y = 2000
      crocodiledoor4.y = 2000
      werewolfdoor5.y = 2000
      prisondooropened5.y = 2000
      godoor5.y = 2000
      prisondooropened5.y = 2000
      nonelectricdoor4.y = 2000
      

      //ninja
      ninja.visible = false;
    }

    if (mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(normaldoor1)){
      gamestate = 3
    }else if(mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(olddoor2)){
      gamestate = 4
    }
    else if(mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(dinodoor3)){
      gamestate = 5
    }else if(mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(nonelectricdoor4)){
      gamestate = 6
    }else{

    }

    if(wire4.isTouching(pliers4)){
      wire4.addImage(brokenwire4Img)
      nonelectricdoor4.y = windowHeight - 720
    }

    

    if(mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(prisondoorclosed5) && goldenkey.isTouching(prisondoorclosed5)){
      prisondooropened5.y = 485
    }


    if(goldenkey.visible === true){
      goldenkey.velocityY = 6
    }

    if (gamestate === 3){
      normaldoor1.y = 2000
      monsterbehinddoor1.y = 2000
      claweddoor1.y = 2000

      cleandoor2.y = windowHeight - 320
      olddoor2.y = windowHeight - 320
      bloodunderdoor2.y = windowHeight - 305
    }

    if(gamestate === 4){
      cleandoor2.y = 2000
      olddoor2.y = 2000
      bloodunderdoor2.y = 2000

      bonedoor3.y = windowHeight - 290
      dinodoor3.y = windowHeight - 320
      sadfacedoor3.y = windowHeight - 320   
    }

    if (ninja.isTouching(ladder) && keyDown("space")){
      ninja.y -= 35
    }

    if(gamestate === 5){
      bonedoor3.y = 2000
      dinodoor3.y = 2000
      sadfacedoor3.y = 2000

      crocodiledoor4.y = windowHeight - 320
      electricdoor4.y = windowHeight - 720
      aciddoor4.y = windowHeight - 320 
      ladder.y = windowHeight - 320   
      electricdoorground.y = windowHeight - 520
      wire4.y = windowHeight - 820
      pliers4.y = windowHeight - 80
      
    }else{
      wire4.y = 2000
      pliers4.y = 2000
      nonelectricdoor4.y = 2000
      electricdoor4.y = 2000
      electricdoorground.y = 200000
      aciddoor4.y = 2000
      crocodiledoor4.y = 2000
      ladder.y = 100000
    }

    if(gamestate !== 6){
      monster.x = 1550
    }

   if(goldenkey.isTouching(fan)){
    goldenkey.velocityX = 10
   }else{
    goldenkey.velocityX = 0
   }
   if(gamestate === 6 && rope.isTouching(ropecutter)){
    rope.visible = false;
   }

   if(gamestate === 6 && rope2.isTouching(ropecutter)){
    rope2.visible = false;
   }

    if(ninja.isTouching(goldenkey)){
      goldenkey.x = ninja.x+50
      goldenkey.y = ninja.y
    }
     
    ninja.velocityY = 30
 
    if(gamestate === 6){
      godoor5.y = windowHeight - 320
      prisondoorclosed5.y = windowHeight - 320
      werewolfdoor5.y = windowHeight - 320 
      window5.y = windowHeight - 600
      monster.y = windowHeight - 220
      rope.y = 50
      standHorizontal1.y = 120
      rope2.y = 50
      fan.y = 250
      standHorizontal2.y = 300
      standVertical1.x = 760
      ropecutter.y = 775
      goldenkey.visible = true;
    }else if(rope.isTouching(ropecutter)){
      rope.y = 10000

    }else{
      godoor5.y = 2000
      prisondoorclosed5.y = 2000
      prisondooropened5.y = 20000
      werewolfdoor5.y = 2000 
      window5.y = 2000
      monster.y = 10000
      axe5.y = 10000
      rope.y = 10000
      standHorizontal1.y = 10000
      rope2.y =10000
      fan.y = 10000
      standHorizontal2.y = 20000
      standVertical1.x = 120000
      ropecutter.y = 10000
      goldenkey.visible = false;
      goldenkey.velocityY = -.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
    }

    if(mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(werewolfdoor5) && gamestate === 6){
      gamestate = 7

    }

    if(gamestate === 7){
      tower.y = 50 

    }

    if(prisondooropened5.isTouching(prisondoorclosed5)){
      goldenkey.visible = false;
    }
    
    if (prisondoorclosed5.isTouching(prisondooropened5) && ninja.isTouching(goldenkey) && goldenkey.isTouching(prisondoorclosed5) ) {
      monster.x = 100000000000000000
      monster.velocityX = 0
      deadmonster.x = 1000
      deadmonster.y = 700
    }
   if ( mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(monsterbehinddoor1) || mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(claweddoor1)){ 
      gamestate = "end"
    }
    else if( mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(cleandoor2) || mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(bloodunderdoor2)){
      gamestate = "end"
    }
    else if( mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(bonedoor3) || mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(sadfacedoor3)){
      gamestate = "end"
    }
    else if( mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(electricdoor4) || mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(crocodiledoor4) || mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(aciddoor4)){
      gamestate = "end"
    }
    else if(monster.isTouching(ninja)){
      gamestate = "end"
    }else if( mouseWentDown("leftButton") && mousePressedOver(hand) && ninja.isTouching(godoor5)){
       gamestate = "end"
    }else{

    }       

    
    

    console.log(gamestate)

  //collisions
  ninja.collide(Lborder)
  ninja.collide(Rborder)
  goldenkey.collide(standHorizontal2)
  goldenkey.collide(standHorizontal1)
  goldenkey.collide(standVertical1)
  goldenkey.collide(ground)
  ninja.collide(ground)
  ninja.collide(electricdoorground)
  //functions
  move()
  plierwork()
  monstermove()
  standhorizontal1fall()
  horiandverticalstand12fall()
  ropecutterwork()
  drawSprites();
    textSize(50)
  if(gamestate === 2){
    text("Use D and A keys to move",200,100)
    text("NEVER TRUST US!",500,250)
  }

  if(prisondoorclosed5.isTouching(prisondooropened5) && gamestate===6){
    text("YES! I  AM FREE! THANKYOU!",100,300)
    text("THERE! I KILLED THAT CREATURE FOR YOU!",100,350)
  }
  if(gamestate === 5){
    text("use space to climb",ladder.x,ladder.y + 250 )
  }

}











//functions

function move(){
  if (keyDown("a") && gamestate !==0 && gamestate !==1 && gamestate !==7){
    ninja.changeAnimation("anime",ninjaAnime)
      ninja.x -= 9
  }
  else{
    if(keyDown("d") && gamestate !==0 && gamestate !==1 && gamestate !==7){
    ninja.changeAnimation("anime",ninjaAnime)
    ninja.x += 9
    }
  }
  if(keyDown("d") && gamestate !==0 && gamestate !==1 && gamestate !==7 || keyDown("a") && gamestate !==0 && gamestate !==1 && gamestate !==7){
    ninja.changeAnimation("anime",ninjaAnime)
  }
  else{
    ninja.changeAnimation("ninjaImg", ninjaImg)
  }
 if(gamestate === 7){
    ninja.changeAnimation("run",runAnime)
    ninja.velocityX = 3
    Rborder.y =10000

  }
}

function plierwork(){
  if(mousePressedOver(pliers4)){
    pliers4.y = World.mouseY
    pliers4.x = World.mouseX
    
  }
} 

function ropecutterwork(){
  if(mousePressedOver(ropecutter)){
    ropecutter.y = World.mouseY
    ropecutter.x = World.mouseX
    
  }
}

function monstermove(){
  if (gamestate === 6 && monster.y === windowHeight - 220 && axe5.x !== monster.x && axe5.y !== monster.y){
    
    monster.velocityX = -1.5
  }
}

function standhorizontal1fall() {
  if(gamestate === 6 && rope.visible === false){
    standHorizontal1.velocityX = -8
    
  
}
}

function horiandverticalstand12fall(){
  if (gamestate === 6 && rope2.visible === false){
    standHorizontal2.velocityX = -8
    standVertical1.velocityY = -8
  
  }
}