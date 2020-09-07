'use strict';

var words = ['кот', 'собака', 'книга'];
var word =  pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

function pickWord() {
  return words[Math.floor(Math.random() * words.length)];
};

function setupAnswerArray(word) {
  var answerArray = [];

  for (var i = 0; i < word.length; i++) {
    answerArray[i] = '_';
  };

  return answerArray;
};


function showPlayerProgress(answerArray) {
  alert(answerArray.join(' '));
};

function getGuess() {
  return  prompt('Угадайте букву или нажмите отмена для выхода из игры');
};


function updateGameState(guess, word, answerArray) {
  var guessNumberLetters = 0;

  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess && answerArray[j] === '_') {
      answerArray[j] = guess;
      guessNumberLetters++;
    };
  };

  return guessNumberLetters;
};


function showAnswerAndCongratulatePlayer(answerArray) {
  showPlayerProgress(answerArray);
  alert('Отлично! Было загадно слово ' + word);
};


while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  
  var guess = getGuess();

  if (guess === null) {
    break;
  } else if (guess.length !== 1 ) {
    alert('Пожалуйста, введите только одну букву');
  } else {
    guess = guess.toLowerCase();

    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -=correctGuesses;
  };
};

showAnswerAndCongratulatePlayer(answerArray);
