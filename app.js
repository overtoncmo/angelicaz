/* TODO -- add sounds:
  1. "I'm tired"
  2. "Leave... Wait, come back!"
  3. Starbucks
  7. WAP
  8. TikTok sounds!!!







*/
var sounds = {1:'bah1',2:'bah2',3:'bah3',4:'bddd',5:'brah1',6:'mah1',7:'mah2',8:'leave',9:'starbucks',10:'myeh',11:'bdd2',12:'vaaavr',13:'waking1',14:'waking2',15:'indecisive1',16:'indecisive2'}
function randomAngelicaSound() {
  var num = Math.ceil(Math.random()*16);
  var audio = new Audio(sounds[num]+'.mp3');
  audio.play();
}

function angelicaSound(n) {
  var audio = new Audio(sounds[n]+'.mp3');
  audio.play();
}
