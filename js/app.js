$(document).ready(function () {
  // Отсчет часов
  let hour = 39;
  $(".hour").text(hour);
  let hourTimer = setInterval(function () {
    // запускаем интервал
    if (hour > 0) {
      hour--; // вычитаем 1
      $(".hour").text(hour); // выводим получившееся значение в блок
    } else {
      clearInterval(hourTimer); // очищаем интервал, чтобы он не продолжал работу при _Seconds = 0
      clearInterval(minutesTimer);
      clearInterval(secondsTimer);
    }
  }, 3600000);

  // Отчет минут
  let minutes = 59;
  $(".minutes").text(minutes);
  let minutesTimer = setInterval(function () {
    // запускаем интервал
    if (minutes > 0) {
      minutes--; // вычитаем 1
      $(".minutes").text(minutes); // выводим получившееся значение в блок
    } else {
      minutes = 59;
      clearInterval(minutesTimer); // очищаем интервал, чтобы он не продолжал работу при _Seconds = 0
    }
  }, 60000);

  // Отсчет секунд
  let seconds = 59;
  $(".seconds").text(seconds);
  let secondsTimer = setInterval(function () {
    // запускаем интервал
    if (seconds > 0) {
      seconds--; // вычитаем 1
      $(".seconds").text(seconds); // выводим получившееся значение в блок
    } else {
      seconds = 59;
    }
  }, 1000);

  // Убирает маску и запускает видео
  $(".video__wrapper").click(function () {
    $(this).find(".video__mask").fadeOut();
    $(this).find(".video").get(0).play();
    $(this).find(".video").attr("controls", "controls");
  });
});
