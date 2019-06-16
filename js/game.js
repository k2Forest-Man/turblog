let name = prompt('Привет! Как тебя звать-величать?');

while(name == '' || name == null) {
  name = prompt('Ало! Ты оглох?) Как тебя звать-величать?')

}

alert('Привет ' + name + '!!! '
  + 'Раз уж ты тут, не хочешь ли ты сыграть со мной в одну игру?');
alert('И так,' + name + ', правила игры очень просты. Я загадал число от 1 до 100,твоя задача отгадать как можно скорее. Для того, чтобы у тебя это получилось, я буду давать подсказки.');
alert('После каждой твоей попытки, я скажу "мало", "много" или "угадал". Поехали!!!');

let number = 42;
let guess = prompt('Какое число я загадал?')
let = numberOFguesses = 1;
while(guess != number){
  if(guess == '' || guess == null){
    guess = prompt('ВВЕДИ уже что нибудь!!!');
    numberOFguesses = numberOFguesses + 1;
  }
  if(guess > number){
    guess = prompt('Много. Попробуй еще раз.');
    numberOFguesses = numberOFguesses + 1;
  }
  if(guess < number){
    guess = prompt('Мало. Попробуй еще раз.');
    numberOFguesses = numberOFguesses + 1;
  }
}

alert('Наконец-то! У тебя получилось! Это число ' + number + '!!!');
alert('Мои поздравления! Тебе понадобилось ' + numberOFguesses + ' попыток. Ты не так безнадежен)))');