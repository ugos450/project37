class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    question.hide();

  background("yellow");

  textSize(35)
  fill("white")
  text("The result of the quiz",425,70)

  Contestant.getPlayerInfo();

  if(allContestants !== undefined){
  
  fill("Blue");
  textSize(20);
  text("NOTE: Contestant who answered correct are highlighted in green color!",130,230);
  for(var plr in allContestants){
    var correctAns = "2";
    if(correctAns === allContestants[plr].answer){
      fill("Green");
      textSize(17);
  text(allContestants[plr].name+':'+allContestants[plr].answer,425,300);
  }else{
        fill("red");
        textSize(17);
  text(allContestants[plr].name+':'+allContestants[plr].answer,425,340);
  
}
}
  }
}

}
