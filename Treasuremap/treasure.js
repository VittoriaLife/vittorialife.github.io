let width = 400;
let height = 400;
let clicks = 0;
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
  };

//функция для определения случайных точек на карте
function getRandomNumber(size) {
  return Math.floor(Math.random() * size);
};


// функция для подсчет арасстояни между случаными точками и точками на которые кликнул пользователь
function getDistance(event, target) {
  let diffX = event.offsetX - target.x;
  let diffY = event.offsetY - target.y;

  // для вычисления растояни между двумя точками, две точки, target(точки радомно спрятанного клада) и event(точки, которые нажал пользователь)  используется теорема Пифагора a2 + b2 = c2. Представляем эти две точки, как углы прямоугольного треугольника.

  return Math.sqrt((diffX * diffX) + (diffY * diffY)); 
};


// функция возвращает одну из строк, в зависимости от переданного расстояния
function getDistanceHint(distance) {
  if (distance < 10) {
    return 'Обожжешься!';
  } else if (distance < 20) {
      return 'Очень горячо';
  } else if (distance < 40) {
      return 'Горячо';
  } else if (distance < 80) {
      return 'Тепло';
  } else if (distance < 160) {
      return 'Холодно';
  } else if (dictance < 320) {
      return 'Очень холодно';
  } else {
      return 'Замерзнешь!';
  }
};


$('#map').click(function(event) {
  clicks++;

  let distance = getDistance(event, target); // получаем расстояние от места клика до клада

  let distanceHint = getDistanceHint(distance); // преобразуем расстояние в подсказку

  $('#distance').text(distanceHint); // записываем в тег p подсказку

  if (distance < 8) {
    alert('Клад найден! Сделано кликов: ' + clicks);
  }
});


